import React, { useState } from 'react';
import { movies } from './movieDummy';
import Movie from './Components/Movie';
import MovieDetail from './Components/MovieDetail';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMouseEnter = (movie) => {
    setSelectedMovie(movie);
  };

  const handleMouseLeave = () => {
    setSelectedMovie(null);
  };

  return (
    <div className='app-container'>
      {movies.results.map((movie, index) => (
         <div className='movie-container' onMouseEnter={() => handleMouseEnter(movie)} onMouseLeave={handleMouseLeave}>
          <Movie
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
          />
          {selectedMovie && selectedMovie.id === movie.id && (
            <div className='movie-detail'>
              <MovieDetail
                title={selectedMovie.title}
                overview={selectedMovie.overview}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;