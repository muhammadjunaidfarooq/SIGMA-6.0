import java.util.*;

public class PracticeQuestions {
    public static void main(String args[]) {
        Scanner sc = new Scanner (System.in);

        // float number = sc.nextFloat();
        // String result = (number >= 0)? "Positive" : "Negative";
        // System.out.println(result);

        // -----------------------------------------------------------------

        // double temp = 103.5;
        // if (temp > 100) {
        //     System.out.println("You have fever.");
        // } else {
        //     System.out.println("You don't have fever.");
        // }

        // --------------------------------------------------------------------

        // System.out.print("Give the number of day 1 to 7: ");
        // int number = sc.nextInt();
        // switch (number) {
        //     case 1: System.out.println("Monday");
        //           break;
        //     case 2: System.out.println("Tuesday");
        //           break;
        //     case 3: System.out.println("Wednesday");
        //           break;
        //     case 4: System.out.println("Thursday");
        //           break;
        //     case 5: System.out.println("Friday");
        //           break;
        //     case 6: System.out.println("Saturday");
        //           break;
        //     case 7: System.out.println("Sunday");
        //           break;
        //     default: System.out.println("Please give valid input."); 
        // }

        // ---------------------------------------------------------------

        // int a = 63, b = 36;
        // boolean x = (a < b)? true: false;
        // int y = (a > b)? a : b;
        // System.out.println("X =  " + x);       
        // System.out.println("Y =  " + y);
        
        // ----------------------------------------------------------------

        System.out.print("Give the year to check leap or not: ");
        int year = sc.nextInt();
        // if (year%4 == 0) {
        //     if (year%100 == 0) {
        //         if (year%400 == 0) {
        //             System.out.println("Leap Year");
        //         } else {
        //         System.out.println("Leap Year");
        //         }
        //     } else {
        //         System.out.println("Leap Year");
        //     }
        // } else {
        //     System.out.println("Not a leap year");
        // }
        boolean x = (year%4) == 0;
        boolean y = (year%100) != 0;
        boolean z = (year%100 == 0) && (year%400 == 0);
        if (x && (y || z)) {
            System.out.println("Leap Year");
        } else {
            System.out.println("Not a leap year");
        }

    } 
}