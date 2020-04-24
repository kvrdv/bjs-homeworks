// class Weapon {
//   constructor(name, attack, durability, range) {
//     this.name = name;
//     this.attack = attack;
//     this.durability = durability;
//     this.range = range;
//     this.startDurability = this.durability;
//   }

//   takeDamage(damage) {
//     this.durability -= damage;
//     if (this.durability < 0) {
//       this.durability = 0;
//     }
//   }

//   getDamage() {
//     if (this.durability >= this.startDurability * 0.3) {
//       return this.attack;
//     } else if ((this.durability > 0) && (this.durability < this.startDurability * 0.3)) {
//       return this.attack / 2;
//     } else {
//       return 0;
//     }
//   }

//   isBroken() {
//     if (this.durability > 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

// Класс Weapon необходим для 1 и 2 задачи
// Задачу 1 и 2 следует проверять отдельно, поочередно комментируя код

// -----------------Задача 1-----------------

// const oldSword = new Weapon("Старый меч", 20, 10, 1);
// oldSword.takeDamage(5);
// console.log(oldSword.durability);
// oldSword.takeDamage(50);
// console.log(oldSword.durability);

// const arm = new Weapon("Рука", 1, Infinity, 1);
// arm.takeDamage(20);
// console.log(arm.durability);
// console.log(arm.getDamage())
// console.log(arm.isBroken());

// const bow = new Weapon("Лук", 10, 200, 3);
// bow.takeDamage(20);
// console.log(bow.durability);
// bow.takeDamage(200);
// console.log(bow.durability);
// console.log(bow.getDamage());
// console.log(bow.isBroken());

// const sword = new Weapon("Меч", 25, 500, 1);
// const knife = new Weapon("Нож", 5, 300, 1);
// const staff = new Weapon("Посох", 8, 300, 2);

// const longBow = new Weapon("Длинный лук ", 15, bow.durability, 4);
// const poleAxe = new Weapon("Секира", 27, 800, sword.range);
// const stormStaff = new Weapon("Посох Бури", 10, staff.durability, 3);

// -----------------Задача 2-----------------

// class Arm extends Weapon {
//   constructor(name, attack, durability, range) {
//     super(name, attack, durability, range);
//     this.name = "Рука";
//     this.attack = 1;
//     this.durability = Infinity;
//     this.range = 1;
//   }
// }
// const arm = new Arm();
// arm.takeDamage(20);
// console.log(arm.durability);
// console.log(arm.getDamage())
// console.log(arm.isBroken());

// class Bow extends Weapon {
//   constructor(name, attack, durability, range) {
//     super(name, attack, durability, range);
//     this.name = "Лук";
//     this.attack = 10;
//     this.durability = 200;
//     this.range = 3;
//   }
// }
// const bow = new Bow();
// console.log(bow.name);
// console.log(bow.attack);
// console.log(bow.durability);
// console.log(bow.range);

// bow.takeDamage(20);
// console.log(bow.durability);
// bow.takeDamage(200);
// console.log(bow.durability);
// console.log(bow.getDamage());
// console.log(bow.isBroken());

// class Sword extends Weapon {
//   constructor(name, attack, durability, range) {
//     super(name, attack, durability, range);
//     this.name = "Меч";
//     this.attack = 25;
//     this.durability = 500;
//     this.range = 1;
//   }
// }
// const sword = new Sword();

// class Knife extends Weapon {
//   constructor(name, attack, durability, range) {
//     super(name, attack, durability, range);
//     this.name = "Нож";
//     this.attack = 5;
//     this.durability = 300;
//     this.range = 1;
//   }
// }
// const knife = new Knife();

// class Staff extends Weapon {
//   constructor(name, attack, durability, range) {
//     super(name, attack, durability, range);
//     this.name = "Посох";
//     this.attack = 8;
//     this.durability = 300;
//     this.range = 2;
//   }
// }
// const staff = new Staff();

// class LongBow extends Bow {
//   constructor(name, attack, durability, range) {
//     super(name, attack, durability, range);
//     this.name = "Длинный лук";
//     this.attack = 15;
//     this.range = 4;
//     this.type = "Лук";
//   }
// }
// const longBow = new LongBow();
// console.log(longBow.name);
// console.log(longBow.attack);
// console.log(longBow.durability);
// console.log(longBow.range);
// console.log(longBow.type);

// class Poleaxe extends Sword {
//   constructor(name, attack, durability, range) {
//     super(name, attack, durability, range);
//     this.name = "Секира";
//     this.attack = 27;
//     this.durability = 800;
//     this.name = "Меч";
//   }
// }
// const poleaxe = new Poleaxe();

// class StormStaff extends Staff {
//   constructor(name, attack, durability, range) {
//     super(name, attack, durability, range);
//     this.name = "Посох Бури";
//     this.attack = 10;
//     this.range = 3;
//     this.type = "Посох";
//   }
// }
// const stormStaff = new StormStaff();

// -----------------Задача 3-----------------

class StudentLog {
  constructor(name) {
    this.name = name;
    this.grades = {};
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    if (typeof grade !== 'number' || grade === 0 || grade > 5) {
      console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
      return 0;
    }

    if (!this.grades.hasOwnProperty([subject])) {
      this.grades[subject] = [];
    }

    this.grades[subject].push(grade);
    return this.grades[subject].length;
  }

  getAverageBySubject(subject) {
    let averageBySubject = 0;
    if (!this.grades.hasOwnProperty([subject])) {
      return 0; 
    }
    for (let i = 0; i < this.grades[subject].length; i++) {
      averageBySubject += this.grades[subject][i];
    }
    return averageBySubject / this.grades[subject].length;
  }

  getTotalAverage() {
    let totalAverage = 0;
    for (let subject in this.grades) {
      totalAverage += this.getAverageBySubject([subject]);
    }
    return totalAverage / Object.keys(this.grades).length;
  }
}

const log = new StudentLog('Олег Никифоров');

// console.log(log.addGrade(3, 'algebra'));
// console.log(log.addGrade('отлично!', 'math'));
// console.log(log.addGrade(4, 'algebra'));
// console.log(log.addGrade(5, 'geometry'));
// console.log(log.addGrade(25, 'geometry'));

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

// console.log(log.addGrade(4, 'algebra'));
// console.log(log.addGrade(5, 'geometry'));
// console.log(log.getAverageBySubject('math'));

console.log(log.getTotalAverage());