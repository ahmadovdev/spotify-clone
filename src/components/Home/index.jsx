import React from "react";
import { Container, CardWrapper,  Title, Section } from "./style";
import Card from "../Card/index";
import { fetchPlaylists } from "../../redux/userBrowse/slice";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { playlists } = useSelector((state) => state.playlists);
  
  console.log(playlists);
  
  React.useEffect(() => {
    dispatch(fetchPlaylists());
  }, []);
  return (
    <Section>
      <Container>
        <Title>
          <h3>{ playlists.message }</h3>
        </Title>
        <CardWrapper>
          {playlists?.playlists?.items.map((value, idx) => (
            <Card key={idx} data={value} />
          ))}
        </CardWrapper>
      </Container>
    </Section>
  );
};

export default Home;
