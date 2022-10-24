import styled from "styled-components";

const InputStyles = styled.div`
  & {
    display: flex;
    width: 400px;
    background-color: #f5e6e890;
    border: 0.1px solid #ccc;
    align-items: center;
  }
  & input {
    background: none;
    border: none;
  }
  & button {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
  }
  & button:first-child {
    width: 100px;
  }
`;
export { InputStyles };
