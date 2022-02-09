"use strict";
// never - 보통 일반적으로 return에 사용됨
function error(message) {
    throw new error(message);
}
function fail() {
    return error('failed');
}
function infiniteLoop() {
    while (true) { }
}
// (string + number) - string = number
if (typeof a !== "string") {
    // let b: never = a;
    a;
}
//                             T === {}
// type ObjectIndexable =  Indexable<{}>;
// 잘못된 타입을 넣는 실수를 막는 용도로 사용
const b = '';
