import styled from "styled-components";

const Section = styled.section`
  padding: 0px 32px;
  background-color: #161113;
`;

const Container = styled.div`
  padding-top: 20px;
`;

const ContentSpacing = styled.div`
  display: flex;
  gap: 20px;
  color: #fff;
`;

const WrapperImage = styled.div``;

const ImgContent = styled.img`
  width: 232px;
  height: 232px;
`;

const TitleContent = styled.div``;
const TitleName = styled.p`
  font-size: 12px;
  font-weight: 600;
`;
const TitleDescr = styled.p`
  font-size: 4rem;
  font-weight: 600;
`;

const TitleArtists = styled.p`
  font-size: 14px;
  color: #adabaf;
  font-weight: 500;
`;

const TitleUserSpotify = styled.span`
display: flex;
align-items: center;
`;

const TitleUserSpotifyLogo = styled.img`
  width: 24px;
  height: 24px;

`;

const TitleAddress = styled.a`
  color: #fff;
  font-weight: 500;
  font-size: 12px;
  padding-left: 5px;
`;

const TitleStat = styled.div`
  padding-left: 5px;
  font-size: 12px;
  font-weight: 500;
`;

const PlaylistItems = styled.div``;

const PlayListMenu = styled.div`
  padding: 32px 0px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const PlayListSpan = styled.span`
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #1ed760;
`;

const PlayListLike = styled.button`
  display: flex;
  align-items: start;
  font-size: 20px;
  background-color: transparent;
  border: none;
`;

const PlayListButton = styled.button`
  color: #b5b4b5;
  display: flex;
  align-items: start;
  font-size: 20px;
  font-weight: 700;
  background-color: transparent;
  border: none;

  &:hover {
    color: #fff;
  }
`;

const PlayListNavbarItems = styled.div`
  // position: sticky;
  // top: 0;
  // left: 0;
  // right: 200px;
  height: 36px;
  display: grid;
  grid-template-columns: 25px 6fr 4fr 3fr 1fr;
  align-items: center;
  border-bottom: 2px solid #898989;
  color: #898989;
  font-size: 12px;
`;

const PlaylistNavbarItem = styled.div`
  padding-left: 2px;
`;

export {
  Section,
  Container,
  ContentSpacing,
  ImgContent,
  WrapperImage,
  TitleContent,
  TitleName,
  TitleDescr,
  TitleArtists,
  TitleUserSpotify,
  TitleUserSpotifyLogo,
  TitleAddress,
  TitleStat,
  PlaylistItems,
  PlayListMenu,
  PlayListSpan,
  PlayListLike,
  PlayListButton,
  PlayListNavbarItems,
  PlaylistNavbarItem,
};
