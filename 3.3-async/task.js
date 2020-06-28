class AlarmClock {
  constructor() {
    this.init()
  }

  init() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (id === undefined) {
      return console.error("Невозможно идентифицировать будильник. Параметр id не передан.");
    }

    if (this.alarmCollection.length > 0) {
      if (this.alarmCollection.find(item => item.id === id)) {
        return console.error("Будильник с таким id уже существует.");
      }
    }

    this.alarmCollection.push({ id: id, time: time, callback: callback });
    return this.alarmCollection;
  }

  removeClock(id) {
    let item = this.alarmCollection.find(item => item.id === id);
    if (item) {
      let idx = this.alarmCollection.indexOf(item);
      this.alarmCollection.splice(idx, 1);
    }
  }

  getCurrentFormattedTime() {
    let time = new Date();
    return (time.getHours() < 10 ? "0" : "") + time.getHours() + ":" + (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
  }

  start() {
    const checkClock = () => {
      this.alarmCollection.forEach(item => {
        if (item.time == this.getCurrentFormattedTime()) {
          item.callback();
          // this.removeClock(item.id);
        }
      });
    }

    if (this.timerId === null) {
      this.timerId = setInterval(checkClock, 5000);
    }
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    console.log("Печать всех будильников в количестве: " + this.alarmCollection.length)
    this.alarmCollection.forEach((item) => {
      console.log("Будильник № " + item.id + " заведен на " + item.time);
    });
  }

  clearAlarms() {
    this.stop();
    this.init();
  }
}

function testCase() { 
  let phoneAlarm = new AlarmClock();

  phoneAlarm.addClock("15:30", () => console.log("Скоро спать"), 1);

  phoneAlarm.addClock("15:31", () => {console.log("Пора готовиться ко сну!"); phoneAlarm.removeClock(2)}, 2);

  phoneAlarm.addClock("15:31", () => console.log("Иди умываться"));//отсутствует id
  
  phoneAlarm.addClock("15:32", () => {
      console.log("Иди спать, завтра рано на работу!");
      phoneAlarm.clearAlarms();
      phoneAlarm.printAlarms();
      },3);
  phoneAlarm.addClock("15:30", () => console.log("Иди спать, завтра рано на работу!"),1);//существующий id

  phoneAlarm.printAlarms();
  phoneAlarm.start();
}

testCase();
