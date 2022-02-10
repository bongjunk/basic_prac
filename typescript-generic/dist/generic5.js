"use strict";
class Person {
    constructor(name, age) {
        // 생성자에 들어온 name으로 할당
        this._name = name;
        this._age = age;
    }
}
new Person("Bong", 29);
// new Person<string>(29); // Error!
new Person("Bong", "age"); // number 자리에 문자열이 들어와서 Error!
