import React from "react";
import PlaylistCard from "../PlaylistCard";

const PlayListsSection = ({data}) => {
  const cardsSectionRef = React.useRef();
  const [columnCount, setColumnCount] = React.useState(5);
  
  
  React.useEffect(() => {
    // resizer function
    const handleResize = () => {
      const columnCalculation = Math.floor(
        cardsSectionRef.current.getBoundingClientRect().width / 190
      );
      setColumnCount(columnCalculation);
    };

    // assign event listener
    window.addEventListener("resize", handleResize);

    // remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="max-w-full" ref={cardsSectionRef}>
      <div>
        <section>
          <div>
            <h2 className="text-[2rem] font-bold box-border text-[#fff]">
              {data.message}
            </h2>
          </div>
          <div
            className={`grid gap-6 grid-cols-[repeat(auto-fill,minmax(164px,1fr))] my-4`}
          >
            <PlaylistCard playlists={data.playlists} limiter={columnCount} />
          </div>
        </section>
      </div>
    </section>
  );
};

export default PlayListsSection;
