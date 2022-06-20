function createHome() {
    const home = document.createElement("div");
    home.classList.add("main");

    home.appendChild(createAboutUs("About us"));
    home.appendChild(createParagraph(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur tincidunt nisl. Praesent quis
    erat dignissim, dapibus erat facilisis, malesuada tellus. Nam enim mi, porttitor ornare condimentum
    quis, maximus sed est. Vestibulum varius risus non placerat euismod. Nunc rutrum consequat velit ac
    luctus. Maecenas a porta ligula, vel ornare magna. Vivamus sodales ante at scelerisque semper.

    Mauris volutpat egestas enim, in lobortis sapien facilisis cursus. Quisque ornare eros dui, sit amet
    maximus ligula efficitur vel. Nulla consectetur id libero nec mattis. Aenean aliquam elit ut lectus
    porta faucibus. Nullam auctor dignissim ex, sit amet lobortis eros placerat nec. Ut scelerisque justo
    nec consectetur tincidunt. Nulla sed libero libero. Cras in magna at nisi mattis faucibus.`));

    return home;
};

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
};

function createAboutUs(text) {
    const aboutUs = document.createElement("h2");
    aboutUs.textContent = text;
    return aboutUs;
};

function loadHome() {
    const content = document.getElementById("content");
    content.textContent = "";
    content.appendChild(createHome());
};

export default loadHome;
