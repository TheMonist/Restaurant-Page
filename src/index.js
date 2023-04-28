import loadHome from "./home";
import loadContact from "./contact";
import loadMenu from "./menu";

//you might need to make a function to export here
function createNav() {
    const nav = document.createElement('nav');

    const homeTab = document.createElement('button');
    //you have this as an a and li element
    homeTab.classList.add('nav-button');
    homeTab.textContent = "Home";
    homeTab.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeTab);
        loadHome();
    });

    const menuTab = document.createElement('button');
    menuTab.classList.add('nav-button');
    menuTab.textContent = "Menu";
    menuTab.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuTab);
        loadMenu();
    });

    const contactTab = document.createElement('button');
    contactTab.classList.add('nav-button');
    contactTab.textContent = "Contact";
    contactTab.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactTab);
        loadContact();
    });

    nav.appendChild(homeTab);
    nav.appendChild(menuTab);
    nav.appendChild(contactTab);

    return nav
}

//function to switch tabs
function setActiveButton(button) {
    const buttons = document.querySelectorAll('.nav-button');

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
};

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main;
}

function initializeSite() {
    const content = document.querySelector('#content');

    content.appendChild(createNav);
    content.appendChild(createMain);

    setActiveButton(document.querySelector('.nav-button'));
    loadHome();
}

export default initializeSite; 

 console.log("This works");