// 주제 : express 사용하기 - 서버 실행하기 II

// => express 모듈 로딩과 웹서버 객체 준비를 한번에 하기
const app =require('express')()


/*//POST 요청 데이터를 처리할 모듈 로딩
const bodyParser = require('body-parser')

//POST 요청 데이터를 분석할 객체를 준비한다.
// url encode data를 처리할 분석기
const postParameterParser = bodyParser.urlencoded({extends: false})

//POST 요청 파라미터 분석기를 Express 웹서버 객체에 등록한다.
//등록된 분석기 사용
app.use(postParameterParser)*/

app.get('/test01', (req, res)=>{
    res.writeHead(200, {'Content-Type':'text/plain;charset=UTF-8'});
    res.write('test01....ok');
    res.end();
});

app.listen(8000, ()=>{
  console.log('서버 실행중')  
})