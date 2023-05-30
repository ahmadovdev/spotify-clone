import React from "react";

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];

const PlaylistTitle = ({data}) => {
  const [color, setColor] = React.useState(colors[0]);
  const [opacity, setOpacity] = React.useState(0);
  const [textOpacity, setTextOpacity] = React.useState(0);

  console.log(data);

  const changeOpacity = (scrollData) => {
    const offset = 340;
    const textOffset = 10;
    if (scrollData < offset) {
      const newOpacity = 1 - (offset - scrollData) / offset;
      setOpacity(newOpacity);
      setTextOpacity(0);
    } else {
      setOpacity(1);
      const delta = scrollData - offset;
      const newTextOpacity = 1 - (textOffset - delta) / textOffset;
      setTextOpacity(newTextOpacity);
    }
  };
  return (
    <div
      onScroll={(e) => changeOpacity(e.target.scrollTop)}
      className={`flex h-[30vh] max-h-[400px] min-h-[340px] text-[#fff] bg-gradient-to-b to-neutral-900 ${color} px-6 pb-4`}
    >
      <div className="self-end h-[192px] w-[192px] min-w-[192px] me-6">
        <div className="h-[inherit]">
          <img className="h-full w-full" src={data.images[0].url} alt="playlist" />
        </div>
      </div>
      <div className="flex justify-end flex-col">
        <span className="text-sm box-border font-bold text-[inherit]">
          {data.type}
        </span>
        <span className="leading-normal mt-2 text-left w-full">
          <h1 className="mt-[0.08rem] mb-[0.8rem] w-full text-8xl font-black text-[#fff]">
            {data.name}
          </h1>
        </span>
        <span className="text-[#c7c5bc] text-sm box-border font-normal">
          {data.description}
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
              {data.followers.total} likes
            </span>
            <span className="text-[inherit] box-border font-normal text-sm">
              {data.tracks.total} songs, about 11 hr
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistTitle;
