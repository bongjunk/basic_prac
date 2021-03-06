interface Person3 {
  name: string;
  age?: number;
  [index: string]: any;
}

function hello3(person: Person3): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p31: Person3 = {
  name: 'Bong',
  age: 29,
};

const p32: Person3 = {
  name: 'Leo',
  systers: ['Kim', 'Song'],
};

const p33: Person3 = {
  name: 'Bongjun',
  father: p31,
  mother: p32,
};

hello3(p33);