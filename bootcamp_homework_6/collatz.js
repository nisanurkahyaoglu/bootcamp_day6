function collatzLength(n) {
    let length = 1;
    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        length++;
    }
    return length;
}

let num = 0;
let maxLen = 0;


for (let i = 1; i < 1000000; i++) {
    let currentLength = collatzLength(i);
    if (currentLength > maxLen) {
        maxLen = currentLength;
        num = i;
    }
}

console.log(`En uzun zinciri elde etmemizi sağlayan sayı: ${num} (${maxLen} adım)`);