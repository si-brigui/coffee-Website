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
  const orderNowButton = document.querySelector(".order-now"); // Replaced example-button with order-now
  const contactUsButton = document.querySelector(".contact-us"); // Added contact-us button for another example

  // Ensure both buttons exist before attaching event listeners
  if (orderNowButton) {
    orderNowButton.addEventListener("click", () => {
      console.log("Order Now button clicked!");
      // Additional code for ordering functionality
    });
  } else {
    console.error("Order Now button not found in the DOM!");
  }

  if (contactUsButton) {
    contactUsButton.addEventListener("click", () => {
      console.log("Contact Us button clicked!");
      // Additional code for contacting functionality
    });
  } else {
    console.error("Contact Us button not found in the DOM!");
  }
});
