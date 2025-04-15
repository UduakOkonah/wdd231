document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("joinForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const formObj = {};

    formData.forEach((value, key) => {
      formObj[key] = value;
    });

    // Store in localStorage
    localStorage.setItem("joinData", JSON.stringify(formObj));

    // Redirect to confirm page
    window.location.href = "confirm.html";
  });
});
