function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const phone = document.createElement("p");
    phone.textContent = "Phone: +1-555-555-5555";

    const address = document.createElement("p");
    address.textContent = "Address: In your dreams";

    const map = document.createElement("img");
    map.src = "./images/map.png";
    map.alt = "map";

    contact.appendChild(phone);
    contact.appendChild(address);
    contact.appendChild(map);

    return contact;
};

function loadContact() {
    const content = document.getElementById("content");
    content.textContent = "";
    content.appendChild(createContact());
};

export default loadContact;