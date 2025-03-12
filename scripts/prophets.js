const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');
const filterButtons = document.querySelector('#filters'); // Div for filter buttons

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
  setupFilters(data.prophets); // Setup filter buttons after data is loaded
}

const displayProphets = (prophets) => {
  cards.innerHTML = ''; // Clear previous entries before applying filters

  prophets.forEach((prophet, index) => {
    let card = document.createElement('section');

    // Prophet Full Name with Prophet Number
    let fullName = document.createElement('h2');
    fullName.textContent = `${prophet.name} ${prophet.lastname} – ${prophet.order}th Latter-day President`;

    // Prophet Birth Info
    let birthInfo = document.createElement('p');
    birthInfo.textContent = `Born: ${prophet.birthdate} in ${prophet.birthplace}`;

    // Prophet Portrait
    let portrait = document.createElement('img');
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} – ${prophet.order}th Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append elements to the card
    card.appendChild(fullName);
    card.appendChild(birthInfo);
    card.appendChild(portrait);

    // Append card to cards div
    cards.appendChild(card);
  });
};

// Function to set up filter buttons
const setupFilters = (prophets) => {
  filterButtons.innerHTML = ''; // Clear existing buttons if any

  const filters = [
    { label: 'Born in Utah', condition: (p) => p.birthplace.includes('Utah') },
    { label: 'Born Outside U.S.', condition: (p) => !p.birthplace.includes('United States') },
    { label: 'Lived 95+ Years', condition: (p) => (new Date(p.deathdate).getFullYear() - new Date(p.birthdate).getFullYear()) >= 95 },
    { label: '10+ Children', condition: (p) => p.numofchildren >= 10 },
    { label: 'Served 15+ Years', condition: (p) => p.yearsserved >= 15 },
    { label: 'Show All', condition: () => true } // Show all prophets
  ];

  filters.forEach((filter) => {
    let button = document.createElement('button');
    button.textContent = filter.label;
    button.addEventListener('click', () => {
      const filteredProphets = prophets.filter(filter.condition);
      displayProphets(filteredProphets);
    });
    filterButtons.appendChild(button);
  });
};

// Call function to fetch and display data
getProphetData();
