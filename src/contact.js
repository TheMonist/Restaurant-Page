const loadContact = (() => {
    const contentContainer = document.querySelector("#content");

    const contact = document.createElement("main");
    contact.setAttribute("id", "contact");
    contact.innerHTML = `
    <main id="contact" class="contact-body">
        <h2>About</h2>
        <p>We are a family owned business. Inspired by the cuisine of my culture. We try give a new twist to Haitian cuisine.</p>
        <p>100 Boynton Beach Blvd</p>
        <p>Boynton Beach, FL 33435</p>
        <p>561-123-4567</p>
        <p>We are located on the Corner of Boynton Beach Blvd and Secrest Blvd</p>
    </main>`;
    
    contentContainer.appendChild(contact);
})();

export { loadContact }