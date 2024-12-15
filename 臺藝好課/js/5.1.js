document.addEventListener("DOMContentLoaded", function () {
  // Dropdown functionality
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".dropdown-button");
    const content = dropdown.querySelector(".dropdown-content");

    button.addEventListener("click", () => {
      dropdown.classList.toggle("active");
    });

    content.querySelectorAll("a").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        button.textContent = item.textContent;
        dropdown.classList.remove("active");
      });
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("active");
      });
    }
  });

  // Action button functionality
  const actionButtons = document.querySelectorAll(".action-button");
  actionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Handle action button clicks
      console.log("Action button clicked:", button.title);
      // You can add specific functionality for each action here
    });
  });
});
