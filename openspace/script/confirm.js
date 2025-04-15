document.addEventListener("DOMContentLoaded", () => {
    const data = JSON.parse(localStorage.getItem("joinData"));
    const div = document.getElementById("confirmation");
  
    if (data) {
      div.innerHTML = `
        <h2>Submission Confirmation</h2>
        <div class="confirmation-data">
          ${Object.entries(data)
            .map(([key, val]) => `<p><strong>${key}:</strong> ${val}</p>`)
            .join("")}
        </div>
      `;
    } else {
      div.textContent = "No data found.";
    }
  
    // Optional: Clear data after rendering
    localStorage.removeItem("joinData");
  });
  