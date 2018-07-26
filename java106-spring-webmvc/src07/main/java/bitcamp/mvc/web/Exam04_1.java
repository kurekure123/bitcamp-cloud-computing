// @RequestMapping - HTTP 파라미터로 메서드 구분하기
package bitcamp.mvc.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller 
@RequestMapping("/exam04_1") 
public class Exam04_1 {
    
    // 파라미터 값의 존재 여부에 따라 메서드를 구분할 수 있다.
    // 테스트 방법: 
    // 예1) mvc/exam04_1/m1?name=aaa
    // 예2) mvc/exam04_1/m1?age=20
    // 예3) mvc/exam04_1/m1?name=aaa&age=20
	
	//배열 값을 줄때는 중괄호를 주는게 원칙이지만, 배열에 값이 1개일 경우 중괄호를 생략
    @GetMapping(value="get", params= "name")  
    @ResponseBody  
    public String m1() {
        return "Exam04_1.m1()";
    }
    
    @GetMapping(value="get", params="age")  
    @ResponseBody  
    public String m2() {
        return "Exam04_1.m2()";
    }
    
    @GetMapping(value="get", params={"name","age"})  
    @ResponseBody  
    public String m3() {
        return "Exam04_1.m3()";
    }
    
}







