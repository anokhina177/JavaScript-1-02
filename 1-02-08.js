function power(val, pow) {
    if (pow == 0)
        return 1;
    if (pow > 0)
        return val * power(val, --pow);
    else
        return false;
}
power(2, 3);