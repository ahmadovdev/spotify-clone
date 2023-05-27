import React from "react";
import { UilPlay } from "@iconscout/react-unicons";

const SearchResult = () => {
  return (
    <section className="h-screen ">
      <div className="grid grid-cols-[auto,1fr] ">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#fff]">Top Results</h2>
          <div className="h-64 w-96 pr-8">
            <div className="cursor-pointer relative group h-64 w-full bg-neutral-800 hover:bg-neutral-700 p-4 flex flex-col gap-6 rounded-md transition duration-500 ">
              <div className="absolute opacity-0 transition-all ease-in-out duration-500 shadow-2xl shadow-neutral-900 z-10 h-12 w-12 flex items-center justify-center rounded-full bg-green-500 bottom-6 right-8 group-hover:opacity-100 group-hover:bottom-8">
                <UilPlay className="h-6 w-6 text-black" />
              </div>
              {
                <>
                  <img
                    className="h-28 w-28 rounded"
                    src="	https://i.scdn.co/image/ab67616d00001e025e30bda19dabe31278991719"
                  />
                  <p className="text-3xl font-bold text-[#fff] ">Music name</p>
                  <p className="text-sm text-[#fff]">
                    By Artist Name{" "}
                    <span className="rounded-full bg-neutral-900 text-[#fff] font-bold ml-4 py-1 px-4">
                      Playlist
                    </span>
                  </p>
                </>
              }
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#fff]">Songs</h2>
          <div className="w-full h-64">
            <div className="flex flex-col">
              <div className="cursor-pointer h-16 w-full px-4 rounded-md flex items-center gap-4 hover:bg-neutral-700">
                <img
                  className="h-10 w-10"
                  src="https://i.scdn.co/image/ab67616d00001e025e30bda19dabe31278991719"
                />
                <div>
                  <p className="text-[#fff]">song name</p>
                  <p className="text-sm text-neutral-400">Artist name</p>
                </div>
                <div className="flex-grow flex items-center justify-end">
                  <p className="text-sm text-neutral-400">
                    4:20
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
