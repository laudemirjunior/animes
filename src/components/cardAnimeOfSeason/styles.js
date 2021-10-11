import styled from "styled-components";

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
    :hover {
      border: 3px solid var(--purple);
    }
  }
`;

export const Span = styled.div`
  position: absolute;
  top: 0%;
  margin: 2px;
  font-weight: 800;
  width: 35px;
  height: 35px;
  background-color: white;
  color: var(--purple);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
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
