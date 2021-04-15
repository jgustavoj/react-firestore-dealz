import styled from "styled-components";

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 94%;
  bottom: 40px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: green;

  @media (max-width: 1024.98px) {
    left: 50%;
  }
`;
