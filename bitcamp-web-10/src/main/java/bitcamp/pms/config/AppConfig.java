package bitcamp.pms.config;

import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
	public AppConfig() {
		System.out.println("AppConfig() 호출됨");
	}
}
