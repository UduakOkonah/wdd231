const cardContainer = document.getElementById("cards-container");

// Load and display cards from JSON
async function loadDiscoverCards() {
  const response = await fetch("data/discover.json");
  const data = await response.json();

  data.forEach(item => {
    const card = document.createElement("section");
    card.classList.add("discover-card");

    card.innerHTML = `
      <h2>${item.title}</h2>
      <figure>
        <img src="${item.image}" alt="${item.title}" loading="lazy" width="300" height="200" />
      </figure>
      <address>${item.address}</address>
      <p>${item.description}</p>
      <button>Learn More</button>
    `;

    cardContainer.appendChild(card);
  });
}

// Visitor Message Logic
function showVisitorMessage() {
  const visitDisplay = document.getElementById("visitor-message");
  const now = Date.now();
  const lastVisit = localStorage.getItem("lastVisit");
  let message = "";

  if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
  } else {
    const diff = now - lastVisit;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days < 1) {
      message = "Back so soon! Awesome!";
    } else {
      message = `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;
    }
  }

  visitDisplay.textContent = message;
  localStorage.setItem("lastVisit", now);
}

// Init
loadDiscoverCards();
showVisitorMessage();
