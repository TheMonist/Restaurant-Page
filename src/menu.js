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

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;