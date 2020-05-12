class Weapon {
  constructor(weapon) {
    this.name = weapon.name;
    this.attack = weapon.attack;
    this.durability = weapon.durability;
    this.range = weapon.range;
    this.durabilityOriginal = this.durability;
  }

  takeDamage(damage) {
    this.durability -= damage;
    if (this.durability < 0) {
      this.durability = 0;
    }
  }

  getDamage() {
    if (this.durability === 0) {
      return 0;
    }
    if (this.durability < this.durabilityOriginal * 0.3) {
      return this.attack / 2;
    }
    return this.attack;
  }

  isBroken() {
    if (this.durability > 0) {
      return false;
    } else {
      return true;
    }
  }
}

class Bow extends Weapon {
  constructor() {
    super({
      name: 'Лук',
      attack: 10,
      durability: 200,
      range: 3,
    });
  }
}

class Knife extends Weapon {
  constructor() {
    super({
      name: 'Нож',
      attack: 5,
      durability: 300,
      range: 1,
    });
  }
}

class Sword extends Weapon {
  constructor() {
    super({
      name: 'Меч',
      attack: 25,
      durability: 500,
      range: 1,

    });
  }
}

class Arm extends Weapon {
  constructor() {
    super({
      name: 'Рука',
      attack: 1,
      durability: Infinity,
      range: 1,
    });
  }
}

class Staff extends Weapon {
  constructor() {
    super({
      name: 'Посох',
      attack: 8,
      durability: 300,
      range: 2,
    });
  }
}

class LongBow extends Bow {
  constructor() {
    super();
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 4;
  }
};

class Axe extends Sword {
  constructor() {
    super();
    this.name = 'Секира';
    this.attack = 27;
    this.durability = 800;
  }
};

class StormStaff extends Staff {
  constructor() {
    super();
    this.name = 'Посох Бури';
    this.attack = 10;
    this.range = 3;
  }
};

const sword = new Sword();
const arm = new Arm();
const bow = new Bow();
const longBow = new LongBow();
const staff = new Staff();
const stormStaff = new StormStaff();
const knife = new Knife();
const ax = new Axe();

sword.takeDamage(5);
console.log(sword.durability);

sword.takeDamage(50);
console.log(sword.durability);

arm.takeDamage(20);
console.log(arm.durability);

bow.takeDamage(20);
console.log(bow.durability);

bow.takeDamage(200);
console.log(bow.durability);

console.log(stormStaff.name);
stormStaff.takeDamage(10);
console.log(stormStaff.durability);
console.log(stormStaff.getDamage());
console.log(stormStaff.isBroken());

console.log(bow.name);
bow.takeDamage(60);
console.log(bow.durability);
console.log(bow.getDamage());
console.log(bow.isBroken());

console.log(ax.name);
ax.takeDamage(260);
console.log(ax.durability);
console.log(ax.getDamage());
console.log(ax.isBroken());

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