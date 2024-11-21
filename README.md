# **Netflix-Demo**

TMDB API를 활용하여 제작한 Netflix 클론 웹 애플리케이션입니다.  
대세 콘텐츠, 검색 기능, 찜 목록(Wishlist) 등을 제공하며, 사용자 친화적인 인터페이스로 영화 데이터를 탐색하고 관리할 수 있습니다.  
이 프로젝트는 학습 목적으로 제작되었으며, React를 사용한 SPA 구현 및 API 통합, 상태 관리 기술을 연습하는 데 초점을 맞추고 있습니다.

---

## **프로젝트 특징 및 기능**
- **TMDB API 연동**:  
  다양한 영화 정보를 TMDB API를 통해 불러오고, 사용자에게 제공.  

- **주요 기능**:  
  - **대세 콘텐츠**: 인기 있는 영화들을 한눈에 확인.  
  - **검색**: 영화 제목을 기준으로 빠르게 검색 가능.  
  - **찜 목록 관리(Wishlist)**: 관심 있는 영화들을 저장하고 관리.  
  - **무한 스크롤**: 영화 데이터를 끊김 없이 로드.  
  - **필터 및 정렬**: 장르, 평점, 인기도, 출시 연도를 기준으로 영화 목록 필터링 및 정렬.  

- **반응형 디자인**:  
  다양한 디바이스에서 최적화된 UI 제공.  

- **SPA 기반 네비게이션**:  
  페이지 새로고침 없이 부드럽게 이동.  

---

