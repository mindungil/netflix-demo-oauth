import axios from "axios";

export const getUser = async () => {
    const access_token = localStorage.getItem('access_token');
    console.log("getUser token: ", access_token);
    if(!access_token) {
        console.log(`access_token 조회 실패`);
        return;
    }
    try{
        const userData = await axios.get(
            `https://kapi.kakao.com/v2/user/me`, 
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": `Bearer ${access_token}`
                },
            }
        );

        console.log("user Data: ", userData.data);
        return userData.data;
    } catch(err){
        console.error("유저 프로필 조회 중 오류 :", err);
    }
}