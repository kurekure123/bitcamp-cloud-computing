package bitcamp.pms.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;


import bitcamp.pms.domain.Classroom;

public class ClassroomDao {
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
	
	public ClassroomDao(String jdbcUrl, String username, String password) {
		this.jdbcUrl = jdbcUrl;
		this.username = username;
		this.password = password;
	}
	
	public List<Classroom> selectList() throws Exception{
		try (Connection con = DriverManager.getConnection(jdbcUrl, username, password);
				PreparedStatement stmt = con.prepareStatement("");
				ResultSet rs = stmt.executeQuery();){
			ArrayList<Classroom> list = new ArrayList<>();
			while(rs.next()) {
				DateFormat dateForm = new SimpleDateFormat("yyyy-MM-dd");
				Classroom classroom = new Classroom();
				classroom.setCrno(rs.getInt("crno"));
				classroom.setTitl("titl");
				classroom.setSdt(dateForm.format(rs.getDate("sdt")));
				classroom.setSdt(dateForm.format(rs.getDate("edt")));
				classroom.setRoom(rs.getString("room"));
			}
			return list;
		}
	}
}
