import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotifyCoreApi = createApi({
  reducerPath: "spotifyCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        "Bearer BQDQCr_1fnLHF_Ot5e_cMV5pkvfAJwjVJZLRHo68GkyseNSSJWvEP-NpRmuyHKs5A5qAlWKq3SsVJ5NzfJ_rVFYeYTPiH5Ap4XNOYkLGAJd3PRlFiQuwH0p3YdXtTgkOOzsOdnu--FPcIFhsQoV6Wd6YroomMeEIHPXUCXewtaitcilOZytxzRGxPPlotjnk9q3ScvRtnpiNaisx0oRphwWlqu6LlmRFteaBOMZa24FynXutuDPQ41Od5ObllQGcYUy9J_r6gyLtnQOJZF_NfQ"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFeaturedPlaylists: builder.query({
      query: () => "browse/featured-playlists?country=UZ",
    }),
    getPlaylistsItems: builder.query({
      query: (playlistId) => `playlists/${playlistId}`,
    }),
    getSingleTrack: builder.query({
      query: (trackId) => `tracks/${trackId}`,
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) =>
        `search?query=${searchTerm}&type=playlist,artist,album,track&offset=0&limit=20`,
    }),
  }),
});

export const {
  useGetFeaturedPlaylistsQuery,
  useGetPlaylistsItemsQuery,
  useGetSingleTrackQuery,
  useGetSongsBySearchQuery,
} = spotifyCoreApi;
