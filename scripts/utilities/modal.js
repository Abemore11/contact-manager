// Get modal element.
const modal = document.getElementById("modal");
// Get modal title element (h2).
const modalTitle = document.getElementById("modal-title");
// Get modal description element (p).
const modalDescription = document.getElementById("modal-description");
// Get close button element.
const closeButton = document.getElementById("close-modal");

// Function to open the modal
// Passes a given title and message for it to display.
export function openModal(title, message) {
  // Set the title of the modal.
  modalTitle.textContent = title;
  // Set the message of the modal.
  modalDescription.textContent = message;
  // Add the "open" class to the modal to make it visible.
  modal.classList.add("open");
  // Set the modal's aria-hidden attribute to false - indicates that the modal is now visible.
  modal.setAttribute("aria-hidden", "false");
}

// Function to close the modal.
export function closeModal() {
  // Remove the "open" class from the modal to hide it.
  modal.classList.remove("open");
  // Set the modal's aria-hidden attribute to true - indicates that the modal is now hidden.
  modal.setAttribute("aria-hidden", "true");
}

// Closes modla via the close button.
closeButton.addEventListener("click", closeModal);

// Closes modal via clicking inside the modal overlay.
window.addEventListener("click", (event) => {

  if (event.target === modal) {
    closeModal();
  }

});

// Closes modal via pressing the Escape key (accessibility feature).
window.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    closeModal();
  }

});