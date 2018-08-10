// 주제 : /member/* 요청을 처리할 라우터 만들기

const express = require('express')
const router = express.Router();

router.use((req, res, next)=>{
    console.log('멤버 라우터 테스트')
    next();
});


// '/member/list' 요청이 들어왔을 떄 호출될 메서드 등록
router.get('/list', (req, res)=>{
    res.writeHead(200, {'Content-type' : 'text/plain;charset=UTF8'});
    res.write('회원 목록입니다.');
    res.end();
});

router.get('/view', (req, res)=>{
    res.writeHead(200, {'Content-type' : 'text/plain;charset=UTF8'});
    res.write('회원 상세 정보입니다.');
    res.end();
});

// router에서는 앞에 module을 생략하면 안된다.
module.exports = router;

