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
  }else if(myAge.value <0){
    showError(myAge, "Positive Num* ");
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

let users = JSON.parse(localStorage.getItem("users"));
if(!users){
    users = []
}

        let userObj = {
                name: myName.value,
                email: myEmail.value,
                password: myPassword.value,
                age:myAge.value,
               comment: myCommentMassage.value

     
            };
            users.push(userObj);
       localStorage.setItem("users", JSON.stringify(users));

              console.log("All Users:", users);


showUsers()

}


});

function showError(input,message){
    input.parentElement.lastElementChild.innerText = message

}

document.querySelector(".reset").addEventListener('click',function(){
    localStorage.clear();
      location.reload();
})
function showUsers() {
  let saveData = document.querySelector(".savedData");
  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (!saveData) {
    console.log("savedData div not found");
    return;
  }

  saveData.innerHTML = "";
for (let i = 0; i < users.length; i++) {
  saveData.innerHTML = saveData.innerHTML +
    "<div class='userCard'>" +
      "<h4>User " + (i + 1) + "</h4>" +
      "<p><b>Name:</b> " + users[i].name + "</p>" +
      "<p><b>Email:</b> " + users[i].email + "</p>" +
      "<p><b>Age:</b> " + users[i].age + "</p>" +
      "<p><b>Comment:</b> " + users[i].comment + "</p>" +
    "</div>";
}



}


