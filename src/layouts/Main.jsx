import Header from 'components/Header';
import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 48px;
`;

export default ({ children }) => {
  return (
    <>
      <Header />
      <MainWrapper>{children}</MainWrapper>
    </>
  );
};
