import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "sidebar header header";
  gap: 6px;
  height: 100vh;
  padding: 6px 0px 6px 6px;
  background-color: yellow;
`;
  
const MainWrapper = styled.div`
  grid-area: "header";
  border-radius: 10px;
  background-color: #121212;
`;
const SidebarWrapper = styled.div`
  grid-area: "sidebar";
`;

export { Container, MainWrapper, SidebarWrapper };
