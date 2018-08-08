// 주제 : 클라이언트에게 출력하기 -
// => Node.js는 single thread 로 동작한다.
// => 즉 한 클라이언트의 요청을 처리할 때까지 다른 클라이언트는 기다려야 한다.
// => 그래서 Node.js의 HTTP 서버는 시간이 오래걸리는 (대량의)동시 요청을 처리하기에 적합하지 않다.
//    그런 용도가 아니다..
// => 작업 시간이 짧은 단타성 요청을 처리하기에 적합하다.

const http = require('http')
    

const server = http.createServer((req, res)=>{
    console.log('요청 받았음!')
        // 출력하는 데이터의 콘텐츠 타입을 웹 브라우저에게 알려주지 않았기 떄문에 
        // 웹 브라우저는 글씨를 제대로 출력하지 못한다. // 한글 깨짐
        res.end('안녕! 퇴근할게');
});
server.listen(8000, ()=>{
    console.log('서버가 시작됨!')
});

