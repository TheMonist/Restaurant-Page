const loadHeader = (() => {
    const contentContainer = document.querySelector("#content");

    const header = document.createElement("header");

    header.innerHTML = `
        <header class="nav-bar">
            <h2>Lakay Restaurant</h2>
            <ul>
                <li><a href="#home" class="tab active">Home</a></li>
                <li><a href="#menu" class="tab">Menu</a></li>
                <li><a href="#contact" class="tab">About</a></li>
            </ul>
        </header>`;

    contentContainer.appendChild(header);
})();

export { loadHeader };