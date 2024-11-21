import { successMessage } from "./CustomToast";

export const EMAGE_BASE_URL_1280 = 'https://image.tmdb.org/t/p/w1280/'; //w1280 크기
export const EMAGE_URL_500 = 'https://image.tmdb.org/t/p/w500/'; //w500 크기
export const EMAGE_URL_300 = 'https://image.tmdb.org/t/p/w300/';
export const EMAGE_URL_200 = 'https://image.tmdb.org/t/p/w200/';

export function checkLocalStorage(data) {
    // localStorage에서 데이터 가져오기
    const localDataString = localStorage.getItem('wishlist');

    // JSON 데이터를 파싱하여 배열로 변환, 파싱이 실패하거나 데이터가 없으면 빈 배열로 초기화
    let localData;
    try {
        localData = localDataString ? JSON.parse(localDataString) : [];
    } catch (error) {
        console.error("Parsing error:", error);
        localData = [];
    }

    // localData가 배열인지 확인
    if (!Array.isArray(localData)) {
        localData = [];
    }

    // 이미 동일한 ID의 데이터가 있는지 확인
    const isData = localData.some(item => item.id === data.id);

    if (isData) {
        // 데이터가 이미 있으면 해당 항목을 제외한 새 배열 생성
        const newData = localData.filter(item => item.id !== data.id);
        localStorage.setItem('wishlist', JSON.stringify(newData));
        successMessage('위시리스트에서 삭제되었습니다.');
    } else {
        // 데이터가 없으면 새로운 항목 추가 후 로컬스토리지에 저장
        localData.push(data);
        localStorage.setItem('wishlist', JSON.stringify(localData));
        successMessage('위시리스트에 추가되었습니다.');
    }
}  

export const fetchId = () => {
    try {
    const user = JSON.parse(localStorage.getItem('users')) || {};
    return user.email;
    } catch(err) {
        console.error("로컬 스토리지 fetch 오류: ", err);
        throw err;
    }
}