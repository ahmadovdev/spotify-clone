import styled from "styled-components";

const Container = styled.header`
  height: 64px;
  display: flex;
  padding: 0px 32px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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

const Center = styled.div``;

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

export { Container, Wrapper, Arrow, Center, Right, Button, ArrowItem };
