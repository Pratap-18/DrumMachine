function isPrime(num) {
    if (num < 2) {
        return false
    }
    let root = Math.ceil(Math.sqrt(num));
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(12))

const prime = (num) => {
    if (num < 2) {
        return false
    }
    let root = Math.ceil(Math.sqrt(num));
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true
}
console.log(prime(11))

const minutes = (minute) => {

    let min = minute * 60
    return min

}

console.log(minutes(5))
console.log(minutes(3))
console.log(minutes(2))

