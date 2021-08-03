import { movieApi } from 'api/movieDatabase';
import React, { useEffect, useState } from 'react';
import HomePresenter from './HomePresenter';

export default () => {
  const [loading, setLoading] = useState(false);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const {
          data: { results: nowPlayingData },
        } = await movieApi.nowPlaying();
        const {
          data: { results: upcomingData },
        } = await movieApi.upcoming();
        const {
          data: { results: popularData },
        } = await movieApi.popular();
        setNowPlaying(nowPlayingData);
        setUpcoming(upcomingData);
        setPopular(popularData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <HomePresenter loading={loading} nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} error={error} />
  );
};
