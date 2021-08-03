import React from 'react';
import styled from 'styled-components';

const SeasonsWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, auto));
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 20px;
  margin-bottom: 20px;
`;
const Season = styled.li``;
const Poster = styled.img`
  width: 100%;
  border-radius: 4px;
  box-shadow: 1px 2px 6px 3px rgba(0, 0, 0, 0.3);
`;
const SeasonName = styled.h3`
  margin-top: 4px;
  text-align: center;
`;

export default ({ seasons }) => (
  <SeasonsWrapper>
    {seasons &&
      seasons.length > 0 &&
      seasons.map((season) => (
        <Season key={season.id}>
          <Poster
            src={
              season.poster_path
                ? `http://image.tmdb.org/t/p/w185${season.poster_path}`
                : require('assets/noPosterSmall.png').default
            }
            alt={season.name}
          />
          <SeasonName>{season.name}</SeasonName>
        </Season>
      ))}
  </SeasonsWrapper>
);
