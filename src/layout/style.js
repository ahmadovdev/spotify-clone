import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

Main.Wrapper = styled.div`
  flex-basis: 80%;
`;

export { Wrapper, Main };
