import axios from "axios";

const Logout = async () => {
    try {
        const local_access_token = localStorage.getItem('access_token');
        if(!local_access_token) {
            console.log("access_token 파싱 실패");
            return;
        }

        const access_token = local_access_token;
        console.log(access_token);
        const req = await axios.post(
        "https://kapi.kakao.com/v1/user/logout",
        {}
        ,
        {
            headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Bearer ${access_token}`
            },
        }
        );
        
        localStorage.setItem("access_token", "");
        localStorage.setItem("refresh_token", "");
        localStorage.setItem("id_token", "");
        localStorage.setItem("logged", JSON.stringify(false));

        console.log("로그아웃 완료 ");
    } catch (error) {
        console.error("로그아웃 중 오류 발생, 로그인 실패", error);
    }
}

export default Logout;