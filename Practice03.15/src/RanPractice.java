
//ctrl+shift+O

import java.util.Random;

public class RanPractice {
	public static void main(String[] args) {
		
		Random r = new Random();
		int randomValue = r.nextInt(100);
		
		
		int met = randomValue % 2;
		
//���1	System.out.print("������ ����:");
		System.out.println(randomValue);
//  	System.out.print("������ ����:");
//		System.out.println(met);
		
		
//���2	
		System.out.println("�������� : " + randomValue);
    	System.out.println("������ :" + (randomValue % 2));	

//���3
//		System.out.printf("������ ����: %d", randomValue);
//		System.out.println('\t');
//		System.out.printf("������ ����: %d", met);

//���4
		if (randomValue % 2 ==1) {
			System.out.println("Ȧ�� �Դϴ�.");
		} else {
			System.out.println("�ۼ� �Դϴ�.");
		}
		
	}

}
