const EESTEC = ["Stefan", "Mircea", "Florian", "Petru"];
const BEST = ["ceva", "altcineva"];

// console.log(EESTEC.length);

// for (let i = 0; i < EESTEC.length; i++) {
//   console.log(EESTEC[i]);
// }

// let ceva = EESTEC.forEach((member) => {
//   return member;
// });

// console.log(ceva);

// console.log(EESTEC.toString());
// console.log(EESTEC.join(" ^^ "));

// EESTEC.push("vis");

// console.log(EESTEC);

// EESTEC.shift();

// console.log(EESTEC);

// EESTEC.unshift("Stefan");

// console.log(EESTEC);

// let BEESTEC = EESTEC.concat(BEST);

// console.log(BEESTEC);

let eestec = EESTEC.splice(1, 3);

console.log(eestec);
console.log(EESTEC);
