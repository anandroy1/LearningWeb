// return the nth fibonocci number
// fib(1) = 1
// fib(2) = 1
// fib(n > 2) = fib(n - 1) + fib(n -2)
// 1 1 2 3 5 8 13 21 34 55

function fib(n) {
    if (n === 1 || n === 2) {
        return 1
    } else {
        return fib(n-1) + fib(n-2)
    }
}

console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
console.log(fib(9))
console.log(fib(10))