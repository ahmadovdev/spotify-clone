import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotifyCoreApi = createApi({
  reducerPath: "spotifyCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        "Bearer BQCAwRpgQ3A-8arnoLyAULm5CmacPoXJBM9e_Iph1tvnzbUV3M3Y-5G3IYh2dhMPQ3wd8qwbsGfdSRoI0nawe0JO0Hvoe-ud1u7UfzfduY1t-P_dU-XoBLNhg0TsSQTzeA43RMOAOvZhUhojgxxaNuTfH6ux4SOes3EBi_yQeeYf9LSwFsX_uDT65F0UArqrd70dAzZf6WNMKFTgeaN2jLbdouZ4hxlaz0YQSaPz42HtqoJhRXfkyxDQmLlOvTpS4oW9A7MTCcEPMii9TyPbuw"
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
    getSongsBySearch: builder.query({
      query: (searchTerm) =>
        `search?query=${searchTerm}&type=artist&offset=0&limit=20`,
    }),
  }),
});

export const {
  useGetFeaturedPlaylistsQuery,
  useGetPlaylistsItemsQuery,
  useGetSingleTrackQuery,
  useGetSongsBySearchQuery,
} = spotifyCoreApi;
