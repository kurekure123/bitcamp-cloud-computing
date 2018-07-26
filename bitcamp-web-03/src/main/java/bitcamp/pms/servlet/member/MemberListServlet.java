package bitcamp.pms.servlet.member;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import bitcamp.pms.domain.Member;

@SuppressWarnings("serial")
@WebServlet("/member/list")
public class MemberListServlet extends HttpServlet{
	
	@Override
    protected void doGet(
            HttpServletRequest request, 
            HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        
        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head>");
        out.println("<meta charset='UTF-8'>");
        out.println("<title>멤버 목록</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1>멤버 목록</h1>");
        
        out.println("<p><a href='form.html'>새회원</a></p>");
        out.println("<table border='1'>");
        out.println("<tr>");
        out.println("    <th>아이디</th><th>이메일</th>");
        out.println("</tr>");

	        try {
	            List<Member> list = selectList();
	            for (Member member : list) {
	                out.println("<tr>");
	                out.printf("    <td><a href='view?id=%s'>%s</a></td><td>%s</td>\n",
	                        member.getId(),
	                        member.getId(),
	                        member.getEmail());
	                out.println("</tr>");
	            }
	                
	            
	        } catch (Exception e) {
	            out.println("<p>목록 가져오기 실패!</p>");
	            e.printStackTrace(out);
	        }
	        out.println("</table>");
	        out.println("</body>");
	        out.println("</html>");
	    }
	
	public List<Member> selectList() throws Exception{
        Class.forName("com.mysql.jdbc.Driver");
        try (
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://13.209.99.58:3306/studydb",
                //jdbc.url=jdbc:mysql://13.209.99.58:3306/studydb
                "study", "1111");
            PreparedStatement stmt = con.prepareStatement(
                "select mid, email from pms2_member");
            ResultSet rs = stmt.executeQuery();) {
            ArrayList<Member> list = new ArrayList<>();       
            while (rs.next()) {
            	Member member = new Member();
            	member.setId(rs.getString("mid"));
            	member.setEmail(rs.getString("email"));
            	list.add(member);
            }
            return list;	
        }
	}
}
