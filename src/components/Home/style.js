import styled from "styled-components";

const Section = styled.section`
  background-color: #121212;
  color: #fff;
  height: 1300px;
`;

const Container = styled.div`
  padding: 0px 32px;
`;

// const Main = styled.div`
// `;

const Title = styled.div`
  padding: 20px 0px;
`;

const CardWrapper = styled.div`
  display: grid;
  justify-content: space-between;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(181px, 1fr));
`;

export { Container, Section, Title, CardWrapper };
