// import java.util.*;

public class ClassPractice {

    // Linear Search
    public static int LinearSearch(int numbers[], int key) {
        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] == key) {
                return i;
            }
        }
        return -1;
    }
    public static int SelectingMenu(String menu[], String choice) {
        for(int i=0; i<menu.length; i++){
            if(menu[i].equals(choice)){
                return i;
            }
        }
        return -1;
    }

    // Largest in array
    public static int largeNum(int numArray[]){
        int largestNumber = Integer.MIN_VALUE;
        for(int i=0; i<numArray.length; i++){
            if (numArray[i] > largestNumber){
                largestNumber = numArray[i];
            }
        }
        return largestNumber;
    }

    // Binary Search
    public static int binary_search(int num[], int key){
        int start = 0, end = num.length-1;
        while(start<=end){
            int mid = (start + end)/2;
            // comparisons
            if (num[mid] == key){  //found
                return mid;
            } 
            if(num[mid] < key){ // right
                start = mid +1;
            } else {  // left
                end = mid -1;
            }
        }
        return -1;
    }

    // Reverse an array
    public static void reverse_array(int numbers[]){
        int first = 0, last = numbers.length-1;
        while(first < last){
            int temp = numbers[last];
            numbers[last] = numbers[first];
            numbers[first] = temp;
            first++;
            last--;
        }
    }

    // Pairs in an array
    public static void pairs_in_array(int num[]){
        int tp = 0;
        for(int i=0; i<num.length; i++){
            int curr = num[i];
            for(int j=i+1; j<num.length; j++){
                System.out.print("(" + curr + "," + num[j] + ")");
                tp++;
            }
            System.out.println();
        }
        System.out.println("Total pairs = " + tp);
    }

    // printing subarrays
    public static void subarrays(int number[]) {
        int ts = 0;
        for (int i=0; i<number.length; i++){
            int start = i;
            for(int j=i; j<number.length; j++){
                int end = j;
                for(int k=start; k<=end; k++){
                    System.out.print(number[k] + " ");
                }
                ts++;
                System.out.println();
            }
            System.out.println();
        }
        System.out.println("Total subarrays = " + ts);
    }

    public static void main(String args[]) {
        // Scanner sc = new Scanner(System.in);
        // int numbers[] = {2, 4, 6, 8, 10, 12, 14, 16};
        // int key = 20;
        // int index = LinearSearch(numbers, key);
        // if(index == -1){
        // System.out.println("NOT FOUND");
        // } else {
        // System.out.println("The index is: "+ index);
        // }

        // String menu[] = { "samosa", "mangojuice", "pepsi", "applejuice" };
        // String choice = sc.nextLine();        
        // int index = SelectingMenu(menu, choice);
        // if(index == -1){
        // System.out.println("NOT FOUND");
        // } else {
        // System.out.println("The index is: "+ index);
        // }
        
        // int numArray[] = {7, 9, 4, 2, 66, 0 ,8};
        // System.out.println(largeNum(numArray)); 

        // int num[] = {2, 5, 7, 8, 11, 23, 45, 78, 98, 321, 567, 987};
        // int key = 567;
        // int index = binary_search(num, key);
        // if(index == -1){
        //     System.out.println("NOT FOUND");
        // }else{
        //     System.out.println("Index of key is : " + index);
        // } 
        
        // int numbers[] = {2, 4, 6, 8, 10, 78}; 
        // reverse_array(numbers);
        // for(int i=0; i<numbers.length; i++){
        //     System.out.print(numbers[i] + " ");
        // }

        // int num[] = {2, 4, 6, 8, 10};
        // pairs_in_array(num);

        int number[] = {2, 4, 6, 8, 10};
        subarrays(number);

        
    }

}
