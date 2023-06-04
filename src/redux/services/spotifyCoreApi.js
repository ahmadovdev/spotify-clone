import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const spotifyCoreApi = createApi({
  reducerPath: "spotifyCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        "Bearer BQD1qoSVy4gcU51U2S6EhB4SzTuGer3urFn0QCKGyrtS-JA4MPH-Qc0tMerHNn8Ln5Y7ddi8K2qz-rfefhRss0XvdvfQzwMtk2qrWt-WFhrWbelmYzKIlBWWSdz44Rf63RFkJectFCP4hIhpfeRAkntQYsIHKKyHd3y_CgyxzBCn4n6V_auN4pBRbTWQAtz6PPaEU8RlsMFB-ZGydB1G6rQWTxfUqg4toQ7PI1UnQGQSepsM--qcPcPtN2uCiPsXpgOhWODRU3tIIoj8gz9B2Q"
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