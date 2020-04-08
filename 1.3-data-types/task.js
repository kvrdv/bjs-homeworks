"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    
    let body = (Number(amount) - Number(contribution));

    let time = Math.round((date.getTime() - new Date().getTime()) / (3600 * 1000 * 24 * 30));

    let payment = (body * ((percent / 1200) + ((percent / 1200) / (Math.pow((1 + (percent / 1200)), time) - 1))));

    let totalAmount = (payment * time);

    console.log(totalAmount.toFixed(2));

    return totalAmount.toFixed(2);
}

function getGreeting(name) {

    let greeting;

    console.log(name);

    if (Boolean(name) !== false) {
        greeting = ("Привет, мир! Меня зовут " + name);
        console.log(greeting);
        return greeting;
    } else {
        greeting = ("Привет, мир! Меня зовут Аноним");
        console.log(greeting);
        return greeting;
    };
}