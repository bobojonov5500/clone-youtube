import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": "7089bb1c23msh398ab8a78c982acp11f34ejsn7d9da82f4ca1",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const Apiservice = {
  fetching: async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  },
};
