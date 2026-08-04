const splashScreen = document.getElementById("splashScreen");
const mainMenu = document.getElementById("mainMenu");


// Startanimation

window.addEventListener("load", () => {

    setTimeout(() => {

        splashScreen.style.transition = "opacity 1s ease";
        splashScreen.style.opacity = "0";


        setTimeout(() => {

            splashScreen.style.display = "none";

            mainMenu.classList.remove("hidden");

            mainMenu.style.opacity = "0";

            setTimeout(() => {

                mainMenu.style.transition = "opacity 0.8s ease";
                mainMenu.style.opacity = "1";

            }, 100);


        }, 1000);


    }, 3000);

});



// Bildschirm wechseln

function openScreen(screenID) {

    const screens = document.querySelectorAll(".screen");


    screens.forEach(screen => {

        screen.style.opacity = "0";

        setTimeout(() => {

            screen.classList.add("hidden");

        }, 300);

    });



    setTimeout(() => {

        const nextScreen = document.getElementById(screenID);

        nextScreen.classList.remove("hidden");

        nextScreen.style.opacity = "0";


        setTimeout(() => {

            nextScreen.style.transition = "opacity 0.5s ease";

            nextScreen.style.opacity = "1";

        }, 50);


    }, 350);

}