import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;
  max-width: 1280px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 1.5fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "image image video video"
    "text text text text";
  & .image {
    grid-area: image;
  }
  & .video {
    grid-area: video;
    text-align: right;
    iframe {
      max-width: 500px;
      max-height: 300px;
      width: 100%;
      height: 100%;
      min-width: 300px;
      min-height: 200px;
    }
  }
  & .text {
    grid-area: text;
    text-align: justify;
  }
  @media (max-width: 700px) {
    padding: 0 10px;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "image image image image"
      "video video video video"
      "text text text text";
    & .image {
      margin: auto;
    }
    & .video {
      margin: auto;
      iframe {
        grid-area: video;
        text-align: right;
      }
    }
  }
`;
