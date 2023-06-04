import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const spotifyCoreApi = createApi({
  reducerPath: "spotifyCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        "Bearer BQBPAoucy3XONZbgCd4guLsr5F0ukeFz_7z5aSz42QP7c3p9-QiOagO2-GR6jzOaAkAyBwQqr9r3MD2nTtl_WGMhycFMKOWPlnlXhLjgctSqQgPbtYOBIizr7RqqYgubWZ-c8G8D6HkfxkVZVU7sPB143l5A48Tgb2GBO3uuN43Rhyl6w0xQq2-cbMDtnSComFbWDCTueHCU7gP7OYN61SmmFsYZDdMl8j-_bmsZTahihcUhba9sGQjK6OAH9t1AbmOTNWHnQc3TeAti5g-XxQ"
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