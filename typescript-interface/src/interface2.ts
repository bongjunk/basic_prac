interface Person2 {
  name: string;
  age?: number; // age는 있을수도 없을수도 있다.
}

function hello2(person: Person2): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

hello2({ name: 'Bong', age: 29 });
hello2({ name: 'Leo' });