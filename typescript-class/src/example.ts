// 가장 간단한 형태의 Person 이라는 class 생성
class Person {}
class Person {
  name;
  // 생성자
  constructor(name: string) {
    // this - 생성된 오브젝트 자신
    this.name = name;
  }
}

// 변수 생성이라 소문자, new Person(); - object
const p1 = new Person("Bong");

console.log(p1); // Person {}, Person { name: 'Bong' }

class Person {
  name: string = "Bong";
  // age: number; // 초기화된 값이 없으니까 에러를 띄우도록 strict모드가 켜져있음
  // age!: number; // 클래스 내부에서 값이 number로 할당되지 않아도 에러를 일으키지 않겠다라고 명시적으로 표현
  age : number;

  constructor(age?: number) {
    if (age === undefined) {
      this.age = 20;
    } else{
      this.age = age; // name: string = "Bong"; === 같은 의미
    }
  }

  async init() {}
}

// const p1 = new Person(); // default 생성자가 생성됨
const p1: Person = new Person(29);
await p1.init();
const p2: Person = new Person();

console.log(p1); // Person { name: 'Bong', age: 29 }
console.log(p1.age); // 29

// ---------------------------------------------------------------------

// Access Modifiers 접근 제어자

class Person {
  public name: string = "Bong";
  private _age!: number;

  public constructor(age?: number) {
    if (age === undefined) {
      this.age = 20;
    } else {
      this.age = age;
    }
  }

  public async init() {

  }
}

const p1: Person = new Person(29);
console.log(p1);
console.log(p1.age);

// ---------------------------------------------------------------------

// initialization in constructor parameters

// class Person {
  // public constructor(public name: string, private age: number) {}
  // this.name, this.age 이렇게 사용 대신 대체 가능
  public constructor(public name: string, private age: number) {}
}

const p1: Person = new Person("Bong",29);
console.log(p1); // Person { name: 'Bong', age: 29 }
console.log(p1.name);

// ---------------------------------------------------------------------

// Getters & Setters

class Person {
  public constructor(private _name: string, private age: number) {}

  get name() {
    // 
    // console.log("get");
    return this._name + "Kim";
  }

  // set name(n: string) {
  //   console.log("set");
  //   this._name = n;
  // }
}

const p1: Person = new Person("Bong", 29);
console.log(p1.name); // get을 하는 함수를 getter
p1.name = "Bongjun"; // set - 설정해주는 일, set을 하는 함수를 setter
// p1.name = "Bongjun"; // 이 데이터는 읽기만 가능해! 같은 상황을 연출할 수 있음
console.log(p1.name);

// ---------------------------------------------------------------------

// readonly properties

class Person {
  public readonly name: string = "Bong";
  private readonly country: string;

  public constructor(private _name: string, private age: number) {
    this.country = "Korean";
  }

  hello() {
    this.country = "USA";
  }
}

const p1: Person = new Person("Bong", 29);
console.log(p1.name); // get을 하는 함수 getter
p1.name = "Bongjun"; // set을 하는 함수 setter
console.log(p1.name);

// ---------------------------------------------------------------------

// Index Signatures in class
class Students {
  // 어떤 프로퍼티 이름인진 모르지만 항상 male이나 female값이 있어야 한다
  [index: string]: "male" | "female";

  bong: "male" = "male";
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
  private static CITY = "Seoul";
  public hello() {
    console.log("안녕하세요", Person.CITY);
  }
  public change() {
    Person.CITY = 'LA';
  }
}

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
  private static instance: ClassName | null = null;
  public static getInstance(): ClassName {
    // ClassName으로 부터 만든 object가 있으면 그걸 리턴
    // 없으면 만들어서 리턴

    if (ClassName.instance === null) {
      ClassName.instance = new ClassName();
    }
    
    return ClassName.instance;
  }

  // private new를 직접 호출할 수 없는 상태로 만듬 
  private constructor() {}
}

// 각각 다른 오브젝트 생성
const a = ClassName.getInstance();
const b = ClassName.getInstance();


console.log(a === b); // true

// ---------------------------------------------------------------------

// 상속 (Inheritance)
class Parent {
  // protected - 접근 제어자, public 처럼 외부에서 접근할 수 없지만 상속관계에 있는 관계에서만 접근 가능
  constructor(protected _name: string, private _age: number) {}

  // public - 외부에서 사용가능
  public print(): void {
    console.log(`이름은 ${this._name}  이고, 나이는 ${this._age} 입니다.`);
    // 이름은 Bong  이고, 나이는 29 입니다.
    // 이름은 Bong jun.  이고, 나이는 1 입니다.
  }

  protected printName(): void {
    console.log(this._name, this._age); // Bong jun. 1
  }
}

// const p = new Parent('Bong', 29);
// p.print();

// Parent라는 클래스를 상속받을때 extends라는 키워드를 사용, Parent의 생성자를 그대로 가져옴, 생성자가 있다면 Child에서도 같은 형태로 불러줘야함
class Child extends Parent {
  public gender = "male";

  constructor(age: number) {
    // 자식의 생성자에서는 무조건 super를 먼저 호출
    super('Bong jun.', age);

    // constructor 안에서 this.무엇을 호출하려면 무조건 super을 먼저 호출해야함
    this.printName();

  }
}

const c = new Child(1);
c.print();

// ---------------------------------------------------------------------

// Abstract Classes

abstract class AbstractPerson {
  protected _name: string = "Bong";

  // abstract 키워드를 붙였기 때문에 구현하지 않음 - :void {} x 
  abstract setName(name: string): void;
}

// abstract가 붙어있는 class는 기능이 완전하지 않기 때문에, new로 무언가를 할 수가 없습니다.
// new AbstractPerson();

class Person extends AbstractPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const p = new Person();
p.setName();

// abstract 키워드가 사용된 class는 new로 생성할 수 없고, 
// abstract 키워드가 사용된 클래스를 상속하면, 
// abstract 키워드가 붙은 함수를 구현해야한다.