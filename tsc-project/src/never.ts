// never - 보통 일반적으로 return에 사용됨

function error(message: string): never {
  throw new error(message);
}

function fail() { // : never
  return error('failed');
}

function infiniteLoop(): never {
  while(true) {}
}

// never의 특징
// never 타입은 모든 타입의 subtype 이며, 모든 타입에 할당할 수 있습니다.
// 하지만, never에는 그 어떤것도 할당할 수 없습니다.
// any 조차도 never 에게 할당할 수 없습니다.
// 잘못된 타입을 넣는 실수를 막고자 할때 사용하기도 합니다.

// let a: string = 'hello';

declare const a: string | number;

// (string + number) - string = number
if (typeof a !== "string") {
  // let b: never = a;
  a;
}

//                    T === string?   T를 이렇게 만들어서 보내고 : 아니라면 never라고 하는 타입이 나와라
type Indexable<T> = T extends string ? T & { [index: string]: any }: never;

//                             T === {}
// type ObjectIndexable =  Indexable<{}>;

// 잘못된 타입을 넣는 실수를 막는 용도로 사용
const b: Indexable<{}> = '';
