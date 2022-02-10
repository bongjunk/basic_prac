"use strict";
const p41 = {
    name: 'Bong',
    age: 29,
    hello: function () {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    },
};
const p42 = {
    name: 'Bong',
    age: 29,
    hello() {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    },
};
// const p43: Person4 = {
//   name: 'Bong',
//   age: 29,
//   hello: (): void => {
//     //                    typeof globalThis
//     console.log(`안녕하세요! ${this.name} 입니다.`);
//   },
// }
p41.hello(); // 안녕하세요! Bong 입니다.
p42.hello(); // 안녕하세요! Bong 입니다.