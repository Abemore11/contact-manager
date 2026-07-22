/* ========================================
           Contact Details Template
   ========================================
*Contact Details does not create the main HTML content.;
  *this file dynamically populates contact details.


Creates a contact card element from the contact data.
Adds the contact-card class for styling.
Adds the card's HTML structure.
Returns completed card element to index.js for display.

   ======================================= */

export function createContactDetails(contact) {

  const details = document.createElement('section');

  details.classList.add('contact-details');

  details.innerHTML = `

    <!-- Profile Header -->
    <header class="contact-details-header">

      <div>

        <h1>
          ${contact.firstName} ${contact.lastName}
        </h1>

        <p class="contact-details-title">
          ${contact.title}
        </p>

        <p class="contact-details-org">
          ${contact.org}
        </p>

      </div>


      ${contact.favorite ? `
        <span class="favorite-badge">
          ★ Favorite
        </span>
      ` : ''}

    </header>


    <!-- Contact Information -->
    <section class="contact-details-section">

      <h2>Contact</h2>

      <p>
        <strong>Phone</strong>
        ${contact.phone}
      </p>

      <p>
        <strong>Email</strong>
        ${contact.email}
      </p>

    </section>


    <!-- Location -->
    <section class="contact-details-section">

      <h2>Location</h2>

      <p>
        ${contact.street}
        <br>
        ${contact.city}, ${contact.state} ${contact.zip}
      </p>

    </section>


    <!-- Relationship -->
    <section class="contact-details-section">

      <h2>Relationship</h2>

      <p class="contact-tag">
        ${contact.tag}
      </p>

    </section>


    <!-- Notes -->
    ${contact.notes ? `

      <section class="contact-details-section">

        <h2>Notes</h2>

        <p>
          ${contact.notes}
        </p>

      </section>

    ` : ''}

  `;


  return details;

}