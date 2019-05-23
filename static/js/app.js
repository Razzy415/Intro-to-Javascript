// from data.js
var tableData = data;

// Loop iteration of the data array appending each value updating each cell's text with sighting values -- initial table
function renderTable() {
    var tbody = d3.select("tbody");
    data.forEach((sightingReport) => {
    var row = tbody.append("tr");
    Object.entries(sightingReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
//Event Handler
// $searchBtn.addEventListener("click", handleSearchButtonClick);

// Filter function
// function handleSearchButtonClick(){
//     var submit = d3.select("#filter-btn");
//     submit.on('click', function() {
//     d3.event.preventDefault();
//     var inputElement = d3.select("#datetime");
//     var inputValue = inputElement.property('value');
//     var filtereddate = data.filter(data => data.datetime === inputValue);
//     console.log(filtereddate);

//     data.forEach((filtereddate) => {
//         var row = tbody.append("tr");
//         Object.entries(filtereddate).forEach(([key, value]) => {
//           var cell = row.append("td");
//           cell.text(value);
//       });
//   })
// }
// }

renderTable();
