import loadHome from "./home";
import loadContact from "./contact";
import loadMenu from "./menu";

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const resName = document.createElement("h1");
    resName.classList.add("res-name");
    resName.textContent = "Sushi Restaurant";

    header.appendChild(resName);
}