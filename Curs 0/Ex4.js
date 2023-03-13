let nr = 123321;
let oglindit = 0;
let copy;

copy = nr;

while (copy != 0){
    oglindit = oglindit * 10 + copy % 10;
    copy = Math.floor(copy/10);
}

if (oglindit == nr)
    console.log("E palindrom");
else
    console.log("Nu e palindrom");