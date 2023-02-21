import styled from "styled-components";

const PlayListTracks = styled.div``;

const PlayListTrack = styled.div`
  height: 56px;
  display: grid;
  grid-template-columns: 25px 6fr 4fr 3fr 1fr;
  grid-gap: 16px;
  align-items: center;
`;

const PlayListTrackNumberItem = styled.div`
  color: #adabaf;
  font-size: 16px;
  font-weight: 600;
`;

const PlayListTrackTitle = styled.div`
  display: flex;
  gap: 10px;
`;

const PlayListTrackTitleImage = styled.img`
  width: 40px;
  height: 40px;
`;

const PlayListTrackTitleExtraLink = styled.div`
  display: grid;
  flex-direction: column;
  align-content: space-around;
`;

const PlayListTrackTitleLinkTrack = styled.a`
  color: #fff;
  font-size: 12px;
  font-weight: 600;
`;

const PlayListTrackTitleLinkTrackArtist = styled.a`
  display: flex;
  color: #b3b3b3;
  font-size: 12px;
  font-weight: 400;
`;

const PlayListTrackTitleLinkTrackAlbum = styled.a`
  display: flex;
  align-items: center;
  color: #b3b3b3;
  font-size: 12px;
  font-weight: 400;
`;

const PlayListTrackAlbum = styled.div``;

const PlayListTrackDataAdd = styled.div`
  color: #fff;
  font-size: 12px;
  font-weight: 600;
`;

const PlayListTrackTimeDuration = styled.div`
  color: #fff;
  font-size: 12px;
  font-weight: 600;
`;

export {
  PlayListTracks,
  PlayListTrack,
  PlayListTrackNumberItem,
  PlayListTrackTitle,
  PlayListTrackTitleImage,
  PlayListTrackTitleExtraLink,
  PlayListTrackTitleLinkTrack,
  PlayListTrackTitleLinkTrackArtist,
  PlayListTrackTitleLinkTrackAlbum,
  PlayListTrackAlbum,
  PlayListTrackDataAdd,
  PlayListTrackTimeDuration,
};
