import React from "react";
import { Link } from "react-router-dom";
import { UilPlay } from "@iconscout/react-unicons";

const PlaylistCard = ({ limiter, playlists }) => {
  return (
    <>
      {playlists.items.slice(0, limiter).map((playlist, idx) => (
        <div key={idx}>
          <Link to={`/playlists/${playlist.id}`}>
            <div
              className="w-full cursor-pointer  group bg-neutral-800 hover:bg-neutral-700 flex flex-col gap-6 rounded-md transition duration-500 "
              >
              <div className="h-full relative bg-[#171717] rounded-md p-4">
                <div className="relative">
                  <div className="absolute opacity-0 transition-all ease-in-out duration-500 shadow-2xl shadow-neutral-900 z-10 h-12 w-12 flex items-center justify-center rounded-full bg-green-500 bottom-6 right-2 group-hover:opacity-100 group-hover:bottom-15">
                    <UilPlay className="h-6 w-6 text-black" />
                  </div>
                  <img
                    src={playlist.images[0].url}
                    alt="Pic 1"
                    className="w-full h-full"
                  />
                </div>
                <div className="min-h-[62px] box-border">
                  <span
                    href="#"
                    className="text-slate-50 no-underline text-base font-bold"
                  >
                    {playlist.name}
                  </span>
                  <div className=" text-sm font-normal text-slate-400">
                    <p className="truncate">{playlist.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default PlaylistCard;
