import axios from 'axios';
import { API_ACCESS, API_URL } from '../config';

export const fetchMovies = async (page = 1) => {
  try {
    const res = await axios.get(`${API_URL}/movie/popular`, {
      params: {
        language: 'ko-KR',
        page,
      },
      headers: {
        accept: 'application/json',
        Authorization: API_ACCESS,
      },
    });
    return res.data.results;
  } catch (err) {
    console.error("API 요청 오류:", err);
    throw err;
  }
};
