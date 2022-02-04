"use strict";
// object - 개체 혹은 객체 , 프리미티브 타입과는 다르게 직접 값을 가지고 있지 않고, 값을 가진곳을 가르키는 그 정보를 담고있는 성질을 가지고있다.
// object literal
const person1 = { name: 'Bongjun', age: 29 };
// person1 is not "object" type.
// person1 is "{name: string, age: number}" type.
// object.create
const person2 = Object.create({ name: 'Bongjun', age: 29 });
// object
// "primitive type이 아닌것"을 나타내고 싶을 때 사용하는 타입
// non-primitive type
// not number, string, boolean, bigint, symbol, null, or undefined.
// 이게 아닌 경우를 할당할 수 있으면 object 사용
// let obj: object = {};
// obj = {name: 'Bongjun'};
// obj = [{name: 'Bongjun'}];
// obj = 29; // Error
// obj = 'bong'; // Error
// obj = true; // Error
// obj = 100n; // Error - bigInt
// obj = Symbol(); // Error
// obj = null; // Error
// obj = undefined; // Error
// declare function create(o: object | null): void;
// create({ prop: 0 });
// create(null);
// create(29); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
// // Object.create
// object.create(0); // Error
