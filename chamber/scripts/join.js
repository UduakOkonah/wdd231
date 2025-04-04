function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex"; // Show modal
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none"; // Hide modal
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    let modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};

document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".membership-card");
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 200); // Creates a staggered fade-in effect
    });
});


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("timestamp").value = new Date().toISOString();
});

// Function to get URL parameters
function getQueryParam(param) {
const urlParams = new URLSearchParams(window.location.search);
return urlParams.get(param) || "N/A";
}

// Populate fields with form data
document.addEventListener("DOMContentLoaded", function () {
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param) || "N/A";
    }

    // Ensure elements exist before trying to modify them
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const organization = document.getElementById("organization");
    const timestamp = document.getElementById("timestamp");

    if (firstName && lastName && email && phone && organization && timestamp) {
        firstName.textContent = getQueryParam("first_name");
        lastName.textContent = getQueryParam("last_name");
        email.textContent = getQueryParam("email");
        phone.textContent = getQueryParam("phone");
        organization.textContent = getQueryParam("organization");
        timestamp.textContent = getQueryParam("timestamp");
    } else {
        console.warn("Some elements are missing in the DOM.");
    }
});
