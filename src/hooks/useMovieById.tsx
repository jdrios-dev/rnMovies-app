import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';

interface Props {
  id: number;
}

const useMovieById = (id: Props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [movieFull, setMovieFull] = useState();
  const fetchMovie = async () => {
    const resp = await movieDB.get(`/${id}`)
    const data = await resp.data;
    setMovieFull(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchMovie()
  }, [])
  
  return {
    movieFull,
    isLoading
  }
}

export default useMovieById