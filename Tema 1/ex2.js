function div (number) { 
    let count = 1;
    for (let i = 2; i <= number; i++) {
        if (number % i == 0) {
            count++;
        }
    }

    return count;
}

let ok = true;
let i = 1;

while (ok) {
    if (div(i) != 20)
    {
        i++;
    }
    else {
        ok = false;
    }
}

console.log(i);