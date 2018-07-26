package bitcamp.pms.dao;

public class BoardDao {
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
    
	public BoardDao(String jdbcUrl, String username, String password) {
        this.jdbcUrl = jdbcUrl;
        this.username = username;
        this.password = password;
	}
}
