"use strict";

// Задача 1 

function getAnimalSound(animal) {

  let sound = animal.sound;

  if (animal == undefined) {
    return null;
  } else if (animal !== undefined) {
    return sound;
  };

};

// Задача 2

function getAverageMark(marks) {

  let sum = 0,
  averageMark = 0,
  roundedAverage = 0;

  console.log("Количество оценок: " + marks.length);

  for (let i = 0; i < marks.length; i++) {
    sum += Number(marks[i]);
  };

  averageMark = sum / marks.length;
  roundedAverage = Math.round(averageMark);

  return roundedAverage;

};

// Задача 3

function checkBirthday(birthday) {

  let age = Math.floor((Date.now(new Date()) - Date.parse(birthday)) / (3600 * 1000 * 24 * 30 * 12)),
  verdict;

  console.log(`The client is ${age} years old`);

  if (age >= 18) {
    verdict = true; 
  } else if (age < 18) {
    verdict = false;
  };

  return verdict;

};