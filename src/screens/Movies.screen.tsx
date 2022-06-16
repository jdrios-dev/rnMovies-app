import React, { useContext, useEffect, useState } from 'react';
import Carousel from 'react-native-snap-carousel';
import {View, ActivityIndicator, Dimensions, ScrollView} from 'react-native';
import MoviePoster from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import List from '../components/List';
import GradientBackground from '../components/GradientBackground';
import { getColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';

const screenWidth = Dimensions.get('window').width;

const MoviesScreen = () => {
  const {nowPlaying, popular, isLoading} = useMovies();
  const { setMainColors } = useContext(GradientContext)

  const getPosterColors = async (index) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary, secondary] = await getColors(uri);
    setMainColors({
      primary,
      secondary
    });
  }

  useEffect(() => {
    if(nowPlaying?.length > 0){
      getPosterColors(0)
    }
  }, [nowPlaying])
  

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <ActivityIndicator color="darkcyan" size={100} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View
          style={{
            marginTop: 40,
          }}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}) => <MoviePoster movie={item} />}
            sliderWidth={screenWidth}
            itemWidth={250}
            onSnapToItem={index => getPosterColors(index)}
          />
        </View>
        {popular.length > 0 && <List list={popular} title="Popular now!" />}
        {nowPlaying.length > 0 && (
          <List list={nowPlaying} title="Coming soon!" />
        )}
      </ScrollView>
    </GradientBackground>
  );
};

export default MoviesScreen;
