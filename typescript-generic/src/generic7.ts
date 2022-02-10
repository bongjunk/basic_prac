interface IPerson {
  name: string;
  age: number;
}

// 이 변수는 IPerson 타입을 표현
const person: IPerson = {
  name: "Bong",
  age: 29,
}

// keyof 키워드는 type 앞에 붙여서 새로운 type을 만들어냄
// type Keys = keyof IPerson;

// const Keys: Keys = "name";

// 특정한 개체를 받기위해 obj라 지정, 
// obj에 해당하는 name 이라는 것 혹은 age라 하는 것을 key로 받도록한다
// function getProp(obj: IPerson, key: "name" | "age"): string | number {
// IPerson[keyof IPerson] 
// => IPerson["name" | "age"] 
// => IPerson["name"] | IPerson["age"]
// => string | number
// function getProp(obj: IPerson, key: keyof IPerson): IPerson[keyof IPerson] {
//   return obj[key];
// }
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// key는 IPerson으로 추론
getProp(person, 'name');

function setProp<T, K extends keyof T>(obj: T, key: keyof T, value: T[keyof T]): void {
  // 유니온 타입이 아니기 떄문에 에러가 나지 않음
  obj[key] = value;
}

setProp(person, "name", "Lee");