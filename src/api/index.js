import axios from "axios";

const apiUrl = axios.create({
  baseURL: "https://spotify23.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "4346b834damsh5358bea79af2b83p16df63jsnc414c27c9c6b",
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
});

export { apiUrl };
