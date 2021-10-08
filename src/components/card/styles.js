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
  svg {
    background-color: var(--blue3);
    border-radius: 50%;
    font-size: 80px;
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
