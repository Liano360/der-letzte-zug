const splashScreen = document.getElementById("splashScreen");
const mainMenu = document.getElementById("mainMenu");

window.addEventListener("load", () => {

    setTimeout(() => {

        splashScreen.style.transition = "opacity 0.8s ease";
        splashScreen.style.opacity = "0";

        setTimeout(() => {

            splashScreen.style.display = "none";

            mainMenu.style.display = "block";
            mainMenu.style.opacity = "0";
            mainMenu.style.transition = "opacity 0.8s ease";

            setTimeout(() => {
                mainMenu.style.opacity = "1";
            }, 50);

        }, 800);

    }, 2000);

});