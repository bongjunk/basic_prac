"use strict";
// any가 가지고있는 타입의 불안정한 요소를 주는 그런 부분을 조금이나마 해소해주는 대체자
// 응용 프로그램을 작성할 때 모르는 변수의 타입을 묘사해야 할 수도 있습니다.
// 이러한 값은 동적 콘텐츠 (예: 사용자로부터, 또는 우리API의 모든 값을 의도적으로 수학하기를 원할 수 있습니다.)
// 이 경우, 컴파일러와 미래의 코드를 읽는 사람에게 이 변수가 무엇이든 될 수 있음을 알려주는 타입을 제공하기를 원하므로 unknown 타입을 제공합니다.
// unknown은 number에 바로 할당할 수 없는 형태
const aNumber = maybe;
// 간단한 형태의 타입가드
if (maybe === true) {
    const aBoolean = maybe;
    // if문 안에있는 maybe는 true기 때문에 boolean형태는 string에 할당할 수 없다.
    // const aString: string = maybe;
}
if (typeof maybe === 'string') {
    // maybe // string
    const aString = maybe;
    // const aBoolean: boolean = maybe;
}
// unknown
// Typescript 3.0 버전부터 지원
// any와 짝으로 any보다 Type-safe한 타입
// - any와 같이 아무거나 할당할 수 있다.
// - 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나
// - 타입을 확정해주지 않으면 다른곳에 할당 할 수 없고, 사용할 수 없다.
// unknown 타입을 사용하면 runtime error를 줄일 수 있을것 같다.
// - 사용전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API에 사용할 수 있을것 같다. 
