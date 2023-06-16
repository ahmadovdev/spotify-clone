import React from "react";

const PlaylistHeader = () => {
  return (
    <div className="bg-[#121212]">
      <div className="w-full h-auto p-0">
        <div className="flex flex-col items-start px-6 py-6">
          <div className="flex items-center flex-row w-full">
            <div className="mr-8">
              <button className="box-border text-lg font-bold rounded-[500px] text-center cursor-pointer relative bg-[#1ed760] w-[56px] h-[56px]">
                <span className="flex self-center absolute top-[14px] left-[14px]">
                  <svg
                    role="img"
                    height="28"
                    width="28"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-encore-id="icon"
                    className="Svg-sc-ytk21e-0 ldgdZj"
                  >
                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                  </svg>
                </span>
              </button>
            </div>
            <button className="mr-6">
              <svg
                role="img"
                height="32"
                width="32"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-encore-id="icon"
                className="svgHeart"
                fill="#c3cbca"
              >
                <path d="M5.21 1.57a6.757 6.757 0 0 1 6.708 1.545.124.124 0 0 0 .165 0 6.741 6.741 0 0 1 5.715-1.78l.004.001a6.802 6.802 0 0 1 5.571 5.376v.003a6.689 6.689 0 0 1-1.49 5.655l-7.954 9.48a2.518 2.518 0 0 1-3.857 0L2.12 12.37A6.683 6.683 0 0 1 .627 6.714 6.757 6.757 0 0 1 5.21 1.57zm3.12 1.803a4.757 4.757 0 0 0-5.74 3.725l-.001.002a4.684 4.684 0 0 0 1.049 3.969l.009.01 7.958 9.485a.518.518 0 0 0 .79 0l7.968-9.495a4.688 4.688 0 0 0 1.049-3.965 4.803 4.803 0 0 0-3.931-3.794 4.74 4.74 0 0 0-4.023 1.256l-.008.008a2.123 2.123 0 0 1-2.9 0l-.007-.007a4.757 4.757 0 0 0-2.214-1.194z"></path>
              </svg>
            </button>
            <button className="flex items-center justify-center ">
              <svg
                role="img"
                height="32"
                width="32"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-encore-id="icon"
                className="Svg-sc-ytk21e-0 ldgdZj"
                fill="#c3cbca"
              >
                <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistHeader;
