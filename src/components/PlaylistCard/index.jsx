import React from "react";
import moment from "moment";
import {
  PlayListTracks, PlayListTrack, PlayListTrackNumberItems,
  PlayListTrackNumberItem,
  PlayListTrackTitle,
  PlayListTrackTitleImage,PlayListTrackTitleExtraLink, PlayListTrackTitleLinkTrack,PlayListTrackAlbum,PlayListTrackDataAdd, PlayListTrackTimeDuration,
} from "./style";


const msToMinutesAndSeconds = ms => {
  const minutes = Math.floor(ms / 60000)
  const seconds = ((ms % 60000) / 1000).toFixed(0)
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds
}

export const PlaylistCard = (props) => {
  const { added_at, track, number } = props;
  console.log(props, "data");
  
  return (
    <PlayListTracks>
      <PlayListTrack>
        <PlayListTrackNumberItems>
          <PlayListTrackNumberItem>{number}</PlayListTrackNumberItem>
        </PlayListTrackNumberItems>
        <PlayListTrackTitle>
          <PlayListTrackTitleImage></PlayListTrackTitleImage>
          <PlayListTrackTitleExtraLink>
            <PlayListTrackTitleLinkTrack>
              {track?.name}
            </PlayListTrackTitleLinkTrack>
            <PlayListTrackTitleLinkTrack>
              Ustozlar termasi
            </PlayListTrackTitleLinkTrack>
          </PlayListTrackTitleExtraLink>
        </PlayListTrackTitle>
        <PlayListTrackAlbum>
          <PlayListTrackTitleLinkTrack>Otam duosi</PlayListTrackTitleLinkTrack>
        </PlayListTrackAlbum>
        <PlayListTrackDataAdd>
          {moment(added_at).format("YYYY-MM-DD")}
        </PlayListTrackDataAdd>
        <PlayListTrackTimeDuration>
          {msToMinutesAndSeconds(track?.duration_ms)}
        </PlayListTrackTimeDuration>
      </PlayListTrack>
    </PlayListTracks>
  );
};
