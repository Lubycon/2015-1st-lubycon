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

//download data
var download_data = [
    {
        "value": "15",
        "month": "1"
    }, 
    {
        "value": "13",
        "month": "2"
    }, 
    {
        "value": "3",
        "month": "3"
    }, 
    {
        "value": "7",
        "month": "4"
    }, 
    {
        "value": "10",
        "month": "5"
    }, 
    {
        "value": "1",
        "month": "6"
    },
    {
        "value": "15",
        "month": "7"
    },
    {
        "value": "27",
        "month": "8"
    },
    {
        "value": "0",
        "month": "9"
    },
    {
        "value": "17",
        "month": "10"
    },
    {
        "value": "5",
        "month": "11"
    },
    {
        "value": "9",
        "month": "12"
    }
];
//Like data

//////////////////data ready////////////////////////
//////////////////chart ready///////////////////////
var vis = d3.select('#visualisation'),
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
    .interpolate("basis");
//////////////////graph line ready//////////////////
//////////////////draw graph line///////////////////
//upload graph drawing
vis.append('svg:path')
    .attr('d', lineGen(upload_data))
    .attr('stroke','#48cfad')
    .attr('stroke-width','2')
    .attr('fill','none');
//upload graph drawing
//download graph drawing
vis.append('svg:path')
    .attr('d', lineGen(download_data))
    .attr('stroke','#ffbe54')
    .attr('stroke-width','2')
    .attr('fill','none');
//download graph drawing
//////////////////draw graph line///////////////////
