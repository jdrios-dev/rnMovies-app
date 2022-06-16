import React from 'react'
import { FlatList, View, Text } from 'react-native'
import { MovieType } from '../interfaces/movies.interface'
import MoviePoster from './MoviePoster'

interface ListProps {
  list: MovieType[];
  title: string; 
}

const List = ({list, title}:ListProps) => {
  return (
    <View style={{ height: 240, marginBottom: 30}}>
    <Text style={{
      fontSize: 24,
      fontWeight: 'bold',
      marginLeft:20,
      marginBottom: 10}}>
      {title}</Text>
    <FlatList 
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={list}
      renderItem={({item}) => <MoviePoster movie={item} isSmall />}
      keyExtractor={(item) => item.id.toString()}
    />
  </View>
  )
}

export default List