// Navigation menu.
import { enableNavigation } from './ui/navigation.js';
// Get all contacts from localStorage and display them on the page.
import { getAllContacts } from './services/ContactService.js';
// Creates a contact card from the contact data.
import { createContactCard } from './ui/cardTemplate.js';
// Adds search capability.
import { enableSearch } from './ui/search.js';

// Enables navigation for the index page.
enableNavigation();


// Retrieves the section where contact cards will be displayed.
const contactList = document.getElementById('contacts-container');

// Stores all contacts in memory for filtering.
let contacts = [];


// Displays contact cards on the page.
// Reusable function - whatever array passed
// gets displayed.
function displayContacts(contactsToDisplay) {

  // Clears existing cards.
  contactList.innerHTML = '';


  // Iterates through given array:
  contactsToDisplay.forEach(contact => {

    // Creates card for each contact in given array.
    const card = createContactCard(contact);

    // Then displays it by appending it to the container element.
    contactList.appendChild(card);

  });

}


// Function to initialize the page.
async function init() {

  // Retrieves all contacts.
  contacts = await getAllContacts();

  // Displays all contacts - initially.
  displayContacts(contacts);

}


// Calls enableSearch().
// enableSearch() expects a FUNCTION.
//
// Creates an anonymous arrow function right here
// and pass it in.
enableSearch((searchTerm) => {

  // Filter creates a NEW array.
  // The original contacts array is not changed.
  //
  // Each contact is then tested inside.
  const filteredContacts = contacts.filter(contact => {

    // Build one searchable string that contains
    // all of the contact's searchable information.
    //
    // We combine everything into one string.
    const searchableText = `
            ${contact.firstName}
            ${contact.lastName}
            ${contact.title}
            ${contact.org}
            ${contact.tag}
        `.toLowerCase();

    // includes() returns true or false.
    //
    // If true:
    // keep this contact.
    //
    // If false:
    // remove this contact from the new array.
    return searchableText.includes(searchTerm);

  });

  // Redisplay the page using only the
  // contacts that matched the search.
  displayContacts(filteredContacts);

});

// Starts the application.
init();