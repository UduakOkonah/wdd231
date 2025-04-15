import { fetchData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  // Home page data fetch logic
  const howToBeginContainer = document.getElementById('how-to-begin');
  const spotlightContainer = document.getElementById('spotlight');

  if (howToBeginContainer || spotlightContainer) {
    fetchData('data/data.json')
      .then(data => {
        if (howToBeginContainer && data.howToBegin) {
          data.howToBegin.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
              <h3>${item.title}</h3>
              <ul>
                ${item.details.map(detail => `<li>${detail}</li>`).join('')}
              </ul>
            `;
            howToBeginContainer.appendChild(card);
          });
        }

        if (spotlightContainer && data.communityHighlights) {
          data.communityHighlights.forEach(highlight => {
            const spotlightCard = document.createElement('div');
            spotlightCard.classList.add('spotlight-card');
            spotlightCard.innerHTML = `
              <h3>${highlight.name}</h3>
              <p>${highlight.description}</p>
              <span>${highlight.category}</span>
            `;
            spotlightContainer.appendChild(spotlightCard);
          });
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  // Confirmation page logic
  const confirmationDiv = document.getElementById("confirmation");
  if (confirmationDiv) {
    const formData = JSON.parse(localStorage.getItem("joinData"));
    if (formData) {
      confirmationDiv.innerHTML = `
        <h2>🎉 Confirmation Received!</h2>
        <div class="confirmation-data">
          ${Object.entries(formData).map(([key, value]) =>
            `<p><strong>${key.replace(/([a-z])([A-Z])/g, '$1 $2')}:</strong> ${value}</p>`
          ).join('')}
        </div>
      `;
    } else {
      confirmationDiv.textContent = "No form data found. Please return to the form.";
    }
    localStorage.removeItem("joinData");
  }
});