## **기술 스택**
[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1732161549461?alt=media&token=1c7c18ff-0387-4ebd-88ca-0e9ad4681add)](https://github.com/msdio/stackticon)
### **프론트엔드**
- **React**  
  - SPA 구현을 위한 핵심 라이브러리.  
  - 동적 UI와 컴포넌트 기반 구조 제공.  
- **Axios**  
  - API 요청/응답 관리.  
  - JSON 데이터를 자동으로 변환하여 효율적인 데이터 통신 가능.  
- **Redux**  
  - 상태 관리 라이브러리로, 컴포넌트 간 상태 공유 및 중앙 집중식 상태 관리.  
- **Tailwind CSS**  
  - 유틸리티 기반 CSS 프레임워크를 사용하여 빠르고 일관된 스타일링.  

### **백엔드 및 API**
- **TMDB API**  
  - 영화 데이터 제공.  
  - API 키를 통해 인증 및 다양한 데이터 필터링 옵션 활용.  

### **배포 및 기타 도구**
- **npm**  
  - 패키지 설치 및 의존성 관리.  
  - 커뮤니티 지원이 많고, 편리한 명령어 제공.  
- **GitHub Actions**  
  - CI/CD 파이프라인을 통해 자동 빌드 및 배포.  
- **GitHub Pages**  
  - 정적 사이트 호스팅.  

---

## **설치 및 실행 가이드**

1. **프로젝트 클론**
   git clone https://github.com/your-username/netflix-demo.git  
   cd netflix-demo

2. **필수 패키지 설치**
   npm install

3. **환경 변수 설정**
   - 프로젝트 루트 디렉토리에 `.env` 파일 생성.
   - 다음과 같은 환경 변수를 추가:
     REACT_APP_TMDB_API_KEY=your_tmdb_api_key

4. **개발 서버 실행**
   npm start  
   기본적으로 [http://localhost:3000](http://localhost:3000)에서 애플리케이션이 실행됩니다.

5. **빌드 및 배포**
   npm run build  
   정적 파일이 `build/` 디렉토리에 생성되며, 이를 GitHub Pages 등에 업로드하여 배포 가능.

## **폴더 구조**
    📦src
    ┣ 📂components
    ┃ ┣ 📂Auth
    ┃ ┃ ┣ 📜Auth.css
    ┃ ┃ ┣ 📜HandleAuth.css
    ┃ ┃ ┣ 📜HandleAuth.js
    ┃ ┃ ┣ 📜Register.js
    ┃ ┃ ┗ 📜Signin.js
    ┃ ┣ 📂Header
    ┃ ┃ ┣ 📜Header.js
    ┃ ┃ ┣ 📜Nav.css
    ┃ ┃ ┗ 📜Nav.js
    ┃ ┣ 📂Movie
    ┃ ┃ ┣ 📜ApiRequest.js
    ┃ ┃ ┣ 📜MovieItem.js
    ┃ ┃ ┣ 📜MovieList.css
    ┃ ┃ ┣ 📜MovieList.js
    ┃ ┃ ┣ 📜ScrollView.js
    ┃ ┃ ┗ 📜TableView.js
    ┃ ┗ 📂Pages
    ┃ ┃ ┣ 📜Home.css
    ┃ ┃ ┣ 📜Home.js
    ┃ ┃ ┣ 📜Popular.css
    ┃ ┃ ┣ 📜Popular.js
    ┃ ┃ ┣ 📜Profile.css
    ┃ ┃ ┣ 📜Profile.js
    ┃ ┃ ┣ 📜Search.css
    ┃ ┃ ┣ 📜Search.js
    ┃ ┃ ┣ 📜Wishlist.css
    ┃ ┃ ┗ 📜Wishlist.js
    ┣ 📂CustomHook
    ┃ ┗ 📜usePage.js
    ┣ 📂reducer
    ┃ ┣ 📜boolean.js
    ┃ ┣ 📜counter.js
    ┃ ┣ 📜index.js
    ┃ ┗ 📜store.js
    ┣ 📂Util
    ┃ ┣ 📜config.js
    ┃ ┗ 📜CustomToast.js
    ┣ 📜App.css
    ┣ 📜App.js
    ┣ 📜AppRouter.js
    ┣ 📜index.css
    ┣ 📜index.js
    ┣ 📜reportWebVitals.js
    ┗ 📜setupTests.js

---

## **프로젝트 스크린샷**
1. **대시보드**  
   ![과제2메인](https://github.com/user-attachments/assets/1c686bad-1a6f-4d8e-8a67-6f742536b39b)
  -> 밑에 영화 정보 생략됨 ( 스크롤 다운 시 보임 )

2. **검색 페이지**  
   ![과제2검색](https://github.com/user-attachments/assets/8e3c1dd9-922f-41d2-81c4-29604e5b9f91)
 

---

## **개발 가이드**

**커밋 가이드**
- *Feat*: 새로운 기능 추가
- *Fix*: 버그 수정
- *Style*: 코드 포맷팅
- *Refactior*: 코드 리펙토링
- *Docs*: 문서 수정
- *Chore*: 빌드, 패키지 작업 등

**git flow 전략 사용**
 - *main*: 최종 브런치
 - *develop*: 개발 브런치
 - *feature*: 기능 단위 개발 브런치

 **기여 가이드라인**
이 프로젝트에 기여하고 싶으신가요? 환영합니다! 아래 단계를 따라주세요:  
1. 프로젝트를 Fork하고 로컬에 클론하세요.  
2. 새로운 브랜치를 생성하세요:  
   git checkout -b feature/your-feature-name
3. 변경 사항을 커밋하세요.  
4. 원격 저장소에 푸시하세요:  
   git push origin feature/your-feature-name
5. PR(Pull Request)을 생성하세요. ( PR template 형식 자동 지정 )

 **PR 템플릿**
 - 미리 구현해 놓은 PR 템플릿 자동 지정

---

## **라이선스**
이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 [LICENSE 파일](./LICENSE)을 참고하세요.  

---

## **문의**
- **개발자**: [길민준](alswnsrlf12@naver.com)  
- **GitHub**: [https://github.com/mindungil](https://github.com/mindungil)  
- **TMDB API**: [https://www.themoviedb.org/](https://www.themoviedb.org/)
