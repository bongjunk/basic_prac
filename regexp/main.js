const str = `
010-1234-5678
bjkim@anidream.co.kr
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
`;

//                                i = 대문자, 소문자 구분하지 않겠다.
// const regexp = new RegExp('the', 'gi');
const regexp = /fox/gi;
console.log(str.match(regexp)); // ['fox']
console.log(regexp.test(str)); // true
console.log(str.replace(regexp, 'AAA')); // fox 부분 AAA
console.log(str); // 바로 위에 replace사용해도 원본은 변경x

// const regexp= /the/g;
// \w = 숫자를 포함한 영어 알파뱃이 2번이상 3번이하 반복되는것 찾기
console.log(str.match(/\w{2,3}/g));

// f로 시작하는 모든 영단어 찾기
console.log(str.match(/\bf\w{1,}\b/g)); // ['frozen', 'fox']

const h = `  the hello  world   !

`; 

// 모든 공백이 제거되고 출력
console.log(h.replace(/\s/g, '')); // thehelloworld!

// 앞쪽 일치
console.log(str.match(/.{1,}(?=@)/g)); // ['bjkim']
// 뒤쪽 일치
console.log(str.match(/(?<=@).{1,}/g)); // ['anidream.co.kr']