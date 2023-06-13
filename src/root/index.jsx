import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchResult from "../components/SearchResult";
import Tracks from "../components/Tracks";
import MainLayout from "../layout";
import { Home } from "../pages/Home";
import { Playlist } from "../pages/Playlist";
import { Search } from "../pages/Search";
import { YourLibrary } from "../pages/YourLibrary";

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route exact path="search" element={<Search />}>
          <Route path=":searchTerm" element={<SearchResult />} />
        </Route>
        <Route path="library" element={<YourLibrary />} />
        <Route path="playlists/:playlistId" element={<Playlist />} />
        <Route path="tracks/:trackId" element={<Tracks />} />
      </Route>
    </Routes>
  );
};
