// ===============================
// Startanimation
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const splash = document.getElementById("splashScreen");
    const mainMenu = document.getElementById("mainMenu");

    if (!splash || !mainMenu) {
        return;
    }

    // Hauptmenü während der Startanimation verstecken
    mainMenu.classList.remove("active");

    // Startbildschirm sichtbar machen
    splash.style.display = "flex";
    splash.style.visibility = "visible";
    splash.style.opacity = "1";
    splash.style.pointerEvents = "auto";

    // 4,5 Sekunden warten
    setTimeout(function () {

        // Ausblenden starten
        splash.style.transition = "opacity 1s ease";
        splash.style.opacity = "0";
        splash.style.pointerEvents = "none";

        // Nach der Fade-Animation vollständig entfernen
        setTimeout(function () {

            splash.style.display = "none";
            splash.style.visibility = "hidden";

            // Hauptmenü anzeigen
            mainMenu.classList.add("active");

        }, 1000);

    }, 4500);

});


// DOM ist bereit
if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        startSplashAnimation
    );

} else {

    startSplashAnimation();

}

// ===============================
// Bildschirme
// ===============================

const screens = {

    main: document.getElementById("mainMenu"),

    play: document.getElementById("playScreen"),

    tutorial: document.getElementById("tutorialScreen"),

    stats: document.getElementById("statsScreen"),

    settings: document.getElementById("settingsScreen")

};


function showScreen(screen){

    Object.values(screens).forEach(s => {

        if(s){
            s.classList.remove("active");
        }

    });


    if(screen){
        screen.classList.add("active");
    }

}



// ===============================
// Hauptmenü → Spielen
// ===============================

const playButton =
document.getElementById("playButton");


if(playButton){

    playButton.addEventListener("click",()=>{

        showScreen(screens.play);

    });

}



// ===============================
// Hauptmenü → Anleitung
// ===============================

const tutorialBtn =
document.getElementById("tutorialBtn");


if(tutorialBtn){

    tutorialBtn.addEventListener("click",()=>{

        showScreen(screens.tutorial);

    });

}



// ===============================
// Hauptmenü → Statistiken
// ===============================

const statsBtn =
document.getElementById("statsBtn");


if(statsBtn){

    statsBtn.addEventListener("click",()=>{

        showScreen(screens.stats);

    });

}



// ===============================
// Hauptmenü → Einstellungen
// ===============================

const settingsBtn =
document.getElementById("settingsBtn");


if(settingsBtn){

    settingsBtn.addEventListener("click",()=>{

        showScreen(screens.settings);

    });

}



// ===============================
// Zurück-Buttons
// ===============================

document.querySelectorAll(".smallBackButton")
.forEach(button => {

    button.addEventListener("click",()=>{

        showScreen(screens.main);

    });

});

// ===============================
// Neues Spiel
// ===============================

const newGameButton =
document.getElementById("newGameButton");

const newGamePopup =
document.getElementById("newGamePopup");

const gameNameInput =
document.getElementById("gameNameInput");

const saveGameName =
document.getElementById("saveGameName");


if (newGameButton && newGamePopup) {

    newGameButton.addEventListener("click", () => {

        newGamePopup.style.display = "flex";

        if (gameNameInput) {
            gameNameInput.focus();
        }

    });

}



// ===============================
// Name speichern
// ===============================

if (saveGameName) {

    saveGameName.addEventListener("click", () => {

        if (!gameNameInput) return;

        const name =
            gameNameInput.value.trim();

        if (name !== "") {

            localStorage.setItem(
                "currentGameName",
                name
            );

            if (newGamePopup) {
                newGamePopup.style.display = "none";
            }

        }

    });

}



// ===============================
// Spiel laden
// ===============================

const loadGameButton =
document.getElementById("loadGameButton");

const loadGamePopup =
document.getElementById("loadGamePopup");


if (loadGameButton && loadGamePopup) {

    loadGameButton.addEventListener("click", () => {

        loadGamePopup.style.display = "flex";

    });

}


// Popup schließen

document.querySelectorAll(".closePopup")
.forEach(button=>{


    button.addEventListener("click",()=>{


        document.querySelectorAll(".popup")
        .forEach(p=>{

            p.style.display="none";

        });


    });


});