import React from 'react';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import HomePage from '../pages/Home';
import { SearchPage } from '../pages/Search';
import { YourLibraryPage } from "../pages/YourLibrary";
import { CreatePlayListPage } from "../pages/CreatePlayList";
import {LikedSongsPage} from '../pages/LikedSongs';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />} >
          <Route path='home' element={<HomePage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='library' element={<YourLibraryPage />} />
          <Route path='playlist' element={<CreatePlayListPage />} />
          <Route path='liked' element={<LikedSongsPage />} />
        </Route>
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Root;
