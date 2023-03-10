import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-basis: 20%;
  width: 260px;
  height: 100vh;
  background-color: #000;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;

const Wrapper = styled.div`
  padding-top: 24px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0px 16px;
`;

Menu.Item = styled.div`
  & a {
    height: 40px;
    display: flex;
    align-items: center;
    gap: 16px;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 700;
  }
  a:hover {
    color: #fff;
    transition: 1s all;
  }
`;

export { Container, Wrapper, Menu };
