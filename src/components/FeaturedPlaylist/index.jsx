import React from "react";

const FeaturedPlaylist = () => {
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
     {
       id: 103,
       category_id: 3,
       name: "Home playlist 6",
       img: "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
       desc: "Lorem ipsum",
     },
     {
       id: 103,
       category_id: 3,
       name: "Home playlist 7",
       img: "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
       desc: "Lorem ipsum",
     },
     {
       id: 103,
       category_id: 3,
       name: "Home playlist 8",
       img: "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
       desc: "Lorem ipsum",
     },
     {
       id: 103,
       category_id: 3,
       name: "Home playlist 9",
       img: "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
       desc: "Lorem ipsum",
     },
     {
       id: 103,
       category_id: 3,
       name: "Home playlist 10",
       img: "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
       desc: "Lorem ipsum",
     },
     {
       id: 103,
       category_id: 3,
       name: "Home playlist 11",
       img: "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
       desc: "Lorem ipsum",
     },
     {
       id: 103,
       category_id: 3,
       name: "Home playlist 12",
       img: "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
       desc: "Lorem ipsum",
     },
     {
       id: 103,
       category_id: 3,
       name: "Home playlist 13",
       img: "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
       desc: "Lorem ipsum",
     },
     {
       id: 104,
       category_id: 1,
       name: "Focus playlist 1",
       img: "https://images.unsplash.com/photo-1587165282385-fe9bbf5eb1a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
       desc: "Lorem ipsum",
     },
     {
       id: 105,
       category_id: 4,
       name: "Sunday playist",
       img: "https://images.unsplash.com/photo-1587143602695-c980e283be9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2702&q=80",
       desc: "Lorem ipsum",
     },
     {
       id: 106,
       category_id: 2,
       name: "Mood playist 1 ",
       img: "https://images.unsplash.com/photo-1587220111918-7a5c0f0c46f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
       desc: "Lorem ipsum",
     },
     {
       id: 107,
       category_id: 2,
       name: "Mood playist 2",
       img: "https://images.unsplash.com/photo-1587169544748-d21bd810f57e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
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
    <section className="flex flex-col gap-4" ref={cardsSectionRef}>
      <h2 className="text-4xl font-bold text-[#fff]">Featured Playlists</h2>
      <div
        className={`grid gap-6 grid-cols-[repeat(auto-fill,minmax(164px,1fr))] my-4`}
      >
        {dataPlaylists.map((playist, id) => (
            <div
              className="w-full h-[190px] bg-[#171717] rounded-md overflow-hidden relative"
              key={id}
            >
              <span className="box-border p-4 absolute text-slate-50 no-underline text-base font-bold">
                {playist.name}
              </span>
              <img
                src={playist.img}
                alt="Pic 1"
                className="w-[100px] h-[100px] absolute right-0 bottom-0 rotate-[25deg] translate-x-[18%] translate-y-[-2%]"
              />
            </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPlaylist;
