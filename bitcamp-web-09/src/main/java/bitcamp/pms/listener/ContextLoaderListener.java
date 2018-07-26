package bitcamp.pms.listener;

import java.io.InputStream;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import bitcamp.pms.context.ApplicationContext;

@WebListener
public class ContextLoaderListener implements ServletContextListener{
	
	@Override
	public void contextInitialized(ServletContextEvent sce) {
		System.out.println("ContextLoaderListener 실행 됨");

		try {
			ApplicationContext iocContainer = new ApplicationContext("bitcamp.pms");
			
			String resource = "bitcamp/pms/config/mybatis-config.xml";
			InputStream inputStream = Resources.getResourceAsStream(resource);
			SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
			
			iocContainer.addBean("sqlSessionFactory", sqlSessionFactory);
			
			iocContainer.refresh();
	/*		ServletContext sc = sce.getServletContext();
	 * 		MemberDao memberDao = new MemberDao(sqlSessionFactory);
			sc.setAttribute("/member/list", new MemberListController(memberDao));
			sc.setAttribute("/member/view", new MemberViewController(memberDao));
			sc.setAttribute("/member/update", new MemberUpdateController(memberDao));
			sc.setAttribute("/member/delete", new MemberDeleteController(memberDao));
			sc.setAttribute("/member/add", new MemberAddController(memberDao));
			*/
			ServletContext sc = sce.getServletContext();
			sc.setAttribute("iocContainer", iocContainer);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
