import React from 'react';
import styled from 'styled-components';

const YTVideoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, auto));
  grid-auto-rows: 200px;
  gap: 20px;
`;
const Video = styled.div``;
const Iframe = styled.iframe``;

export default ({ videos }) => (
  <YTVideoWrapper>
    {videos &&
      videos.length > 0 &&
      videos.map((video) => (
        <Video key={video.id}>
          <Iframe
            id={video.id}
            type="text/html"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.key}`}
            frameBorder="0"
            fs="1"
          />
        </Video>
      ))}
  </YTVideoWrapper>
);
