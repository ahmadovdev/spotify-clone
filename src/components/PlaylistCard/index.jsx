import React from "react";
import { useGetCurrentPlaylistQuery } from "../../redux/services/spotifyCoreApi";
import { Link } from "react-router-dom";

const PlaylistCard = () => {
  const { data = [], isFetching, error } = useGetCurrentPlaylistQuery();
  if (isFetching) return console.log("loading");
  if (error) return console.log(error);
  console.log(data);
  return (
    <>
      {data.playlists.items.map((playlist, idx) => (
        <>
          <Link to={`playlist/${playlist.id}`}>
            <div
              className="w-full bg-[#171717] rounded-md p-4 overflow-hidden"
              key={idx}
            >
              <div className="h-[164px]">
                <img
                  src={playlist.images[0].url}
                  alt="Pic 1"
                  className="w-full h-full"
                />
              </div>
              <div className="min-h-[62px] box-border">
                <a
                  href="#"
                  className="text-slate-50 no-underline text-base font-bold"
                >
                  {playlist.name}
                </a>
                <div className="text-sm font-normal text-slate-400">
                  <span>{playlist.owner.display_name}</span>
                </div>
              </div>
            </div>
          </Link>
        </>
      ))}
    </>
  );
};

export default PlaylistCard;
