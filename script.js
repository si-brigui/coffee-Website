

// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Swiper
  const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Add event listeners for buttons (example)
  const exampleButton = document.querySelector(".example-button"); // Replace with your actual button selector
  if (exampleButton) {
    exampleButton.addEventListener("click", () => {
      console.log("Example button clicked!");
    });
  } else {
    console.error("Example button not found in the DOM!");
  }
});