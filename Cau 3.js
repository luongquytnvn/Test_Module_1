function printFibonacci(a, b, n) {
    let numbers = '';
    while (a < n) {
        if (a < n) {
            numbers += a + ' ';
        }
        if (b < n) {
            numbers += b + ' ';
        }
        a = a + b;
        b = b + a;
    }
    return numbers;
}

console.log(printFibonacci(1, 1, 12));
console.log(printFibonacci(1, 1, 25));