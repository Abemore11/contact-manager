/* ===================================================

Exports a function so other files can enable search functionality.

The parameter "callback" is expected to be a FUNCTION.

  - We don't know what this function does.
  - We only know that whoever calls enableSearch() will provide it.

====================================================== */


export function enableSearch(callback) {

  // Find the search input on the page.
  // Where the user will type.
  const searchInput = document.getElementById('contact-search');

  // Registers an event listener.
  //
  // Nothing inside this function runs yet.
  //
  // The browser simply remembers:
  // "When user types into this input,
  // execute the following function."
  searchInput.addEventListener('input', () => {

    // Read the user's current input.
    // Turn into lower case.
    // Trim it.
    // Save it in variable so we can use it.
    const searchTerm = searchInput.value
      .toLowerCase()
      .trim();

    // Execute the function that was passed in.
    //
    // Whatever function the caller provided
    // will now run.
    //
    // searchTerm variable is passed as an argument.
    callback(searchTerm);

  });

}