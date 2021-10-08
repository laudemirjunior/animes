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
    gap: 15px;
  }
  svg:nth-child(1) {
    background-color: var(--blue3);
    border-radius: 50%;
    font-size: 80px;
    color: white;
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.6;
    backdrop-filter: blur(4px);
    cursor: pointer;
  }
  svg:nth-child(2) {
    font-size: 80px;
    color: white;
    position: absolute;
    right: 0;
    background-color: var(--blue3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.6;
    backdrop-filter: blur(4px);
    cursor: pointer;
  }
  svg:hover {
    opacity: 0.9;
  }
`;
