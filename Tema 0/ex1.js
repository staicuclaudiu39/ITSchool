let sum = 0
let prod = 1

let i = 1

while (i <= 15) {
    prod = prod * i
    i = i + 1
}

i = 1
while (i <= 50) {
    sum = sum + i
    i = i + 1
}

console.log(sum, prod)

sum = 0
prod = 1

for (i = 1; i <= 50; i++) {
    sum = sum + i
}

for (i = 1; i <= 15; i++) {
    prod = prod * i
}

console.log(sum, prod)