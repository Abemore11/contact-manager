// Navigation menu.
import { enableNavigation } from './ui/navigation.js';
// Imports from Contact Service
import { getContactById } from './services/ContactService.js';
// Imports dynamic HTML function.
import { createContactDetails } from "./ui/contactDetails.js";

// Enables navigation.
enableNavigation();


// Retrieves the container where the contact will be displayed.
const contactContainer = document.getElementById('contact-details');

// Retrieves the URL parameters.
const params = new URLSearchParams(window.location.search);

// Retrieves the contact ID from the URL.
const id = params.get('id');

try {

  // Retrieves the matching contact by
  // calling the Contact Service.
  const contact = getContactById(id);

  // Code executed successfully without throwing any technical errors, 
  // but the data simply isn't there.
  if (!contact) {

    contactContainer.innerHTML = `
      <h2>Contact Not Found</h2>
      <p>The requested contact could not be found.</p>
    `;

  }
  else {

    // Creates the contact details element by 
    // calling function in contactDetail.js file.
    const contactDetails = createContactDetails(contact);

    // Displays the contact details dynamically by appending
    // newly created element to the contact container in contact.html file.
    contactContainer.appendChild(contactDetails);

  }

}
catch (error) {

  console.error('Unable to load contact:', error);

  contactContainer.innerHTML = `
    <h2>Error</h2>
    <p>Unable to load the requested contact.</p>
  `;
}