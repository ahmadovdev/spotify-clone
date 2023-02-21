import React from "react";
import moment from "moment";
import {
  PlayListTracks,
  PlayListTrack,
  PlayListTrackNumberItem,
  PlayListTrackTitle,
  PlayListTrackTitleImage,
  PlayListTrackTitleExtraLink,
  PlayListTrackTitleLinkTrack,
  PlayListTrackAlbum,
  PlayListTrackTitleLinkTrackArtist,
  PlayListTrackTitleLinkTrackAlbum,
  PlayListTrackDataAdd,
  PlayListTrackTimeDuration,
} from "./style";


const msToMinutesAndSeconds = ms => {
  const minutes = Math.floor(ms / 60000)
  const seconds = ((ms % 60000) / 1000).toFixed(0)
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds
}

const textLenghtCut = text => {
  if (text.length > 60) {
    return text.substr(0, 60) + "...";
    // console.log(text.substr(0, 20) + "...");
  } else {
    return text
    // console.log(text);
  }
}

export const PlaylistCard = (props) => {
  const { added_at, track, number } = props;
  
  return (
    <PlayListTracks>
      <PlayListTrack>
        <PlayListTrackNumberItem>{number}</PlayListTrackNumberItem>
        <PlayListTrackTitle>
          <PlayListTrackTitleImage src={track?.album?.images[2].url} />
          <PlayListTrackTitleExtraLink>
            <PlayListTrackTitleLinkTrack>
              {textLenghtCut(track?.name)}
            </PlayListTrackTitleLinkTrack>
            <PlayListTrackTitleLinkTrackArtist>
              {track?.artists.map((item) => {
                return item.name;
              })}
            </PlayListTrackTitleLinkTrackArtist>
          </PlayListTrackTitleExtraLink>
        </PlayListTrackTitle>
        <PlayListTrackAlbum>
          <PlayListTrackTitleLinkTrackAlbum>
            {track?.album?.name}
          </PlayListTrackTitleLinkTrackAlbum>
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
