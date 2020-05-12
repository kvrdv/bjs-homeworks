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
      return console.error('Невозможно идентифицировать будильник. Параметр id не передан.');
    }

    if (this.alarmCollection.length > 0) {
      if (this.alarmCollection.find(item => item.id === id)) {
        return console.error('Будильник с таким id уже существует.');
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
    return time.getHours() + ':' + (time.getMinutes() < 10 ? '0' : '') + time.getMinutes();
  }

  start() {
    const checkClock = () => {
      this.alarmCollection.forEach(item => {
        if (item.time == this.getCurrentFormattedTime()) {
          item.callback();
          this.removeClock(item.id);
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
    console.log('Печать всех будильников в количестве: ' + this.alarmCollection.length)
    this.alarmCollection.forEach((item) => {
      console.log('Будильник № ' + item.id + ' заведен на ' + item.time);
    });
  }

  clearAlarms() {
    this.stop();
    this.init();
  }
}