import { json } from "react-router-dom";

export const USER_SERVER = '/api/users';

export const API_URL = 'https://api.themoviedb.org/3';
export const API_KEY = '611d06bda7fd5b6ba646060bd99fb648';
export const EMAGE_BASE_URL_1280 = 'https://image.tmdb.org/t/p/w1280/'; //w1280 크기
export const EMAGE_URL_500 = 'https://image.tmdb.org/t/p/w500/'; //w500 크기
export const EMAGE_URL_300 = 'https://image.tmdb.org/t/p/w300/';
export const EMAGE_URL_200 = 'https://image.tmdb.org/t/p/w200/';
export const API_ACCESS = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTFkMDZiZGE3ZmQ1YjZiYTY0NjA2MGJkOTlmYjY0OCIsIm5iZiI6MTczMDg1Njg2MC4wNDE3NzI4LCJzdWIiOiI2NzI2MDM2ODM2OTVjNzZkNzExODMyMDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6DEWyIlwL4lMkob3BsLAb0W45nUdBfo35KELbX8aOn0';

export const SVtoLS = ({data}) => {
    const localData = JSON.parse(localStorage.getItem('wishlist')) || [];
    localData.push(data);
    localStorage.setItem(JSON.stringify(localData));
} //localStorage로 데이터 저장

export const LStoSV = () => {

} //localStorage에서 데이터 가져오기