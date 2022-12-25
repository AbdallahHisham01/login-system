const display = true;
const hide = false;

var userEmail = document.getElementById("email");
var userPassWord = document.getElementById("password");

var arr = [];

if (localStorage.getItem("User Data") != null) {
    arr = JSON.parse(localStorage.getItem("User Data"));
}

document.getElementById("loginBtn").addEventListener("click", getSignIn);
function getSignIn() {
    if (userEmail.value != "" && userPassWord.value != "") {
        displayMode("emptyMsg", hide);
        var found = false;
        for (var i = 0; i < arr.length; i++) {
            if (
                arr[i].email == userEmail.value &&
                arr[i].password == userPassWord.value
            ) {
                localStorage.setItem("user name" , JSON.stringify(arr[i].name))
                document
                    .getElementById("loginBtn")
                    .setAttribute("href", "welcomePage.html");
                found = true;
                break;
            }
        }
        if (!found) {
            displayMode("wrongMsg", display);
            displayMode("emptyMsg", hide);
        }
    } else {
        displayMode("wrongMsg", hide);
        displayMode("emptyMsg", display);
    }
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
