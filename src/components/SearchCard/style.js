import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 2px solid #800080;
  width: 200px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    transition-duration: 1s;
    background: var(--purple);
    border-radius: 8px;
    color: black;
    font-weight: bold;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  img {
    height: 100px;
    width: 70px;
  }
`;
