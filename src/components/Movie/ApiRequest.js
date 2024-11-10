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

export const fetchGenres = async () => {
  try {
    const res = await axios.get(`${API_URL}/genre/movie/list`, {
      params: {
        language: 'ko-KR',
      },
      headers: {
        accept: 'application/json',
        Authorization: API_ACCESS,
      }
    });
    return res.data.genres;
  } catch (err) {
    console.error("API 요청 오류:", err);
    throw err;
  }
};

export const searchMovies = async (name, page = 1) => {
  try {
    const res = await axios.get(`${API_URL}/search/movie`, {
      params: {
        query: name,
        include_adult: false,
        language: 'ko-KR',
        page, // 페이지 파라미터 추가
      },
      headers: {
        accept: 'application/json',
        Authorization: API_ACCESS,
      }
    });
    return res.data.results;
  } catch (err) {
    console.error('API 요청 오류: ', err);
    throw err;
  }
};

