import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const spotifyCoreApi = createApi({
  reducerPath: "spotifyCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        "Bearer BQD9ZzYADv0fY061CICbLu2OfGvw4EIGu7pPldkdQB-u-D6roYvHdyHaP_sssaaszgm7CZZ8f5gAQNvBBHkpsGK34Z7uQX5rfs7HoH5dTlAchJz2V7nCX0vdEdgBJOHEeqdiOgVUZlYpu2xIk2CGR_XqQBMI8Abclc5QYwWPg7WI9j2Xy-FIi2WHJE57g7K0i0brLoOiz0--0pZuc0-oKpcgp_d1D0s5HRzPBFLZnlMj3m9oW7oY9Wm3tjLpSrnxEaVvPrZpizOqqqGjNZWFNQ"
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