// 주제 : 데이터 베이스 프로그래밍 - select II

const mysql = require('mysql');

console.log(mysql);

var con = mysql.createConnection({
    host: '13.209.99.58', 
    database: 'studydb',
    user: 'study',
    password: '1111'
});

con.connect(function(err) {
    if (err) throw err; 
    
    console.log('연결 성공입니다!');
});

var mid = 'user002';

con.query(
    `update pms2_member set email='user002@test.comxxx'
     where mid='${mid}'`, 
    function(err, result) {
        if (err) throw err;
        
    console.log('변경 성공!');
});


con.end(function(err) {
    if (err) throw err; 
    console.log('연결을 끊었습니다!')
}); 

console.log('select 실행!');
