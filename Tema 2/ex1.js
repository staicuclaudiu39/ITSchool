function sum(n) {
    let sum = 0;
    for (let i = 1; i <= n ; i++) {
        sum += i;
    }
    console.log(sum);
    return sum;
}

function delete_number (obj) {
    delete obj.number;
}

function add_number (obj, new_number) {
    if (obj.string.length > 5) {
        obj["number"] = new_number;
    }
}

function append_list (x, list) {
    if (x == 5 || x == 'cinci') {
        list.push(x);
    }
}

// Bubble sort
function sort_list (list) {
    let ok = false;
    let aux;
    while (ok == false) {
        ok = true;
        for (let i = 0; i < list.length - 1; i++) {
            if (list[i] < list[i + 1]) {
                aux = list[i];
                list[i] = list[i + 1];
                list[i + 1] = aux;
                ok = false;
            }
        }
    }
}

function copy_list (list) {
    let list2 = [];
    for (let i = 0; i < list.length; i++) {
        list2.push(list[i]);
    }
    sort_list(list2);

    return list2;
}

let string = "claudiu";
let number = 10;
let obj2 = {
    key1: 1,
    key2: 2
}

let obj = {
    string: string,
    number: number,
    function: sum(10),
    object: obj2 
}

delete_number(obj);
console.log(obj)

add_number(obj, 5);
console.log(obj);

// Lista

let list = [1, 2, 3, "claudiu", "cevaa", obj, true, false];

for (let listItem of list) {
    console.log(listItem);
}

for (let i = 0 ; i < list.length; i++) {
    console.log(list[i]);
}

append_list('cinci', list);
console.log(list);

let list2 = [];

for (let i = 0 ; i < list.length; i++) {
    if (typeof(list[i]) == "string")
        if (list[i].length == 5) {
            list2.push(list[i]);
        }
}

console.log(list2);

list3 = [];
list3 = copy_list(list2);
console.log(list3);

sort_list(list2);
console.log(list2);
