import React, {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import { MoviesDBResponse, MovieType } from '../interfaces/movies.interface';

interface stateType {
  nowPlaying: MovieType[];
  popular: MovieType[];
}

export const useMovies = () =>{
  const [movies, setMovies] = useState<stateType>();
  const [isLoading, setIsLoading] = useState(true);
  const getMovies = async()=>{
    const nowPlaying = movieDB.get<MoviesDBResponse>('/now_playing');
    const popular = movieDB.get<MoviesDBResponse>('/popular');

const resp = await Promise.all([nowPlaying, popular])

  setMovies({
    nowPlaying: resp[0].data.results,
    popular: resp[1].data.results
  });
    setIsLoading(false);
  }

  useEffect(() => {
    getMovies()
  }, []);
  return {
    ...movies,
    isLoading
  }
}


