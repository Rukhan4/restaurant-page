function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const resName = document.createElement("h1");
    resName.classList.add("res-name");
    resName.textContent = "Sushi Restaurant";

    header.appendChild(resName);
}