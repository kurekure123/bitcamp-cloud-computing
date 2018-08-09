// 주제: 템플렛 엔진 사용 - 외부 템플릿 사용

const express = require('express')
const app = express();

// 외부 파일의 경로를 다룰 때 사용할 모듈을 로딩
const path = require('path')

// 외부 템플릿 파일의 경로 설정하기

var templatePath = path.join(__dirname, 'ex06_4_template.html')


//템플릿 파일을 읽어들일 모듈을 로딩
const fs = require('fs')

// 템플릿 파일의 내용을 읽어 들인다.
const handlebars = require('handlebars')

// 아래는 동기방식
// 동기 방식으로 템플릿 파일의 내용을 읽어들인다.
// => 동기 방식이기 때문에 파일을 다 읽은 후에 리턴한다.
// => 리턴 값은 파일의 데이터이다.
var templateSrc = fs.readFileSync(templatePath)
var templateFn = handlebars.compile(templateSrc.toString());

app.get('/hello', (req, res) => {
    // 템플릿 함수를 호출하여 소스로부터 결과를 얻는다.
    // => 소스에 삽입될 데이터를 파라미터로 남긴다.
    var resultStr = templateFn(req.query);
    res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
    res.write(resultStr);
    res.end();
});

app.listen(8000, () => {
    console.log('서버 실행 중...');
});

