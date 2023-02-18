import styled from "styled-components";

const Container = styled.div`
  // width: 181px;
  // height: 280px;
  background-color: #161616;
  border-radius: 5px;
  padding: 15px;

  &:hover {
    background-color: #1e1e1e;
    transition-duration: 500ms;
    transition-timing-function: ease-in-out;
  }
`;
  
  const Image = styled.img`
    max-height: 181px;
    min-height: 171px;
    width: 100%;
    border-radius: 5px;
  `;

const Title = styled.div`
  font-size: 14px;
  color: #fff;
`;

const Description = styled.div`
  font-size: 14px;
  color: #8e8e8e;;
`;

export { Container, Image, Title, Description };
