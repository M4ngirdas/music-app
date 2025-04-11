document.getElementById("home-btn").onclick = function () {
    window.location.href = "/src/extras/download.html";
}

document.getElementById("app-btn").onclick = function () {
    window.location.href = "/src/extras/app.html"
}

document.getElementById("header-btn").onclick = function () {
    window.location.href = "/src/extras/form.html"
}

const songGenres = ["Pop", "House", "Rap", "Disco", "Classical", "Jazz", "Country", "Hip-Hop", "Trap"];

const shuffled = songGenres.sort(function () {
    return Math.random() - 0.5;
});

document.getElementById("genre1").textContent = shuffled[0];
document.getElementById("genre2").textContent = shuffled[1];
document.getElementById("genre3").textContent = shuffled[2];
document.getElementById("genre4").textContent = shuffled[3];