package HW_Lesson_04;

public class Human {

    // поля
//    private String name;                // Имя
//    private String surname;             // Фамилия
//    private int year;                   // Год рождения
//    private int iq;                     // Уровень IQ (целое число от 0 до 100)
//    private Pet pet;                    //Домашний любимец
//    private Human mother;               //Мама
//    private Human father;               //Папа
//    private String [][] schedule;       // Расписание внерабочих занятий (2-мерный массив: [день недели] x [тип секции/отдыха])

    String name;                // Имя
    String surname;             // Фамилия
    int year;                   // Год рождения
    int iq;                     // Уровень IQ (целое число от 0 до 100)
    Pet pet;                    //Домашний любимец
    Human mother;               //Мама
    Human father;               //Папа
    String[][] schedule;       // Расписание внерабочих занятий (2-мерный массив: [день недели] x [тип секции/отдыха])


    // методи
    void greetPet(Pet myPet) {              // поприветствовать своего любимца
        System.out.printf("Привет, %s!", myPet.nickname);
    }
    void describePet(Pet myPet){            //описать своего любимца
        System.out.printf("У меня есть  %s, ему %d лет, он %s,  !", myPet.nickname, myPet.age, (myPet.trickLevel > 50)? "очень хитрый" :"почти не хитрый");

    }

    //    private void respond(){             // метод отозваться
//        System.out.printf("Привет, хозяин. Я - %s. Я соскучился!", this.nickname);
//    }
//    private void foul(){             // метод сделать домашнюю гадость
//        System.out.println("Нужно хорошо замести следы...");
//    }

    }
