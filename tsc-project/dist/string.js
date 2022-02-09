"use strict";
// let myName: string = 'Mark';
// myName = 'Anna';
// Template string - ES6
// 행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
// 이 문자열은 backtick(=backqoute) 기호에 둘러쌓여 있습니다.
// 포함된 표현식은 `${exxpr}`와 같은 형태로 사용합니다.
// template string 사용
// let fullName: string = `Bob Bobbington`;
// let age: number = 38;
// let sentence: string = `Hello, my name is ${ fullName }.
// I'll be ${ age + 1} years old next month.`;
// // template string을 사용하지 않을 경우
// let sentence: string = "Hello, my name is" + fullName + ".\n\n" +
//   "i'll be " + (age + 1) + " years old next month.";
let fullName = 'Bongjun Kim';
let age = 29;
let sentence = `Hello, My name is ${fullName}.

I'll be ${age} years old next month.`;
console.log(sentence);
