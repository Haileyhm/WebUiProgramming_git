import java.util.Random;
import java.util.Scanner;

public class RockScissorsPaper {
	public static void main(String[] args) {
		
//		int scissors = 0 ;
//		int rock = 1;
//		int paper = 2;
		
	
	    System.out.println("����,����,�� �� �ϳ��� �Է����ּ���. (������ 0, ������ 1, ���� 2) : ");
		Scanner s = new Scanner(System.in);	
		int UserIn = s.nextInt();
        UserIn = UserIn % 3; //����ڰ� 0~2 �Է� �� �� ��� ����
		
		
//������� �����Է� ��Ȳ ����		
//		String UserInString;
//	    UserInString = s.nextInt();	
//		
	    
	 	Random r = new Random();
		int Com = r.nextInt(3);
		
		
//�����������ϱ�, �ܼ��� ũ����ϸ� Ʋ��	
		
//		if (UserIn > Com) {
//			System.out.print("����ڰ� �� �̰���ϴ�");
//		} else if (UserIn == Com) {
//			System.out.println("�����ϴ�");
//		} else {
//		System.out.print("��ǻ�Ͱ� �̰���ϴ�");		
//	}

//������ ���-> �̰� ������ �� ����	
//	if (UserIn == Com) {
//		System.out.println("�ٲ����ϴ�");
//	} else if (UserIn == 0 && Com == 1) {
//		System.out.println("��ǻ�Ͱ� �̰���ϴ�");
//	} else if (UserIn == 0 && Com == 2) {
//		System.out.println("����ڰ� �̰���ϴ�");
//	} else if (UserIn == 1 && Com == 0) {
//		System.out.println("����ڰ� �̰���ϴ�");
//	} else if (UserIn == 1 && Com == 2) {
//		System.out.println("��ǻ�Ͱ� �̰���ϴ�");
//	} else if (UserIn == 2 && Com == 0) {
//		System.out.println("��ǻ�Ͱ� �̰���ϴ�");
//	} else if (UserIn == 2 && Com == 1) {
//		System.out.println("����ڰ� �̰���ϴ�");
	} 
		
//���ڷ� �Է��ϱ� -> ���ڿ��� �̷��� ����ϴ� �� �ƴ϶� �Լ���������
		
	
//		if (UserIn == Com) {
//		System.out.println("�ٲ����ϴ�");
//	} else if (UserIn == 0 && Com == 1) {
//		System.out.println("��ǻ�Ͱ� �̰���ϴ�");
//	} else if (UserIn == 0 && Com == 2) {
//		System.out.println("����ڰ� �̰���ϴ�");
//	} else if (UserIn == 1 && Com == 0) {
//		System.out.println("����ڰ� �̰���ϴ�");
//	} else if (UserIn == 1 && Com == 2) {
//		System.out.println("��ǻ�Ͱ� �̰���ϴ�");
//	} else if (UserIn == 2 && Com == 0) {
//		System.out.println("��ǻ�Ͱ� �̰���ϴ�");
//	} else if (UserIn == 2 && Com == 1) {
//		System.out.println("����ڰ� �̰���ϴ�");
//	}	
		
	}
}





