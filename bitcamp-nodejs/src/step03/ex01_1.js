// 주제 : HTTP 서버 만들기 - 서버 실행

// 1) 모듈 로딩

const http = require('http')

// 2) HTTP 서버 객체 생성
// 파라미터 : 요청이 들어왔을 때 호출될 함수
/*const server = http.createServer(function(req, res){
    
}); */

const server = http.createServer((req, res)=>{
    console.log('요청 받았음!')
    
    // 웹 브라우저의 요청을 받았지만 응답을 하지 않는 상태이기 때문에
    // 웹브라우저는 계속 응답을 기다리는 상태에 있음
});

//3) HTTP 서버 실행
// 주석에서 [] 처리한 녀석은 굳이 필요없으면 입력하지 않아도 됨 
// => listen(포트번호, [서버를 시작한 후 호출될 함수])


//server.on('listening', function(){})

// 이벤트에 대해 리스너 등록  위의 리스너 설정과 포트번호 설정의 기능을 하나로 합쳐둔 함수
server.listen(8000, ()=>{
    // 리슨이라는 이벤트가 발생후 console.log가 출력됨
    console.log('서버가 시작됨!')
});

