const loadHeader = (() => {
    const contentContainer = document.querySelector("#content");

    const header = document.createElement("header");
    header.innerHTML = `
        <header class="nav-bar">
            <h2>Lakay Restaurant</h2>
            <button class="tab active" data-tab-target="#home">Home</button>
            <button class="tab" data-tab-target="#menu">Menu</button>
            <button class="tab" data-tab-target="#contact">About</button>
        </header>`;

    contentContainer.appendChild(header);
})();

export { loadHeader };