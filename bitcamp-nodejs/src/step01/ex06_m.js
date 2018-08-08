// 모듈 정의IV
// exports의 함수를 저장한다.


module.exports = function(){
    
    return{
        //{} 에서 함수를 정의하는 방법 1
        plus : function(a, b){return a + b},
        minus : function(a, b){return a - b},
        //{} 에서 함수를 정의하는 방법 2
        multiple(a, b){return a * b},
        divide(a, b){return a / b}
    };
};
