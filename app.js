// Elemente
const splash = document.getElementById("splashScreen");

const screens = {
    main: document.getElementById("mainMenu"),
    play: document.getElementById("playScreen"),
    tutorial: document.getElementById("tutorialScreen"),
    stats: document.getElementById("statsScreen"),
    settings: document.getElementById("settingsScreen")
};

// Buttons
const playBtn = document.getElementById("playButton");
const tutorialBtn = document.getElementById("tutorialBtn");
const statsBtn = document.getElementById("statsBtn");
const settingsBtn = document.getElementById("settingsBtn");

// ----------------------------
// Startanimation
// ----------------------------

window.addEventListener("load", () => {

    // Nur Hauptmenü vorbereiten
    screens.main.classList.add("active");

    setTimeout(() => {

        splash.style.transition = "opacity 1s";
        splash.style.opacity = "0";

        setTimeout(() => {
            splash.style.display = "none";
        }, 1000);

    }, 4500);

});

// ----------------------------
// Bildschirm wechseln
// ----------------------------

function showScreen(screen) {

    Object.values(screens).forEach(s => {
        s.classList.remove("active");
    });

    screen.classList.add("active");

}

// ----------------------------
// Buttons
// ----------------------------

playBtn.addEventListener("click", () => {
    showScreen(screens.play);
});

tutorialBtn.addEventListener("click", () => {
    showScreen(screens.tutorial);
});

statsBtn.addEventListener("click", () => {
    showScreen(screens.stats);
});

settingsBtn.addEventListener("click", () => {
    showScreen(screens.settings);
});

// ----------------------------
// Alle Zurück-Buttons
// ----------------------------

document.querySelectorAll(".backButton").forEach(button => {

    button.addEventListener("click", () => {
        showScreen(screens.main);
    });

});