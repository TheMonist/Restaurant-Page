const loadHeader = (() => {
    const contentContainer = document.querySelector("#content");

    const header = document.createElement("header");
    header.innerHTML = `
        <nav>
            <header class="nav-bar">
                <h2>Lakay Restaurant</h2>
                <ul class="links">
                    <li class="tab active data-tab-target="#home"">Home</li>
                    <li class="tab" data-tab-target="#menu">Menu</li>
                    <li class="tab" data-tab-target="#contact">About</li>
                </ul>
            </header>
        </nav>`;

    contentContainer.appendChild(header);
})();

export { loadHeader };