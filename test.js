// import getType from './js-test/getType';

// console.log(typeof 'hello'); // string
// console.log(typeof 123); // number
// console.log(typeof true); // boolean
// console.log(typeof undefined); // 의도하지 않은 빈 값, undefined
// console.log(typeof null); // 의도한 빈 값, object
// console.log(typeof {}) // object
// console.log(typeof []) // object

// // function getType(data) {
// //   return Object.prototype.toString.call(data).slice(8, -1);
// // }

// console.log(getType(false)); // Boolean
// console.log(getType(null)); // Null
// console.log(getType({})); // Object
// console.log(getType([])); // Array

//      생성자함수
// function User(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// }

// const bongjun = new User('Bongjun', 'Kim');

// console.log(bongjun.getFullName());

console.log(1 + 2); // 3
console.log(5 - 7); // -2
console.log(3 * 4); // 12
console.log(10 / 5); // 2
console.log(10 % 5); // 0

// const a = 1;
// const b = 'AB' === 'AB'
// const c = false;

// console.log(a); // 1
// console.log(b); // true
// console.log(c); // true

let a = { k: 1 };
let b = { k : 1};
console.log(a, b, a === b); // { k: 1 } { k: 1 } false

// 같은 메모리 주소를 바라보고 있기 때문에 값이 같아짐
a.k = 7;
b = a;
console.log(a, b, a === b); // { k: 7 } { k: 7 } true

a.k = 2;
console.log(a, b, a === b); // { k: 2 } { k: 2 } true

let c = b;
console.log(a, b, c, a === c); // { k: 2 } { k: 2 } { k: 2 } true

a.k = 9;
console.log(a, b, c, a === c); // { k: 9 } { k: 9 } { k: 9 } true