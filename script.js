function validateForm(){
const fname = document.getElementById("fname").value;
const lname = document.getElementById("lname").value;
const email = document.getElementById("email").value;
const general = document.getElementById("general").value;
const support = document.getElementById("support").value;
const message = document.getElementById("message").value;
const checkbox = document.getElementById("checkbox").value;

const fnameError = document.getElementById("fname-error");
const lnameError = document.getElementById("lname-error");
const emailError = document.getElementById("email-error");
const queryError = document.getElementById("query-error");
const messageError = document.getElementById("message-error");
const checkboxError = document.getElementById("checkbox-error");

fnameError.textContent = "";
lnameError.textContent = "";
emailError.textContent = "";
queryError.textContent = "";
messageError.textContent = "";
checkboxError.textContent = "";

let isValid = true;

if (fname === ""){
    fnameError.textContent = "This field is required";
    isValid = false;
}

if (lname === ""){
    lnameError.textContent = "This field is required";
    isValid = false;
}

if (email === ""){
    emailError.textContent = "Please enter a valid email address";
    isValid = false;
}

if (general == "" && support == ""){
    queryError.textContent = "Please select a query type";
    isValid = false;
}

if (message === ""){
    messageError.textContent = "This field is required";
    isValid = false;
}

if (checkbox == ""){
    checkboxError.textContent = "To submit this form, please consent to being contacted";
    isValid = false;
}
return isValid;
}


