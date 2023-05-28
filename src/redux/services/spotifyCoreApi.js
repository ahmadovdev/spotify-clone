import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const spotifyCoreApi = createApi({
  reducerPath: "spotifyCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        "Bearer BQCP7jUkxQFwgzx0-34AcKLVVYdr3Gs5Sjtx53FG4Jbx0U1i9naV5YQC79JiyZgtug1CkL1FK0_3YXveOu9gK3niQQ20t1JN7HVXsar4p1vsX7OXRg30GZDT5MqErfIaCmKcGTGKHsklgz6ZQPBvhe1lFePClAZ_AO3d4WY9IhysK7gjvq0vYa54dNfErAHp1u0rMp7ICREbj8jryxFh1TLqg53Q9HXFsB8RubOTs9cxo20EKTvclZ7AKYgIfK_lPXJKmDKdU-rFDkDh7S1_Tw"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCurrentPlaylist: builder.query({
      query: () =>
        "browse/featured-playlists?country=UZ&timestamp=2023-05-28T10%3A32%3A00&offset=0&limit=15",
    }),
  }),
});

export const {
  useGetCurrentPlaylistQuery
} = spotifyCoreApi