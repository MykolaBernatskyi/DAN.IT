package HW_Lesson_04;

public class Pet {

    // поля
//    private String species;         // вид животного (собака, кот и тд)
//    private String nickname;        // кличка
//    private int age; // возраст;
//    private int trickLevel;         // уровень хитрости (целое число от 0 до 100)
//    private String[] habits;        // привычки (массив строк)

    String species;         // вид животного (собака, кот и тд)
    String nickname;        // кличка
    int age; // возраст;
    int trickLevel;         // уровень хитрости (целое число от 0 до 100)
    String[] habits;        // привычки (массив строк)

    // методи
    private void eat(){             // метод покушать
        System.out.println("Я кушаю!");
    }
    private void respond(){             // метод отозваться
        System.out.printf("Привет, хозяин. Я - %s. Я соскучился!", this.nickname);
    }
    private void foul(){             // метод сделать домашнюю гадость
        System.out.println("Нужно хорошо замести следы...");
    }



}
