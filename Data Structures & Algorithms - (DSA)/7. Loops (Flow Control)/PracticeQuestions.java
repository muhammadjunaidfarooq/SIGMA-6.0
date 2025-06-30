import java.util.*;

public class PracticeQuestions {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);

        // for(int i=0; i<5; i++) {
        // System.out.println("Hello");
        // i+=2;
        // }

        // -------------------------------------------------------

        // int evenCounter = 0;
        // int evenSum = 0;
        // String even = "";

        // int oddCounter = 0;
        // int oddSum = 0;
        // String odd = "";

        // int choice;

        // do{
        // System.out.print("Enter the number: ");
        // int n = sc.nextInt();
        // if (n%2 == 0){
        // evenCounter = evenCounter + 1;
        // evenSum = evenSum + n;
        // String num = Integer.toString(n);
        // even = even + " " + num;
        // } else {
        // oddCounter = oddCounter + 1;
        // oddSum = oddSum + n;
        // String num = Integer.toString(n);
        // odd = odd + " " + num;
        // }
        // System.out.print("Do you want to continue? press 1 for yes and 0 for no: ");
        // choice = sc.nextInt();
        // } while (choice == 1);

        // System.out.println("\nEven:\nTotal Input of even numbers: " + evenCounter +
        // ",\nNumbers are: " + even + ",\nThe sum of even numbers: " + evenSum +"\n");
        // System.out.println("Odd:\nTotal Input of odd numbers: " + oddCounter +
        // ",\nNumbers are: " + odd + ",\nThe sum of even numbers: " + oddSum);

        // -------------------------------------------------------------------------------------------------------------------------------------------------------------

        // long factorial = 1;
        // int num = sc.nextInt();
        // for (int i = 1; i <= num; i++) {
        //     factorial = factorial * i;
        // }
        // System.out.println("The factorial of " + num + " is: " + factorial);
        
        // ----------------------------------------------------------------------------------------------

        // int num = sc.nextInt();
        // for(int i=1; i<=10; i++){
        //     System.out.println(num*i);
        // }
        
        // ------------------------------------------------------------------------------------

        // // Fizz Buzz     

        // int num = sc.nextInt();
        // for(int i=1; i<=num; i++) {
        //     if(i%3==0 && i%5==0) {
        //         System.out.println("FizzBuzz");
        //     } else if(i%3==0) {
        //         System.out.println("Fizz");
        //     } else if(i%5==0){
        //         System.out.println("Buzz");
        //     } else {
        //         System.out.println(i);
        //     }
        // }

        int counter3 = 0;
        int counter5 = 0;
        int n = sc.nextInt();
        for(int i=0; i<n; i++){
            counter3++; counter5++;
            if(counter3 != 3 && counter5 != 5){
                System.out.println(i+" ");
            }
            if(counter3 == 3){
                System.out.println("Fizz");
                counter3 = 0;
            }
            if(counter5 == 5){
                System.out.println("Buzz");
                counter5 = 0;
            }
        }
    }
}