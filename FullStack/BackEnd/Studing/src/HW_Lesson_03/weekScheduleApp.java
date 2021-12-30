package HW_Lesson_03;

import java.util.Scanner;

public class weekScheduleApp {

    public static int chosenDay(String[] array, String chose) {
        int rez = 8;
        for (int i = 0; i < array.length; i++){
            if (chose.equals(array[i])) return i;
        }
        return rez;
    }

    public static void printTasks(int choseVariant, String[][] array){
        System.out.printf("Your tasks for %s: %s. \n", array[choseVariant][0], array[choseVariant][1]);
    }

    public static void main(String[] args) {

        String[][] schedule = new String[7][2];
        schedule[0][0] = "Sunday";
        schedule[0][1] = "to enjoy staying be at home, when I don't have to hurry anywhere";
        schedule[1][0] = "Monday";
        schedule[1][1] = "visit our grandparents or relatives, or just simply take a nap";
        schedule[2][0] = "Tuesday";
        schedule[2][1] = "go rollerblading near the Opera theatre";
        schedule[3][0] = "Wednesday";
        schedule[3][1] = "watch video and music programs";
        schedule[4][0] = "Thursday";
        schedule[4][1] = "go to the fitness center or gym";
        schedule[5][0] = "Friday";
        schedule[5][1] = "go to an art exhibition, to the theatre, to the concert";
        schedule[6][0] = "Saturday";
        schedule[6][1] = "stay at home and watch TV, listen to the music, read the books";

        String[] dayVariants = {
                "sunday",
                "monday",
                "tuesday",
                "wednesday",
                "thursday",
                "friday",
                "saturday",
                "exit"
        };

        Scanner in = new Scanner(System.in);
        boolean exit = true;
        do {
            int chose;
            System.out.println("Please, input the day of the week:");
            String day = in.nextLine().trim().toLowerCase();
            chose = chosenDay(dayVariants, day);
            switch (chose) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    printTasks(chose, schedule);
                    break;
                case 7:
                    exit = false;
                    break;
                default:
                    System.out.println("Sorry, I don't understand you, please try again.");
            }
        }
        while (exit);
    }
}
