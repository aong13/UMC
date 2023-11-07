import styled from 'styled-components';

export const Body = styled.body`
  background-color: rgb(16, 11, 54);
`;

export const MovieContainer = styled.div`
  width: 200px;
  background: rgb(33, 33, 83);
  position: relative;
  margin: 20px;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 100px;
`;

export const MovieInfo = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
`;

export const MovieDetail = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  padding: 15px;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
`;

export const MovieContainerHover = styled(MovieContainer)`
  &:hover ${MovieDetail} {
    display: flex;
  }
`;

export const H4 = styled.h4`
  color: white;
  margin: 0;
`;

export const P = styled.p`
  color: white;
  font-size: 12px;
`;

export const Span = styled.span`
  color: white;
  margin-left: 10px;
`;
