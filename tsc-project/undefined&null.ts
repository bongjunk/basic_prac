// Undefined & Null
// TypeScript에서, undefined와 null은 실제로 각각 undefined 및 null 이라는 타입을 가진다.
// void와 마찬가지로, 그 자체로는 그다지 유용하지 않다.
// 둘 다 소문자만 존재

// 이 변수들에 할당할 수 있는 것들은 거의없다.
// let u: undefined = undefined;
// let n: null = null;

// null
let myName: number = undefined;

let u: undefined = null;

let v: void = undefined;

// union type: 합집합 같은 의미, string뿐만 아니라 null도 함께 가지고 잇음 
let union: string | null = null;

union = "Bongjun";

// null in JavaScript - 자바스크립트 안에서의 null
// null 이라는 값으로 할당된 것을 null이라고 합니다.
// 무언가가 있는데, 사용할 준비가 덜 된 상태
// null이라는 타입은 null이라는 값만 가질 수 있습니다.
// 런타임에서 typeof 연산자를 이용해서 알아내면, object 입니다.

// let n: null = null;

// console.log(n); // null
// console.log(typeof n); // object

// undefined in JavaScript
// 값을 할당하지 않은 변수는 undefined라는 값을 가집니다.
// 무언가에 아예 준비가 안된상태
// object의 property가 없을때도 undefined입니다.
// 런타임에서 typeof 연산자를 이용해서 알아내면, undefined 입니다.

// let u: undefined = undefined;

// console.log(u); // undefined
// console.log(typeof u); // undefined