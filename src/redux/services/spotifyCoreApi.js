import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const spotifyCoreApi = createApi({
  reducerPath: "spotifyCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        "Bearer BQBKUVzGMSOWheGwCWwy2fMV3Va0Rwta_zqRxi5RAGs4q2lu7yrImzb2OxHOpr7_OcoiXqboSKP1B0difEYN9BWYe00W9IIg50GplBhWdBavROVO84AhDQ1S1oFmV_9LiJSVfL2D82MnPGvwqJc6OIa4y5OlcI1S6OZPyAvsOzxCaPcyUtvII98GBxx3jt3wOhMvrFlAEWIW5UWGa6jU2-JxysELGe4sYWxqjX4O1uYyGh6mhaqv5a04Nm2NRFGOBZRjpB9UxoKhBQWNyOsOAA"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFeaturedPlaylists: builder.query({
      query: () =>
        "browse/featured-playlists?country=UZ&timestamp=2023-05-28T10%3A32%3A00&offset=0&limit=15",
    }),
    getPlaylistsItems: builder.query({
      query: (playlistId) => `playlists/${playlistId}`,
    }),
    getSingleTrack: builder.query({
      query: (trackId) => `tracks/${trackId}`,
    }),
  }),
});

export const { useGetFeaturedPlaylistsQuery, useGetPlaylistsItemsQuery, useGetSingleTrackQuery } = spotifyCoreApi;