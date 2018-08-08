// 주제 : 클라이언트에게 출력하기 - URL 분석하기
const http = require('http')
const url = require('url')

const server = http.createServer((req, res)=>{
    console.log('요청 받았음!')
    
    console.log(req.url);
    //URL 분석기를 이용하여 URL을 분석해보자!
    
    res.writeHead(200, {
        'Content-Type' : 'text/plain;charset=UTF-8'
    });
    
    var urlInfo = url.parse(req.url);
    
    res.write(`href=${urlInfo.href}\n`);
    res.write(`pathname=${urlInfo.pathname}\n`);
    res.write(`search=${urlInfo.search}\n`);
    res.write(`query=${urlInfo.query}\n`);
    
    res.write(req.url);
    res.end();
});



server.listen(8000, ()=>{
    console.log('서버가 시작됨!')
});

