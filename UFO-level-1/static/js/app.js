// from data.js
var tableData = data;

// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Using Arrow Functions to append a table to the web page that then adds new rows of data for each UFO sighting.
data.forEach((ufoSightings) => {
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});



// Select the button
// from html file <button id="filter-btn"
var button = d3.select("#filter-btn");

// Select the form
// from html file <div class="form-group">
var form = d3.select(".form-group");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputDateTime = d3.select("#datetime");

  // Get the value property of the input element
  var DateTime = inputDateTime.property("value");
  console.log(DateTime);

  // Use the form input to filter the data by date
  var filteredData = ufo.filter(ufo => ufo.datetime == datetime);
  console.log(filteredData)