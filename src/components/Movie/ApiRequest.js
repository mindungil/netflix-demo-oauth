import axios from 'axios';
import { API_ACCESS, API_URL } from '../config';

export const fetchMovies = async () => {
  try {
    const res = await axios.get(`${API_URL}/movie/popular`, {
      params: {
        // include_adult: false,
        // include_video: false,
        language: 'ko-KR',
        page: 1,
        // sort_by: 'popularity.desc'
      },
      headers: {
        accept: 'application/json',
        Authorization: API_ACCESS
      }
    });
    return res.data.results; // 영화 데이터 배열 반환
  } catch (err) {
    console.error("API 요청 오류:", err);
    throw err; // 오류를 발생시켜 호출한 쪽에서 처리하도록 합니다
  }
};
