import React from "react";

const PlaylistTracks = () => {
  return (
    <div> 
      <div className="border-b-[1px] border-[#727272] cursor-pointer">
        <div className="grid grid-cols-[16px,6fr,4fr,3fr,minmax(120px,1fr)] gap-4 mx-[-24px] px-6 text-[#c3cbca]">
          <div className="flex items-center justify-self-end">#</div>
          <div className="flex items-center">
            <div className="flex items-center justify-center ">
              <span className="box-border text-sm font-normal ">Title</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center justify-center ">
              <span className="box-border text-sm font-normal ">Album</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center justify-center ">
              <span className="box-border text-sm font-normal ">
                Data Added
              </span>
            </div>
          </div>
          <div className="flex items-center justify-self-end">
            <div className="flex items-center justify-center mr-8">
              <svg
                role="img"
                height="16"
                width="16"
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-encore-id="icon"
                className="Svg-sc-ytk21e-0 ldgdZj"
                fill="#c3cbca"
              >
                <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="">
          <div>
            <div className="grid grid-cols-[16px,6fr,4fr,3fr,minmax(120px,1fr)] gap-4 h-14">
              <div className="flex items-center">
                <div className="text-[#b3b3b3] inline-block h-4 min-h-[16px] min-w-[16px] w-4 relative">
                  <span className="text-base font-normal box-border absolute top-[-4px]">1</span>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://i.scdn.co/image/ab67616d0000485151d97e0f7c2ab63f2006f451"
                  alt="Music Image"
                  className="mr-4 object-cover w-10 h-10"
                />
                <div className="grid items-center grid-rows-2 pr-2">
                  <a
                    href="#"
                    className="text-[#fff] grid-cols-2 justify-self-start text-sm"
                  >
                    MusicName
                  </a>
                  <span className="text-sm box-border font-normal text-[#a7a7a7]">
                    <a
                      href="#"
                      className="text-[#fff] grid-cols-2 justify-self-start text-sm"
                    >
                      ArtistName
                    </a>
                    ,
                    <a
                      href="#"
                      className="text-[#fff] grid-cols-2 justify-self-start text-sm"
                    >
                      ArtistName
                    </a>
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-self-start">
                <span className="text-sm font-normal box-border">
                  <a href="#" className="text-[#b3b3b3]">
                    MusicName
                  </a>
                </span>
              </div>
              <div className="flex items-center justify-self-start">
                <span className="text-sm font-normal box-border text-[#b3b3b3]">
                  20 hours ago
                </span>
              </div>
              <div className="flex items-center justify-self-end ">
                <div className="text-sm mr-4 font-normal text-[#b3b3b3]">2:30</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistTracks;
