import axios from "axios";

const API_URL = "https://api.chucknorris.io/jokes/random";

export const getChatResponseMessage = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(API_URL)
      .then((res) => resolve(res))
      .catch((e) => reject(e));
  });
};
