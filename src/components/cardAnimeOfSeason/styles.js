import styled from "styled-components";

export const Scroll = styled.div`
  width: 90%;
  margin: 20px auto;
  max-width: 1280px;
  background-color: var(--blue);
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid var(--purple);
  box-shadow: 0px 31.6855px 63.3711px rgba(123, 73, 201, 0.3);
  svg {
    border-radius: 50%;
    color: var(--purple);
    z-index: 1;
    width: 40px;
    height: 40px;
    margin: 0 -15px;
    &:hover {
      color: white;
    }
  }
  span {
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
  }
`;
