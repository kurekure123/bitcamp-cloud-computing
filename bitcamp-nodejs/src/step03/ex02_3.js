// 주제 : 클라이언트에게 출력하기 - 콘텐트 타입 설정하기
const http = require('http')
    

const server = http.createServer((req, res)=>{
    console.log('요청 받았음!')
    
        // write()를 사용하여 콘텐츠를 출력할 수 있다.
    res.writeHead(200, {
        'Content-Type' : 'text/plain;charset=UTF-8'
    });
    res.write('<html>\n')
    res.write('<head>\n')
    res.write('<title>Node.js</title>\n')
    res.write('</head>\n')
    res.write('<body>\n')
    res.write('<h1>안녕</h1>\n')
    res.write('</body>\n')
    res.write('</html>\n')
    res.end();//end()에서 꼭 출력할 필요는 없다.
});
});
server.listen(8000, ()=>{
    console.log('서버가 시작됨!')
});

