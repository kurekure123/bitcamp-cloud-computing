package bitcamp.mvc.web;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.UUID;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import net.coobird.thumbnailator.Thumbnails;

@RestController
@RequestMapping("/ajax")
public class FileUploadRestController02 {
    
    @Autowired ServletContext sc;
    
    @RequestMapping("/upload02")
    public Object upload02(
            String name, 
            String age, 
            MultipartFile[] files) {
    	System.out.println("upload01() .. 호출됨");
 
        HashMap<String, Object> result = new HashMap<>();
        result.put("name", name);
        result.put("age", age);
        
        ArrayList<String> filenames = new ArrayList<>();
        result.put("filenames", filenames);
        
        try {
        	for (MultipartFile file : files) {
        		// 만약 파일이 비어있다면 다음 파일을 가져온다.
        		if(file.isEmpty()) continue;
        	       // 새 파일명 준비
                String newfilename = UUID.randomUUID().toString(); 
                String path = sc.getRealPath("/files/" + newfilename);
        		file.transferTo(new File(path));
        		filenames.add(newfilename);
				
        		
        		Thumbnails.of(path).size(20, 20).outputFormat("jpg").toFile(path + "_20X20");
        		Thumbnails.of(path).size(80, 80).outputFormat("jpg").toFile(path + "_80X80");
        		Thumbnails.of(path).size(120, 120).outputFormat("jpg").toFile(path + "_120X120");
			}
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }
}
