// 컴파일이 되면 사라짐, 컴파일 타임에만 사용
interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

// oop에서 많이 사용
// interface를 class로 사용, IPerson1 내용을 바탕으로 Person이라는 클래스를 만들어냄
class Person implements IPerson1 {
  name: string;
  age?: number | undefined;

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }

}

const person = new Person('Bong');
person.hello();