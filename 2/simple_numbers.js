let itemsCount = 0;
let arr = [];

for (var i = 0; i < 100; i++) {
    if (itemsCount < process.argv[2]) {
        if (isPrime(i)) {
            arr[itemsCount] = i;
            itemsCount++;
        }
    }
}


function isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i < num; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}


console.log(arr);

