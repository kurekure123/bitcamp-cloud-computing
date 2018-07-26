package bitcamp.pms.dao;

public class MemberDao{
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
    
    public MemberDao(
            String jdbcUrl, String username, String password) {
        this.jdbcUrl = jdbcUrl;
        this.username = username;
        this.password = password;
    }
}
