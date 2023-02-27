// Quand on clique sur le bouton, on ajoute ou on enlève la classe "open" au menu
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("clickMenu", function () {
    menu.classList.toggle("open");
    if (menu.classList.contains("open")) {
        menuButton.textContent = "Fermer";
    } else {
        menuButton.textContent = "Menu";
    }
});