// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");
console.log(data);

function buildTable(table) {
    tbody.html('')
    table.forEach(sighting => {
        console.log('Sighting', sighting)
        var row = tbody.append('tr');
        Object.entries(sighting).forEach(([key, value]) => {
            console.log('value is', value);
            row.append('td').text(value);
        });
    });
}

buildTable(tableData)

var clickHandler = function() {
    console.log('Response Message');
    console.log(d3.event.target);
    var filteredDate = d3.select('#datetime').property('value')
    var response = data.filter(row => row.datetime === filteredDate);
    buildTable(response)
}

d3.select('#filter-btn').on('click', clickHandler);




