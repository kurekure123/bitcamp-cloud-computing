package bitcamp.pms.annotation;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Retention(RetentionPolicy.RUNTIME)
public @interface Component {
	// 지정이 안되면 빈문자열을 타게 설정 
	String value() default "";
}
