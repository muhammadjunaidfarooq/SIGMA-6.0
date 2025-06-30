public class ClassPractice {

    // Max Subarray sum
    public static void max_sum(int num[]){
        int currentSum = 0;
        int maxSum= Integer.MIN_VALUE;
        for (int i=0; i<num.length; i++){
            int start = i;
            for(int j=i; j<num.length; j++){
                int end = j;
                currentSum = 0;
                for (int k=start; k<=end; k++){
                    currentSum += num[k];
                }
                System.out.println(currentSum);
                if(currentSum > maxSum){
                    maxSum = currentSum;
                }
            }
        }
        System.out.println("The max subarray sum is: " + maxSum);
    }
    public static void main(String[] args) {
        int num[] = {2, 4, 6, 8, 10};
        max_sum(num);
        
    }
    
}
