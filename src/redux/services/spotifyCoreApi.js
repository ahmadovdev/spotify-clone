import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const spotifyCoreApi = createApi({
  reducerPath: "spotifyCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        "Bearer BQB6BlOSampnxXn8lDBEbUvH1-0DrpZ-B3xIHT65llEV_8kxNBYJ-KMhBB_-SWG-hL-FQ3cYeMfSH8Phkh55-AXuUH87eoW1sv4R8XZE89dQ9_Xdmqd0Lf4nmfBKQg-bXX9AIWYwgoPUReRq-dCc96pDcVZOd5qWlwr3a-fsZIvceCYfocZ5toqcBRChnh2sQiB-tbEYkYqUYZwbqWaC5OvUsgrK2Qzglj5ezLwSBtC5jwPW4FzqJuM1NO2nTTeEJKFGasw8fdAhlN4flg0nrw"
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
  }),
});

export const { useGetFeaturedPlaylistsQuery, useGetPlaylistsItemsQuery } = spotifyCoreApi;