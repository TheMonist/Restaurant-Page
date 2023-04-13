function createHome() {
    const home = document.createElement('div');
    home.classList.add('home-body');

    //for intro
    const introPara = document.createElement('p');
    introPara.textContent = "When you come here, we want you to feel at home!";
    introPara.appendChild(home);

    //for div container
    const divContainer = document.createElement('div');
    divContainer.appendChild(home);

    //for hours
    const hoursHeader = document.createElement('h3');
    hoursHeader.textContent = "Restaurant Hours";
    hoursHeader.appendChild(divContainer);

    const hoursOne = document.createElement('p');
    hoursOne.textContent = "Monday  - Thursday: 10am - 11pm";
    hoursOne.appendChild(divContainer);

    const hoursTwo = document.createElement('p');
    hoursTwo.textContent = "Friday - Sunday: 10am - 1am"
    hoursTwo.appendChild(divContainer);

  return home;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome