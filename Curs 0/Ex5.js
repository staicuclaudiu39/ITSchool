let suma = 0;
let produs = 1;

// Metoda for

for (let i = 1; i <= 50; i++){
    suma += i;
}

for (let i = 1; i <= 15; i++){
    produs *= i;
}

console.log(suma, produs);

// Metoda while
let i = 1;
suma = 0;
produs = 1;

while (i <= 50){
    suma += i;
    i += 1;
}

i = 1;
while (i <= 15){
    produs *= i;
    i += 1;
}

console.log(suma, produs)