// ===============================
// Startanimation
// ===============================

function startSplashAnimation() {

    const splash = document.getElementById("splashScreen");
    const mainMenu = document.getElementById("mainMenu");

    if (!splash || !mainMenu) return;

    // Hauptmenü zunächst ausblenden
    mainMenu.classList.remove("active");

    // Startanimation sichtbar halten
    splash.style.display = "flex";
    splash.style.opacity = "1";
    splash.style.visibility = "visible";

    // Nach 4,5 Sekunden beginnt das Ausblenden
    setTimeout(() => {

        splash.style.transition = "opacity 1s ease";
        splash.style.opacity = "0";

        // Nach der 1-sekündigen Animation komplett entfernen
        setTimeout(() => {

            splash.style.display = "none";
            splash.style.visibility = "hidden";

            mainMenu.classList.add("active");

        }, 1000);

    }, 4500);
}


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

// Neues Spiel

const newGameButton =
document.getElementById("newGameButton");


const newGamePopup =
document.getElementById("newGamePopup");


newGameButton.addEventListener("click",()=>{

    newGamePopup.style.display="flex";

    document
    .getElementById("gameNameInput")
    .focus();

});




// Name speichern

const saveGameName =
document.getElementById("saveGameName");


saveGameName.addEventListener("click",()=>{


    let name =
    document.getElementById("gameNameInput").value;


    if(name.trim() !== ""){


        localStorage.setItem(
            "currentGameName",
            name
        );


        newGamePopup.style.display="none";


    }


});




// Spiel laden

const loadGameButton =
document.getElementById("loadGameButton");


const loadGamePopup =
document.getElementById("loadGamePopup");


loadGameButton.addEventListener("click",()=>{


    loadGamePopup.style.display="flex";


});




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