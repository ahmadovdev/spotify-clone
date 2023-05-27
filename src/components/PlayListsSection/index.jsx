import React from "react";
import PlaylistCard from "../PlaylistCard";

const PlayListsSection = () => {
  const cardsSectionRef = React.useRef();
  const [columnCount, setColumnCount] = React.useState(5);


  const dataCategories = [
    {
      id: 1,
      name: "Focus",
      tagline: "Music to help you concentrate",
    },
    {
      id: 2,
      name: "Mood",
      tagline: "Playlists to match your mood",
    },
    {
      id: 3,
      name: "Soundtrack your home",
      tagline: "",
    },
    {
      id: 4,
      name: "Kick back this Sunday...",
    },
  ];

  React.useEffect(() => {
    // resizer function
    const handleResize = () => {
      const columnCalculation = Math.floor(
        cardsSectionRef.current.getBoundingClientRect().width / 195
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
        {dataCategories.map((category, id) => (
          <section key={id}>
            <div>
              <h2 className="text-[2rem] font-bold box-border text-[#fff]">{category.name}</h2>
            </div>
            <div
              className={`grid gap-6 grid-cols-[repeat(auto-fill,minmax(164px,1fr))] my-4`}
            >
              <PlaylistCard categoryId={category.id} limiter={columnCount} />
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default PlayListsSection;
