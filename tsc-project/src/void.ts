// void - 어떤 타입도 가지지 않는 빈 상태, 소문자로 사용
// 함수의 반환타입으로 쓰이기 때문에
// void로 지정된 함수는 return을 가지고 무엇을 하지 않겠다 라고 명시적으로 표현
function returnVoid(message: string): void {
  console.log(message);

  // 유일하게 들어갈 수 있는 값은 return undefined;
  return;
}

returnVoid('리턴이 없다.');