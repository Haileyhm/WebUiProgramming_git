import java.util.Random;

public class Ran2Practice {

	public static void main(String[] args) {
		
		Random r =  new Random ();
		Random r2 = new Random ();
		
		double ranValue = r.nextInt(10);
		double ranValue2 = r2.nextInt(50);
		
		System.out.println(ranValue);
		System.out.println(ranValue2);

		
		if (ranValue > ranValue2) {
		System.out.println("�� �߿� �� ū ���� %d �Դϴ�", ranValue );
		} else {
			System.out.println("�� �߿� �� ū ���� %d �Դϴ�", ranValue2);
		}
		
		
		
		
		
		
	}
}
