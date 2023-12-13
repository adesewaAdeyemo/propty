    const listItemTemplate = document.getElementById('listItemTemplate');

    // Get the container where the list items will be inserted
    const objectListContainer = document.getElementById('objectList');

    // Loop through the list and append the template for each item
    objectList.forEach(obj => {
      // Clone the template content
      const listItem = listItemTemplate.content.cloneNode(true);

      // Replace placeholders with actual data
      listItem.querySelector('[data-name]').textContent = obj.name;
      listItem.querySelector('[data-address]').textContent = obj.address;
      listItem.querySelector('[data-bill]').textContent = obj.bill;
      listItem.querySelector('[data-amount]').textContent = obj.amount;
      listItem.querySelector('[data-outstanding]').textContent = obj.outstanding;

      // Append the cloned and modified template to the container
      objectListContainer.appendChild(listItem);
    });
