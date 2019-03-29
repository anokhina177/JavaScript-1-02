// сложение
function addition(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return false;
    } else {
        return (a + b);
    }
}
// вычитание
function substraction(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return false;
    } else {
        return (a - b);
    }
}
// деление
function division(a, b) {
    if (isNaN(a) || isNaN(b) || b == 0) {
        return false;
    } else {
        return (a / b);
    }
}
// умножение
function multiplication(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return false;
    } else {
        return (a * b);
    }
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+" :return addition(arg1, arg2);
        case "-" :return substraction(arg1, arg2);
        case "*" :return multiplication(arg1, arg2);
        case "/" :return division(arg1, arg2);
        default: return false;
    }
}

console.log(mathOperation(3, 4, "+"));