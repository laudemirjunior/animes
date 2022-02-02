import styled from "styled-components";

export const Input = styled.input`
  border: none;
  outline: 0;
  display: flex;
  border-radius: 10px;
  padding: 10px;
  font-weight: bold;
  background: transparent;
  border: 2px solid #3c005a;
  color: #ffffff;
  ::-webkit-input-placeholder {
    color: #ffffff;
  }
  :-moz-placeholder {
    color: #ffffff;
  }
  ::-moz-placeholder {
    color: #ffffff;
  }
  :-ms-input-placeholder {
    color: #ffffff;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  min-width: 200px;
  top: 30px;
  z-index: 2;
  background-color: var(--blue);
  border-radius: 10px;
  border: 1px solid var(--purple);
  box-shadow: 0px 30px 60px rgba(123, 73, 201, 0.3);
  max-height: 440px;
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--purple);
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track {
    background: #666666;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
  overflow-y: scroll;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
