// Navigation menu.
import { enableNavigation } from './ui/navigation.js';
// Contact model.
import Contact from './models/Contact.js';
// Default Import: Contact service for saving contacts.
import { saveContact } from './services/ContactService.js';
// Modal utility for displaying messages.
import { openModal } from './utilities/modal.js';


// Enables navigation for the form page.
enableNavigation();

// Slects the form element.
const contactForm = document.getElementById('contact-form');

// Adds an event listener to the form submission.
contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevents the default form submission behavior.

  // 1. Creates a FormData object from the form.
  // Used to easily retrieve form values.
  const formData = new FormData(contactForm);

  // 2. Create a new Contact object.
  // Populates the Contact object with values from the form.
  const contact = new Contact(
    crypto.randomUUID(), // Generates a unique ID for the contact.
    formData.get('firstName'),
    formData.get('lastName'),
    formData.get('title'),
    formData.get('organization'),
    // If value received from checkbox === 'on', then set to true.
    // Otherwise, null === 'on' returns false.
    formData.get('favorite') === 'on', // Converts the checkbox value to a boolean.
    formData.get('tag'),
    formData.get('phone'),
    formData.get('email'),
    formData.get('street'),
    formData.get('city'),
    formData.get('state'),
    formData.get('zip'),
    formData.get('notes')
  );

  // 3. Save new contact to local storage using Contact Service save function.
  const wasSaved = saveContact(contact);

  // 4. Display a success or error message in the modal.
  // Successfully saved contact, reset the form and show success modal.
  if (wasSaved) {

    openModal(
      "Success!",
      `${contact.firstName} ${contact.lastName} was saved successfully.`
    );

    // 5. Reset the form after successful submission.
    contactForm.reset();

  }
  // If the contact was not saved successfully, show an error modal.
  else {

    openModal(
      "Error:",
      "Unable to save contact."
    );

  }

});