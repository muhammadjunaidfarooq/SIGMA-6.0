import java.util.*;

public class ClassPractice {
    public static void main(String args[]) {
        Scanner sc = new Scanner (System.in);

        // int counter = 0;
        // while (counter < 100) {
        //     System.out.println("Hello World!");
        //     counter ++;
        // }

        // Print numbers from 1 to 10

        // int number = 1;
        // while (number <= 10) {
        //     System.out.print(number + " ");
        //     number ++;
        // }

        // Print number from 1 to n

        // System.out.print("Enter number to print the counting: ");
        // int number = sc.nextInt();
        // int counter = 1;
        // while (counter <= number) {
        //     System.out.print(counter + " ");
        //     counter ++;
        // }

        // Print the sum of first n natural numbers

        // System.out.print("Enter number: ");
        // int number = sc.nextInt();
        // int counter = 1;
        // int sum = 0;
        // while (counter <= number) {
        //     sum += counter;
        //     counter ++;
        // }
        // System.out.println("Sum of first natutral numbers is: "  + sum);

        // Print square pattern

        // for (int i=0; i<4; i++) {
        //     System.out.println("* * * *");
        // }
        
        // int number = 1;
        // while (number <= 4) {
        //     System.out.println("* * * *");
        //     number ++;
        // }

        //  Print reverse of a number

        // int number = 10899;
        // String reverse = "";
        // for (int i=0; i<5; i++){
        //     int lastNumber = number%10;
        //     String str = Integer.toString(lastNumber);
        //     reverse = reverse + str;
        //     number = number/10;
        // }
        // System.out.println(reverse);


    // Printing the reverse of numbers

        // int number = 10899;
        // for (int i=0; i<5; i++){
        //     int lastNumber = number%10;
        //     System.out.println(lastNumber);
        //     number = number/10;
        // }

        // while (number > 0) {
        //     int lastNumber = number%10;
        //     System.out.println(lastNumber);
        //     number = number/10;
        // }

        // int number = 10899;
        // int reverse = 0;
        // while (number > 0) {
        //     int LastDigit = number%10;
        //     reverse = (reverse * 10) + LastDigit;
        //     number = number/10;
        // }
        // System.out.println(reverse);

        // // do while loop

        // int counter = 1;
        // do{
        //     System.out.println("Hello world!");
        //     counter++;
        // } while (counter <= 3);

        // // breat statement

        // for (int i=0; i<5; i++) {
        //     if (i == 3) {
        //         break;
        //     }
        //     System.out.println(i);
        // }
        // System.out.println("I am out of the loop");

        // //Keep entering numbers till user enter a multiple of 10

        // while (true) {
        //     int input = sc.nextInt();
        //     if(input%10 == 0) {
        //         break;
        //     }
        //     System.out.println("You entered the : " + input);
        // }
        // System.out.println("Now you out of the loop becaus, yue entered the multiple of 10");

        // // Continue statement

        // for (int i=1; i<=5; i++) {
        //     if (i == 3) {
        //         continue;
        //     }
        //     System.out.println(i);
        // }

        // //Display all numbers entered by the user except multiple of 10

        // while (true) {
        //     System.out.print("Enter numbers and for exit enter 0: ");
        //     int input = sc.nextInt();
        //     if (input == 0) {
        //         break;
        //     }
        //     if(input%10 == 0) {
        //         continue;
        //     }
        //     System.out.println("You entered the : " + input);
        // }
        // System.out.println("Now you out of the loop because, you press 0.");

        // // check if a number is prime or not

        int n = sc.nextInt();
        if(n==2) {
            System.out.println("Is a prime number");
        } else {
            boolean isPrime = true;
            for(int i=2; i<=Math.sqrt(n); i++){
                if(n%i == 0){
                    isPrime = false;
                }
            }
            if(isPrime == true){
            System.out.println("Is a prime number");
            } else {
            System.out.println("Is not a prime number");
            }
        }
        
    }
}