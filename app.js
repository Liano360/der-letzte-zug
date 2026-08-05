// Bildschirme

const screens = {
    main: document.getElementById("mainMenu"),
    play: document.getElementById("playScreen")
};


function showScreen(screen){

    Object.values(screens).forEach(s => {

        if(s){
            s.classList.remove("active");
        }

    });


    screen.classList.add("active");

}



// Hauptmenü Buttons

const playButton = document.getElementById("playButton");


playButton.addEventListener("click",()=>{

    showScreen(screens.play);

});



// Zurück Button

const backButton = document.querySelector(".smallBackButton");


backButton.addEventListener("click",()=>{

    showScreen(screens.main);

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