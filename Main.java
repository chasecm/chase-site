public class Main {
    public static void main(String[] args) {
        System.out.println("It works!");
        System.out.println(Math.sqrt(9));
        int age = 69;
System.out.println((age >= 18) ? "Allowed": "Not allowed");
        int result = add(8, 0);
            System.out.println("Result: " + result);
    }

    public static int add(int a, int b) {
       int k = a + b;
        if (k < 50) {
            System.out.println("Less than 50");
            return add(a, k);
        } else {
            System.out.println("Greater than or equal to 50");
            return k;
        }
    }
}