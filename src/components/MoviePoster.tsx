import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {MovieType} from '../interfaces/movies.interface';

interface MoviePosterProps {
  movie: MovieType;
  isSmall?: boolean;
}

const MoviePoster = ({movie, isSmall}: MoviePosterProps) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
    activeOpacity={0.8}
      onPress={() => navigation.navigate('Detail', {movie})} 
    >
    <View
      style={{
        ...styles.card,

        width: isSmall ? 140 : 250,
        height: isSmall ? 190 : 330,
        
      }}>
      <Image source={{uri}} style={{...styles.image,   
      width: isSmall ? 140 : 250,
        height: isSmall ? 190 : 330,}} />
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 330,
    borderRadius: 10,
  },
  card: {
    borderRadius: 10,
    marginBottom: 20,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.22,

    elevation: 15,
  },
});

export default MoviePoster;
