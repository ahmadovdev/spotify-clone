import React from "react";
import { Container, CardWrapper,  Title, Section } from "./style";
import Card from "../Card/index";
import { fetchTracks } from "../../redux/userProfile/slice";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  // const { user_profile } = useSelector((state) => state.user_profile);
  
  React.useEffect(() => {
    dispatch(fetchTracks());
  }, []);
  return (
    <Section>
      <Container>
        <Title>
          <h3>Home</h3>
        </Title>
        <CardWrapper>
        <Card />
        </CardWrapper>
      </Container>
    </Section>
  );
};

export default Home;
