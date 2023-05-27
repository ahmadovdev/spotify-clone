import React from "react";

const PlaylistTitle = () => {
  return (
    <div className="flex h-[30vh] max-h-[400px] min-h-[340px] text-[#fff]">
      <div className="self-end h-[192px] w-[192px] min-w-[192px] me-6">
        <div className="h-[inherit]">
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-end flex-col">
        <span className="text-sm box-border font-bold text-[inherit]">
          Playlist
        </span>
        <span className="leading-normal mt-2 text-left w-full">
          <h1 className="mt-[0.08rem] mb-[0.12rem] w-full text-8xl font-black text-[#fff]">
            Peaceful Piano
          </h1>
        </span>
        <span className="text-[#c7c5bc] text-sm box-border font-normal">
          Peaceful piano to help you slow down, breathe, and relax.
        </span>
        <div className="flex flex-wrap mt-2">
          <div className="grid gap-[4px] grid-flow-col">
            <figure className="w-6 h-6">
              <div className="w-6 h-6">
                <img
                  className="rounded-[50%] h-full object-cover w-full"
                  src="https://i.scdn.co/image/ab67757000003b8255c25988a6ac314394d3fbf5"
                  alt="Spotify"
                />
              </div>
            </figure>
            <span className="text-sm font-bold box-border text-[inherit]">
              <a href="#">Spotify</a>
            </span>
            <span className="text-[inherit] box-border font-normal text-sm">
              7,049,380 likes
            </span>
            <span className="text-[inherit] box-border font-normal text-sm">
              305 songs, about 11 hr
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistTitle;
