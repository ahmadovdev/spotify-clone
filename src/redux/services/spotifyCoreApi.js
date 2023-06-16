import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotifyCoreApi = createApi({
  reducerPath: "spotifyCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        "Bearer BQA8bMj9oexlBgv0jGjjLDtwP55Ysj2aF1pj-djeSoCu4s9UWZvww3EWp-5fcpdDXOqSCTkl_i4ispE7VGeGoiHOv99PBrzsS0mgno7ecgbBtqq6gBq-J6NzT5GYtAPoQYHC-NOMYkM4fRCRllnhi4LkpMsOSWDuvCUG5_-_k69dPLJW7hwPKsxnYd0X6CrovgJqu2WiN3kXfuIQ8ckrc3QIPKypBgNIIH5ikeF59TEItGf0_JRGDTKEeF7qL286KjpmyopTgtnFnqDPtoQKPg"
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
