var user = JSON.parse(localStorage.getItem("user name"))

var p = document.createElement("p")

p.classList.add("welcome-msg")

p.innerHTML = "Welcome " + user

document.getElementById("helloMsg").append(p)

document.getElementById("logOut").addEventListener("click", getLogOut)

function getLogOut() {
    document.getElementById("logOut").setAttribute("href", "index.html")
    localStorage.removeItem("user name");
}