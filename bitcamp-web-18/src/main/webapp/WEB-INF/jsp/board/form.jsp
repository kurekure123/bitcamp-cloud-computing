<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시물 등록폼</title>
<script type="text/javascript" src="<%=request.getContextPath()%>/se2/smarteditor2-master/workspace/js/service/HuskyEZCreator.js" charset="UTF-8"> </script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.0/jquery.js"></script>
</head>
<body>

<h1>게시물 등록</h1>
<form action="add" method="post">
제목: <input type="text" name="titl" id="titl" ><br>
내용: <textarea name="cont" id="cont" rows="10" cols="100"></textarea><br>
<button id="save" >등록</button>
</form>

<script type="text/javascript">

var oEditors = [];

nhn.husky.EZCreator.createInIFrame({

    oAppRef: oEditors,

    elPlaceHolder: "cont",

    sSkinURI: "<%=request.getContextPath()%>/se2/smarteditor2-master/workspace/SmartEditor2Skin.html",

    fCreator: "createSEditor2"

});
</script>
<script type="text/javascript">
function submitContents(elClickedObj) {

    // 에디터의 내용이 textarea에 적용된다.

    oEditors.getById["cont"].exec("UPDATE_CONTENTS_FIELD", []);

 

    // 에디터의 내용에 대한 값 검증은 이곳에서

    // document.getElementById("ir1").value를 이용해서 처리한다.

 

    try {

        elClickedObj.form.submit();

    } catch(e){
        }
    }
$("#save").click(function(){ oEditors.getById["cont"].exec("UPDATE_CONTENTS_FIELD", []); $("#add").submit(); });
</script>
</body>
</html>

