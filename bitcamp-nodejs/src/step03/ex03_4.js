// 주제 : 클라이언트에게 출력하기 - url에 따라 작업을 분리하기
const http = require('http')
const url = require('url')

const server = http.createServer((req, res)=>{
    var urlInfo = url.parse(req.url, true);
    if(urlInfo.pathname === '/favicon.ico'){
        res.end();
        return;
    }
    console.log('요청 받았음!')
    res.writeHead(200, {
        'Content-Type' : 'text/plain;charset=UTF-8'
    });
    
    if(urlInfo.pathname === '/board/list'){
        res.write('게시물 목록')
    }else if(urlInfo.pathname === '/board/list'){
        res.write('게시물 등록')
    }else{
        res.write('해당 URL을 지원하지 않습니다.')
    }
    
    //파라미터 값을 꺼낼 때는 그냥
    // "query.파리미터명" 으로 지정하면 된다.
/*    res.write(`name=${urlInfo.query.name}\n`)
    res.write(`age=${urlInfo.query.age}\n`)*/
    res.end()
});



server.listen(8000, ()=>{
    console.log('서버가 시작됨!')
});

