# Contacts

|                            김규민                            |                            김소령                            |                            김연이                            |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/55784772/124715910-74793900-df3e-11eb-9745-2601765cd046.png" alt="profile" width="100" height="100"> | <img src="https://user-images.githubusercontent.com/55784772/124715910-74793900-df3e-11eb-9745-2601765cd046.png" alt="profile" width="100" height="100"> | <img src="https://user-images.githubusercontent.com/55784772/124715910-74793900-df3e-11eb-9745-2601765cd046.png" alt="profile" width="100" height="100"> |
|       [q-bit-junior](https://github.com/q-bit-junior)        |          [soryeongk](https://github.com/soryeongk)           |          [younyikim](https://github.com/younyikim)           |
|                      안녕 나는 규민이얌                      |                       안녕 나는 령이얌                       |                       안녕 나는 연이얌                       |



# License

Distributed under the MIT License. See `LICENSE` for more information.



# Getting Started

0. installation

```
npm install --global yarn
```
1. clone

```
git clone https://github.com/we-sopt-sibi/client.git
```

2. yarn add -D package

```
yarn add -D eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks lint-staged husky
```

3. yarn add package

```
yarn add axios react-router-dom styled-components styled-reset
```

4. check lint before commit

```
yarn lint
```



# Dependencies

```
"@testing-library/jest-dom": "^5.11.4",
"@testing-library/react": "^11.1.0",
"@testing-library/user-event": "^12.1.10",
"axios": "^0.24.0",
"husky": "^7.0.4",
"lint-staged": "^11.2.6",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-router-dom": "^6.0.2",
"react-scripts": "4.0.3",
"styled-components": "^5.3.3",
"web-vitals": "^1.0.1"
```



# Folder Structure

```
📦.git
 ┗ ...
📦.husky
 ┗ 📜pre-commit
📦.vscode
 ┗ 📜settings.json
📦public
 ┗ 📜index.html
📦src
 ┣ 📂assets
 ┃ ┣ 📂images
 ┃ ┗ 📂icons
 ┃ ┃ ┗ 📜index.js
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┗ 📜Footer.jsx
 ┃ ┗ 📂main
 ┃ ┣ 📜index.js
 ┃ ┗ 📜Router.jsx
 ┣ 📂libs
 ┣ 📂pages
 ┃ ┣ 📜index.js
 ┃ ┣ 📜Main.jsx
 ┃ ┣ 📜NotFound.jsx
 ┃ ┗ 📜Page1.jsx
 ┣ 📂styles
 ┃ ┣ 📂fonts
 ┃ ┣ 📜global-style.js
 ┃ ┗ 📜theme.jsx
 ┣ 📜App.js
 ┗ 📜index.js
📜.eslintrc.js
📜.gitignore
📜.prettierrc
📜LICENSE
📜package.json
📜README.md
📜yarn.lock
```



## Commit Convention

|       commit type       |                          situation                           |
| :---------------------: | :----------------------------------------------------------: |
|          init           |                        작업 세팅 커밋                        |
|          feat           |                   새로운 기능에 대한 커밋                    |
|           fix           |                    버그 수정에 대한 커밋                     |
|           css           | 기능에 영향을 주지 않는 커밋, 코드 순서 등의 포맷에 관한 커밋 |
|          lint           |                        코드 lint 수정                        |
|           doc           |   그 외 자잘한 수정에 대한 커밋, 문서인 경우 doc으로 작성    |
|          clean          |                      폴더 및 파일 정리                       |
|        refactor         |                  코드 리팩토링에 대한 커밋                   |
| Bad code / need improv. |                      개선이 필요한 코드                      |
|   code review approve   |                        코드 리뷰 수용                        |
|          build          |               빌드 관련 파일 수정에 대한 커밋                |

|       commit type       |             Emoji              |                          situation                           |
| :---------------------: | :----------------------------: | :----------------------------------------------------------: |
|          init           | :construction:`:construction:` |                        작업 세팅 커밋                        |
|          feat           |         :tada:`:tada:`         |                   새로운 기능에 대한 커밋                    |
|           fix           |          :bug:`:bug:`          |                    버그 수정에 대한 커밋                     |
|           css           |    :nail_care:`:nail_care:`    | 기능에 영향을 주지 않는 커밋, 코드 순서 등의 포맷에 관한 커밋 |
|          lint           |       :shirt: `:shirt:`        |                        코드 lint 수정                        |
|           doc           |         :memo:`:memo:`         |   그 외 자잘한 수정에 대한 커밋, 문서인 경우 doc으로 작성    |
|          clean          |        :truck:`:truck:`        |                      폴더 및 파일 정리                       |
|        refactor         |       :hammer:`:hammer:`       |                  코드 리팩토링에 대한 커밋                   |
| Bad code / need improv. |       :hankey:`:hankey:`       |                      개선이 필요한 코드                      |
|   code review approve   |      :ok_hand:`:ok_hand:`​      |                        코드 리뷰 수용                        |
|          build          |        :house:`:house:`        |               빌드 관련 파일 수정에 대한 커밋                |
