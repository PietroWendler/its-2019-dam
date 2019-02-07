
function Calc(num1, num2, op) {
    this.number1 = num1;
    this.number2 = num2;
    this.operator = op;
    this.exec = function () {
        switch (this.operator) {
            case "+":
                return this.number1 + this.number2;
            case "-":
                return this.number1 - this.number2;
            case "*":
                return this.number1 * this.number2;
            case "/":
                return this.number1 / this.number2;
            default:
                return null;
        }
    }
}


var op = new Calc(123, 45, "+");
console.log(op.exec()); // 168

var op = new Calc(123, 45, "-");
console.log(op.exec()); // 78

var op = new Calc(123, 45, "*");
console.log(op.exec()); // 5535

var op = new Calc(123, 45, "/");
console.log(op.exec()); // 2.7333333333333334