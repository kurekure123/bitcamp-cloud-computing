// 주제 : 클라이언트에게 출력하기 - 요청 정보 다루기
const http = require('http')
    

const server = http.createServer((req, res)=>{
    console.log('요청 받았음!')
    
    // 클라이언트가 요청한 URL을 보기
    // =>EX1)http://localhost:8000/aaa/bbb/ccc 일경우
    // =>EX)http://localhost:8000/aaa/bbb/ccc?name=hong&age=20일경우
    console.log(req.url); // ex1) 이녀석은  => /aaa/bbb/ccc를 출력한다.
    //ex2)이녀석은  => /aaa/bbb/ccc?name=hong&age=20를 출력한다.
    res.writeHead(200, {
        'Content-Type' : 'text/plain;charset=UTF-8'
    });
    res.write(req.url);
    res.end();
});
server.listen(8000, ()=>{
    console.log('서버가 시작됨!')
});

