import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Backdrop = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.25s ease-out;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0 4px;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
`;
const Title = styled.h3`
  margin-bottom: 8px;
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.1;
  text-align: center;
`;
const Rating = styled.span``;
const PosterWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  box-shadow: 3px 4px 10px ${(props) => props.theme.$lightBlack};
  &:hover,
  &:focus {
    ${Backdrop} {
      transform: scale(1.1);
    }
    ${Info} {
      opacity: 1;
    }
  }
`;

const Poster = ({ title, imgUrl, rating, searchUrl }) => {
  return (
    <PosterWrapper>
      <Link to={searchUrl}>
        <Backdrop
          src={imgUrl ? `https://image.tmdb.org/t/p/w300${imgUrl}` : require('assets/noPosterSmall.png').default}
          alt={title}
        />
        <Info>
          <Title>{title}</Title>
          <Rating>⭐{rating}/10</Rating>
        </Info>
      </Link>
    </PosterWrapper>
  );
};

export default Poster;

Poster.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  rating: PropTypes.number.isRequired,
  searchUrl: PropTypes.string.isRequired,
};
