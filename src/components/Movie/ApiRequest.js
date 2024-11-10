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

export const searchMovies = async (name, genre, rating, sortOption) => {
  try {
    const res = await axios.get(`${API_URL}/search/movie`, {
      params: {
        query: name,
        include_adult: false,
        language: 'ko-KR',
        page: 1,
        with_genres: genre || undefined, // genre가 있을 때만 with_genres를 추가
        'vote_average.gte': rating || undefined, // rating이 있을 때만 vote_average.gte 추가
        sort_by: sortOption || 'popularity.desc' // sortOption이 없으면 기본값 설정
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
