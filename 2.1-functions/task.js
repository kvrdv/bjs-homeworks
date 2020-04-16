"use strict";

// Задача 1 

function getSolutions(a, b, c) {
  let D = (Math.pow(b, 2) - 4 * a * c);
  if (D < 0) {
    return { D: D, roots: [] };
  } else if (D == 0) {
    let x1 = (((-b) / 2 * a));
    return { D: D, roots: [x1] };
  } else if (D > 0) {
    let x1 = (((-b) + Math.sqrt(D)) / 2 * a);
    let x2 = (((-b) - Math.sqrt(D)) / 2 * a);
    return { D: D, roots: [x1, x2] };
  };
};

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  alert(`«Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}»`);
  alert(`«Значение дискриминанта: ${result.D}»`);
  if (result.D < 0) {
    alert(`«Уравнение не имеет вещественных корней»`);
  } else if (result.D == 0) {
    alert(`«Уравнение имеет один корень X₁ = ${result.roots}`);
  } else if (result.D > 0) {
    alert(`«Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}»`);
  };
};

// Задача 2

function getAverageScore(data) {
  let averageScore = {};
  for (let prop in data) {
    averageScore[prop] = getAverageMark(data[prop]);    
  };
  averageScore.average = getAverageMark(objectValues(averageScore));  
  return averageScore;
};

function getAverageMark(marks) {
  let averageMark = 0;
  for (let i = 0; i < marks.length; i++) {
    averageMark += marks[i] / marks.length;
  };
  return averageMark;
};

function objectValues(obj) {
  let values = [];
  for (let elem in obj) {
    values.push(obj[elem]);
  };
  return values;
};

// Задача 3

function getPersonData(secretData) {
  let secretDataCoding = {};
  secretDataCoding.firstName = getDecodedValue(secretData.aaa);
  secretDataCoding.lastName = getDecodedValue(secretData.bbb);  
  return secretDataCoding;
};

function getDecodedValue(secret) {
  if (secret === 0) {
    return 'Родриго';
  } else {
    return 'Эмильо';
  };
};

console.log(getPersonData(
  {
    aaa: 0,
    bbb: 1
  }
));
