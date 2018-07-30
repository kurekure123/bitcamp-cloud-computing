<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript">
request.setCharacterEncoding("utf-8"); 
System.out.println("제목:"+request.getParameter("title")); 
System.out.println("내용:"+request.getParameter("content"));
</script>
</head>
<body>

</body>
</html>