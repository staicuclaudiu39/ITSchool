// let listOfNames = ["Liviu", "Mircea", 1, 2];

// for (let i = 0; i < listOfNames.length; i++)
//     console.log(listOfNames[i]);

// let list = [];

// list.push("Ceva");
// list.push("Ceva");

// console.log(list);

// list.pop();

// console.log(list);

// for (let listItem of list) {
//     console.log(listItem);
// }

// let obj = {
//     key1: "value",
//     key2: 123,
//     key3: true,
//     key4: [1, 2, 3]
// }

// console.log(obj.key4[1])

// if (0 == undefined){
//     console.log("true");
// }
// else {
//     console.log("false");
// }

// let list = [];
// if (list)
//     console.log("Lista goala");

let obj = {
    key: 1
}

let obj2 = {...obj};

obj2.key = 2;

console.log(obj2);
console.log(obj);