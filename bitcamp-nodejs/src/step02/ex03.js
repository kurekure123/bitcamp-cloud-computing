// 주제 : 데이터 베이스 프로그래밍 - select

const mysql = require('mysql');

console.log(mysql);

var con = mysql.createConnection({
    host: '13.209.99.58', 
    database:'studydb',
    user: 'study',
    password: '1111'
});

//1)
con.connect(function(err) {
    if (err) throw err;
    console.log('연결 성공입니다.!');
  });

//query(sql, 실행후 호출될 함수);
// => SQL 실행예약 ! 지금 당장 실행하는 것이 아니다.
//2)
con.query('select * from pms2_member', function(err, result){
    console.log('결과를 가져왔다.')
    if(err) throw err;
    console.log(result);
});

//3)
con.end(function(err){
    if(err) throw err;
    console.log('연결 끊음!');
});

console.log('select 실행!');
