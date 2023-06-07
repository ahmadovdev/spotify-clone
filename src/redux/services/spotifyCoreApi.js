import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const spotifyCoreApi = createApi({
  reducerPath: "spotifyCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        "Bearer BQCCNF92dOgGWClgWYZ1MjWxew8rnAAxSQQMPz8XVcx0qqipetNo5Udkt8FOwylf9FOqVXj13sVcgFaMsIA-8bGdY3dX0yHj3TC2QIEFD5DX49SmlT1XgTTk1_IlbqKTHYHH26n2RUjh-qvqDCpYobAambswz3HNNEZOvTzr-k_cwlMI_ZGptRkyg06_EWNml2eQUVExr4HaLSEdDmUMyFdmFj9BwuKh65MBepIh4ZVj7KrkSkemQtzsunJHGrVFC67i08zdZvgiHwnvKb2N4Q"
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