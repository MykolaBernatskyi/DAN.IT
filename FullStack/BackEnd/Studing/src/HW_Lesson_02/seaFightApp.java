package HW_Lesson_02;

import java.util.Scanner;

public class seaFightApp {

    public static boolean isInteger(String s) {
        return isInteger(s, 10);
    }

    public static boolean isInteger(String s, int radix) {
        if (s.isEmpty()) return false;
        for (int i = 0; i < s.length(); i++) {
            if (i == 0 && s.charAt(i) == '-') {
                if (s.length() == 1) return false;
                else continue;
            }
            if (Character.digit(s.charAt(i), radix) < 0) return false;
        }
        return true;
    }

    public static int inputCoordinate(int min, int max, String s) {
        String coordinate;
        do {
            Scanner in = new Scanner(System.in);
            System.out.println(s);
            coordinate = in.next();
        }
        while (!(isInteger(coordinate) && (min <= Integer.parseInt(coordinate) && Integer.parseInt(coordinate) <= max)));
        return Integer.parseInt(coordinate);
    }

    public static int generationRandomNumber(int min, int max) {
        return (int) (Math.random() * (max - min) + 1);
    }

    public static void print(String s) {
        System.out.print(s);
    }

    public static void printDoubleArray(char[][] array) {
        for (char[] chars : array) {
            for (char aChar : chars) {
                System.out.print(aChar + "|");
            }
            System.out.println();
        }
    }

    public static char[][] createDoubleArray(int height, int weight, char symbol) {
        char[][] array;
        array = new char[height + 1][weight + 1];
        for (int x = 0; x < height + 1; x++) {
            for (int y = 0; y < weight + 1; y++) {
                if (y == 0) array[x][y] = Character.forDigit(x, 10);
                else {
                    if (x == 0) array[x][y] = Character.forDigit(y, 10);
                    else array[x][y] = symbol;
                }
            }
        }
        return array;
    }


    public static void main(String[] args) {

        int WIDTH = 5;
        int HEIGHT = 5;
        char[][] seaFight = createDoubleArray(HEIGHT, WIDTH, '-');

        int horizTarget = generationRandomNumber(1, 6);
        int vertTarget = generationRandomNumber(1, 6);

        //System.out.printf("horizTarget = %d, vertTarget = %d \n", horizTarget, vertTarget);

        System.out.println("All set. Get ready to rumble");
        int minRange = 1;
        int maxRange = 5;
        int count = 0;
        do {
            int h = inputCoordinate(minRange, maxRange, "Please, input the fighting line by horizontal:");
            int v = inputCoordinate(minRange, maxRange, "Please, input the fighting line by vertical:");
            if (h == horizTarget && v == vertTarget) {
                count++;
                seaFight[v][h] = 'x';
                print("You have won! \n");
            } else {
                seaFight[v][h] = '*';
                print("Look at your result and try again \n");
            }
            printDoubleArray(seaFight);
        }
        while (count == 0);
    }
}
