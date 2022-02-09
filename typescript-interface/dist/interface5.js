"use strict";
// oop에서 많이 사용
// interface를 class로 사용, IPerson1 내용을 바탕으로 Person이라는 클래스를 만들어냄
class Person {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }
}
const person = new Person('Bong');
person.hello();
