document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("joinForm"); // ✅ Only declare once

  // Prefill if any data exists
  const storedData = JSON.parse(localStorage.getItem("joinData"));
  if (storedData) {
    Object.keys(storedData).forEach(key => {
      const input = form.elements[key];
      if (input) input.value = storedData[key];
    });
  }

  form.addEventListener("submit", (e) => {
    const formData = new FormData(form);
    const joinData = {};

    for (let [key, value] of formData.entries()) {
      joinData[key] = value;
    }

    localStorage.setItem("joinData", JSON.stringify(joinData));
  });
});
