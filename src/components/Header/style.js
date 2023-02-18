import styled from "styled-components";

const Container = styled.div`
  // max-width: 1440px;
  height: 64px;
  display: flex;
  padding: 0px 70px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: #252c2f;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ArrowItem = styled.div`
  display: flex;
  gap: 10px;
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #fff;
  background-color: #050505;
  border-radius: 50%;
`;

const Right = styled.div`
  display: flex;
  gap: 18px;
`;

const Button = styled.button`
  padding: 8px 32px;
  background-color: ${({ login }) => (login ? "#fff" : "transparent")};
  color: ${({ login }) => (login ? "#1B0C02" : "#fff")};
  border-radius: 50px;
  border: none;
  cursor: pointer;
`;

export { Container, Wrapper, Arrow, Right, Button, ArrowItem };
