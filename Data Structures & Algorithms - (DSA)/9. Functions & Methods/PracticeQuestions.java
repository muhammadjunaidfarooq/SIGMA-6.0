import java.util.*;

public class PracticeQuestions {

    // Java method to compute the average of three numbers
    public static double average(int a, int b, int c) {
        double avg = (a + b + c) / 3;
        return avg;
    }

    // Write a method to check a number is even or odd
    public static boolean isEven(int num) {
        boolean even = true;
        if (num % 2 != 0) {
            even = false;
        } else {
            even = true;
        }
        return even;
    }

    // Check a number is palindrom or not
    public static boolean isPalindrom(int num){
        int palindrom = num;
        int reverse = 0;
        while (palindrom != 0) {
            int lastDigit = palindrom % 10;
            reverse = reverse * 10 + lastDigit;
            palindrom = palindrom / 10;
        }
        if (reverse == num){
            return true;
        } else {
            return false;
        }
    }

    // Java method to compute the sum of digits in an integer
    public static long sumOfDigits(long n){
        long sumOfDigit = 0;
        while (n>0){
            long lastDigit = n%10;
            sumOfDigit += lastDigit;
            n/= 10;
        }
        return sumOfDigit;
    }

    public static void main(String args[]) {
        // System.out.println(average(3, 4, 5));
        // System.out.println(isEven(555));
        // System.out.println(isPalindrom(123));
        System.out.println(sumOfDigits(63897268));

    }
}
