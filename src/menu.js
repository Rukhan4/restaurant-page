function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(
        createMenuItem(
            "Roll 1",
            "Roll 1 Description"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Roll 2",
            "Roll 2 Description"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Roll 3",
            "Roll 3 Description"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Roll 4",
            "Roll 4 Description"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Roll 5",
            "Roll 5 Description"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Roll 6",
            "Roll 6 Description"
        )
    );

    return menu;
}

function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const menuItemName = document.createElement("h2");
    menuItemName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    const foodImage = document.createElement("img");
    foodImage.src = "images/food.PNG";

    menuItem.appendChild(menuItemName);
    menuItem.appendChild(foodDescription);
    menuItem.appendChild(foodImage);

    return menuItem;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
};

export default loadMenu;