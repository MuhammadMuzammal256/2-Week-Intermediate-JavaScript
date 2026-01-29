let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordRegex = /^(?=.*\d).{6,}$/;

let myName = document.querySelector(".name");
let myEmail = document.querySelector(".email");
let myPassword = document.querySelector(".password");
let myAge = document.querySelector(".age");
let myCommentMassage = document.querySelector(".commentMassage");
let myCheckbox = document.querySelector(".checkboxCheck");


document.querySelector(".regForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;
  let errors = document.querySelectorAll(".error");
  for (let i = 0; i < errors.length; i++) {
    errors[i].innerText = "";
  }

  if (myName.value.trim() === "") {
    showError(myName, "Require Name");
    isValid = false;
  }
  if (myEmail.value.trim() === "") {
    showError(myEmail, "Require Email");
    isValid = false;
  } else if (!emailRegex.test(myEmail.value)) {
    showError(myEmail, "Invalid Email Formate");
    isValid = false;
  }
  if (myPassword.value.trim() === "") {
    showError(myPassword, "Require Password");
    isValid = false;
  } else if (!passwordRegex.test(myPassword.value)) {
    showError(
      myPassword,
      "Password must be at least 8 characters long and contain at least one number.",
    );
    isValid = false;
  }
  if (myAge.value.trim() === "") {
    showError(myAge, "Require Age");
    isValid = false;
  }

  if (myCommentMassage.value.trim() === "") {
    showError(myCommentMassage, "Require Comment");
    isValid = false;
  }

  if (!myCheckbox.checked) {
    showError(myCheckbox, "Require CheckBok");
    isValid = false;
  }

  if(isValid){

localStorage.setItem("Name", myName.value);
localStorage.setItem("Email", myEmail.value);
localStorage.setItem("Password", myPassword.value);
localStorage.setItem("Age", myAge.value);
localStorage.setItem("Comment", myCommentMassage.value);
localStorage.setItem("Check", myCheckbox.checked); // true/false


console.log("Name:",myName.value);
console.log("Email:", localStorage.getItem("Email"));
console.log("Password:", localStorage.getItem("Password"));
console.log("Age:", localStorage.getItem("Age"));
console.log("Comment:", localStorage.getItem("Comment"));
console.log("Check:", localStorage.getItem("Check"));

    
  }



});





function showError(input, message) {
  input.parentElement.lastElementChild.innerText = message;
}
function goToDisplay() {
  window.location.href = "disply.html";
}
function showSavedData() {
  let saveData = document.querySelector(".showData");
  let savedName = localStorage.getItem("Name");
  let savedEmail = localStorage.getItem("Email");
  let savedPassword = localStorage.getItem("Password");
  let savedAge = localStorage.getItem("Age");
  let savedComment = localStorage.getItem("Comment");
  let savedCheck = localStorage.getItem("Check");

  if (saveData) {
    if (savedName && savedEmail && savedPassword && savedAge && savedComment) {
      saveData.innerHTML = `
        <h3>My Saved Data</h3>
        <p>Name: ${savedName}</p>
        <p>Email: ${savedEmail}</p>
        <p>Password: ${savedPassword}</p>
        <p>Age: ${savedAge}</p>
        <p>Comment: ${savedComment}</p>
        <p>Accepted Terms: ${savedCheck === "true" ? "Yes" : "No"}</p>
      `;
    } else {
      saveData.innerHTML = "<p>No data saved yet.</p>";
    }
  }
}

