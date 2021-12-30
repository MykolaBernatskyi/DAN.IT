package HW_Lesson_01;

import java.util.Scanner;

public class randomNumbersGenerationApp {

    public static String inputName(){
        Scanner in = new Scanner(System.in);
        System.out.println("Please, input yours Name:");
        return in.nextLine();
    }

    public static boolean isInteger(String s) {
        return isInteger(s,10);
    }

    public static boolean isInteger(String s, int radix) {
        if(s.isEmpty()) return false;
        for (int i = 0; i < s.length(); i++){
            if(i == 0 && s.charAt(i) == '-'){
                if(s.length() == 1) return false;
                else continue;
            }
            if (Character.digit(s.charAt(i),radix) < 0) return false;
        }
        return true;
    }

    public static int inputNumber(Scanner input){
        String number;
        //Scanner in = new Scanner(System.in);
        do {
            System.out.println("Input your number");
            number = input.next();
        }
        while (!isInteger(number) );
        return Integer.parseInt(number);
    }

    public static int generationRandomNumber(int min, int max){
        return (int)(Math.random()*(max-min)+1);
    }

    public static int[] compareNumber(int random, int min, int max){
        int [] array = new int [max - min +1];
        int i = 0;
        //System.out.printf("Random number = %d\n", random);
        Scanner in = new Scanner(System.in);
        do {
            array[i] = inputNumber(in);
            if (array[i] < random) System.out.println("Your number is too small. Please, try again.");
            if (array[i] > random) System.out.println("Your number is too big. Please, try again");
            i++;
        } while (!(random == array[i-1]));

        int size = i;
        int [] inputNumbers;
        inputNumbers = new int [size];
        System.arraycopy(array, 0, inputNumbers, 0, inputNumbers.length);
        return inputNumbers;
    }

    public static void main(String[] args) {

        String name = inputName();
        System.out.println("Let the game begin!");
        int min =0;
        int max = 100;
        int number = generationRandomNumber(min,max);
        //

        //

        int[] arrayChoices = compareNumber(number, min, max);
        System.out.printf("Congratulations, Dear {%s}!, correct number is {%d}!\n", name, number);
        for (int k=0; k < (arrayChoices.length); k++) {
           System.out.printf("You input %d times number %d\n", k+1, arrayChoices[k]);
        }
    }
}
