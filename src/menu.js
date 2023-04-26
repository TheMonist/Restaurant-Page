function createMenu() {
    const menuBody = document.createElement('div');
    menuBody.classList.add('menu-body');

    const menuCard = document.createElement('div');
    menuCard.classList.add('card');
    menuCard.appendChild(menuBody);

    const content = document.createElement('div');
    content.classList.add('content');
    content.appendChild(menuCard);

    return menu
}

function createMenuItem(name, description, price) {
    const menuName = document.createElement('h4');
    menuName.textContent = title;
    menuName.appendChild();

    const menuDescription = document.createElement('p');
    menuDescription.textContent = description;
    menuTitle.appendChild();

    const menuPrice = document.createElement('p');
    menuPrice.textContent = price;
    menuPrice.appendChild();

    const menuImage = document.createElement('img');
    menuImage.src `image/${name.toLowerCase()}.jpg`
    menuImage.alt = `${name}`

    return createMenuItem
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;