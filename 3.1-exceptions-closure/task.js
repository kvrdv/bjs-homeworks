const warning1 = new Error('Невалидное значение');

const parseCount = (count) => {
  const parsed = Number.parseInt(count)
  if (isNaN(parsed))
    throw warning1
  return parsed
}

const validateCount = (count) => {
  try {
    return parseCount(count)
  } catch (err) {
    return warning1
  }
}



const warning2 = new Error('Треугольник с такими сторонами не существует');

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (((this.a + this.b) < this.c) || ((this.a + this.c) < this.b) || ((this.c + this.b) < this.a)) {
      throw warning2;
    }
  }

  getPerimeter() {
    const perimeter = (this.a + this.b + this.c);
    return perimeter;
  }

  getArea() {
    const p = this.getPerimeter() / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Number(area.toFixed(3));
  }  
}

const getTriangle = (a, b, c) => {
  try {
    const triangle = new Triangle(a, b, c);
    return triangle;
  } catch (err) {
    const object = {};
    object.getPerimeter = object.getArea = () => 'Ошибка! Неправильный треугольник';
    return object;
  }
}