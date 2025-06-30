import java.util.*;

public class ClassPractice {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);

        // Income Tax calculater
 
        // System.out.print("What is your Income? ");
        // int income = sc.nextInt();  
        // int tax;
        // if(income < 500000) {
        //     tax = (int) ((0/100) * income);
        // } else if(income >= 500000 && income <= 1000000){
        //     tax =  (int)(0.2 * income);
        // } else {
        //     tax = (int) ((0.3) * income);
        // }
        // System.out.println("Your tax is : " + tax);

        // Finding the largest of three numbers

        // int num1 = -4;
        // int num2 = 0;
        // int num3 = -1;
        // if (num1>=num2 && num1>=num3) {
        //     System.out.println(num1);
        // } else if (num2>=num3) {
        //     System.out.println(num2);
        // } else {
        //     System.out.println(num3);
        // }

        // swaping the values of a and b without creating the new variable

        // int a = 10;
        // int b = 15;
        // a = a + b;
        // b = a - b;
        // a = a - b;
        // System.out.println(a);

        // // Ternary Operator ---------------------------------------------------------

        // Check if a studen will pass or fail?

        // System.out.print("please enter your marks: ");
        // float marks = sc.nextFloat();
        // String result = (marks >= 33)? "Pass" : "Fail";
        // System.out.println(result);

        // // Switch statements --------------------------------------------------

        // System.out.print("Enter a character: ");
        // String input = sc.next();
        // char ch = input.charAt(0);
        // switch(ch) {
        //     case 's': System.out.println("Samosa");
        //     break;
        //     case 'b': System.out.println("Burger");
        //     break;
        //     case 'p': System.out.println("Pizza");
        //     break;
        //     case 'a': System.out.println("Apples");
        //     break;
        //     default: System.out.println("(: I wake Up :)");
        // }

        // Making a calculater using switch statements

        System.out.print("Enter first operend: ");
        float operend_1 = sc.nextFloat();
        System.out.print("Enter second operend: ");
        float operend_2 = sc.nextFloat();
        System.out.print("Please give which function is performed (+, -, *, /, %): --> ");
        String input = sc.next();
        char operation = input.charAt(0);
        switch (operation) {
            case '+' : System.out.println(operend_1 + operend_2);
            break;
            case '-' : System.out.println(operend_1 - operend_2);
            break;
            case '*' : System.out.println(operend_1 * operend_2);
            break;
            case '/' : System.out.println(operend_1 / operend_2);
            break;
            case '%' : System.out.println(operend_1 % operend_2);
            break;
            default : System.out.println("please give a valid input..");        
        }
    } 
}