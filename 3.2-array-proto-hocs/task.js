function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) { }
}

function sum(...args) {
  sleep(500);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2) {
  if (arr1.length === arr2.length) {
    let check = arr1.every(function (element, index) {
      return element === arr2[index];
    });
    return check;
  }
}

function memorize(fn, limit) {
  let memory = [];

  return function (...args) {
    let found = memory.find(element => compareArrays(element.args, args));
    if (found) {
      return found.result;
    }
    let result = fn(...args);
    memory.push({
      args: args,
      result: result
    });
    if (memory.length > limit) {
      memory.shift();
    }
    return result;
  }
}

const mSum = memorize(sum, 5);

const testArray = [[1, 2, 3], [1, 2], [1, 2, 3], [1, 2], [9, 5, 2, 4]];

function testCase(testFunction, timer) {
  console.time(timer);
  testArray.forEach(function (arr) {
    for (let i = 0; i < 10; i++) {
      testFunction(...arr);
    }
  });
  console.timeEnd(timer);
}

testCase(mSum, 'withMem');
testCase(sum, 'withoutMem');