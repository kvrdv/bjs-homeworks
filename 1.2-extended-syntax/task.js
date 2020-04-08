"use strict";

function getResult(a, b, c) {

    let x = [];
    
    let discriminant = Math.pow(b, 2) - 4*a*c;

    if (discriminant == 0) {
        x = [((-b) / 2 * a)];
    } else if (discriminant > 0) {
        x = [
            (((-b) + Math.sqrt(discriminant))/ 2 * a),
            (((-b) - Math.sqrt(discriminant))/ 2 * a),
            ];
    };        
        
    return x;
}

function getAverageMark(marks) {
    
    let sum = 0;
    let averageMark = 0;

    console.log("Количество оценок: " + marks.length);

    if (marks.length == 0) {
        return 0;
    } else if (marks.length > 5) {
        console.log("Количество оценок больше 5!");
        marks.splice(5);
    };
    
    
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];            
    };        
    

    averageMark = sum / marks.length;

    return averageMark;
}

function askDrink(name, dateOfBirthday) {

    let age = (new Date().getFullYear() - dateOfBirthday.getFullYear());

    if (age >= 18) {
        return ("Не желаете ли олд - фэшн, " + name + "?");
    } else if (age < 18) {
        return ("Сожалею, " + name + " , но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!");
    };
}