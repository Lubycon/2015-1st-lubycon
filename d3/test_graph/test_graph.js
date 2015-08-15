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
//upload graph area drawing end
//////////////////draw graph line///////////////////
//////////////////datapoint start/////////////////////

vis.selectAll("svg")
    .data(upload_data)
    .enter().append("circle")
    .attr('class', 'datapoint')
    .attr('cx', function(d,i) { return xScale(d.month); })
    .attr('cy', function(d,i) { return yScale(d.value); })
    .attr('r', 5)
    .attr('fill', 'white')
    .attr('stroke', '#48cfad')
    .attr('stroke-width', '1')
    
    .on('mouseover', function(){//mouse_over event

        d3.select(this).transition()//animation for circle
            .delay(0)
            .duration(500)
            .attr('r',8);

        var value_both = d3.select('div.value');

        value_both.selectAll("p")
            .data(upload_data)
            .enter().append("p")
            .attr('class','value_text')
            .html(function(d,i) {
                return "month : "+ upload_data[0].month + '<br>' + "contents : " + upload_data[0].value;
            });

        ////////////////////////tool_tip(jQuery)/////////////////////////
        var tooltipX = $(this).offset().left + 10;///circle X = tooltip_X
        var tooltipY = $(this).offset().top + 10;////circle Y = tooltip_Y

        $('#tooltip').css('top',tooltipY);
        $('#tooltip').css('left',tooltipX);

        $('#tooltip').stop().fadeIn(200);
        ////////////////////////tool_tip(jQuery)/////////////////////////
    })

    
    .on('mouseout', function(){//mouse_out event
         d3.select(this).transition()
            .delay(0)
            .duration(500)
            .attr('r',5);
        ////////////////////////tool_tip(jQuery)/////////////////////////
        $('#tooltip').stop().fadeOut(200);
        ////////////////////////tool_tip(jQuery)/////////////////////////
    });
    
//////////////////datapoint end///////////////////////
