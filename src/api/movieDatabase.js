import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'b9fa4142eb69f9a6ca71110bed2e903e',
  },
});

export const movieApi = {
  nowPlaying: () => instance.get('movie/now_playing'),
  upcoming: () => instance.get('movie/upcoming'),
  popular: () => instance.get('movie/popular'),
  search: (term) =>
    instance.get('search/movie', {
      params: {
        query: term,
      },
    }),
  detail: (id) => instance.get(`movie/${id}`),
  videos: (id) => instance.get(`movie/${id}/videos`),
};

export const tvApi = {
  airingToday: () => instance.get('tv/airing_today'),
  popular: () => instance.get('tv/popular'),
  topRated: () => instance.get('tv/top_rated'),
  search: (term) =>
    instance.get('search/tv', {
      params: {
        query: term,
      },
    }),
  detail: (id) => instance.get(`tv/${id}`),
  videos: (id) => instance.get(`tv/${id}/videos`),
};
