"use strict";
function hello3(person) {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}
const p31 = {
    name: 'Bong',
    age: 29,
};
const p32 = {
    name: 'Leo',
    systers: ['Kim', 'Song'],
};
const p33 = {
    name: 'Bongjun',
    father: p31,
    mother: p32,
};
hello3(p33);
