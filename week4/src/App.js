import React, { useState } from 'react';
import { movies } from './movieDummy';
import Movie from './Components/Movie/Movie';
import MovieDetail from './Components/Movie/MovieDetail';
import * as S from './Components/Movie/Movie.style';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMouseEnter = (movie) => {
    setSelectedMovie(movie);
  };

  const handleMouseLeave = () => {
    setSelectedMovie(null);
  };

  return (
    <S.Body>
    <S.AppContainer>
      {movies.results.map((movie, index) => (
         <S.MovieContainer key={index} onMouseEnter={() => handleMouseEnter(movie)} onMouseLeave={handleMouseLeave}>
          <Movie
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
          />
          {selectedMovie && selectedMovie.id === movie.id && (
            <S.MovieDetail>
              <MovieDetail
                title={selectedMovie.title}
                overview={selectedMovie.overview}
              />
            </S.MovieDetail>
          )}
        </S.MovieContainer>
      ))}
    </S.AppContainer>
    </S.Body>
  );
}

export default App;