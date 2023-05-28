import React from "react";
import { UilPlay } from "@iconscout/react-unicons";

export const YourLibrary = () => {
   const cardsSectionRef = React.useRef();
   const [columnCount, setColumnCount] = React.useState(5);

   const dataPlaylists = [
    {
      id: 101,
      category_id: 3,
      name: "Home playlist 1",
      img: "https://images.unsplash.com/photo-1587201572498-2bc131fbf113?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=924&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 3,
      name: "Home playlist 2",
      img: "https://images.unsplash.com/photo-1587151711096-23c51f92c920?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 3,
      name: "Home playlist 3",
      img: "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 3,
      name: "Home playlist 4",
      img: "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      desc: "Lorem ipsum",
    },
    {
      id: 103,
      category_id: 3,
      name: "Home playlist 5",
      img: "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      desc: "Lorem ipsum",
    },
  ];

  React.useEffect(() => {
    // resizer function
    const handleResize = () => {
      const columnCalculation = Math.floor(
        cardsSectionRef.current.getBoundingClientRect().width / 183
      );
      setColumnCount(columnCalculation);
    };

    // assign event listener
    window.addEventListener("resize", handleResize);

    // remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={cardsSectionRef} className="flex flex-col gap-4 h-screen mt-3 px-6">
      <h2 className="text-2xl font-bold text-[#fff]">Playlists</h2>
      <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(164px,1fr))]">
        <div className="relative p-5 text-[#fff] text-base col-span-2 bg-gradient-to-br from-purple-600 to-indigo-500 rounded-lg hover:bg-neutral-700 transition duration-500 group">
          <div className="absolute opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-200 shadow-2xl shadow-neutral-900 z-10 h-12 w-12 flex items-center justify-center rounded-full bg-green-500 top-[190px] right-6">
            <UilPlay className="h-6 w-6 text-black" />
          </div>
          <div className="flex gap-5 flex-col h-full">
            <div className="flex items-end mb-3 flex-1">
              <div className="max-h-[130px] overflow-hidden w-full">
                <span>
                  <span>Kalifarniya</span>
                  <span className="opacity-70">Aspan</span>
                </span>
              </div>
            </div>
            <div className="min-h-[62px]">
              <a href="#">
                <div className="font-bold text-4xl pb-2 text-[#fff]">
                  Liked Songs
                </div>
              </a>
              <div className="text-sm font-normal ">
                <div>3 liked songs</div>
              </div>
            </div>
          </div>
        </div>
        {dataPlaylists.map((playist, id) => (
          <div
            className="bg-[#171717] rounded-md p-4"
            key={id}
          >
            <div className="h-[164px]">
              <img src={playist.img} alt="Pic 1" className="w-full h-full" />
            </div>
            <div className="min-h-[62px] box-border">
              <a
                href="#"
                className="text-slate-50 no-underline text-base font-bold"
              >
                {playist.name}
              </a>
              <div className="text-sm font-normal text-slate-400">
                <span>{playist.desc}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
