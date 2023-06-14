import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotifyCoreApi = createApi({
  reducerPath: "spotifyCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        "Bearer BQB3tglWaFu61fR3Innoh790nxvfmW9u60DNpq_6muDC_j-hJrFw2Y4vgScSEa0Gxy-oA-nPkxSxlLQDRqhetQ21R7X4W7QmmDi4xheXLbDtk2ZKdBenqzGnFrpDM1N7g7RoBpbstTJvzBTWV0Cv1Iyfz9uDr7XtaJdvAvwMwTOnNllBousIuSvok_cz5C3Qkg4Igj0d77sId_hoeWdU0FGwXt2xSKZZoeDLq7jmi-Fc7tK9pl-ORYQDibmENqV4ETPisYjG97NDDss2dPufjw"
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
