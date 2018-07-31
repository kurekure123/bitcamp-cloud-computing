package bitcamp.pms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.pms.dao.AdminDao;
import bitcamp.pms.domain.Member;

@Service
public class AdminService {

	@Autowired AdminDao adminDao;
	
	public Member get(String email, int password) {
        return adminDao.logIn(email, password);
    }
}
