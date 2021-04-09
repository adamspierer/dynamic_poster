<script type="text/javascript"> //Sourced my foundation code from: http://matthewgladney.com/blog/data-science/no-nonsense-guide-getting-started-scatter-plots-d3-js-d3-csv/
      var margin = {top: 20, right: 20, bottom: 150, left: 100},
          width = 1280 + margin.left + margin.right,
          height = 500 + margin.top + margin.bottom;
       
      var svg = d3.select(".chart")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
       

      // setup x
      var xValue = function(d) { return d.x_pos;},
         xScale = d3.scale.linear().range([0, width]),
         xMap = function(d) { return xScale(xValue(d));},
         xAxis = d3.svg.axis().scale(xScale).orient("bottom");
       
      // setup y
      var yValue = function(d) { return d.y_pos;},
         yScale = d3.scale.linear().range([height, 0]),
         yMap = function(d) { return yScale(yValue(d));},
         yAxis = d3.svg.axis().scale(yScale).orient("left");

      d3.csv("./sample_data_filtered.csv", function(d) {
          return {
            Timestamp: d.Timestamp, 
            x_pos: +d.x_pos,
            y_pos: +d.y_pos, 
            vial:  +d.Vial,
          }; 
      }, function(error, data) {
         // update scales
         xScale.domain([d3.min(data, xValue)-1, d3.max(data, xValue)+1]);
         yScale.domain([d3.min(data, yValue)-1, d3.max(data, yValue)+1]);
       
         // update x-axis
         svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .append("text")
            .attr("class", "label")
            .attr("x", width)
            .attr("y", 50)
            .style("text-anchor", "end")
            .text("Pixel")
            .style("font-size","34px");
       
         // update y-axis
         svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("class", "label")
            .attr("transform", "rotate(-90)")
          .attr("y", -70)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Mean Pixel Height (33 pixel/cm)")
          .style("font-size","34px");

               // setup fill color
          var cValue = function(d) { return d.vial;},
             color = d3.scale.category10();

          svg.selectAll(".dot")
            .data(data)
            .enter().append("circle")
            .attr("class", "dot")
            .attr("r", 5)//function(d) { return d.vial == 0 ? 0 : d.vial})
            .attr("cx", xMap)
            .attr("cy", yMap)
            .style("fill", function(d) { return color(cValue(d));})
            .style("opacity", .5)
            //.transition()
            .on("mouseover", function(d) {
               tooltip.transition()
                  .duration(200)
                  .style("opacity", 1.);
               tooltip.html("Time = " + d.Timestamp + " sec")
                  .style("left", (d3.event.pageX + 5) + "px")
                  .style("top", (d3.event.pageY - 28) + "px")
                  .style("font-size","20px");
            })
            .on("mouseout", function(d) {
               tooltip.transition()
                  .duration(500)
                  .style("opacity", 0);
            });

          // add the tooltip area to the webpage
          var tooltip = d3.select("body").append("div")
             .attr("class", "tooltip")
             .style("opacity", 0);
        }); 
</script>