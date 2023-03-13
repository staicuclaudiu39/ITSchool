let nr = 7;

let isPrim = true;

for (let i = 2; i <= nr/2; i++){
    if (nr % i == 0){
        isPrim = false;
        break;
    }
}


if (isPrim)
    console.log("E prim");
else
    console.log("Nu e prim");

// Divizorii unui numar se gasesc intre 2 si jumatatea lui, nu are cum sa aiba divizor mai mare decat jumatate.
// In plus, nu are rost sa vad daca 1 e divizor, pentru ca este pentru orice numar.