import axios from 'axios';
import { API_ACCESS, API_URL } from '../config';

export async function PopularApi(page) {
  const options = {
    method: 'GET',
    url: `${API_URL}/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=${page}&sort_by=popularity.desc`,
    headers: {
      accept: 'application/json',
      Authorization: API_ACCESS
    }
  };

  try {
    const res = await axios.request(options);
    const movie = res.data.results;  // 결과를 할당
    console.log(movie);
    return movie;
  } catch (err) {
    console.error(err);
    return null;  // 오류 발생 시 null 반환
  }
}
