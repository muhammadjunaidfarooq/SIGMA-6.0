
import java.util.*;

public class ClassPractice {

    // swap-- value
    public static void swapValue(int a, int b) {
        int temp = a;
        a = b;
        b = temp;
        System.out.println("a = " + a);
        System.out.println("b = " + b);
    }

    // Finding product of a & b
    public static int product(int a, int b) {
        int product = a * b;
        return product;
    }

    // Calculate the factorial of number n
    public static long factorial(int num) {
        long factorial = 1;
        for (int i = 1; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }

    // Binomial coefficient
    public static double BinobmialCoefficient(int n, int r) {
        long factorialOfn = 1;
        for (int i = 1; i <= n; i++) {
            factorialOfn *= i;
        }

        long factorialOfr = 1;
        for (int i = 1; i <= r; i++) {
            factorialOfr *= i;
        }

        double difference = n - r;

        long factorialOfDifference = 1;
        for (int i = 1; i <= difference; i++) {
            factorialOfDifference *= i;
        }

        double BinobmialCoefficient = factorialOfn / (factorialOfr * factorialOfDifference);

        return BinobmialCoefficient;
    }

    public static int sum(int a, int b) {
        return a + b;
    }

    public static int sum(int a, int b, int c) {
        return a + b + c;
    }

    public static int add(int a, int b) {
        return a + b;
    }

    public static float add(float a, float b) {
        return a + b;
    }

    // Check if a number is prime or not
    public static boolean checkPrime(int number) {
        if (number == 2) {
            return true;
        } else {
            for (int i = 2; i <= Math.sqrt(number); i++) {
                if (number % i == 0) {
                    return false;
                }
            }
        }
        return true;
    }

    // Print all prime numbers in range n
    public static void primeRange(int num) {
        for (int i = 2; i < num; i++) {
            if (checkPrime(i)) {
                System.out.print(i + " ");
            }
        }
    }

    // Converting the binary to decimal
    public static void binToDecimal(int binNumber) {
        int binaryNumber = binNumber;
        int decimal = 0;
        int power = 0;
        while (binNumber > 0) {
            int lastDigit = binNumber % 10;
            decimal = decimal + (int) (lastDigit * Math.pow(2, power));
            binNumber = binNumber / 10;
            power++;
        }
        System.out.println("Decimal of " + binaryNumber + " = " + decimal);
    }

    // Converting decimal to binary
    public static void decToBin(int n) {
        int num = n;
        int pow = 0;
        int binary = 0;
        while (n > 0) {
            int rem = n % 2;
            binary = binary + (int) (rem * Math.pow(10, pow));
            n = n / 2;
            pow++;
        }
        System.out.println("Binary of " + num + " = " + binary);
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        decToBin(15);
    }
}
