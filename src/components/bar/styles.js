import styled from "styled-components";

export const StyleBar = styled.div`
  width: 100%;
  height: 50px;
  background-color: var(--blue2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.75);
  div {
    margin: 10px;
    span {
      margin: 10px;
    }
  }
`;
