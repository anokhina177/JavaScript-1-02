let a = prompt('Введите число от 0 до 15:');
if (!isNaN(a) && a >= 0 && a <= 15) {
    a = parseInt(a);
    switch (a) {
        case 0:
            console.log(a++);
        case 1:
            console.log(a++);
        case 2:
            console.log(a++);
        case 3:
            console.log(a++);
        case 4:
            console.log(a++);
        case 5:
            console.log(a++);
        case 6:
            console.log(a++);
        case 7:
            console.log(a++);
        case 8:
            console.log(a++);
        case 9:
            console.log(a++);
        case 10:
            console.log(a++);
        case 11:
            console.log(a++);
        case 12:
            console.log(a++);
        case 13:
            console.log(a++);
        case 14:
            console.log(a++);
        case 15:
            console.log(a++);
    }
} else {
    console.log("Значение введено некорректно!");
}