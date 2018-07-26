package bitcamp.pms.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import bitcamp.pms.dao.BoardDao;
import bitcamp.pms.domain.Board;

@Controller
@RequestMapping("/board")
public class BoardController {
	
	@Autowired BoardDao boardDao;
	
	@RequestMapping("list")
	public String list(@RequestParam(defaultValue="1")int page, 
			@RequestParam(defaultValue="3") int size, Model model) throws Exception {
		
		if (page < 1) {
			page =1;
		}
		if(size <1 || size > 20) {
			size = 3;
		}
		// DB에서 가져올 데이터의 페이지 정보
		HashMap<String, Object> params = new HashMap<>();
		params.put("startIndex", (page - 1) * size);
		params.put("pageSize", size);
		// 기본 방식이지만 사용자가 악용시 서버에 부하 가해짐
/*		if (page > 0 && 
				size > 0) {
			
		}*/

		List<Board> list = boardDao.selectList(params);
		model.addAttribute("list", list);

		return "board/list";
	}
	
	@RequestMapping("view/{no}")
	public String view(@PathVariable int no, Model model) throws Exception{
		System.out.println("delete 안들어 간다굽쇼?"+no);
		
		Board board = boardDao.selectOne(no);
		model.addAttribute("board", board);
		
		return "board/view";
		
		
	} 
	
	@RequestMapping("delete")
	public String delete(int no) throws Exception{
		System.out.println("delete 안들어 간다굽쇼?"+no);
		
		boardDao.delete(no);
		return "redirect:list";
	}

	@RequestMapping("add")
	public String add(Board board) throws Exception{
		boardDao.insert(board);
		return "redirect:list";
	}
	
	@RequestMapping("update")
	public String update(Board board) throws Exception{

            
            if (boardDao.update(board) == 0) {
                return "board/updatefail";
            } else {
                return "redirect:list";
            }
            
    }
	
	@RequestMapping(value = "form" , method=RequestMethod.GET)
	public void form() {
	}
	
}
