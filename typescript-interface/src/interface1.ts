interface Person1 {
  name: string,
  age: number,
} // 컴파일 타임에 사용 문제가 있는지 관계를 규명해서 체크해 주는 역할

function hello1(person: Person1): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p1: Person1 = {
  name: 'Bong',
  age: 29,
};

hello1(p1);