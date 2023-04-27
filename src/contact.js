function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact-body');

    const contactHeader = document.createElement('h2');
    contactHeader.textContact = "About";
    contactHeader.appendChild(contact);

    const blurb = document.createElement('p');
    blurb.textContent = "We are a family owned business. Inspired by the cuisine of my culture. We try give a new twist to Haitian cuisine.";
    blurb.appendChild(contact);

    const firstLine = document.createElement('p');
    firstLine.textContent = "100 Boynton Beach Blvd";
    firstLine.appendChild('contact');

    const secondLine = document.createElement('p');
    secondLine.textContent = "Boynton Beach, FL";
    secondLine.appendChild('contact')

    const phone = document.createElement('p');
    phone.textContent = "561-123-4567";
    phone.appendChild(contact);

    return contact;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;