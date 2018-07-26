import bitcamp.pms.context.ApplicationContext;

public class Tast {

	public static void main(String[] args) throws Exception {
        
        ApplicationContext iocContainer = 
                new ApplicationContext("bitcamp.pms");
        
        Object obj = iocContainer.getBean("/member/view");
        System.out.println(obj.getClass().getName());
        
    }
	
	/*  static HashMap<String, Object> objPool = new HashMap<>();
	    
	    public static void main(String[] args) throws Exception {
	        ClassLoader defaultClassLoader = 
	                ClassLoader.getSystemClassLoader();
	        
	        URL url = defaultClassLoader.getResource(
	                "bitcamp/pms");
	        File file = new File(url.toURI());
	        
	        findClass(file, "bitcamp.pms");
	        
	        //의존객체 주입
	        injectDependency();
	    }
	    
	    private static void injectDependency() {
	    	
		}

		static void findClass(File path, String packageName) {
	        
	        File[] subFiles = path.listFiles((File pathname) -> {
	            if (pathname.isDirectory())
	                return true;
	            if (pathname.isFile() && 
	                    pathname.getName().endsWith(".class")) 
	                return true;
	            return false;
	        });
	        
	        for (File subFile : subFiles) {
	            if (subFile.isFile()) {
	                String className = packageName + "." + 
	                        subFile.getName().replace(".class", "");
	                createObject(className);
	            } else {
	                findClass(subFile, 
	                        packageName + "." + subFile.getName());
	            }
	        }
	    }

	    private static void createObject(String className) {
	        try {
	            // 클래스 이름(패키지명 + 클래스명)으로 .class 파일을 찾아 로딩한다.
	            Class<?> clazz = Class.forName(className);
	            
	            // @Component, @Controller, @Repository 애노테이션이 붙은 클래스가 아니라면
	            // 객체를 생성하지 않는다.
	            if(clazz.getAnnotation(Component.class) == null ||
	            		clazz.getAnnotation(Controller.class) == null||
	            		clazz.getAnnotation(Repository.class) == null )
	            	return;
	            //
	            String objName = getObjectName(clazz);
	            
	            // 클래스 정보를 보고 기본 생성자를 알아낸다.
	            Constructor<?> constructor = clazz.getConstructor();
	            
	            // 기본 생성자를 호출하여 객체를 생성한 후 객체 보관소에 저장한다.
	            objPool.put(objName, constructor.newInstance());
	            
	        } catch (Exception e) {
	            System.out.println(e.getMessage());
	        }
	    }
	    
	    private static String getObjectName(Class<?> clazz) throws Exception{
	    	   //객체를 저장할 때 사용할 이름을 알아낸다
            String objName = null;
            Component compAnno = (Component) clazz.getAnnotation(Component.class);
            if(compAnno != null)
            	objName = compAnno.value();
            
            Controller ctrlAnno = (Controller) clazz.getAnnotation(Controller.class);
            if(ctrlAnno != null)
            	objName = ctrlAnno.value();
            
            Repository repoAnno = (Repository) clazz.getAnnotation(Repository.class);
            if(repoAnno != null)
            	objName = repoAnno.value();
            
            System.out.println(objName);
            
            if(objName.length() == 0) {
            	return clazz.getCanonicalName();
            }else {
            	return objName;
            }
	    } 2*/
	    
	   

	/*public static void main(String[] args) throws Exception{
		ClassLoader defaultClassLoader = ClassLoader.getSystemClassLoader();
		
		URL url = defaultClassLoader.getResource("bitcamp/pms");
		System.out.println(url.toString());
		
		// URL 규칙에 의해 리턴
		// url에서 Uri 정보를 얻어서 파일 객체
		File file = new File(url.toURI());
		System.out.println(file.getAbsolutePath());
		System.out.println(file.isDirectory());
		String[] files = file.list();
		for(String filename : files) {
			System.out.println(filename);
		}
		findClass(file, "bicamp.main");
	}

		static void findClass(File path, String pakageName) {
			File[] subFiles = path.listFiles((File pathname)->{
				if(pathname.isDirectory());
				return true;
				
			});
			
			for(File subFile : subFiles) {
				if(subFile.isFile()) {
					System.out.println(pakageName+"."+subFile.getName());
					createObject(pakageName);
				}else {
					findClass(subFile, pakageName + "." + subFile.getName());
				}
			}
		}

		private static void createObject(String className) {
			try {
				Class clazz = Class.forName(className);
				
				Constructor constructors = clazz.getConstructors();
					objPool.add(constructor.newInstance());
			
		}*/
}
		
