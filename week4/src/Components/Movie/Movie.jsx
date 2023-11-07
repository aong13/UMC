import * as S from './Movie.style';

function Movie({title, poster_path, vote_average}) {
    return (
      <div className='container'>
            <img src={poster_path} alt="영화포스터" />
            <S.MovieInfo>
                <S.H4>{title}</S.H4>
                <S.Span>{vote_average}</S.Span>
            </S.MovieInfo>
      </div>
    )
  }
  
  export default Movie