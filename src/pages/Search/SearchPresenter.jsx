import MainWrapper from 'layouts/Main';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import Poster from 'components/Poster';

const SearchForm = styled.form`
  display: flex;
  padding: 0 30px;
  width: 100%;
  max-width: 1440px;
`;
const SeacrhInput = styled.input`
  flex: 3;
  padding: 14px 10px;
  margin-bottom: 40px;
  background-color: inherit;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.$white};
  color: ${(props) => props.theme.$white};
  font-size: 20px;
  outline: none;
  &::placeholder {
    font-size: 20px;
    color: inherit;
  }
`;
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

const SearchPresenter = ({ term, onChange, onSubmit, loading, movies, shows, error }) => {
  return (
    <MainWrapper>
      <SearchForm onSubmit={onSubmit}>
        <SeacrhInput type="text" placeholder="Searching for..." value={term} onChange={onChange} />
      </SearchForm>
      {loading ? (
        <Loader />
      ) : (
        <>
          <SectionWrapper>
            {movies && movies.length > 0 && <SectionTitle>Movies</SectionTitle>}
            <PosterList>
              {movies &&
                movies.length > 0 &&
                movies.map((movie) => (
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
            {shows && shows.length > 0 && <SectionTitle>TV Shows</SectionTitle>}
            <PosterList>
              {shows &&
                shows.length > 0 &&
                shows.map((show) => (
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
    </MainWrapper>
  );
};

export default SearchPresenter;

SearchPresenter.propTypes = {
  term: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    })
  ),
  shows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    })
  ),
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
};
