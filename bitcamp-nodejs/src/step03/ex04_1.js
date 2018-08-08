// 주제 : SQL 요청 처리하 
//[실행 URL]
// => http://localhost:8000/member/list?pageNo=1&pageSize=3
// [출력 결과]
// 아이디, 이메일
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
    
    if(urlInfo.pathname !== '/member/list'){
        res.end('해당 URL을 지원하지 않습니다.')
        return;
    }
    
    var pageNo = 1;
    var pageSize = 3;
    
    if(urlInfo.query.pageNo){
        pageNo = parseInt(urlInfo.query.pageNo)
    }
    if(urlInfo.query.pageSize){
        pageSize = parseInt(urlInfo.query.pageSize)
    }
    var startIndex = (pageNo - 1) * pageSize;
    
    pool.query(`select mid, email from pms2_member limit ?, ?`,
            [startIndex, pageSize],
            function(err, results) {
        if (err){
            res.end('DB 조회중 예외 발생')
            return;
        };
        
        for (var row of results) {
            res.write(`${row.email}, ${row.mid}\n`);
        }
        res.end()
    });
    // 비동기 처리이기 때문에 여기서 end를 호출해서 서버에 응답해버리면 쿼리문이 화면에 출력되지 않는다.
   // res.write(`${pageNo} ${pageSize} ${startIndex} \n`)
   // res.end()
});



server.listen(8000, ()=>{
    console.log('서버가 시작됨!')
});

