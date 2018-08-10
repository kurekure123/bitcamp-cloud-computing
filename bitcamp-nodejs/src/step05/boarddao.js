// 주제 : DAO 모듈 만들기

//module.exports
// module 생략 가능
"use strict"

var pool;
// this 를 사용하지 않으면 arrow 펑션 사용 가능
exports.setConnectionPool = (connectionPool)=>{
   pool = connectionPool;
};
//eventhandler 가 아닌 그냥 handler
exports.list= (pageNo = 1 , pageSize = 3, handler) => {
    var startIndex = (pageNo - 1) * pageSize;
    // this를 안사용하면 로컬 변수를 받아오기 때문에 this 붙여줘야한다.
    pool.query('select bno,titl,cdt from pms2_board limit ?, ? ',
            [startIndex, pageSize],
            function(err, results) {
        handler(err, results);
    });
};

exports.add =(data, handler)=>{
    pool.query(
            'insert into pms2_board(titl,cont,cdt) \
            values(?,?,now()))',
        [data.titl, data.cont],
        function(err, result) {
          handler(err,result);
    });  
};

exports.update =(data, handler)=>{
    pool.query(
            'update pms2_board set titl=?,\
            cont=?,\
            cdt=now()\
            where bno=?',
        [data.titl,
         data.cont,
         data.bno],
        function(err, result) {
             handler(err, result);
        });
};

exports.remove = (bno, handler)=>{
    pool.query('delete from pms2_board where bno=?',
            [bno],
        function(err, result) {
            handler(err, result);
        });
};