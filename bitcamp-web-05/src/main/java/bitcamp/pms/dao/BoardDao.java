package bitcamp.pms.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import bitcamp.pms.domain.Board;

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

	public List<Board> selectList() throws Exception {
		try (Connection con = DriverManager.getConnection(jdbcUrl, username, password);
				PreparedStatement stmt = con.prepareStatement("select bno,titl,cdt from pms2_board");
				ResultSet rs = stmt.executeQuery();) {

			ArrayList<Board> list = new ArrayList<>();
			while (rs.next()) {
				DateFormat dateForm = new SimpleDateFormat("yyyy-MM-dd");
				Board board = new Board();
				board.setBno(rs.getInt("bno"));
				board.setTitl(rs.getString("titl"));
				board.setCdt(dateForm.format(rs.getDate("cdt")));
				list.add(board);
			}
			return list;
		}
	}

	public Board selectOne(int no) throws Exception {
		Class.forName("com.mysql.jdbc.Driver");
		try (Connection con = DriverManager.getConnection(jdbcUrl, username, password);
				PreparedStatement stmt = con
						.prepareStatement("select bno,titl,cont,cdt from pms2_board where bno=?");) {

			stmt.setInt(1, no);
			try (ResultSet rs = stmt.executeQuery();) {
				if (!rs.next()) {
					return null;
				}
				Board board = new Board();
				board.setBno(rs.getInt("bno"));
				board.setTitl(rs.getString("titl"));
				board.setCont(rs.getString("cont"));
				board.setCdt(rs.getString("cdt"));
				return board;
			}
		}
	}
	public int update(Board board) throws Exception {
		Class.forName("com.mysql.jdbc.Driver");
		try (Connection con = DriverManager.getConnection("jdbc:mysql://13.209.99.58:3306/studydb", "study", "1111");
				PreparedStatement stmt = con
						.prepareStatement("update pms2_board set titl=?, cont=?, cdt=now() where bno=?");) {

			stmt.setString(1, board.getTitl());
			stmt.setString(2, board.getCont());
			stmt.setInt(3, board.getBno());

			return stmt.executeUpdate();
		}
	}
	public int delete(int no) throws Exception {
		Class.forName("com.mysql.jdbc.Driver");
		try (Connection con = DriverManager.getConnection("jdbc:mysql://13.209.99.58:3306/studydb", "study", "1111");
				PreparedStatement stmt = con
						.prepareStatement("delete from pms2_board where bno=?");) {
			stmt.setInt(1, no);
			
			return stmt.executeUpdate();
		}
	}
	public int insert(Board board) throws Exception {
		Class.forName("com.mysql.jdbc.Driver");
		try (Connection con = 
				DriverManager.getConnection("jdbc:mysql://13.209.99.58:3306/studydb", "study", "1111");
				PreparedStatement stmt = con
						.prepareStatement("insert into pms2_board(titl,cont,cdt) values(?,?,now())");){
			stmt.setString(1, board.getTitl());
			stmt.setString(2, board.getCont());

			return stmt.executeUpdate();
		}
	}
}
