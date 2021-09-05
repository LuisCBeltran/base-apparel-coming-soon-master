function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function validateEmail() {
    const input = document.getElementById("inputEmail");
    const value = input.value;
    const emailValid = emailIsValid(value);
    if (emailValid == false) {
        document.getElementById("errorContainer").style.display = "block";
        document.getElementById("invalidEmailMessage").style.display = "block";
        document.getElementById("inputEmail").style.border = "2px solid hsl(0, 93%, 68%)";
    } else {
        document.getElementById("errorContainer").style.display = "none";
        document.getElementById("invalidEmailMessage").style.display = "none";
        document.getElementById("inputEmail").style.border = "1px solid hsl(0, 93%, 68%)";
    }
}

