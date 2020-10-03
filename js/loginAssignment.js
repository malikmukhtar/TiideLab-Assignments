let database = JSON.parse(localStorage.getItem("database"));

if (database == null) {
  database = [];
}

//console.log(database);

//Getting User Datas

const registerUser = () => {
  let registerPassword = document.getElementById("register-password").value;
  let registerCPassword = document.getElementById("register-c-password").value;

  if (registerPassword == registerCPassword) {
    let picture = document.getElementById("picture").value.split("\\");
    newUser = {
      fullname: document.getElementById("fullname").value,
      username: document.getElementById("register-username").value,
      email: document.getElementById("email").value,
      phonenumber: document.getElementById("phonenumber").value,
      password: document.getElementById("register-password").value,
      picture: picture[picture.length - 1],
    };
    //Adding new user to database array
    database.push(newUser);

    //Adding database to localstorage

    localStorage.setItem("database", JSON.stringify(database));
    document.getElementById("form").reset();
  } else {
    alert("Password Mismatch");
  }
};

//Logging User
const logInUser = () => {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  database.find(
    (element) => element.username == username && element.password == password
  )
    ? window.location.assign("https://www.lovebird.dating/")
    : alert("Username or Password not correct");
};

//Targeting the Register Button
document.getElementById("register").addEventListener("click", registerUser);

//Targeting the login  button
document.getElementById("login").addEventListener("click", logInUser);
