// INSTRUCTIONS:
// Using multiple input tags and/or select dropdowns write JavaScript code so the user can 
// to set multiple filters and search for UFO sightings using the following criteria based on the table columns:
// date/time
// city
// state
// country
// shape

// YOUR CODE HERE!
// First part is the same as UFO part 1 

// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

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
  var inputElementDate = d3.select("#datetime");
  // Get the value property of the input element
  var inputValueDate = inputElementDate.property("value");
  // Printing the value entered to the console - this works!
  console.log(inputValueDate);
  // Use the form input to filter the data by date
  var filteredDataDate = tableData.filter(sightings => sightings.datetime == inputValueDate);
  // Printing the sightings with date entered in the form to the console - this works!
  console.log(filteredDataDate);

  // DOING THIS FOR ALL FILTERING OPTIONS ... 

  // CITY:
  var inputElementCity = d3.select("#city");
  var inputValueCity = inputElementCity.property("value");
  console.log(inputValueCity);
  var filteredDataCity = tableData.filter(sightings => sightings.city == inputValueCity);
  console.log(filteredDataCity);

  // STATE:
  var inputElementState = d3.select("#state");
  var inputValueState = inputElementState.property("value");
  console.log(inputValueState);
  var filteredDataState = tableData.filter(sightings => sightings.state == inputValueState);
  console.log(filteredDataState);

  // COUNTRY:
  var inputElementCountry = d3.select("#country");
  var inputValueCountry = inputElementCountry.property("value");
  console.log(inputValueCountry);
  var filteredDataCountry = tableData.filter(sightings => sightings.country == inputValueCountry);
  console.log(filteredDataCountry);

  // SHAPE:
  var inputElementShape = d3.select("#shape");
  var inputValueShape = inputElementShape.property("value");
  console.log(inputValueShape);
  var filteredDataShape = tableData.filter(sightings => sightings.shape == inputValueShape);
  console.log(filteredDataShape);

  // Creating a new array with all sightings that are included in each filter
  // Used concat function - reference https://stackoverflow.com/questions/5080028/what-is-the-most-efficient-way-to-concatenate-n-arrays
  var allFilteredData = filteredDataDate.concat(filteredDataCity, filteredDataState,  filteredDataCountry, filteredDataShape);
  console.log(`This is a combination of all objects that meet any of the filter inputs ${allFilteredData}`);

  // concat function creates duplicates i.e. if you filter by city = 'lemon grove' which is in ca and state = 'ca' then lemon grove appears twice 
  // To remove duplicates - reference https://www.delftstack.com/howto/javascript/javascript-merge-arrays/
  function removeDuplicates(inArray){
    var arr = inArray.concat() // create a clone from inArray so not to change input array
    //create the first cycle of the loop starting from element 0 or n
    for(var i=0; i<arr.length; ++i) { 
        //create the second cycle of the loop from element n+1
        for(var j=i+1; j<arr.length; ++j) { 
            //if the two elements are equal , then they are duplicate
            if(arr[i] === arr[j]) {
                arr.splice(j, 1); //remove the duplicated element 
            }
        }
    }
    return arr;
}
  // Passing in my array of objects that includes duplicates so that they are removed
  var arrayWithoutDuplicates = removeDuplicates(allFilteredData); 
  console.log(`This is the final array of sightings that meet any filter input without duplicates ${arrayWithoutDuplicates}`);

  // NOW ADDING THE FILTERED DATA TO THE TABLE
  // Same as UFO part 1 - changing variable name

  // Removing the sightings from the tbody tag in the html code
  tbody.html("");

  arrayWithoutDuplicates.forEach((sighting) => {
    // add a table row for every sighting in the filtered date
    var row = tbody.append("tr");
    // adding the keys and their values for each matching date
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}