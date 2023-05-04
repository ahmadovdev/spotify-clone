import React from "react";
import {
  Container,
  Arrow,
  Right,
  Button,
  Wrapper,
  ArrowItem,
  // Center,
} from "./style";
import { UilAngleRight, UilAngleLeft } from "@iconscout/react-unicons";
// import { SearchBar } from "../SearchBar";
// import { useLocation } from "react-router-dom";

const Header = () => {
  // const location = useLocation().pathname;
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
        {/* <Center> */}
          {/* {location.slice(1, 7) === "search" ? <SearchBar /> : null} */}
        {/* </Center> */}
        <Right>
          <Button>Sign up</Button>
          <Button login>Log in</Button>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header