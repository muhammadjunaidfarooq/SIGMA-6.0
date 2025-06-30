
import java.util.Scanner;

public class ClassPractice {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // print star pattern
        // for(int i=0; i<4; i++){
        //     for(int star=0; star<=i; star++){
        //         System.out.print("*");
        //     }
        //     System.out.println("");
        // }
        // Print inverted-star pattern
        // int n = 4;
        // for(int line=1; line<=n; line++){
        //     for(int star=1; star<=n-line+1; star++){
        //         System.out.print("*");
        //     }
        //     System.out.println("");
        // }
        // Print half-pyramid pattern
        // for(int line=1; line<=4; line++){
        //     for(int num=1; num<=line; num++){
        //         System.out.print(num);
        //     }
        //     System.out.println();
        // }
        // Print character pattern
        // int n = 4;
        // int asciiValue = 65;
        // for (int line = 1; line <= n; line++) {
        //     for (int ch = 1; ch <= line; ch++) {
        //         char character = (char) asciiValue;
        //         System.out.print(character);
        //         asciiValue = asciiValue + 1;
        //     }
        //     System.out.println();
        // }
        // int n = 7;
        // char ch = 'A';
        // for (int line = 1; line <= n; line++) {
        //     for (int character = 1; character <= line; character++) {
        //         System.out.print(ch);
        //         ch++;
        //     }
        //     System.out.println();
        // }
        // Printing a rectangle
        // int n = 3;
        // int m = 4;
        // for(int i=0; i<n; i++){
        //     for(int j=0; j<m; j++){
        //         System.out.print("*" + " ");
        //     }
        //     System.out.println();
        // }
        // A hollow rectangle
        // int n = 4;
        // int m = 5;
        // for (int i = 1; i <= n; i++) {
        //     for (int j = 1; j <= m; j++) {
        //         if (i == 1 || i == n || j == 1 || j == m) {
        //             System.out.print("*");
        //         } else {
        //             System.out.print(" ");
        //         }
        //     }
        //     System.out.println("");
        // }
        // int n = 4;
        // for (int i=n; i>=1; i--){
        //     for(int j=1; j<=i; j++){
        //         System.out.print("*");
        //     }
        //     System.out.println("");
        // }
        int n = 4;
        for (int i = 1; i <= n; i++) {
            int spaces = n - i, stars = i;
            for (int j = 1; j <= spaces; j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= stars; j++) {
                System.out.print("*");
            }
            System.out.println("");
        }
    }
}
