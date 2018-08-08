// 모듈을 정의하고 사용하기

// => exports 에 저장된 함수 받기
var fn = require('./ex07_m');

// => 클로저만 접근할 수 있는 변수이기에 객체마다 고유하다.

var obj1 = fn();
var obj2 = fn();

//obj 1에 들어있는 클로저가 사용하는 result 변수와 
//obj 2에 들어있는 클로저가 사용하는 result 변수가 다르다.

obj1.plus(100);
obj1.minus(7);

obj2.multiple(100);
obj2.divide(7);

console.log(obj1.getResult());
console.log(obj2.getResult());

