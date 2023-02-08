import React from "react";
import { Container, Arrow, Right, Button, Wrapper, ArrowItem } from "./style";
import { UilAngleRight, UilAngleLeft } from "@iconscout/react-unicons";

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <ArrowItem>
          <Arrow>
            <UilAngleLeft />
          </Arrow>
          <Arrow>
            <UilAngleRight />
          </Arrow>
        </ArrowItem>
        <Right>
          <Button>Sign up</Button>
          <Button login>Log in</Button>
        </Right>
      </Wrapper>
    </Container>
  );
};
