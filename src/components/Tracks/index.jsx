import React from "react";
import DetailsHeader from "../DetailsHeader";
import { useParams } from "react-router-dom";
import { useGetSingleTrackQuery } from "../../redux/services/spotifyCoreApi";

const Tracks = () => {
  const { trackId } = useParams();
  const { data, isFetching, error } = useGetSingleTrackQuery(trackId);
  if (isFetching) return console.log("loading");
  if (error) return console.log(error);
  return (
    <section className="mt-[-64px]">
<<<<<<< HEAD
      <DetailsHeader data={data} types="track" />
=======
       <DetailsHeader data={data} types='track' />
>>>>>>> 691be61c462a7b0facf26ec92b832b32154157f8
    </section>
  );
};

export default Tracks;
