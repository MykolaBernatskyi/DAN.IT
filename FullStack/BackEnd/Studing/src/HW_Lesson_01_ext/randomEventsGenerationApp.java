package HW_Lesson_01_ext;

import java.util.Scanner;
import java.util.Arrays;

public class randomEventsGenerationApp {

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

    public static int inputYear(){
        String year;
        do {
            Scanner in = new Scanner(System.in);
            System.out.println("Input your answer!");
            year = in.next();
        }
        while (!isInteger(year) );
        return Integer.parseInt(year);
    }

    public static int generationRandomNumber(int min, int max){
        return (int)(Math.random()*(max-min)+1);
    }

    public static int[] compareYears(int random, int min, int max, String question){
        int [] array = new int [max - min +1];
        int i = 0;
        //System.out.printf("Random year = %d\n", random);
        do {
            System.out.println(question);
            array[i] = inputYear();
            if (array[i] < random) System.out.println("Your year is too small. Please, try again.");
            if (array[i] > random) System.out.println("Your year is too big. Please, try again");
            i++;
        } while (!(random == array[i-1]));

        int size = i;
        int [] inputAnswers;
        inputAnswers = new int [size];
        System.arraycopy(array, 0, inputAnswers, 0, inputAnswers.length);
        return inputAnswers;
    }

    public static void main(String[] args) {
        String name = inputName();
        System.out.println("Let the game begin!");
        int eventFirst = 0;
        int eventLast = 5;
        int number = generationRandomNumber(eventFirst,eventLast);

        String[][] matrixEvents = new String[6][2];
        matrixEvents[0][0] = "When did the World War I begin?";
        matrixEvents[0][1] = "1914";
        matrixEvents[1][0] = "When did the World War I end?";
        matrixEvents[1][1] = "1918";
        matrixEvents[2][0] = "When did the World War II begin?";
        matrixEvents[2][1] = "1939";
        matrixEvents[3][0] = "When did the World War II end?";
        matrixEvents[3][1] = "1945";
        matrixEvents[4][0] = "When did the Cold War begin?";
        matrixEvents[4][1] = "1947";
        matrixEvents[5][0] = "When did the Cold War end?";
        matrixEvents[5][1] = "1991";
        int yearStart = 1900;
        int yearEnd = 2000;
        int eventYear = Integer.parseInt(matrixEvents[number][1]);
        String eventQuestion = matrixEvents[number][0];
        int[] arrayChoices = compareYears(eventYear, yearStart, yearEnd, eventQuestion);
        System.out.printf("Congratulations, Dear {%s}!, correct year is {%d}!\n", name, eventYear);
        Arrays.sort(arrayChoices);
        System.out.printf("Your numbers: %s",
                Arrays.toString(arrayChoices));
    }
}
