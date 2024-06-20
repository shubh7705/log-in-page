function onSignIn() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == "") {
        alert("Please enter the username first");
        return false;
    } else if (password.length < 8) {
        alert("Password must be greater than 8 characters");
        return false;
    } else {
        // Submit the form or proceed with the desired action
        alert("Form submitted successfully!");
        return true;
    }
}

function onSignUp() {

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let cpassword = document.getElementById('cpassword').value;


    if (username == "") {
        alert("Please enter the username first");
        return false;
    } else if (password.length < 8) {
        alert("Password must be greater than 8 characters");
        return false;
    } else if (password !== cpassword) {
        alert("Passwords must be the same");
        return false;
    } else {
        // Submit the form or proceed with the desired action
        alert("Form submitted successfully!");
        return true;
    }
}

const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signUp = document.getElementById('signUp');
const signIn = document.getElementById('signIn');

signUpButton.addEventListener('click', function () {
    signIn.style.display = "none";
    signUp.style.display = "block";
})

signInButton.addEventListener('click', function () {
    signUp.style.display = "none";
    signIn.style.display = "block";
})