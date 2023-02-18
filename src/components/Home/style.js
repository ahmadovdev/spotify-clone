import styled from "styled-components";

const Section = styled.section`
  background-color: #121212;
  color: #fff;
  overflow: hidden;
  height: 1300px;
  // width: 1300px;
  // overflow: hidden;
`;

const Container = styled.div`
  padding: 0px 32px;
`;

const Title = styled.div`
  padding: 20px 0px;
`;

const CardWrapper = styled.div`
  display: grid;
  justify-content: space-between;
  grid-gap: 18px;
  grid-template-columns: repeat(auto-fill, minmax(181px, 1fr));
  grid-auto-rows: 0;
  grid-template-rows: 1fr;
`;

export { Container, Section, Title, CardWrapper };