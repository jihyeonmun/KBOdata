anychart.onDocumentReady(function () {

    // our data from bulbapedia
    var data1 = [
      {x: "HP", value: 39},
      {x: "Attack", value: 52},
      {x: "Defense", value: 43},
      {x: "Special Attack", value: 60},
      {x: "Special Defense", value: 50},
      {x: "Speed", value: 65},
    ];
  
    var data2 = [
      {x: "HP", value: 45},
      {x: "Attack", value: 49},
      {x: "Defense", value: 49},
      {x: "Special Attack", value: 65},
      {x: "Special Defense", value: 65},
      {x: "Speed", value: 45},
    ];  
  
    var data3 = [
      {x: "HP", value: 44},
      {x: "Attack", value: 48},
      {x: "Defense", value: 65},
      {x: "Special Attack", value: 50},
      {x: "Special Defense", value: 64},
      {x: "Speed", value: 43},
    ];  
  
    // create radar chart
    var chart = anychart.radar();
    // set chart yScale settings
    chart.yScale()
      .minimum(35)
      .maximum(65)
      .ticks({'interval':5});
  
    // create first series
    chart.area(data1).name('Charmander').markers(true).fill("#E55934", 0.3).stroke("#E55934")
    // create second series
    chart.area(data2).name('Bulbasaur').markers(true).fill("#9BC53D", 0.3).stroke("#9BC53D")
    // create third series
    chart.area(data3).name('Squirtle').markers(true).fill("#5BC0EB", 0.3).stroke("#5BC0EB")
                
    // set chart title
    chart.title("Starter Pokemon Comparison Chart")
    // set legend
    .legend(true);
                
    // color alternating cells
    chart.yGrid().palette(["gray 0.1", "gray 0.2"]);
  
    // set container id for the chart
    chart.container('container');
    // initiate chart drawing
    chart.draw();
  
  });