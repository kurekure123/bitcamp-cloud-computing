// 주제: 웹 응답에 적용하기

const express = require('express')
const app = express();

const handlebars = require('handlebars')
var templateSrc = '{{name}} 님 안녕하세요!';
var templateFn = handlebars.compile(templateSrc);

app.get('/hello', (req, res) => {
    // 템플릿 함수를 호출하여 소스로부터 결과를 얻는다.
    // => 소스에 삽입될 데이터를 파라미터로 남긴다.
    var resultStr = templateFn({name : '홍길동'});
    res.writeHead(200, {'Content-Type': 'text/plain;charset=UTF-8'});
    res.write(resultStr);
    res.end();
});

app.listen(8000, () => {
    console.log('서버 실행 중...');
});

