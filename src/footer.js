const loadFooter = (() => {
    const contentContainer = document.querySelector("#content");

    const footer = document.createElement("footer");
    footer.innerHTML = `
        <footer>
            <h3>Created by The Monist</h3>
        </footer>`;

    contentContainer.appendChild(footer)
})();

export { loadFooter };