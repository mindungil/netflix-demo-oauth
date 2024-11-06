import axios from 'axios';
import { API_ACCESS, API_URL } from '../config';

export default async function PopularApi(page = 1) {
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
    const movies = res.data.results;  // 결과를 할당
    console.log(movies);
    return movies;
  } catch (err) {
    console.error(err);
  }
}
