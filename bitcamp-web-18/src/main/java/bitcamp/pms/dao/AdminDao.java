package bitcamp.pms.dao;

import bitcamp.pms.domain.Member;

public interface AdminDao {
	
	Member logIn(String email, int password);
}
