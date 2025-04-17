document.getElementById("register-btn").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".login-content").style.display = "none";
    document.querySelector(".register-content").style.display = "block";
});

document.getElementById("login-btn").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".register-content").style.display = "none";
    document.querySelector(".login-content").style.display = "block";
});

