import React from "react";
import { Link } from "react-router-dom";
import { Container, Description, Image, Title } from './style';

const Card = () => {
  return (
    <Link to={'playlist'}>
      <Container>
        <Image src="https://i.scdn.co/image/ab67616d0000b273fa258529452f4ed34cc961b1" />
        <Title>
          <p>name</p>
        </Title>
        <Description>
          <p>track</p>
        </Description>
      </Container>
    </Link>
  );
};

export default Card;
