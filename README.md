# javascript-challenge

## JavaScript and DOM Manipulation

### Background:
The extra-terrestrial menace has come to Earth and we here at ALIENS-R-REAL have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.
There is just one tiny problem though... our collection is too large to search through manually. Even our most dedicated followers are complaining that they are having trouble locating specific reports in this mess.

### Task:
To write code that will create a table dynamically based upon the [dataset](https://github.com/catherinesloan/javascript-challenge/blob/main/UFO-level-2/static/js/data.js). Allowing the users to filter the table data for specific values using ...
- JavaScript
- HTML
- CSS
- D3.js

## Ouput:

**Part 1: Automatic Table and Date Search**

[Click here to view deployed app](https://catherinesloan.github.io/javascript-challenge/UFO-level-1/index.html)


 1. A [HTML web page](https://github.com/catherinesloan/javascript-challenge/blob/main/UFO-level-1/index.html) 
 2. [JavaScript Code](https://github.com/catherinesloan/javascript-challenge/blob/main/UFO-level-1/static/js/app.js) that appends a table to the web page and adds new rows of data for each UFO sighting, in the form of an array of JavaScript objects
 3. Columns for: 
    - Date/Time
    - City
    - State
    - Country
    - Shape
    - Comment
4. JavaScript code that listens for events and searches through the date/time column to find rows that matches user input


**Part 2: Multiple Search Categories**

[Click here to view deployed app](https://catherinesloan.github.io/javascript-challenge/UFO-level-2/index.html)

1. [JavaScript code](https://github.com/catherinesloan/javascript-challenge/blob/main/UFO-level-2/static/js/app.js) that allows the user can to set multiple filters and search for UFO sightings using the criteria based on the table columns

_I have created a filter so that all sightings that match any of the filter input entered are returned. 
For example, if you filter on state 'ca' and shape 'sphere' then all California and all sphere sightings will be returned._

