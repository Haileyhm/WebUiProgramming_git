import java.util.Scanner;

public class Lecturesun {
	public static void main(String[] args) {

		int P1_score;
		int P2_score;
		int P3_score;

		Scanner scan = new Scanner(System.in);

		System.out.println("���������� �Է����ּ��� (��3��)");
		System.out.println("ȫ�浿�� ���� ���� : ");
		P1_score = scan.nextInt();
		System.out.println("�Ӳ����� ���� ���� : ");
		P2_score = scan.nextInt();
		System.out.println("�������� ���� ���� : ");
		P3_score = scan.nextInt();

		if (P1_score > P2_score && P1_score > P3_score && P2_score > P3_score) {
			System.out.println("1�� : ȫ�浿 (" + P1_score + "��)");
			System.out.println(P2_score);
			System.out.println(P3_score);
		} else if (P1_score > P2_score && P1_score > P3_score && P3_score > P2_score) {
			System.out.println(P1_score);
			System.out.println(P3_score);
			System.out.println(P2_score);
		} else if (P2_score > P1_score && P2_score > P3_score && P1_score > P3_score) {
			System.out.println(P2_score);
			System.out.println(P1_score);
			System.out.println(P3_score);
		} else if (P2_score > P1_score && P2_score > P3_score && P3_score > P1_score) {
			System.out.println(P2_score);
			System.out.println(P3_score);
			System.out.println(P1_score);
		} else if (P3_score > P1_score && P3_score > P2_score && P1_score > P2_score) {
			System.out.println(P3_score);
			System.out.println(P1_score);
			System.out.println(P2_score);
		} else if (P3_score > P1_score && P3_score > P2_score && P2_score > P1_score) {
			System.out.println(P3_score);
			System.out.println(P2_score);
			System.out.println(P1_score);
		}
	}

	}
