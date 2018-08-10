// 주제 : express 사용하기 - 요청핸들러를 모듈로 분리하기

const express = require('express')
const app = express();

//POST 요청 데이터 처리
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

//정적 HTML 파일 처리
app.use(express.static('public'))

//통합 템플릿 엔진 관리자 모듈 로딩
// => 템플릿 엔진이 아니라 템플릿 엔진을 중간에서 관리해 주는 역할을 수행한다.
const consolidate = require('consolidate');

// Express에 템플릿 엔진을 등록한다.
// => consolidate 에 대해 handlebars를 지정하면 
//    이 템플릿 관리자는 Node모듈에서 handlebars를 찾아 리턴한다.
// => Express에 여러개의 엔진을 등록 할 수 있다.
app.engine('html', consolidate.handlebars)


// => 템플릿 파일의 확장자를 생략했을때
//   기본으로 사용할 템플릿 파일의 확장자를 설정한다.
app.set('view engine', 'html')

// 템플릿 파일이 있는 디렉토리 경로를 지정한다.
const path = require('path')
app.set('views', path.join(__dirname, 'templates'))

// '/member/*' URL을 처리할 라우터와 '/team/*' URL을 처리할 라우터를 로딩한다. 
var memberRouter = require('./member')
var teamRouter = require('./team')
var classroomRouter = require('./classroom')
var boardRouter = require('./board')

// => 라우터를 Express 의 웹서버에 등록한다.
//실무에서는 쓸데없이 var를 선언하지 않음.
app.use('/member', memberRouter)
app.use('/team', teamRouter)
app.use('/classromm', classroomRouter)
app.use('/board', boardRouter)


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

app.get('/test03', (req, res)=>{
    res.render('template01', req.query)
});

app.listen(8000, ()=>{
  console.log('서버 실행 중....')  
})