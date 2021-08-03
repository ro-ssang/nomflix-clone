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

const TvPresenter = ({ loading, airingToday, popular, topRated, error }) => {
  return (
    <MainWrapper>
      {loading ? (
        <Loader />
      ) : (
        <>
          <SectionWrapper>
            <SectionTitle>Airing Today</SectionTitle>
            <PosterList>
              {airingToday &&
                airingToday.length > 0 &&
                airingToday.map((show) => (
                  <PosterItem key={show.id}>
                    <Poster
                      title={show.name}
                      imgUrl={show.poster_path}
                      rating={show.vote_average}
                      searchUrl={`/shows/${show.id}`}
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
                popular.map((show) => (
                  <PosterItem key={show.id}>
                    <Poster
                      title={show.name}
                      imgUrl={show.poster_path}
                      rating={show.vote_average}
                      searchUrl={`/shows/${show.id}`}
                    />
                  </PosterItem>
                ))}
            </PosterList>
          </SectionWrapper>
          <SectionWrapper>
            <SectionTitle>Top Rated</SectionTitle>
            <PosterList>
              {topRated &&
                topRated.length > 0 &&
                topRated.map((show) => (
                  <PosterItem key={show.id}>
                    <Poster
                      title={show.name}
                      imgUrl={show.poster_path}
                      rating={show.vote_average}
                      searchUrl={`/shows/${show.id}`}
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

export default TvPresenter;

TvPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  airingToday: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    })
  ),
  popular: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    })
  ),
  topRated: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    })
  ),
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};
