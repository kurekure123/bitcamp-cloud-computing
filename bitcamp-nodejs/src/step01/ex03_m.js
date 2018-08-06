// 모듈정의
// - 모듈로 리턴할 함수나 객체를 만든다.
// - module.exports 객체에 담아 리턴한다.
//

function plus(a, b){return a + b}
function minus(a, b){return a - b}
function multiple(a, b){return a * b}
function divide(a, b){return a / b}

// 사용 방법
//함수 주소 저장
// module 객체에 exports 라는 객체가 들어있다.
// exports 객체에 함수를 담아 놓으면
// 모듈을 사용하는 코드에서 require() 를 호출하면 이 exports 객체를 리턴한다. 
module.exports.plus = plus;
module.exports.minus = minus;

// module을 생략해도 된다.
exports.multiple = multiple;
exports.divide = divide;

// 결론 : 
//  모듈에서 무엇인가를 리턴하고 싶다면, exports 에 담아라