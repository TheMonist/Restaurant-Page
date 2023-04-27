function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu-body');

    menu.appendChild(
        createMenuItem("Rice", "Choose Chicken, Fish, or Vegtables", "$15.99")
    );

    menu.appendChild(
        createMenuItem("Soup", "Pumpkin Soup or Soup of the Day", "$7.99")
    );

    menu.appendChild(
        createMenuItem("Sandwiches", "Try Our Plaintain Sandwiches, with Choice of Protein", "$13.99")
    );

    menu.appendChild(
        createMenuItem("Sides", "Plaintains, Small Rice and Beans, Tassot, Griot", "$4.99")
    );
    
//change from img from reg-drink to drink
    menu.appendChild(
        createMenuItem("Drinks", "Coconut Water, Regular Water, and Pepsi Drinks", "$2.29")
    );

//change img from drink to cocktails
    menu.appendChild(
        createMenuItem("Cocktails", "Menu Comming Soon!")
    );

    return menu
}

function createMenuItem(name, description, price) {
    const menuCard = document.createElement('div');
    menuCard.classList.add('card');
    menuCard.appendChild(menu);

    const content = document.createElement('div');
    content.classList.add('content');
    content.appendChild(menuCard);

    const menuImage = document.createElement('img');
    menuImage.src `image/${name.toLowerCase()}.jpg`
    menuImage.alt = `${name}`
    menuCard.appendChild(menuImage);

    const menuName = document.createElement('h4');
    menuName.textContent = title;
    menuCard.appendChild(menuName);

    const menuDescription = document.createElement('p');
    menuDescription.textContent = description;
    menuCard.appendChild(menuDescription);

    const menuPrice = document.createElement('p');
    menuPrice.textContent = price;
    menuCard.appendChild(menuPrice);

    return createMenuItem
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;