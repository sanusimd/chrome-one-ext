let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const saveInput = document.getElementById("input-btn");
// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el");

saveInput.addEventListener("click", function () {
  // console.log("button click");

  let inputData = inputEl.value;
  // console.log(inputEl.value);
  myLeads.push(inputData);
  // console.log(myLeads);
});
// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
let listItem = " ";
for (let i = 0; i < myLeads.length; i++) {
  const leads = myLeads[i];
  // console.log(leads);
  // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
  listItem += "<li>" + leads + " </li>";
  // create element
}
// 3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML = listItem;

// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field
// Push the value  to myArray when the input button is clicked
