
public class TrueorFalse {
	public static void main(String[] args) {
		
		int a = 1;
		int b = 3;
        boolean c;
        
//�񱳿�����
        c = a == b;
        System.out.println(c);
        
//��������
        c = (a != b) || (a > b);
        System.out.println(c);
               
        
//if�� - a=1 �� �� ���� ù ������ ����Ǵ� �� ����
        if (a > b) {
        	System.out.println("case1");
        
        }   else if (a == 1) {
        	System.out.println("s case");
        		
     	}   else {
     		System.out.println("other");
     	}
     	}


}
