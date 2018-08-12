package bitcamp.pms.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

@Component
@Lazy
public class Command {
	protected String table;
	protected String data1;
	protected String data2;
	protected String data3;
	private Member member;
	
	
}
