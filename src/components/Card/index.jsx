import React from "react";
import { Link } from "react-router-dom";
import { Container, Description, Image, Title } from './style';

const Card = ({data}) => {
  const { name, owner, images, id } = data;
  return (
    <Link to={`/playlist/${id}`}>
      <Container>
        {images.map((item, idx) => (
          <Image key={idx} src={item.url} />
        ))}
        <Title>
          <p>{name || 0} </p>
        </Title>
        <Description>
          <p> {owner.display_name} </p>
        </Description>
      </Container>
    </Link>
  );
};

export default Card;
