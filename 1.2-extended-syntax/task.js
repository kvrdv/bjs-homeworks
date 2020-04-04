"use strict";

function getResult(a, b, c) {

    let x;
    
    let discr = Math.pow(b, 2) - 4*a*c;

    if (discr < 0) {
        x = [];
    } else if (discr == 0) {
        x = [((-b) / 2 * a)];
    } else if (discr > 0) {
        x = [
            (((-b) + Math.sqrt(discr))/ 2 * a),
            (((-b) - Math.sqrt(discr))/ 2 * a),
            ];
    };        
        
    return x;
}

function getAverageMark(marks) {
    
    console.log("Количество оценок: " + marks.length);

    let sum = 0;
    let averageMark;
    
    if (marks.length == 0) {
        return 0;
    } else if (marks.length > 0 && marks.length <= 5) {
        for (let i = 0; i <= marks.length; i++) {
            sum = sum + marks[i];
            return sum;
        };
        averageMark = (sum / marks.length);
    } else (marks.length > 5); {
        console.log("Количество оценок больше 5");
        marks.splice(5);
        averageMark = ((marks[0] + marks[1] + marks[2] + marks[3] + marks[4]) / marks.length);
    };

    return averageMark;
}

function askDrink(name, dateOfBirthday) {
    
    let today = new Date();

    let age = (today.getFullYear() - dateOfBirthday.getFullYear());

    if (age >= 18) {
        result = ("Не желаете ли олд - фэшн, " + name + "?");
    } else if (age < 18) {
        result = ("Сожалею, " + name + " , но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!");
    };

    return result;
}