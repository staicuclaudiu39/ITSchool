let users = [];
let photos = []
fetch("https://jsonplaceholder.typicode.com/users").then((respone) => {
  respone.json().then((data) => {
    users = data;
    fetch("https://jsonplaceholder.typicode.com/photos").then((respone2) => {
      respone2.json().then((data2) => {
        photos = data2;
        for (let i = 0; i<users.length; i++) {
          users[i].photo = photos[i].thumbnailUrl;
        }
        console.log(users)
        insertUsers();
        addEventListeners();
      })
    })
  });
});



function insertUsers() {
  let wrapper = document.getElementById("wrapper");
  users.forEach((user) => {
    wrapper.innerHTML += `
    <div class="card">
        <img src="${user.photo}" />
        <div class ="text">
          <p class="name"> ${user.name} </p>
          <p class="company-name"> ${user.company.name} </p>
          <p class="phone"> ${user.phone} </p>
          <button id="delete">Delete</button>
        </div>
    </div>
    `;
  });
}

function addEventListeners() {
  let cards = document.querySelectorAll(".card");
  for (let i = 1; i< cards.length; i = i + 2) {
    cards[i].style.animationDuration = 0.7 + 's';
  }
}
