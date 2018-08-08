// 주제 : SQL 요청 처리하기 - 회원 변경하기
//[실행 URL]
// => http://localhost:8000/member/add?id=user01&email=user01@test.com&password=1111
// [출력 결과]
// 등록 성공입니다.
const http = require('http')
const url = require('url')
const mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit : 10,
    host: '13.209.99.58', 
    database: 'studydb',
    user: 'study',
    password: '1111'
});

const server = http.createServer((req, res)=>{
    var urlInfo = url.parse(req.url, true);
    if(urlInfo.pathname === '/favicon.ico'){
        res.end();
        return;
    }
    
    res.writeHead(200, {
        'Content-Type' : 'text/plain;charset=UTF-8'
    });
    
    if(urlInfo.pathname !== '/member/delete'){
        res.end('해당 URL을 지원하지 않습니다.')
        return;
    }
    
    var id = urlInfo.query.id;
    var email = urlInfo.query.email;
    var pwd = parseInt(urlInfo.query.pwd);
    
    pool.query('delete from pms2_member where mid = ?',
            [id],
            function(err, results) {
        if (err){
            res.write(`${id} ${email} ${pwd}`);
            res.end('DB 조회중 예외 발생');
            return;
        };
        res.end('삭제 성공 성공')
    });
    // 비동기 처리이기 때문에 여기서 end를 호출해서 서버에 응답해버리면 쿼리문이 화면에 출력되지 않는다.
   // res.write(`${pageNo} ${pageSize} ${startIndex} \n`)
   // res.end()
});



server.listen(8000, ()=>{
    console.log('서버가 시작됨!')
});

