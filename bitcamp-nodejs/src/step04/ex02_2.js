// 주제 : express 사용하기 - 정적 HTML 파일을 서비스 하기

// => express 모듈 로딩
const express = require('express')
const app = express();

//POST 요청 데이터 처리
const bodyParser = require('body-parser')
// 실무에서는 2_1 에서처럼 쓰지않고 아래와 같이 처리함
app.use(bodyParser.urlencoded({extended: false}))

//정적 HTML 파일 처리
app.use(express.static('public'))

app.get('/test01', (req, res)=>{
    res.writeHead(200, {'Content-type' : 'text/plain;charset=UTF8'});
    res.write(`name=${req.body.name}\n`);
    res.write(`age=${req.body.age}\n`);
    res.end();
});

app.post('/test02', (req, res)=>{
    res.writeHead(200, {'Content-type' : 'text/plain;charset=UTF8'});
    res.write(`name=${req.body.name}\n`);
    res.write(`age=${req.body.age}\n`);
    res.end();
});

app.listen(8000, ()=>{
  console.log('서버 실행 중....')  
})