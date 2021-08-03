import GlobalStyle, { theme } from 'components/GlobalStyle';
import DetailContainer from 'pages/Detail';
import HomeContainer from 'pages/Home';
import SearchContainer from 'pages/Search';
import TvContainer from 'pages/Tv';
import React from 'react';
import { HashRouter as Router, Redirect, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/tv" component={TvContainer} />
        <Route path="/search" component={SearchContainer} />
        <Route path="/movies/:id" component={DetailContainer} />
        <Route path="/shows/:id" component={DetailContainer} />
        <Redirect path="*" to="/" />
      </Router>
    </ThemeProvider>
  );
};
