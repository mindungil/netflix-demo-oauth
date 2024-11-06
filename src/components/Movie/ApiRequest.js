import axios from 'axios';

export function PopularApi (page) {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page='+page+'&sort_by=popularity.desc',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTFkMDZiZGE3ZmQ1YjZiYTY0NjA2MGJkOTlmYjY0OCIsIm5iZiI6MTczMDg1Njg2MC4wNDE3NzI4LCJzdWIiOiI2NzI2MDM2ODM2OTVjNzZkNzExODMyMDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6DEWyIlwL4lMkob3BsLAb0W45nUdBfo35KELbX8aOn0'
    }
  };
  
  axios
    .request(options)
    .then(res => result = (res.data))
    .catch(err => console.error(err));

    return result;
}
