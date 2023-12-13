const tableTemplate = document.getElementById("tableTemplate");
const tableItemTemplate = document.getElementById("tableItemTemplate");
const dynamicContent = document.getElementById("dynamicContent");

// Calculate the total number of pages
const totalPages = Math.ceil(tableObjectList.length / itemsPerPage);

// Clone the table template
const table = tableTemplate.content.cloneNode(true);
const tbody = table.querySelector("tbody");

// Function to display items for a specific page
function displayItems(page) {
  // Clear the table body
  tbody.innerHTML = "";

  // Calculate the start and end indices for the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Loop through the items for the current page and append them to the table
  for (let i = startIndex; i < endIndex && i < tableObjectList.length; i++) {
    const listItem = tableItemTemplate.content.cloneNode(true);

    // Replace placeholders with actual data
    const obj = tableObjectList[i];
    listItem.querySelector("[data-billname]").textContent = obj.billname;
    listItem.querySelector("[data-date]").textContent = obj.date;
    listItem.querySelector("[data-name]").textContent = obj.name;
    listItem.querySelector("[data-address]").textContent = obj.address;
    listItem.querySelector("[data-amount_billed]").textContent =
      obj.amount_billed;
    listItem.querySelector("[data-amount_owned]").textContent =
      obj.amount_owned;

    // listItem.querySelector("[data-flat_number]").textContent = obj.flat_number;
    // listItem.querySelector("[data-bed]").textContent = obj.bed;
    // listItem.querySelector("[data-bath]").textContent = obj.bath;
    // listItem.querySelector("[data-bills]").textContent = obj.bills;
    // listItem.querySelector("[data-tennant]").textContent = obj.tennant;
      

    // Append the row to the table body
    tbody.appendChild(listItem);
  }
}

// Function to update the pagination links
function updatePagination(currentPage) {
  const paginationContainer = table.querySelector(".pagination");

  // Clear existing pagination links
  paginationContainer.innerHTML = "";

  // Create pagination links
  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.classList.add("page-item");

    const a = document.createElement("a");
    a.classList.add("page-link");
    a.href = "#";
    a.textContent = i;

    // Highlight the current page
    if (i === currentPage) {
      li.classList.add("active");
    }

    // Add event listener to switch to the selected page
    a.addEventListener("click", function () {
      displayItems(i);
      updatePagination(i);
    });

    li.appendChild(a);
    paginationContainer.appendChild(li);
  }
}

// Initial display of items and pagination
displayItems(1);
updatePagination(1);

// Append the populated table to the dynamic content container
dynamicContent.appendChild(table);
