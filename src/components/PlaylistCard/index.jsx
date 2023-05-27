import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const PlaylistCard = ({categoryId, limiter}) => {
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

  let matchedPlayListcard = dataPlaylists.filter(
    (playist) => playist.category_id === categoryId
  ).slice(0, limiter);

  return (
    <>
      {matchedPlayListcard.map((playist, id) => (
        <div
          className="w-full bg-[#171717] rounded-md p-4 overflow-hidden"
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
    </>
  );
};

export default PlaylistCard;

PlaylistCard.propTypes = {
  categoryId: PropTypes.number.isRequired, 
  limiter: PropTypes.number.isRequired
};
