import styled from "styled-components";

export const StyleBar = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: var(--purple);
  box-shadow: 0px 31.6855px 63.3711px rgba(123, 73, 201, 0.3);
  article {
    width: 100%;
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      margin: 10px;
      span {
        margin: 10px;
        font-weight: 600;
        cursor: pointer;
        :hover {
          color: black;
          transition-duration: 0.5s;
        }
      }
    }
  }
`;
