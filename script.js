// Initialize the wish count
let wishCount = 0;

// Handle form submission for messages
document.getElementById('submit-btn').addEventListener('click', function () {
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && message) {
    // Increment the wish count
    wishCount++;
    updateWishCounter();

    // Remove placeholder message if it exists
    const placeholder = document.getElementById('placeholder-message');
    if (placeholder) {
      placeholder.remove();
    }

    // Create a new wish card
    const card = document.createElement('div');
    card.classList.add('wish-card');
    card.innerHTML = `
      <h4>${name}</h4>
      <p>${message}</p>
    `;

    // Append the card to the wish board
    document.getElementById('wish-board').appendChild(card);

    // Clear the form inputs
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
  } else {
    alert('Please fill in both fields before submitting.');
  }
});

// Update wish counter dynamically
function updateWishCounter() {
  const counterElement = document.getElementById('wish-counter');
  counterElement.textContent = `${wishCount} Wish${wishCount > 1 ? 'es' : ''}`;
}
