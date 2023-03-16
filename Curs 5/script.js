// function fun() {}
// // let camp1 = 1;

// let obiect = {
//   camp1: "a",
//   camp2: function () {
//     // console.log(this.camp1);
//     // function fun () {
//     //     console.log('ceva');
//     // }
//     fun = () => {
//       console.log("a");
//     };
//   },
//   camp3: () => {
//     console.log(this);
//   },
// };

// console.log("this global");
// obiect.camp2();

// let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let listDoubled = list.map(function (nr) {
//   return nr * 2;
// });

// console.log(listDoubled);

// let listDoubledArrow = list.map((nr) => nr * 2);

// console.log(listDoubledArrow);

// let listDoubleFiltered = list
//   .map((nr) => nr * 2)
//   .filter((nr) => nr < 10)
//   .reverse();

// console.log(listDoubleFiltered);

// list.forEach(nr =>)

// ASINCRONITATE

// let x = 10;

// setTimeout(() => {
//   console.log("ceva");
//   x = 11;

//   console.log(x);
// }, 1000);

// console.log(x);

// HTTP REQUEST

// GET: luam date de la server
// fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

// POST: trimitem date catre server

let body = {
  username: "Claudiu",
  name: "Violoncel",
};

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(body),
}).then((respone) => {
  respone.json().then((data) => {
    console.log(data);
  });
});

// PUT: modificam date de pe server
// DELETE: stergem date de pe server


