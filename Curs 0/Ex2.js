let nr = 20; // Are 6 divizori

let div = 0;

for (let i = 1; i <= nr; i++){
    if (nr % i == 0)
        div++;
}

console.log(`Numarul de divizori este de ${div}`); 
// Stiu ca se poate optimiza mult algoritmul, dar am zis sa il fac clasic de data asta.