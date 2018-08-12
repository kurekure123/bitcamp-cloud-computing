package bitcamp.pms.controller.json;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import bitcamp.pms.domain.Member;
import bitcamp.pms.service.MemberService;

@RestController
@RequestMapping("/member")
public class MemberController {

    @Autowired MemberService memberService;
    
    @RequestMapping("list")
    public Object list(
            @RequestParam(defaultValue="1") int page, 
            @RequestParam(defaultValue="3") int size) throws Exception {
        
        if (page < 1) page = 1;
        if (size < 1 || size > 20) size = 3;
        
        List<Member> list = memberService.list(page, size);
        
        HashMap<String,Object> data = new HashMap<>();
        data.put("list", list);
        data.put("page", page);
        data.put("size", size);
        data.put("totalPage", 
                memberService.getTotalPage(size));

        return data;
    }
    
    @GetMapping("form")
    public void form() {
    }
    
    @PostMapping("add")
    public Object add(Member member) throws Exception {
    	int count = 0;
        HashMap<String,Object> result = new HashMap<>();
        String email = member.getEmail();
        count = memberService.emailCheck(email);
        System.out.println(count);
        if(count == 0) {
	       	memberService.add(member);
	    	result.put("status", "success");
        }
        return result;
    }
    
    @RequestMapping("delete")
    public Object delete(String id) throws Exception {
        HashMap<String,Object> result = new HashMap<>();
        
        if (memberService.delete(id) == 0) {
            result.put("status", "fail");
            result.put("error", "해당 아이디가 없습니다.");
        } else {
            result.put("status", "success");
        }
        return result;
    }
    
    @RequestMapping("update")
    public Object update(Member member) throws Exception {
        HashMap<String,Object> result = new HashMap<>();
        if (memberService.update(member) == 0) {
            result.put("status", "fail");
            result.put("error", "해당 아이디가 없습니다.");
        } else {
            result.put("status", "success");
        }
        return result;
    }
    
    @RequestMapping(value = "login/{email}", method = RequestMethod.POST, consumes="application/json")
    public Map<?, ?> view(@PathVariable String email, @RequestBody Member member) throws Exception {
        HashMap<String,Object> data = new HashMap<>();
        System.out.println(email);
        System.out.println(member.getPassword());
        
        return data;
    }

}

