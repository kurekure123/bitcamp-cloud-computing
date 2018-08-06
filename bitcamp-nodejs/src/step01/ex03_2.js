// 모듈을 정의하고 사용하기 II


// 리턴값 destructuring 변수의 이름을 바꾸기 
// => {원래 프로퍼티 명 : 변수명, 원래 프로퍼티명 : 변수명, ...} 자바스크립트 문법이다. .. 잘안썼지만..

var {plus:p, minus:m} = require('./ex03_m.js');

console.log(p(10, 20));
console.log(m(10, 20));
