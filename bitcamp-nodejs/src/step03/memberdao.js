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
    pool.query('select mid, email from pms2_member limit ?, ?',
            [startIndex, pageSize],
            function(err, results) {
        handler(err, results);
    });
};

exports.add =(data, handler)=>{
    pool.query(
            'insert into pms2_member(mid,email,pwd)\
            values(?, ?, password(?))',
        [data.id, data.email, data.password],
        function(err, result) {
          handler(err,result);
    });  
};

exports.update =(data, handler)=>{
    pool.query(
            'update pms2_member set\
             email=?,\
             pwd=?\
             where mid=?',
        [data.email,
         data.password,
         data.id],
        function(err, result) {
             handler(err, result);
        });
};

exports.remove = (id, handler)=>{
    pool.query('delete from pms2_member where mid=?',
            [id],
        function(err, result) {
            handler(err, result);
        });
};