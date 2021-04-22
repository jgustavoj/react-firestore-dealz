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
    left: 47%;
  }
`;

export const IntroText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
  color: grey;

  @media (max-width: 1024.98px) {
    margin-left: 1.25rem;
    margin-right: 1.25rem;
  }
`;
