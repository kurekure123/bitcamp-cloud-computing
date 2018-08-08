// 주제 : 데이터 베이스 프로그래밍 - select II

const mysql = require('mysql');

console.log(mysql);

var pool = mysql.createPool({
    connectionLimit : 10,
    host: '13.209.99.58', 
    database: 'studydb',
    user: 'study',
    password: '1111'
});

// 커넥션 풀 객체를 이용해서 바로 질의를 수행한다.
// => pool.getConnection() 을 호출한 후 ->
// => con.query() -> con.release() 의 단축된 사용법이다.
pool.query('select * from pms2_member', function(err, results) {
        if (err) throw err;
        
        // results 파라미터에 결과가 들어 있다.
        for (var row of results) {
            // row 객체에서 값을 꺼낼 때는 SQL에서 지정한 컬럼명 또는 별명을 사용한다.
            console.log(row.email, row.mid, row.pwd);
        }
        // 이 예제에서는 sql을 수행한 후 프로그램을 종료해야하기 때문에 
        // 커넥션 풀을 닫는다.
        pool.end();
    });
    
console.log('select 실행!');

//ex11.js와 ex12.js의 비교
// [ex12.js]
// => ex12.js는 커넥션 풀에 대해 바로 query()를 호출할수 있어
//    코드가 간결해져서 좋다.
//    하지만 query() 호출할 때마다 새 커넥션을 만들어 (꺼내) 사용하기 때문에
//    한번에 여러 SQL을 실행할 때 불리하다.
//    왜? 같은 커넥션을 사용하지 않기 때문이다.
//    => 예) 
//       pool.query(....); // 커넥션 1
//       pool.query(....); // 커넥션 2
// [ex11.js]
// => SQL을 실행할때마다 매번 커넥션을 얻어야 하기 때문에
//    ex12.js 보다 코드는 복갑하다.
// 그러나!!! 한번 커넥션할때 얻으면 여러번 사용할 수 있기 때문에
// 여러개의 sql을 실행할때는 ex12.js 보다 유용하다.
// => 예) 
// pool.getConnection(function(err, con){
//      con.query(...); // 커넥션 1
//      con.query(...); // 커넥션 2
//})