function functie(cuvant) {
    let temp = ""
    let temp2 = "";
    let i = 0;
    let n = cuvant.length;

    while (cuvant[i] != 'a' && cuvant[i] != 'e' && cuvant[i] != 'i' && cuvant[i] != 'o' && cuvant[i] != 'u') {
        i++;
    }
    
    temp = cuvant.slice(0, i);
    temp2 = cuvant.slice(i, n);

    cuvant = temp2 + temp + "ay";

    return cuvant;
}

console.log(functie("claudiu"));