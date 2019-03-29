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