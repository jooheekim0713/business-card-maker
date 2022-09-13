# Bussiness Card Maker

개인 명함을 만들 수 있는 어플리케이션입니다.
개인정보를 입력하고, 사진을 업로드할 수 있으며 수정, 삭제가 가능합니다.

## 로그인 화면

![로그인 화면](/public/images/card-maker/login.png)

- 메인 로그인 화면에서 구글 혹은 깃허브를 통해 로그인이 가능합니다.
- 로그인된 아이디 별로 내부에 보여지는 명함 목록이 다르게 보입니다.

## 메인화면

![메인 화면](/public/images/card-maker/main.png)

- 명함을 만들고 수정하고 삭제할 수 있는 화면입니다. 좌측의 최하단의 입력창을 통해 명함을 생성하면 우측의 명함목록에 명함이 추가됩니다.
- 헤더의 우측 상단 logout 버튼으로 로그아웃이 가능합니다.
- 기존에 생성된 명함 목록은 좌측의 card maker 섹션에서 수정하는 즉시 우측 card preview 섹션에 정보가 반영됩니다.
- 각 명함은 이미지를 입력하지 않으면 기본으로 설정된 이미지가 입력되며 이미지가 선택될 시 명함에 삽입된 이미지명이 화면에 노출됩니다.

## 메인화면\_반응형

![메인화면_maker](/public/images/card-maker/main_editor.png)

![메인화면_preview](/public/images/card-maker/main_preview.png)

## 사용한 기술 스택

- Javascript
- React
- PostCSS
- react-router-dom
- firebase
- cloudinary
