"use strict";
// T를 받고 T[] - 배열로 받겠다는 표시, 리턴 타입도 T
function helloArray(message) {
    return message[0];
}
;
helloArray(['Hello', 'World']);
helloArray(['Hello', 5]);
function helloTuple(message) {
    return message[0];
}
helloTuple(['Hello', 'World']);
helloTuple(['Hello', 5]);
