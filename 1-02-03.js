let a = prompt('Введите первое число');
let b = prompt('Введите второе число');
if (isNaN(a) || isNaN(b)) {
    console.log('Одно или оба значения не являются числом');
} else {
    a = parseInt(a);
    b = parseInt(b);
    if (a >= 0 && b >= 0) {
        console.log(a - b);
    } else {
        if (a < 0 && b < 0) {
            console.log(a * b);
        } else {
            console.log(a + b);
        }
    }
}