"use strict";
let x;
x = ["hello", 29]; // 순서도 맞아야하고 타입도 맞아야하고 길이도 맞아야한다.
// x = [29, "bongjun"]; // Error
// x[3] = "world";
// array는 항상 공통 요소일수밖에 없는 모임 ,길이가 정해져있고 앞뒤에 타입이 정확하고 다를수있는 자료형
const person = ["Bongjun", 29];
const [first, second, third] = person;
