const splashScreen = document.getElementById("splashScreen");
const mainMenu = document.getElementById("mainMenu");

window.addEventListener("load", () => {

    setTimeout(() => {

        splashScreen.style.transition = "opacity 1s ease";
        splashScreen.style.opacity = "0";


        setTimeout(() => {

            splashScreen.style.display = "none";

            mainMenu.style.display = "block";

            mainMenu.style.opacity = "0";

            setTimeout(() => {

                mainMenu.style.transition = "opacity 1s ease";
                mainMenu.style.opacity = "1";

            }, 100);


        }, 1000);


    }, 4500);

});