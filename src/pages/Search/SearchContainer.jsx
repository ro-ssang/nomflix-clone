import { movieApi, tvApi } from 'api/movieDatabase';
import React, { useCallback, useState } from 'react';
import SearchPresenter from './SearchPresenter';

export default () => {
  const [term, setTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [error, setError] = useState(null);

  const onChange = useCallback((e) => {
    setTerm(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const fetchData = async () => {
        setLoading(true);
        try {
          const {
            data: { results: movies },
          } = await movieApi.search(term);
          const {
            data: { results: shows },
          } = await tvApi.search(term);
          setMovies(movies);
          setShows(shows);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
          setTerm('');
        }
      };
      fetchData();
    },
    [term]
  );

  return (
    <SearchPresenter
      term={term}
      onChange={onChange}
      onSubmit={onSubmit}
      loading={loading}
      movies={movies}
      shows={shows}
      error={error}
    />
  );
};
