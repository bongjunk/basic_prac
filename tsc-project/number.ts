// number
// Javascript와 같이, TypeScript의 모든 숫자는 부동 소수점 값 입니다.
// TypeScript는 16진수 및 10진수 리터럴 외에도,
// ECMAScript 2015에 도입된 2진수 및 8 진수를 지원합니다.
// Nan
// 1_000_000과 같은 표기 가능

// 10진수 리터럴
let decimal: number = 6;

// 16진수 리터럴
let hex: number = 0xf00d;

// 2진수 리터럴
let binary: 0b1010;

// 8진수 리터럴
let octal: number = 0o744;

let notANumber: number = NaN;

let underScoreNum: number = 1_000_000;
