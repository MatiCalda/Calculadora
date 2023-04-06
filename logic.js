
class calculadoraBasica {
    constructor() {
        this.memoryRegister = 5;
        this.solved = false;
    }

    clearMemory(){
        this.memoryRegister = 0;
        this.readMemory();
    }
    readMemory(){
        this.setDisplay(this.memoryRegister);
    }
    addToMemory(){
        let display = this.getDisplay();
        this.memoryRegister = eval(this.memoryRegister + "+" + display);
        this.readMemory();
    }
    subtractFromMemory(){
        let display = this.getDisplay();
        this.memoryRegister = eval(this.memoryRegister + "-" + display);
        this.readMemory();
    }
    saveToMemory(){
        let display = this.getDisplay();
        this.memoryRegister = display;
    }

    getDisplay() {
        return document.getElementById("displayBox").value;
    }
    setDisplay(value) {
        document.getElementById("displayBox").value = value;
    }

    writeToDisplay(num) {
        this.solved = false;
        let display = this.getDisplay();
        if (display == "0" || this.solved == true) {
            if (num == '.') {
                display = "0" + num;
            } else {
                display = num;
            }
        } else {
            if (display.includes('.') && num == '.') {
            } else {
                display += num;
            }
        }
        this.setDisplay(display);
    }

    writeOperatorToDisplay(operacion) {
        this.solved = false;
        let display = this.getDisplay();
        if (display == "0" || display == "") {
            display = operacion;
        } else {
            display += operacion;
        }
        this.setDisplay(display);
    }

    eraseLastInput() {
        let display = this.getDisplay();
        if (this.solved == true || display.length == 1) {
            display = "0";
        } else {
            display = display.slice(0, display.length - 1);
        }
        this.setDisplay(display);
    }

    toggleSign() {
        this.solved = false;
        let display = this.getDisplay();
        if (display == "0") {
            display = "(-1)*";
        } else {
            display += "(-1)*";
        }
        this.setDisplay(display);
    }

    square(){
        let display = this.getDisplay();
        display += "^2";
        this.setDisplay(display);
    }
    nthTenPower(){
        let display = this.getDisplay();
        if(display == "0") display = "10^";
        else display += "10^";
        this.setDisplay(display);
    }
    cube(){
        let display = this.getDisplay();
        display += "^3";
        this.setDisplay(display);
    }
    inverseNumber(){
        let display = this.getDisplay();
        display += "^-1";
        this.setDisplay(display);
    }

    calculateFactorial(){
        let display = this.getDisplay();
        display = this.factorial(display);
        this.setDisplay(display);
    }

    writeMathFunction(operacion){
        let display = this.getDisplay();
        display = operacion + display + ")";
        display = "Math." + display;
        this.setDisplay(display);
        this.solveOperation();
    }

    solveOperation() {
        let display = this.getDisplay();
        display = display.replace(/e/g, "2.718281828");
        display = display.replace(/PI/g, '3.141592653');
        display = display.replace(/\^/g, '**');
        try {
            this.setDisplay(eval(display));
        } catch (error) {
            this.setDisplay("Syntax Error");
            //this.setDisplay(error);
        }
        this.solved = true;
    }

    clearDisplay() {
        document.getElementById("displayBox").value = "0";
    }

    factorial(num) {
        if (num == 1) {
            return 1;
        } else {
            return num * this.factorial(num - 1);
        }
    }
}


const calculadora = new calculadoraBasica();
calculadora.clearDisplay();