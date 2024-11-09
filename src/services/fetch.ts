import { API_KEY } from './const';
export const getPosts = async () => {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`
    );
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    return error;
  }
};
