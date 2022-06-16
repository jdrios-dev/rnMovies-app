import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from '../screens/Detail.screen';
import MoviesScreen from '../screens/Movies.screen';
import { MovieType } from '../interfaces/movies.interface';

export type RootStackParams = {
  Movies: undefined;
  Detail: MovieType;
}

const Stack = createStackNavigator<RootStackParams>();

const MyStack =()=> {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle:{
          backgroundColor: 'white',
          elevation: 0,
        }
      }}
    >
      <Stack.Screen name="Movies" component={MoviesScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default MyStack;