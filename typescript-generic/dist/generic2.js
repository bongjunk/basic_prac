"use strict";
function helloBasic(message, comment) {
    return message;
}
// 직접 지정할때는 지정된 타입으로 체킹
helloBasic("Bong", 29);
// 지정하지 않으면 각각 추론된다.
helloBasic(29, 29);
