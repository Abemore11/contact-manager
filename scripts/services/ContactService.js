/* ========================================
             Contact Data Service
   ========================================
**Pages do not manage data; this service does.

CREATE: saveContact(contact)
READ(1): getContactById(id) - READ(ALL): getAllContacts()
UPDATE: updateContact(contact)
DELETE: deleteContact(id)

======================================= */


// The key used to store contacts in localStorage.
const STORAGE_KEY = 'nexusContacts';


/* ====================================
                Public API
   ==================================== */


// ===================================================
// Saves a contact to localStorage.
// ===================================================
export function saveContact(contact) {

  // Try-Catch block to handle potential errors during the save operation.
  try {

    // Looks for a key named 'nexusContacts' in localStorage.
    // If it is not found, it defaults to an empty array.
    // Parse converts the JSON string back into a JavaScript array.
    const contacts = readContacts();

    // Adds the new contact to the end of the array.
    contacts.push(contact);

    // Calls function to write the updated contacts array back to localStorage.
    // Uses JSON.stringify to convert the array into a JSON string.
    writeContacts(contacts);

    // Returns true to the code that called this function,
    // indicating the save was successful.
    return true;

  }
  catch (error) {

    // Logs the error to the console for debugging purposes.
    console.error('Unable to save contact:', error);

    // Returns false to the code that called this function,
    // indicating the save has failed.
    return false;

  }

}


// ===================================================
// Retrieves a contact by its ID from localStorage.
// ===================================================
export function getContactById(id) {

    // Reads all contacts from localStorage.
    const contacts = readContacts();

    //Returns the first contact whose ID matches the provided ID.
    return contacts.find(contact => contact.id === id);
}


// ===================================================
// Retrieves all contacts.
// Seeds localStorage with default contacts if it's empty.
// ===================================================
export async function getAllContacts() {

  // Ensures that localStorage has been initialized.
  await seedContacts();

  // Retrieves contacts from localStorage.
  // Sends them to the index.js file to be displayed on the page.
  return readContacts();
}


/* ====================================
         Private Helper Functions
   ==================================== */


// ===================================================
// Seeds localStorage with the default contacts (JSON file) if it is empty.
// ===================================================
async function seedContacts() {

  // Read contacts from localStorage - stores in variable.
  const contacts = readContacts();

  // If localStorage already has contacts, don't seed again;
  // just return to getAllContacts() function.
  if (contacts.length > 0) {
    return;
  }

  // If localStorage is empty, fetch seeding JSON file.
  const response = await fetch('./data/contacts.json');
  // Parse the JSON response into a JS object (array of contacts).
  const seededContacts = await response.json();

  // Save the starter contacts into localStorage as a JSON string (uses stringify).
  writeContacts(seededContacts);
}


// ===================================================
// Reads contacts from localStorage and returns them as an array.
// ===================================================
function readContacts() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}


// ===================================================
// Writes contacts to localStorage as a JSON string.
// ===================================================
function writeContacts(contacts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
}