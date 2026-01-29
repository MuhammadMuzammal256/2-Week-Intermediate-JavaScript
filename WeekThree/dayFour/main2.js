let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordRegex = /^(?=.*\d).{6,}$/;

function showError(input, message) {
    input.nextElementSibling.innerText = message;
}

// Show all saved users
function showSavedData() {
    let saveData = document.querySelector(".savedData");
    let users = JSON.parse(localStorage.getItem("Users"));

    if (saveData && users && users.length > 0) {
        let html = "<h3>Saved Users</h3>";

        for (let i = 0; i < users.length; i++) {
            html += `
                <p><b>User ${i + 1}</b></p>
                <p>Name: ${users[i].name}</p>
                <p>Email: ${users[i].email}</p>
                <p>Password: ${users[i].password}</p>
                <hr/>
            `;
        }

        saveData.innerHTML = html;  // ek hi baar assign
    } else if (saveData) {
        saveData.innerHTML = "<p>No data saved yet.</p>";
    }
}


document.querySelector('.reset').addEventListener('click', function() {
    localStorage.clear();
    location.reload();
});

// Form submission
function formDisplay() {
    document.querySelector(".signupForm").addEventListener("submit", function(e) {
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
        if (myEmail.value.trim() === "") {
            showError(myEmail, "Require Email");
            isValid = false;
        } else if (!emailRegex.test(myEmail.value)) {
            showError(myEmail, "Invalid Email Format");
            isValid = false;
        }

        // Optional password validation
        // if (myPassword.value.trim() === "") {
        //     showError(myPassword, "Require Password");
        //     isValid = false;
        // } else if (!passwordRegex.test(myPassword.value)) {
        //     showError(myPassword, "Password must be at least 6 characters and contain a number.");
        //     isValid = false;
        // }

        if (isValid) {
            let users = JSON.parse(localStorage.getItem("Users"));
            if (!users) users = [];

            let userObj = {
                name: myName.value,
                email: myEmail.value,
                password: myPassword.value
            };

            users.push(userObj);

    
            localStorage.setItem("Users", JSON.stringify(users));

            alert("Form Submitted!");
            location.reload();
        }
    });
}

// Initialize
showSavedData();
formDisplay();
