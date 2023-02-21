import axios from "axios";

const apiUrl = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization:
      "Bearer BQAF7CWbEdQ8t7osfHaiLIUiO23RBQ2Z0EsS9eY7Wze7FPReuxOS6cJ9j3MT-mD9nERwsImHGAHDZeQ_WH4VoF5C3iM5w-veKcHXQO0p5m5c4t3VJ_yzv9-E8Ihc3isDU2EtoUjXTAuSTxK12qfExcf0iUt_pHI_DtffmvW-VVrd8whLHSYKY5932Oh3jhMpeK_xo-iTXit-X6VWv0Fmbnsz22lve0UO7-gSOOROK-nm_x6DhKd52wn5wT6epUh7uZGP1UhfGLQPK932ilpX6WY",
  },
});

export { apiUrl };
