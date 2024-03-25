# API 연습

## 목적

API를 직접 제작을 해보고 REST API에 맟줘 통신을 해보는 것을 목표로 개발을 진행했습니다.

개인 기여도 : 100%

제작 기간 : 2024.03 ~ 2024.03

### UI
<img src="https://raw.githubusercontent.com/seungwoo505/API-Test/main/mainScreen.png"/>

## 설명

제목과 글을 작성하고 저장을 누르면 통신을 통해 DB에 저장이 되고 로드를 누르면 DB에 저장된 값들이 표시되게됩니다. 그리고 로드 1을 누르면 id값이 1만 표시됩니다.

1 변경을 누르면 작성된 글로 변경되게됩니다. 다만 PATCH는 글만 PUT은 제목만 변경 가능합니다.

## 필수 사항

```
  1. node.js 설치 필수
  2. npm i -g json-server 으로 json server 설치
  3. 파일 public으로 접근하고 json-server --watch db.json 을 통해 api 서버 생성
  4. 터미널을 새로 열어서 react를 실행 시키면됩니다.
```
