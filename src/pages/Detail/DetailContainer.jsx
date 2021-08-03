import { movieApi, tvApi } from 'api/movieDatabase';
import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DetailPresenter from './DetailPresenter';

const DetailContainer = ({
  location: { pathname },
  match: {
    params: { id },
  },
}) => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [show, setShow] = useState(null);
  const [videos, setVideos] = useState(null);
  const [showVideos, setShowVideos] = useState(null);
  const [error, setError] = useState(null);
  const [currentTab, setCurrentTab] = useState('tab1');

  const onClickTab = useCallback((e) => {
    setCurrentTab(e.target.id);
  }, []);

  useEffect(() => {
    if (pathname.startsWith('/movies')) {
      const fetchMovieData = async () => {
        try {
          const { data } = await movieApi.detail(id);
          const {
            data: { results: videos },
          } = await movieApi.videos(id);
          setMovie(data);
          setVideos(videos);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };
      fetchMovieData();
    }
    if (pathname.startsWith('/shows')) {
      const fetchShowData = async () => {
        try {
          const { data } = await tvApi.detail(id);
          const {
            data: { results: showVideos },
          } = await tvApi.videos(id);
          setShow(data);
          setShowVideos(showVideos);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };
      fetchShowData();
    }
  }, []);

  return (
    <DetailPresenter
      loading={loading}
      movie={movie}
      show={show}
      videos={videos}
      showVideos={showVideos}
      error={error}
      currentTab={currentTab}
      onClickTab={onClickTab}
    />
  );
};

export default DetailContainer;

DetailContainer.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};
