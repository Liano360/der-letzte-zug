const splashScreen = document.getElementById("splashScreen");
const mainMenu = document.getElementById("mainMenu");

window.addEventListener("load", () => {

    // Logo bleibt kurz im Mittelpunkt
    setTimeout(() => {

        splashScreen.style.transition = "opacity 1.2s ease";
        splashScreen.style.opacity = "0";

        // Hauptmenü erscheint weich
        setTimeout(() => {

            splashScreen.style.display = "none";

            mainMenu.style.display = "block";
            mainMenu.style.opacity = "0";

            mainMenu.style.transition = "opacity 1.2s ease";

            setTimeout(() => {

                mainMenu.style.opacity = "1";

            }, 100);

        }, 1200);

    }, 3000);

});