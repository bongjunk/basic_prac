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
    const aString = maybe;
}
if (typeof maybe === 'string') {
    maybe;
}
