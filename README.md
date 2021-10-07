<h1 align='middle'><a href=''>나만의 일기장 만들기</a></h1>
<p align='middle'>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/UlongChaS2/diaryProject?color=blue">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/UlongChaS2/diaryProject?color=orange&logo=Github"">
</p>

<br/>

## 프로젝트 소개 🐮🐶

> 기본적인 CRUD와 API를 firebase로 만들어 통신하여 나만의 일기장 웹사이트 만들기

<br/>

## 구현 목록 📋

### 필수구현 목록 📋🏃‍♀️

`전체`

- Redux와 Redux-saga를 이용한 상태관리
- TypeScript를 이용한 타입관리
- 리액트 최적화를 위한 알맞는 Hooks 사용과 모듈화

`메인 페이지`

- firebase에서 만든 Data를 받아 화면단에 보여주기
- 삭제기능: 단일, 다중, 전체선택이 가능하고 모달이 나와 경고창으로 삭제결정
- 필터기능: 날짜, 날씨, 기분으로 다중 필터링

`포스팅 페이지`

- 기본적으로 제목, 본문, 날짜, 날씨, 기분의 내용이 필수적으로 기입
- 사진은 한장으로 제한되어 포스팅

`상세 페이지`

- 포스팅했을 때 썼던 내용 화면단에 보여주기
- 포스팅을 수정할 수 있느 버튼 만들기

- 상세 페이지에서 수정할 수도 포스팅 페이지로 이동하여 수정할지 정해야함

### 추가구현 목록 📋🚶‍♀️

`1단계`

- 로그인 기능
- 비공개, 공개로 나눈 권한기능

`2단계`

- 일기를 포스팅할 때 주소에 대한 정보를 얻을시 정해진 기간동안의 바운더리 계산
- 누구와 같이 같는지에 대한 테이블 만들어 관리

<br/>

## 실행 방법 💻

### 설치

`npm install`

### 실행

`npm start`
