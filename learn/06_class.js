/**
 * Class
 */
class Calculator {
  constructor(data) {
    Object.assign(this, data)
  }

  plus() {
    return this.a + this.b
  }

  minus() {
    return this.a - this.b
  }
}

const obj = {
  a: 10,
  b: 40
}
const calculator = new Calculator(obj)
const hasilPlus = calculator.minus()
console.log(hasilPlus)