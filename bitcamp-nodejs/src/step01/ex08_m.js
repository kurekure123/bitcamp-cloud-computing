// 모듈 정의V
// => private 변수를 갖는 객체 만들기

var result = 0;
module.exports ={
        return{
            plus(value){result += value},
            minus(value){result -= value},
            multiple(value){result *= value},
            divide(value){result /=valie},
            getResult(){return result}
        };
};
