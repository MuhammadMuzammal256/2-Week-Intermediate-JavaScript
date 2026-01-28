let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordRegex = /^(?=.*\d).{6,}$/;

function showError(input, message) {
  input.nextElementSibling.innerText = message;
}

function showSavedData() {
  let saveData = document.querySelector(".savedData");
  let getName = localStorage.getItem("Name");
  let getEmail = localStorage.getItem("Email");
  let getPassword = localStorage.getItem("Password");

  if (saveData) {
    if (getName && getEmail && getPassword) {
      saveData.innerHTML = `
                <h3>Saved Data</h3>
                <p>Name:${getName}</p>
                <p>Email:${getEmail}</p>
                <p>Password:${getPassword}</p>
            `;
    } 
    // else {
    //   saveData.innerHTML = "<p class=\"p1\">No data saved yet.</p>";

    // }
  }
}




document.querySelector('.reset').addEventListener('click',function(){
  localStorage.removeItem("Name");
          localStorage.removeItem("Email");
          localStorage.removeItem("Password");
               location.reload(); 
})



function formDisplay() {
  console.log("xxxxxxxx");
  
  document
    .querySelector(".signupForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      let isValid = true;
      let errors = document.querySelectorAll(".error");

      for (let i = 0; i < errors.length; i++) {
        errors[i].innerText = "";
      }
      let myName = document.querySelector(".name");
      let myEmail = document.querySelector(".email");
      let myPassword = document.querySelector(".password");
      if (myName.value.trim() === "") {
        showError(myName, "Require Name");
        isValid = false;
      }
      if (myEmail.value.trim() == "") {
        showError(myEmail, "Require Email");
        isValid = false;
      } else if (!emailRegex.test(myEmail.value)) {
        showError(myEmail, "Invalid Email Formate");
        isValid = false;
      }
      if (myPassword.value.trim() == "") {
        showError(myPassword, "Require Password");
        isValid = false;
      } else if (!passwordRegex.test(myPassword.value)) {
        showError(
          myPassword,
          "Password must be at least 8 characters long and contain at least one number.",
        );
        isValid = false;
      }
      if (isValid) {
        localStorage.setItem("Name", myName.value);
        localStorage.setItem("Email", myEmail.value);
        localStorage.setItem("Password", myPassword.value);

        console.log("Name:", myName.value);
        console.log("Email:", myEmail.value);
        console.log("Password:", myPassword.value);   
        alert("Form Submitted");
        location.reload(); 
      }

   
     
    });
} 

showSavedData();
formDisplay();










// let h = document.querySelector(".container").innerHTML;
// let t = document.querySelector(".container").innerText;
// console.log(h);
// console.log(t);
