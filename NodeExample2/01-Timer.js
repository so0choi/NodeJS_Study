"use strict";

"use strict";

// Timer가 여러개 있을 경우 Timer 내 비동기 코드가 어느 순서에 수행 될지 모름

//지정한 시간 이후에 실행되는 함수
const timeoutObj = setTimeout(() => {
  console.log("first");
}, 0); // 여기서 '1초'는 최소 보장 지연 시간이다. 즉시 실행된다는 보장 없음

// 즉시 실행되는 함수
const immediateObj = setImmediate(() => {
  console.log("second");
});

// setTimeout(0) == setImeediate()? -> 실행 할 때마다 실행 순서가 그때 그때 달라진다

const intervalObj = setInterval(() => {
  console.log("third");
}, 1000);

// 메모리 누수 막기위해 각 Timer 메서드들을 상수에 할당하고 'clear' 시킴
clearTimeout(timeoutObj);
clearInterval(immediateObj);
clearImmediate(immediateObj);
