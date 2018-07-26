package bitcamp.pms.servlet.board;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import bitcamp.pms.domain.Board;

@SuppressWarnings("serial")
@WebServlet("/board/update")
public class BoardUpdateServlet extends HttpServlet{

	@Override
    protected void doPost(
            HttpServletRequest request, 
            HttpServletResponse response) throws ServletException, IOException {
	        request.setCharacterEncoding("UTF-8");
	        response.setContentType("text/html;charset=UTF-8");
	        PrintWriter out = response.getWriter();
	        out.println("<!DOCTYPE html>");
	        out.println("<html>");
	        out.println("<head>");
	        out.println("<meta charset='UTF-8'>");
	        out.println("<meta http-equiv='Refresh' content='1;url=list'>");
	        out.println("<title>게시물 변경</title>");
	        out.println("</head>");
	        out.println("<body>");
	        out.println("<h1>게시물 변경 결과</h1>");
	            try{
	            	Board board = new Board();
	            	board.setBno(Integer.parseInt(request.getParameter("no")));
	            	board.setCont(request.getParameter("content"));
	            	board.setCdt(request.getParameter("cdt"));
	            	board.setTitl(request.getParameter("title"));
	            	update(board);
	                if (update(board)==0) {
	                	out.println("<p>해당 게시물이 존재하지 않습니다.</p>");
	                } else {
	                    out.println("<p>변경하였습니다.</p>");
	                }
	            }catch (Exception e) {
	                out.println("<p>변경 실패!</p>");
	                e.printStackTrace(out);
	            }
	        
	        out.println("</body>");
	        out.println("</html>");
	    }
	public int update(Board board) throws Exception{
		Class.forName("com.mysql.jdbc.Driver");
		try (
                Connection con = DriverManager.getConnection(
                    "jdbc:mysql://13.209.99.58:3306/studydb",
                    "study", "1111");
                PreparedStatement stmt = con.prepareStatement(
            		"update pms2_board set titl=?, cont=?, cdt=now() where bno=?");) {
                
                stmt.setString(1, board.getTitl());
                stmt.setString(2, board.getCont());
                stmt.setInt(3, board.getBno());
                
                return stmt.executeUpdate();
            }
		
	}
}
