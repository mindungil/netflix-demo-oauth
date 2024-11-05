import axios from 'axios';

export default function Movieya() {
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTFkMDZiZGE3ZmQ1YjZiYTY0NjA2MGJkOTlmYjY0OCIsIm5iZiI6MTczMDc4ODE0MS42NzQ4MzQ3LCJzdWIiOiI2NzI2MDM2ODM2OTVjNzZkNzExODMyMDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7r-8E-670nAF_-5yylDrE8D9nudwAq5Qs6w6bpTKjno'
        }
      };
      
      axios
        .request(options)
        .then(res => console.log(res.data))
        .catch(err => console.error(err));
}
