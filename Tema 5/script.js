let users = [];

fetch("https://jsonplaceholder.typicode.com/users").then((respone) => {
  respone.json().then((data) => {
    users = data;
    insertUsers();
    addEventListeners();
    //fetch()
  });
});

function insertUsers() {
  let wrapper = document.getElementById("wrapper");
  users.forEach((user) => {
    wrapper.innerHTML += `
    <div class="card">
        <img src="${user.photo}" />
        <p class="name"> ${user.name} </p>
        <p class="company-name"> ${user.company.name} </p>
        <p class="phone"> ${user.phone} </p>
    </div>
    `;
  });
}

function addEventListeners() {
  let cards = document.querySelectorAll(".card");
  // loop cards -> add eventLister to all
}
