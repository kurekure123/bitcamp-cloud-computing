// 주제 : 데이터 베이스 프로그래밍 - select II

const mysql = require('mysql');

console.log(mysql);

var con = mysql.createConnection({
    host: '13.209.99.58', 
    database:'studydb',
    user: 'study',
    password: '1111'
});


con.connect(function(err) {
    if (err) throw err;
    console.log('연결 성공입니다.!');
    // 연결에 성공했을때만 SQL을 실행하라고 예약한다.
    con.query('select * from pms2_member', function(err, results){
        if(err) throw err;
        //result 파라미터에 결과가 들어있다.
        for(var row of results){
            //row 객체에서 값을 꺼낼때는 SQL 에서 지정한 컬럼명 또는 별명을 사용한다.
            console.log(row.email, row.mid, row.pwd);
        }
    });
  });

//connector => end 예약  =>  연결쿼리 실행 예약  되기때문에 end가 내부에 있어야 작동된다.
// 이 예제에서는 DB Connect 완료 후  END를 먼저 실행하라고 예약했기 때문에
// connect()에 등록한 함수가 호출되어 SQL 문을 예약하더라도 
// end 보다 이후에 실행되기 때문에 
// SQL 실행 오류가 발생할 것이다.
// 해결책 : sql 실행을 먼저 예약한 뒤 end 실행을 예약하라 
// ex06.js를 참조 
con.end(function(err){
    if(err) throw err;
    console.log('연결 끊음!');
});

console.log('select 실행!');
