import React from 'react';
import * as S from './Movie.style';

function MovieDetail({ title, overview }) {
  return (
    <div className="detail">
        <S.H4>{title}</S.H4>
        <S.P>{overview}</S.P>
    </div>
  );
}

export default MovieDetail;
