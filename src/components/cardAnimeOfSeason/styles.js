import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 0 20px;
`;

export const Wallpaper = styled.div`
  width: 100%;
  margin: 20px auto;
  display: flex;
`;

export const Scroll = styled.div`
  margin: 20px auto;
  max-width: 1280px;
  background-color: var(--blue);
  padding: 10px 10px;
  border-radius: 10px;
  border: 1px solid var(--purple);
  box-shadow: 0px 30px 60px rgba(123, 73, 201, 0.3);
  img {
    cursor: pointer;
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    :hover {
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
`;

export const Span = styled.div`
  position: absolute;
  top: 0%;
  margin: 2px;
  font-weight: 800;
  width: 40px;
  height: 40px;
  background-color: yellow;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

export const Video = styled.video`
  width: 100%;
  margin: 20px auto;
  max-width: 1280px;
  background-color: var(--blue);
  border-radius: 10px;
  border: 1px solid var(--purple);
  box-shadow: 0px 30px 60px r;
`;
