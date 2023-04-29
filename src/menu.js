const loadMenu = (() => {
    const contentContainer = document.querySelector("#content");

    const menu = document.createElement("main");
    menu.setAttribute("id", "menu");
    menu.innerHTML = `
        <main id="menu">
            <h2>Menu</h2>
            <div class="menu-body">
                <div class="card">
                    <img src="images/rice.jpg" alt="plate of rice">
                    <div class="content">
                        <h4>Haitian Rice</h4>
                        <p>Choose Chicken, Fish, or Vegetables</p>
                        <p>Comes with Pikliz</p>
                        <p>$15.99</p>
                    </div>
                </div>
                <div class="card">
                    <img src="images/soup.jpg" alt="bowl of soup">
                    <div class="content">
                        <h4>Soup</h4>
                        <p>Pumpkin Soup or Soup of the Day</p>
                        <p>$7.99</p>
                    </div>
                </div>
                <div class="card">
                    <img src="images/sandwich.jpg" alt="man holding sandwich">
                    <div class="content">
                        <h4>Sandwiches</h4>
                        <p>Try Our Plaintain Sandwiches, with Choice of Protein.</p>
                        <p>Loaded with Peppers, Onions, and Coleslaw.</p>
                        <p>Comes with Fries, Salad, or Plantains.</p>
                        <p>$13.99</p>
                    </div>
                </div>
                <div class="card">
                    <img src="images/sides.jpg" alt="plate of plantains">
                    <div class="content">
                        <h4>Sides</h4>
                        <p>Plaintains, Small Rice and Beans, Tassot, Griot</p>
                         <p>$4.99</p>
                    </div>
                </div>
                <div class="card">
                    <img src="images/reg-drink.jpg" alt="coconut water">
                    <div class="content">
                        <h4>Drinks</h4>
                        <p>Coconut Water, Regular Water, and Pepsi Drinks</p>
                        <p>$1.99</p>
                    </div>
                </div>
                <div class="card">
                    <img src="images/drink.jpg" alt="alcholic drink">
                    <div class="content">
                        <h4>Alcoholic Drinks</h4>
                        <p>Menu Coming Soon!</p>
                    </div>
                </div>
            </div>
        </main>`;

    contentContainer.appendChild(menu);
})();

export { loadMenu };