package bitcamp.pms.controller.json;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.pms.service.AdminService;

@RestController
@RequestMapping("admin")
public class AdminController{

	@Autowired AdminService adminService;
	
	@RequestMapping("logIn")
	public Object logIn(@RequestParam("eEmail") String email, @RequestParam("ePassword") int password) throws Exception{
		HashMap<String,Object> result = new HashMap<>();
		
		System.out.println(email + ' ' + password );

		result.put("status", "success");
		return result;
	}
}
