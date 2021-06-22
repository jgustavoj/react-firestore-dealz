import styled from "styled-components";

// export const Button = styled.div`
//   position: fixed;
//   width: 100%;
//   left: 94%;
//   bottom: 40px;
//   height: 20px;
//   font-size: 1.5rem;
//   z-index: 1;
//   cursor: pointer;
//   color: green;

//   @media (max-width: 1024.98px) {
//     left: 35%;
//     top: 0%;
//   }
// `;

export const Circle = styled.div`
  position: fixed;
  height: 48px;
  // left: 42%;
  bottom: 90%;
  width: 120px;
  font-size: 16px;
  background-color: green;
  color: white;
  border-radius: 36px;
  display: inline-block;
  z-index: 1;
  line-height: 3.1;


  #circle{
    margin-left: 18px;
  
  }

`

export const IntroText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
  color: grey;

  @media (max-width: 1024.98px) {
    margin-left: 1.25rem;
    margin-right: 1.25rem;
  }
`;
