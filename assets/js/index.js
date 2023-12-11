function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const sidebarbtn = document.querySelector(".sidebar-btn");

  sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
  sidebarbtn.innerHTML =
    sidebar.style.display === "none" ? "&#9776;" : "&times;";
}

// const contentContainer = document.getElementById("dynamicContent");

// document.querySelectorAll(".tab a").forEach((link) => {
//   link.addEventListener("click", function (event) {
//     event.preventDefault();
//     const pageName = this.getAttribute("data-page");
//     loadContent(pageName);
//   });
// });

// function loadContent(pageName) {
//   fetch(`${pageName}.html`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Failed to fetch content for ${pageName}`);
//       }
//       return response.text();
//     })
//     .then((htmlContent) => {
//       contentContainer.innerHTML = htmlContent;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }
