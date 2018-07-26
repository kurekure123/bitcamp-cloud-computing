package bitcamp.pms.listener;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

import bitcamp.pms.dao.BoardDao;
import bitcamp.pms.dao.MemberDao;

@WebListener
public class ContextLoaderListener implements ServletContextListener{
	
	@Override
	public void contextInitialized(ServletContextEvent sce) {
		System.out.println("ContextLoaderListener 실행 됨");
		MemberDao memberDao = new MemberDao(
				"jdbc:mysql://13.209.99.58:3306/studydb",
                "study", "1111"
				);
		BoardDao boardDao = new BoardDao(
				"jdbc:mysql://13.209.99.58:3306/studydb",
                "study", "1111"
				);
		ServletContext sc = sce.getServletContext();
		sc.setAttribute("memberDao", memberDao);
		sc.setAttribute("boardDao", boardDao);
	}
}
