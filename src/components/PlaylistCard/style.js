import styled from "styled-components";


const PlayListTracks = styled.div`
  padding-left: 4px;
  padding-top: 10px;
`;

const PlayListTrack = styled.div`
  height: 56px;
  display: grid;
  grid-template-columns: 25px 6fr 4fr 3fr 1fr;
  align-items: center;
`;

const PlayListTrackNumberItems = styled.div``;

const PlayListTrackNumberItem = styled.span`
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
  display: flex;
  flex-direction: column;
`;

const PlayListTrackTitleLinkTrack = styled.a`
  color: #fff;
  font-size: 12px;
  font-weight: 600;
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
  PlayListTrackNumberItems,
  PlayListTrackNumberItem,
  PlayListTrackTitle,
  PlayListTrackTitleImage,
  PlayListTrackTitleExtraLink,
  PlayListTrackTitleLinkTrack,
  PlayListTrackAlbum,
  PlayListTrackDataAdd,
  PlayListTrackTimeDuration,
};
