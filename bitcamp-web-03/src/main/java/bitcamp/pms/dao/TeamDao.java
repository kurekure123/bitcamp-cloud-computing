package bitcamp.pms.dao;

public class TeamDao {
	static {
		try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	String jdbcUrl;
	String username;
	String password;
	
	public TeamDao(String jdbcUrl, String username, String password) {
		this.jdbcUrl = jdbcUrl;
	}
}
