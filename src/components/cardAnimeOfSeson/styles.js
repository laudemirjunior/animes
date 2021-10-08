import styled from "styled-components";

export const Scroll = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  align-items: center;
  Scroll:hover svg {
    opacity: 1;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      div {
        position: relative;
        left: -60px;
        top: -130px;
        background-color: white;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        opacity: 0.8;
        font-weight: bold;
        color: var(--gray3);
      }
    }
  }
  svg {
    background-color: var(--gray2);
    border-radius: 50%;
    font-size: 60px;
    color: white;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.6;
    backdrop-filter: blur(4px);
  }
  svg:nth-child(1) {
    left: 0;
  }
  svg:nth-child(2) {
    right: 0;
  }
  svg:hover {
    opacity: 0.9;
  }
`;
