import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const spotifyCoreApi = createApi({
  reducerPath: "spotifyCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        "Bearer BQAKht-6MyN2V2xaZKJImtDCJAqRgWa3bSjKg78TfMgkfJUtkjCVluMyQ5111EmdAXo6zCKKDCNtNa05q1eFvB_rOyc4IoioRBRv36-Pq-Owgz6tLHhvEIfxCYvdIW152BdBECEZf-JenhoR7nbEUxgKoYJ6YuH64LcK_E94tKOxf-OsZr9wCTcfUrmEps3-oynDgoDqIZjMXnehST2tFZlSLrZC8zgDX-PUwqq_rSGGX3kMRea5ua5QdasKM4GrckrUsTmrx_2COjSzDSABTw"
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