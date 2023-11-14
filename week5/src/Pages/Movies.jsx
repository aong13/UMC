import React from 'react'
import { movies } from '../movieDummy';
import Movie from '../Components/Movie';
import MovieDetail from '../Components/MovieDetail';

export default function Movies() {
  return (
      <div className='app-container'>
      {movies.results.map((movie, index) => (
          <div className='movie-container'>
          <Movie
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
          />
            <div className='movie-detail'>
              <MovieDetail
                title={movie.title}
                overview={movie.overview}
              />
            </div>
        </div>
      ))}
    </div>
)
}
