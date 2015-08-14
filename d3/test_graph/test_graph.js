//////////////////data ready////////////////////////
//upload data
var upload_data = [
    {
        "value": "15",
        "month": "1"
    }, 
    {
        "value": "22",
        "month": "2"
    }, 
    {
        "value": "33",
        "month": "3"
    }, 
    {
        "value": "5",
        "month": "4"
    }, 
    {
        "value": "34",
        "month": "5"
    }, 
    {
        "value": "22",
        "month": "6"
    },
    {
        "value": "7",
        "month": "7"
    },
    {
        "value": "6",
        "month": "8"
    },
    {
        "value": "1",
        "month": "9"
    },
    {
        "value": "7",
        "month": "10"
    },
    {
        "value": "11",
        "month": "11"
    },
    {
        "value": "3",
        "month": "12"
    }
];
//upload data
//////////////////data ready////////////////////////
//////////////////chart ready///////////////////////
var vis = d3.select('#graph'),
    WIDTH = 700,
    HEIGHT = 350,
    MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
    },

    xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([1,12]),
    yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0,50]),

    xAxis = d3.svg.axis()
            .scale(xScale),
  
    yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");
//////////////////chart ready///////////////////////
//////////////////make guide line///////////////////

vis.append("g")
    .attr("class","axis")
    .attr("transform","translate(0,"+(HEIGHT-MARGINS.bottom)+")")
    .call(xAxis);


vis.append("g")
    .attr("class","axis")
    .attr("transform","translate("+(MARGINS.left)+",0)")
    .call(yAxis);
//////////////////make guide line//////////////////





/////////////////graph line ready//////////////////
var lineGen = d3.svg.line()
    .x(function(d){
        return xScale(d.month);
    })
    .y(function(d){
        return yScale(d.value);
    })
    .interpolate("cardinal");

var areaGen = d3.svg.area()
    .x(function(d){
        return xScale(d.month);
    })
    .y0(HEIGHT-MARGINS.bottom)
    .y1(function(d){
        return yScale(d.value);
    })
    .interpolate("cardinal");
//////////////////graph line ready//////////////////
//////////////////draw graph line///////////////////
//upload graph line drawing start
vis.append('svg:path')
    .attr('d', lineGen(upload_data))
    .attr('class','up_graph_line')
    .attr('stroke','#48cfad')
    .attr('stroke-width','2')
    .attr('fill','none')
//upload graph line drawing end
//upload graph area drawing start     
vis.append('svg:path')
    .attr('d', areaGen(upload_data))
    .attr('class','up_graph_area')
    .attr('stroke-width','0')
    .attr('fill','#48cfad')
    .attr('opacity','0.5')
    
    /*.on('mouseover', function(){
        d3.select(this).style('fill','#48cfad');
        d3.select(this).style('opacity','1');
    })
    .on('mouseout', function(){
        d3.select(this).style('fill','#48cfad');
        d3.select(this).style('opacity','0.5');
    });*/
//upload graph area drawing end
//////////////////draw graph line///////////////////
//////////////////datapoint start/////////////////////



vis.selectAll("svg")
    .data(upload_data)
    .enter().append("circle")
    .attr('class', 'datapoint')
    .attr('cx', function(d) { return xScale(d.month); })
    .attr('cy', function(d) { return yScale(d.value); })
    .attr('r', 5)
    .attr('fill', 'white')
    .attr('stroke', '#48cfad')
    .attr('stroke-width', '1')

    .on('mouseover', function(){
        d3.select(this).transition()
            .delay(0)
            .duration(500)
            .attr('r',8);

        d3.select('.tooltip').transition()
            .delay(0)
            .duration(500)
            .attr('display','block')
            .attr('opacity','1');
    })
    .on('mouseout', function(){
         d3.select(this).transition()
            .delay(0)
            .duration(500)
            .attr('r',5);

        d3.select('.tooltip').transition()
            .delay(0)
            .duration(500) 
            .attr('opacity','0')
            .attr('display','none');
    });
    
//////////////////datapoint end///////////////////////
//////////////////tooltip start///////////////////////
vis.selectAll("svg")
    .data(upload_data)
    .enter().append('rect')
    .attr('class','tooltip')
    .attr('x', function(d) { return xScale(d.month); })
    .attr('y', function(d) { return yScale(d.value); })
    .attr('width', 150)
    .attr('height', 50)
    .attr('fill', '#ffffff')
    .attr('stroke', '#000000')
    .attr('stroke-width', '1')
    .attr('color','#000000')
    .attr('opacity','0')
    .attr('display','none');

//////////////////tooltip end/////////////////////////
//////////////////mouse move start////////////////////
/////////////////mouse move end//////////////////////