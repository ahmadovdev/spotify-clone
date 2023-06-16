import React from "react";
import { Link } from "react-router-dom";
import { useGetFeaturedPlaylistsQuery } from "../redux/services/spotifyCoreApi";

const FeaturedPlaylist = () => {
  const cardsSectionRef = React.useRef();
  const [columnCount, setColumnCount] = React.useState(5);
  const { data, idLoading, error } = useGetFeaturedPlaylistsQuery();
  console.log(data && data.playlists.items, "das");

  if (idLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;

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
    <section className="flex flex-col gap-4 h-full" ref={cardsSectionRef}>
      <h2 className="text-4xl font-bold text-[#fff]">Featured Playlists</h2>
      <div
        className={`grid gap-6 grid-cols-[repeat(auto-fill,minmax(164px,1fr))] my-4`}
      >
        {data &&
          data.playlists.items.map((playlist, id) => (
            <>
              <Link to={`/playlists/${playlist.id}`}>
                <div
                  className="w-full h-[190px] bg-[#171717] rounded-md overflow-hidden relative"
                  key={id}
                >
                  <span className="box-border p-4 absolute text-slate-50 no-underline text-base font-bold">
                    {playlist.name}
                  </span>
                  <img
                    src={playlist.images[0].url}
                    alt="Pic 1"
                    className="w-[100px] h-[100px] absolute right-0 bottom-0 rotate-[25deg] translate-x-[18%] translate-y-[-2%]"
                  />
                </div>
              </Link>
            </>
          ))}
      </div>
    </section>
  );
};

export default FeaturedPlaylist;
