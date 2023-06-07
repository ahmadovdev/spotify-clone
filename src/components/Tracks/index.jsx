import React from "react";
import DetailsHeader from "../DetailsHeader";
import { useParams } from "react-router-dom";
import { useGetSingleTrackQuery } from "../../redux/services/spotifyCoreApi";

const Tracks = () => {
  const [trackData, setTrackData] = React.useState({
    type: 'track'
  })
  const { trackId } = useParams();
  const { data, isFetching, error } = useGetSingleTrackQuery(trackId);
  setTrackData(data)
  if (isFetching) return console.log("loading");
  if (error) return console.log(error);
  return (
    <section className="mt-[-64px]">
      <DetailsHeader data={data} types="track" />
    </section>
  );
};

export default Tracks;
