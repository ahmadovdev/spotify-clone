import React from "react";
import { shuffle } from "lodash";

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];

<<<<<<< HEAD
const DetailsHeader = ({ data, types }) => {
  const [color, setColor] = React.useState(colors[0]);
  React.useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [data.id]);
=======
const DetailsHeader = ({data, types}) => {
  const [color, setColor] = React.useState(colors[0]);
      React.useEffect(() => {
        setColor(shuffle(colors).pop());
      }, [data.id]);
>>>>>>> 691be61c462a7b0facf26ec92b832b32154157f8
  const {
    album,
    artists,
    images,
    type,
    name,
    description,
    followers,
    tracks,
    owner,
  } = data;

  const img = types === "playlist" ? images[0].url : album.images[0].url;
  const playlistType = type;
  const nameArtist = name;
  const ownerPlaylist =
    types === "playlist" ? owner.display_name : artists[0].name;
  const typeElement =
    types === "playlist" ? `${followers.total} likes` : album.name;
  const totalSongs =
    types === "playlist" ? `${tracks.total} songs, about 11 hr` : null;
  return (
    <div
      className={`flex h-[30vh] max-h-[400px] min-h-[340px] text-[#fff] bg-gradient-to-b to-neutral-900 ${color} px-6 pb-4`}
    >
      <div className="self-end h-[192px] w-[192px] min-w-[192px] me-6">
        <div className="h-[inherit]">
          <img className="h-full w-full" src={img} alt="playlist" />
        </div>
      </div>
      <div className="flex justify-end flex-col">
        <span className="text-sm box-border font-bold text-[inherit]">
          {playlistType}
        </span>
        <span className="leading-normal mt-2 text-left w-full">
          <h1 className="mt-[0.08rem] mb-[0.8rem] w-full text-8xl font-black text-[#fff]">
            {nameArtist}
          </h1>
        </span>
        <span className="text-[#c7c5bc] text-sm box-border font-normal">
          {description}
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
              <a href="#">{ownerPlaylist}</a>
            </span>
            <span className="text-[inherit] box-border font-normal text-sm">
              {typeElement}
            </span>
            <span className="text-[inherit] box-border font-normal text-sm">
              {types === "playlist"
                ? `${tracks.total} +  songs, about 11 hr`
                : null}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
