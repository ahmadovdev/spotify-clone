import axios from "axios";

const apiUrl = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization:
      "Bearer BQBlYyG-yh7Gquz-4Yg1O4t_2FXiJIt37dRuLWnd1QRy0MIYMjOXfSPLHxSps8jZ3OWu7yKIkNEKUdgUY5_7XQfJayRvTdOHFjbLaVXe6lfJPYyFJOFbnTKMO4h9PJaI5QhIsm9zki4s7U2iLRc4nSPS-5Sq7hih1H-ibAISK58_-0fSpQR8eL8DiTdcoNMru7iFBOFi3m8hKf9gDtSB5gBSPm6Rtm4gAHxGnf2pO07Mkqo8rRhxTjCHqIQAn66q5yz89-PLpYCGsquYo7RnPrM",
    Host: "api.spotify.com",
  },
});

export { apiUrl };
