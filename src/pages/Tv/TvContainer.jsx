import { tvApi } from 'api/movieDatabase';
import React, { useEffect, useState } from 'react';
import TvPresenter from './TvPresenter';

export default () => {
  const [loading, setLoading] = useState(false);
  const [airingToday, setAiringToday] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const {
          data: { results: airingToday },
        } = await tvApi.airingToday();
        const {
          data: { results: popular },
        } = await tvApi.popular();
        const {
          data: { results: topRated },
        } = await tvApi.topRated();
        setAiringToday(airingToday);
        setPopular(popular);
        setTopRated(topRated);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <TvPresenter loading={loading} airingToday={airingToday} popular={popular} topRated={topRated} error={error} />
  );
};
