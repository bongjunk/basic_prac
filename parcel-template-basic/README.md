# pacel + babel test

[DEMO]()

    parcel와 babel을 이용하여 간단한 글자와 이미지 출력 프로젝트

- 문제 1. npm run dev 서버 가동 시 페이지는 열리나 .babelrc.js, .postcssrc.js 파일에서 문제 발생
    - 해결예정
```js
// @parcel/transformer-babel: Parcel includes transpilation by default. Babel config .babelrc.js includes the following redundant presets: @babel/preset-env. Removing these may improve build performance.

//   /Users/kimbongjun/Workspaces/basic_prac/parcel-template-basic/.babelrc.js:1:1
  > 1 | module.exports = {
  >   | ^
    2 |   presets: ['@babel/preset-env'],
    3 |   plugins: [

  💡 Remove the above presets from .babelrc.js

// @parcel/transformer-babel: @babel/preset-env does not support Parcel's targets, which will likely result in unnecessary transpilation and larger bundle sizes.

  /Users/kimbongjun/Workspaces/basic_prac/parcel-template-basic/.babelrc.js:1:1
  > 1 | module.exports = {
  >   | ^
    2 |   presets: ['@babel/preset-env'],
    3 |   plugins: [

  // 💡 Either remove @babel/preset-env to use Parcel's builtin transpilation, or replace with @parcel/babel-preset-env
```


