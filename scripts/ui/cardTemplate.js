/* ========================================
             Contact Card Template
   ========================================
    *Index does not create the cards;
    *this file dynamically populates them.


Creates a contact card container element from the contact data.
Adds the contact-card class for styling.
Adds the card's HTML structure.
Adds a click event listener for navigation to Contact Details page.
Returns completed card element to index.js for display.

   ======================================= */

export function createContactCard(contact) {

  // Creates the contact card.
  const card = document.createElement('article');

  // Adds a 'contact-card' class for styling.
  card.classList.add('contact-card');


  // Creates the card's HTML.
  card.innerHTML = `
    <header class="contact-card-header">

      <h2>${contact.firstName} ${contact.lastName}</h2>

      <button 
        type="button"
        class="${contact.favorite ? 'favorite' : ''}"
        aria-label="Toggle favorite">
        ${contact.favorite ? '★' : '☆'}
      </button>

    </header>


    <p>${contact.title}</p>

    <p>${contact.tag} • ${contact.org}</p>
  `;

  // This allows us to navigate to the Contact Details page
  // when the card is clicked. 
  card.addEventListener('click', () => {

    window.location.href = `contact.html?id=${contact.id}`;

  })


  // Returns the completed contact card.
  return card;
}