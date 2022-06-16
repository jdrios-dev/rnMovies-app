import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, Image, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import useMovieById from '../hooks/useMovieById';
import {RootStackParams} from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { MovieType } from '../interfaces/movies.interface';

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}
const screenWidth = Dimensions.get('window').width;

const DetailScreen = ({route, navigation}: Props) => {
  const {movie} = route.params as MovieType;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {movieFull, isLoading} = useMovieById(movie.id);

  if(isLoading){
    return null
  }

  return (
    <ScrollView>
      <Image
        source={{uri}}
        style={{
          width: screenWidth,
          height: 430,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          marginBottom: 20,
        }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginLeft: 20,
          marginBottom: 10,
        }}>
        {movie.title}
      </Text>
      <Text
        style={{
          fontSize: 18,
          marginLeft: 20,
          color: 'grey',
          marginBottom: 20,
        }}>
        {' '}
        <Icon name='star-outline' size={20} />
        {movie.vote_average} - {movie.vote_count} Votes{' '}
      </Text>
      {isLoading && <Text>Loading... :c</Text>}
      <Text
          style={{
            fontSize:14,
            marginHorizontal: 20,
            marginBottom: 40,
          }}>
      {
        movieFull.genres.map(item =>
            `${item.name}   `)
      }

          </Text>
      {movieFull.overview && (
        <>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 20,
              marginBottom: 10,
            }}>
            Overview
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginHorizontal: 20,
            }}>
            {movieFull.overview}
          </Text>
        </>
      )}
      <TouchableOpacity 
      onPress={()=>navigation.pop()}
      style={{
        zIndex: 999,
        position:'absolute',
        top: 45,
        left: 20,
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 15,
        borderRadius: 90
      }}>

      <Icon 
        color='white'
        name='arrow-back-outline'
        size={40}
        />
        </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailScreen;
