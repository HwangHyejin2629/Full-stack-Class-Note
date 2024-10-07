package ex03;

import java.util.HashMap;
import java.util.Map;

class Car{};
class SportCar extends Car{};
class Truck extends Car{};

class Engine{};

class AppContext{
	Map map;//객체 저장소
	public AppContext() {
		map=new HashMap(); //import 해야함 / 컬렉션 map 데이터 여러개 저장하는 구조 key,값  put으로 넣고, get으로 얻는다
		map.put("car",new SportCar()); //new -> Heap 할당
		map.put("engine", new Engine());
	}
	Object getBean(String key) {
		return map.get(key);		
	}
}
public class Main {
	public static void main(String[] args) {
		AppContext ac=new AppContext();
		Car car=(Car)ac.getBean("car");
		System.out.println("car="+car);
		
		Engine engine=(Engine)ac.getBean("engine");
		System.out.println("engine="+engine);
	}
	

}
