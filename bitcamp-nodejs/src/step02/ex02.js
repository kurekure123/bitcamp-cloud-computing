// 주제 : DB연결하기

const mysql = require('mysql');

console.log(mysql);

//1) DBMS 와 연결을 수행할 객체를 준비한다.
var con = mysql.createConnection({
    host: '13.209.99.58', // 호스트가  localhost 면 생략 가능
    //port: '3306', // 포트 번호가 3306이면 생략 rksmd
    database:'studydb',
    user: 'study',
    password: '1111'
});

//2) 연결 객체를 통해 DBMS와 연결한다.
// => connect(연결 완료 후 호출될 함수를 지정);

con.connect(function(err) {
    // 만약 연결에 실패했다면, err 파라미터 값이 존재할 것이다.
    if (err) throw err; // 예외를 던져 오류가 있음을 알려라!
    console.log('연결 성공입니다.!');
  });

//3) DBMS와의 연결 해제를 예약한다.
// => 즉 다음 코드를 실행하면 
//    connect()를 통해  등록한 함수의 호출이 끝나면 예약작업이 실행될 것이다 
//    즉 연결 해제하라고 예약한 작업이 실행될 것이다.
//  =
// => end(DBMS와 연결을 끊은후 호출될 함수)
con.end(function(err){
    if(err) throw err; // 만약 연결을 끊다가 오류가 있다면 예외를 던진다.
    console.log('연결 끊음!');
});// 지금 당장 연결을 끊으라는 것이 아니다.

console.log('연결 테스트!');
