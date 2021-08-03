import MainWrapper from 'layouts/Main';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import Poster from 'components/Poster';

const SectionWrapper = styled.section`
  padding: 0 30px;
  width: 100%;
  max-width: 1440px;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;
const SectionTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 28px;
  font-weight: 700;
`;
const PosterList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  grid-auto-rows: 300px;
  gap: 20px;
`;
const PosterItem = styled.li``;

const HomePresenter = ({ loading, nowPlaying, upcoming, popular, error }) => {
  return (
    <MainWrapper>
      {loading ? (
        <Loader />
      ) : (
        <>
          <SectionWrapper>
            <SectionTitle>Now Playing</SectionTitle>
            <PosterList>
              {nowPlaying &&
                nowPlaying.length > 0 &&
                nowPlaying.map((movie) => (
                  <PosterItem key={movie.id}>
                    <Poster
                      title={movie.title}
                      imgUrl={movie.poster_path}
                      rating={movie.vote_average}
                      searchUrl={`/movies/${movie.id}`}
                    />
                  </PosterItem>
                ))}
            </PosterList>
          </SectionWrapper>
          <SectionWrapper>
            <SectionTitle>Upcoming</SectionTitle>
            <PosterList>
              {upcoming &&
                upcoming.length > 0 &&
                upcoming.map((movie) => (
                  <PosterItem key={movie.id}>
                    <Poster
                      title={movie.title}
                      imgUrl={movie.poster_path}
                      rating={movie.vote_average}
                      searchUrl={`/movies/${movie.id}`}
                    />
                  </PosterItem>
                ))}
            </PosterList>
          </SectionWrapper>
          <SectionWrapper>
            <SectionTitle>Popular</SectionTitle>
            <PosterList>
              {popular &&
                popular.length > 0 &&
                popular.map((movie) => (
                  <PosterItem key={movie.id}>
                    <Poster
                      title={movie.title}
                      imgUrl={movie.poster_path}
                      rating={movie.vote_average}
                      searchUrl={`/movies/${movie.id}`}
                    />
                  </PosterItem>
                ))}
            </PosterList>
          </SectionWrapper>
        </>
      )}
      {error && error.message}
    </MainWrapper>
  );
};

export default HomePresenter;

HomePresenter.propType = {
  loading: PropTypes.bool.isRequired,
  nowPlaying: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    })
  ),
  upcoming: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    })
  ),
  popular: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    })
  ),
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
};
