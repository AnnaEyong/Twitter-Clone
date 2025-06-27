//alert("Please enter");


//Getting Form Elements
let button = document.getElementById('btn');
let phone = document.getElementById('phone');
let mail = document.getElementById('mail');
let passcode = document.getElementById('passcode');

//getting error elements
let phoneError = document.getElementById('phoneErrorText');
let emailError = document.getElementById('emailErrorText');
let passcodeError = document.getElementById('passcodeErrorText');

//Vaildation Errors
let errors = {
    phone: "Should be equal to 9 characters",
    email: "Enter a valid email address",
    passcode: "Password should be at least 6 character"
};

//Email pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//Check
const validate = ()=> {
    
    if (phone.value.length!=9 || parseInt(phone.value.charAt(0))!=6) {
        phoneError.innerHTML = errors.phone;
    }
    else {
        phoneError.innerHTML = "";
    }

    if (!emailPattern.test(mail.value)) {
        emailError.innerHTML = errors.email;
    }
    else {
        emailError.innerHTML = "";
    }

    if (passcode.value.length<6) {
        passcodeError.innerHTML = errors.passcode;
    }
    else {
        passcodeError.innerHTML = "";
    }
};

const changeBg = (newImage) => {
    document.getElementById("cardImage").style.backgroundImage = newImage;
}

//btn Validate
button.addEventListener("click", validate);