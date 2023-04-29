const loadHome = (() => {
  const contentContainer = document.querySelector("#content");

  const home = document.createElement("main");
  home.setAttribute("id", "home");
  home.innerHTML = `
    <main id="home" class="home-body">
      <h2>Lakay Restaurant</h2>
      <p>When you come here, we want you to feel at home!</p>
        <div>
          <h3>Restaurant Hours</h3>
            <p>Monday - Thursday: 10am - 11pm</p>
            <p>Friday - Sunday: 10am - 1am</p>
        </div>
    </main>`;

  contentContainer.appendChild(home);
})();
export { loadHome }