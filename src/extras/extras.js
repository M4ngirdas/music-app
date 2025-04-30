// makes the register page appear
document.getElementById("register-btn").addEventListener("click", function (e) {
    document.querySelector(".login-content").style.display = "none";
    document.querySelector(".register-content").style.display = "flex";
});

// makes the login page appear
document.getElementById("login-btn").addEventListener("click", function (e) {
    document.querySelector(".register-content").style.display = "none";
    document.querySelector(".login-content").style.display = "flex";
});