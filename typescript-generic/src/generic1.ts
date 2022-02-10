function heeloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

// 더 많은 반복된 함수들...

function hello(message: any): any {
  return message;
}

console.log(hello("Bong").length); // 4

//                                   결과물을 T로 리턴
function helloGeneric<T>(message: T): T {
  return message; // T로 들어온 message를 리턴하기 때문에 리턴타입은 T라고 해도 지장없음
}

console.log(helloGeneric("Bong").length); // 4
console.log(helloGeneric(29)); // 29
console.log(helloGeneric(true)); // true