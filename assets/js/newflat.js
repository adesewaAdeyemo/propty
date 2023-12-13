document.getElementById("addNewFlatBtn").addEventListener("click", function () {
  // Create a new div element with the class "newFlat"
  // var newFlat = document.createElement('div');
  // newFlat.className = 'newFlat';
  var newFlat = document.getElementById("newFlat");
  // Create the elements for the new unit and its select row
  var unitHeader = document.createElement("h6");
  unitHeader.className = "mt-2";
  unitHeader.textContent = "New Unit";

  var selectRow = document.createElement("div");
  selectRow.className = "row";

  var bedroomSelect = createSelect("bedroomSelect", "Number of Bedroom");
  var bathroomSelect = createSelect("bathroomSelect", "Number of Bathroom");

  // Append the elements to the selectRow div
  selectRow.appendChild(bedroomSelect);
  selectRow.appendChild(bathroomSelect);

  // Append the elements to the newFlat div
  newFlat.appendChild(unitHeader);
  newFlat.appendChild(selectRow);

  // Append the newFlat div to the body or any other container element
  document.body.appendChild(newFlat);
});

// Function to create a select element
function createSelect(id, label) {
  var select = document.createElement("select");
  select.id = id;
  select.name = id;
  select.className = "col-12";

  var option1 = document.createElement("option");
  option1.value = "nill";
  option1.textContent = "Select";

  var option2 = document.createElement("option");
  option2.value = "residential";
  option2.textContent = "Residential";

  var option3 = document.createElement("option");
  option3.value = "commercial";
  option3.textContent = "Commercial";

  var option4 = document.createElement("option");
  option4.value = "industrial";
  option4.textContent = "Industrial";

  var option5 = document.createElement("option");
  option5.value = "other";
  option5.textContent = "Other";

  select.appendChild(option1);
  select.appendChild(option2);
  select.appendChild(option3);
  select.appendChild(option4);
  select.appendChild(option5);

  var labelElement = document.createElement("label");
  labelElement.for = id;
  labelElement.className = "form-label";
  labelElement.textContent = label;

  var colElement = document.createElement("div");
  colElement.className = "col mb-2";
  colElement.appendChild(labelElement);
  colElement.appendChild(select);

  return colElement;
}
