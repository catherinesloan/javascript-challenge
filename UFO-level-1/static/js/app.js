// INSTRUCTIONS:
// 1. Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
// 2. Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

// YOUR CODE HERE!

// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// PART 1 - Class 15.3 activity 3

// Using Arrow Functions to append a table to the web page that then adds new rows of data for each UFO sighting
data.forEach((ufoSightings) => {
  // add a table row for every object in the data file
  var row = tbody.append("tr");
  // add the keys and their values for each entry
  Object.entries(ufoSightings).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// PART 2 - Class 15.3 activity 9

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runFilter);
form.on("submit",runFilter);

// Create the function to run for both events
function runFilter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  // Printing the value entered to the console - this works!
  console.log(inputValue);

  // Use the form input to filter the data by date
  var filteredData = tableData.filter(sightings => sightings.datetime == inputValue);
  // Printing the sightings with date entered in the form to the console - this works!
  console.log(filteredData);
  
  // Removing the sightings from the tbody tag in the html code
  tbody.html("");
  
  // Now can add the data filtered on date to the table without it being added to full table of data
  // This is the same as part 1
  filteredData.forEach((sighting) => {
    // add a table row for every sighting in the filtered date
    var row = tbody.append("tr");
    // adding the keys and their values for each matching date
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}