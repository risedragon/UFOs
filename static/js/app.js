// import data from data.js
const tableData = data;
var tbody = d3.select("tbody");

// d3.select("tbody").selectAll("tr")
//    .data(tableData)
//    .enter()
//    .append("tr")
//    .selectAll("td")
//    .data(function(d){ return Object.values(d) })
//    .enter()
//    .append("td")
//    .html(function(d){return d});

// tableData.forEach(element => {
//     let row = tbody.append("tr");
//     Object.values(element).forEach(val =>{
//         row.append("td").html(val)
//     });
// });

buildTable = (data) => {
    tbody.html("");
    data.forEach(dataRow => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach(
            val=>{
                row.append("td").html(val)
            }
        );
    });
};
buildTable(tableData);