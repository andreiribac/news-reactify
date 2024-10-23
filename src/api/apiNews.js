// import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

// export const getNews = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}latest-news`, {
//       params: {
//         apiKey: API_KEY
//       }
//     })
//     return response.data;
//   } catch (error) {
//     console.log('error: ', error);
//   }
// }

export const getNews = async () => {
  try {
    const response = await fetch(`${BASE_URL}latest-news?apiKey=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('error: ', error);
  }
}