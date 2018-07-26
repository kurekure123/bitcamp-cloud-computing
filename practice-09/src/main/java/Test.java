/*import java.io.File;
import java.util.HashMap;

import org.apache.ibatis.io.Resources;

public class Test {
	HashMap<String, Object> objPool = new HashMap<>();

	public Test(String packageName)throws Exception{
		
		String filePath = packageName.replace('.', '/');
		
		File dir = Resources.getResourceAsFile(filePath);
		findClass(dir, packageName);
	}

	private void findClass(File dir, String packageName) {

		File[] subFiles = dir.listFiles((File pathname) -> {
			if (pathname.isDirectory())
				return true;
			if (pathname.isFile() && pathname.getName().endsWith(".class"))
				return true;
			return false;
		});

		for (File subFile : subFiles) {
			System.out.println(subFile);
			System.out.println(subFiles);
			if (subFile.isFile()) {
				String className = packageName + "." + subFile.getName().replace(".class", "");
			} else {
				findClass(subFile, packageName + "." + subFile.getName());
			}
		}

	}
}
*/