document.getElementById("header-btn").onclick = function () {
    window.location.href = "/src/extras/form.html";
}

document.getElementById("app-btn").onclick = function () {
    window.location.href = "/src/extras/app.html";
}

document.getElementById("download-btn").onclick = function () {
    window.location.href = "/src/extras/download.html";
}

document.getElementById("lang-btn").addEventListener("click", function (e) {
    document.getElementById("lang-options").style.display = "flex";
});

document.querySelectorAll(".lang-option").forEach(function (option) {
    option.addEventListener("click", function (e) {
        document.getElementById("lang-options").style.display = "none";
    });
});

// Translations
const translations = {
    english: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-explore": "Explore",
        "nav-help": "Help",
        "nav-help": "Help",
        "nav-btn": "Get started",
        "home-greeting": "Welcome to <span class='bold-words'>Melum!</span>",
        "home-text": `Discover endless music with Melum! Stream, download, and enjoy high-quality songs fromyour favorite artists and genres everywhere. <span id="home-bold">Download or use the browser version!</span>`,
        "open-app": "Open Melum",
        "download-app": "Download"
    },
    lithuanian: {
        "nav-home": "Pradžia",
        "nav-about": "Apie",
        "nav-explore": "Naršyti",
        "nav-help": "Pagalba",
        "nav-btn": "Pradėti",
        "home-greeting": "Sveiki atvykę į <span class='bold-words'>Melum!</span>",
        "home-text": `Atraskite begalinę muziką su Melum! Klausykitės, atsisiųskite ir mėgaukitės aukštos kokybės dainomis iš mėgstamų atlikėjų ir žanrų visur. <span id="home-bold">Atsisiųskite arba naudokite naršyklės versiją!</span>`,
        "open-app": "Atidaryti Melum",
        "download-app": "Atsisiųsti"
    },
    deutsch: {
        "nav-home": "Startseite",
        "nav-about": "Über",
        "nav-explore": "Entdecken",
        "nav-help": "Hilfe",
        "nav-btn": "Loslegen",
        "home-greeting": "Willkommen bei <span class='bold-words'>Melum!</span>",
        "home-text": `Entdecke endlose Musik mit Melum! Streamen, herunterladen und genieße hochwertige Songs deiner Lieblingskünstler und - genres überall. <span id="home-bold">Lade die App herunter oder benutze die Browser-Version!</span>`,
        "open-app": "Melum öffnen",
        "download-app": "Herunterladen"
    }
};

function changeLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

document.getElementById("change-lang").addEventListener("change", function () {
    changeLanguage(this.value);
});