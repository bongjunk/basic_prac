"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 가장 간단한 형태의 Person 이라는 class 생성
class Person {
}
class Person {
    // 생성자
    constructor(name) {
        // this - 생성된 오브젝트 자신
        this.name = name;
    }
}
// 변수 생성이라 소문자, new Person(); - object
const p1 = new Person("Bong");
console.log(p1); // Person {}, Person { name: 'Bong' }
class Person {
    constructor(age) {
        this.name = "Bong";
        if (age === undefined) {
            this.age = 20;
        }
        else {
            this.age = age; // name: string = "Bong"; === 같은 의미
        }
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
// const p1 = new Person(); // default 생성자가 생성됨
const p1 = new Person(29);
await p1.init();
const p2 = new Person();
console.log(p1); // Person { name: 'Bong', age: 29 }
console.log(p1.age); // 29
// ---------------------------------------------------------------------
// Access Modifiers 접근 제어자
class Person {
    constructor(age) {
        this.name = "Bong";
        if (age === undefined) {
            this.age = 20;
        }
        else {
            this.age = age;
        }
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
const p1 = new Person(29);
console.log(p1);
console.log(p1.age);
constructor(public, name, string, private, age, number);
{ }
const p1 = new Person("Bong", 29);
console.log(p1); // Person { name: 'Bong', age: 29 }
console.log(p1.name);
// ---------------------------------------------------------------------
// Getters & Setters
class Person {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        // 
        // console.log("get");
        return this._name + "Kim";
    }
}
const p1 = new Person("Bong", 29);
console.log(p1.name); // get을 하는 함수를 getter
p1.name = "Bongjun"; // set - 설정해주는 일, set을 하는 함수를 setter
// p1.name = "Bongjun"; // 이 데이터는 읽기만 가능해! 같은 상황을 연출할 수 있음
console.log(p1.name);
// ---------------------------------------------------------------------
// readonly properties
class Person {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = "Bong";
        this.country = "Korean";
    }
    hello() {
        this.country = "USA";
    }
}
const p1 = new Person("Bong", 29);
console.log(p1.name); // get을 하는 함수 getter
p1.name = "Bongjun"; // set을 하는 함수 setter
console.log(p1.name);
// ---------------------------------------------------------------------
// Index Signatures in class
class Students {
    constructor() {
        this.bong = "male";
    }
}
const a = new Students();
a.bong = "male";
a.jade = "male";
console.log(a); // Students { bong: 'male', jade: 'male' }
const b = new Students();
b.chloe = "female";
b.alex = "male";
b.anna = "female";
console.log(b);
// ---------------------------------------------------------------------
// Static Properties & Methods
class Person {
    hello() {
        console.log("안녕하세요", Person.CITY);
    }
    change() {
        Person.CITY = 'LA';
    }
}
Person.CITY = "Seoul";
const p1 = new Person();
p1.hello();
const p2 = new Person();
p2.hello();
p1.change();
p2.hello();
Person.hello();
// ---------------------------------------------------------------------
// Singletons
class ClassName {
    // private new를 직접 호출할 수 없는 상태로 만듬 
    constructor() { }
    static getInstance() {
        // ClassName으로 부터 만든 object가 있으면 그걸 리턴
        // 없으면 만들어서 리턴
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    }
}
ClassName.instance = null;
// 각각 다른 오브젝트 생성
const a = ClassName.getInstance();
const b = ClassName.getInstance();
console.log(a === b); // true
// ---------------------------------------------------------------------
// 상속 (Inheritance)
class Parent {
    // protected - 접근 제어자, public 처럼 외부에서 접근할 수 없지만 상속관계에 있는 관계에서만 접근 가능
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    // public - 외부에서 사용가능
    print() {
        console.log(`이름은 ${this._name}  이고, 나이는 ${this._age} 입니다.`);
        // 이름은 Bong  이고, 나이는 29 입니다.
        // 이름은 Bong jun.  이고, 나이는 1 입니다.
    }
    printName() {
        console.log(this._name, this._age); // Bong jun. 1
    }
}
// const p = new Parent('Bong', 29);
// p.print();
// Parent라는 클래스를 상속받을때 extends라는 키워드를 사용, Parent의 생성자를 그대로 가져옴, 생성자가 있다면 Child에서도 같은 형태로 불러줘야함
class Child extends Parent {
    constructor(age) {
        // 자식의 생성자에서는 무조건 super를 먼저 호출
        super('Bong jun.', age);
        this.gender = "male";
        // constructor 안에서 this.무엇을 호출하려면 무조건 super을 먼저 호출해야함
        this.printName();
    }
}
const c = new Child(1);
c.print();
// ---------------------------------------------------------------------
// Abstract Classes
class AbstractPerson {
    constructor() {
        this._name = "Bong";
    }
}
// abstract가 붙어있는 class는 기능이 완전하지 않기 때문에, new로 무언가를 할 수가 없습니다.
// new AbstractPerson();
class Person extends AbstractPerson {
    setName(name) {
        this._name = name;
    }
}
const p = new Person();
p.setName();
// abstract 키워드가 사용된 class는 new로 생성할 수 없고, 
// abstract 키워드가 사용된 클래스를 상속하면, 
// abstract 키워드가 붙은 함수를 구현해야한다.
