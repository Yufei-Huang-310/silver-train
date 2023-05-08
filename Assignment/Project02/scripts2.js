document.addEventListener("DOMContentLoaded", () => {
    const imageButtons = document.querySelectorAll(".imageButton");
    imageButtons.forEach((imageButton) => {
      imageButton.addEventListener("click", () => {
        window.location.href = "index1.html";
      });
    });
  });