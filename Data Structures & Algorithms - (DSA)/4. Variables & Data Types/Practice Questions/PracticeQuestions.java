import java.util.*;

public class PracticeQuestions {
    public static void main(String args[]) {
        Scanner sc = new Scanner (System.in);
        // System.out.print("Enter first number: ");
        // float A = sc.nextFloat();
        // System.out.print("Enter second number: ");
        // float B = sc.nextFloat();
        // System.out.print("Enter third number: ");
        // float C = sc.nextFloat();

        // float average = (A+B+C) / 3;

        // System.out.print("The average is : " + average);

        // --------------------------------------------------------------

        // System.out.print("Enter side of the square: ");
        // float side = sc.nextFloat();
        // System.out.print("The area of square is: " + (side * side));        

        // --------------------------------------------------------------

        System.out.print("Enter the price of pencil: ");
        float pencil = sc.nextFloat();
        System.out.print("Enter the price of pen: ");
        float pen = sc.nextFloat();        
        System.out.print("Enter the price of eraser: ");
        float eraser = sc.nextFloat();
        float total = pencil + pen + eraser;
        System.out.print("Your total amount including 18% GST is : " + ((total * 18 / 100)  + total));
        
        // ---------------------------------------------------------------------------------

        // byte b = 4;
        // char c = 'a';
        // short s = 512;
        // int i = 1000;
        // float f = 3.14f;
        // double d = 99.9954;
        // double result = (f * b) + (i % c) - (d * s);
        // System.out.println(result);

        // ---------------------------------------------------------------------
 
        //     int $ = 24;  // This is a valid identifier...
        //     System.out.println("This value is assign to dollar sign ($) that has an integer data type : " + $);
    }
}