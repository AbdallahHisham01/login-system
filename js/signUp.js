const display = true;
const hide = false;

var userName = document.getElementById("name");
var userEmail = document.getElementById("email");
var userPassWord = document.getElementById("password");

var arr = [];

var userInput = {
    name: " ",
    email: " ",
    password: "",
};

if (localStorage.getItem("User Data") != null) {
    arr = JSON.parse(localStorage.getItem("User Data"));
}


document.getElementById("signUpBtn").addEventListener("click", getSignUp)
function getSignUp() {
    if (
        isNameValid(userName.value) &&
        isEmailValid(userEmail.value) &&
        isPassWordValid(userPassWord.value) &&
        isAccExist(userName.value, userEmail.value)
    ) {
        userInput.name = userName.value;
        userInput.email = userEmail.value;
        userInput.password = userPassWord.value;
        arr.push(userInput);
        localStorage.setItem("User Data", JSON.stringify(arr));
        displayMode("accIsValid", display);
    }
}

function isNameValid(userName) {
    var regex = /^[a-z0-9 ]{3,}$/gi;
    if (regex.test(userName)) {
        borderStyle("name", "success");
        displayMode("invalidName", hide);
        return true;
    } else {
        borderStyle("name", "danger");
        displayMode("invalidName", display);
        return false;
    }
}

function isEmailValid(userEmail) {
    var regex = /@(yahoo|gmail).com$/gi;
    if (regex.test(userEmail)) {
        borderStyle("email", "success");
        displayMode("invalidEmail", hide);
        return true;
    } else {
        borderStyle("email", "danger");
        displayMode("invalidEmail", display);
        return false;
    }
}

function isPassWordValid(userPassWord) {
    var regex = /.{5,15}/;
    if (regex.test(userPassWord)) {
        borderStyle("password", "success");
        displayMode("invalidPassWord", hide);
        return true;
    } else {
        borderStyle("password", "danger");
        displayMode("invalidPassWord", display);
        return false;
    }
}

function isAccExist(name, email) {
    for (var i = 0; i < arr.length; i++) {
        if (name == arr[i].name || email == arr[i].email) {
            displayMode("accExistMsg", display);
            return false;
        }
    }
    displayMode("accExistMsg", hide);
    return true;
}

function displayMode(elementId, mode) {
    if (mode == display)
        document.getElementById(elementId).classList.remove("d-none");
    else if (mode == hide)
        document.getElementById(elementId).classList.add("d-none");
}

function borderStyle(elementId, state) {
    if (state == "success") {
        document.getElementById(elementId).classList.add("border-success");
        document.getElementById(elementId).classList.remove("border-danger");
    } else if (state == "danger") {
        document.getElementById(elementId).classList.add("border-danger");
        document.getElementById(elementId).classList.remove("border-success");
    }
}
