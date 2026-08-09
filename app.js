// ========================================
// DER LETZTE ZUG – BETA 0.4.1
// ========================================


// ========================================
// STARTANIMATION
// ========================================

function startSplashAnimation() {

    const splash = document.getElementById("splashScreen");
    const mainMenu = document.getElementById("mainMenu");

    if (!splash || !mainMenu) {
        console.error("Splash oder Hauptmenü nicht gefunden.");
        return;
    }

    mainMenu.classList.remove("active");

    splash.style.display = "flex";
    splash.style.opacity = "1";
    splash.style.visibility = "visible";
    splash.style.pointerEvents = "auto";

    setTimeout(() => {

        splash.style.transition = "opacity 1s ease";
        splash.style.opacity = "0";
        splash.style.pointerEvents = "none";

        setTimeout(() => {

            splash.style.display = "none";
            splash.style.visibility = "hidden";

            mainMenu.classList.add("active");

        }, 1000);

    }, 4500);

}


if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        startSplashAnimation
    );

} else {

    startSplashAnimation();

}



// ========================================
// BILDSCHIRME
// ========================================

const screens = {

    main: document.getElementById("mainMenu"),

    play: document.getElementById("playScreen"),

    tutorial: document.getElementById("tutorialScreen"),

    stats: document.getElementById("statsScreen"),

    settings: document.getElementById("settingsScreen")

};


function showScreen(screen) {

    Object.values(screens).forEach(currentScreen => {

        if (currentScreen) {

            currentScreen.classList.remove("active");

        }

    });


    if (screen) {

        screen.classList.add("active");

    }

}



// ========================================
// SPIELEN
// ========================================

const playButton =
    document.getElementById("playButton");


if (playButton) {

    playButton.addEventListener("click", () => {

        showScreen(screens.play);

    });

}



// ========================================
// ANLEITUNG
// ========================================

const tutorialButton =
    document.getElementById("tutorialBtn");


if (tutorialButton) {

    tutorialButton.addEventListener("click", () => {

        showScreen(screens.tutorial);

    });

}



// ========================================
// STATISTIKEN
// ========================================

const statsButton =
    document.getElementById("statsBtn");


if (statsButton) {

    statsButton.addEventListener("click", () => {

        showScreen(screens.stats);

    });

}



// ========================================
// EINSTELLUNGEN
// ========================================

const settingsButton =
    document.getElementById("settingsBtn");


if (settingsButton) {

    settingsButton.addEventListener("click", () => {

        showScreen(screens.settings);

    });

}



// ========================================
// ZURÜCK-BUTTONS
// ========================================

const backButtons =
    document.querySelectorAll(".smallBackButton");


backButtons.forEach(button => {

    button.addEventListener("click", () => {

        showScreen(screens.main);

    });

});



// ========================================
// NEUES SPIEL
// ========================================

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



// ========================================
// SPIELNAMEN SPEICHERN
// ========================================

if (saveGameName) {

    saveGameName.addEventListener("click", () => {

        if (!gameNameInput) {
            return;
        }

        const name =
            gameNameInput.value.trim();


        if (name === "") {
            return;
        }


        localStorage.setItem(
            "currentGameName",
            name
        );


        if (newGamePopup) {

            newGamePopup.style.display = "none";

        }

    });

}



// ========================================
// SPIEL LADEN
// ========================================

const loadGameButton =
    document.getElementById("loadGameButton");

const loadGamePopup =
    document.getElementById("loadGamePopup");


if (loadGameButton && loadGamePopup) {

    loadGameButton.addEventListener("click", () => {

        loadGamePopup.style.display = "flex";

    });

}



// ========================================
// POPUPS SCHLIESSEN
// ========================================

const closePopupButtons =
    document.querySelectorAll(".closePopup");


closePopupButtons.forEach(button => {

    button.addEventListener("click", () => {

        document
            .querySelectorAll(".popup")
            .forEach(popup => {

                popup.style.display = "none";

            });

    });

});