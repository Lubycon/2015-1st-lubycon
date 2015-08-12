//////////////////data ready////////////////////////
//upload data
var upload_data = [
    {
        "upload": "15",
        "month": "1"
    }, 
    {
        "upload": "22",
        "month": "2"
    }, 
    {
        "upload": "33",
        "month": "3"
    }, 
    {
        "upload": "5",
        "month": "4"
    }, 
    {
        "upload": "34",
        "month": "5"
    }, 
    {
        "upload": "22",
        "month": "6"
    },
    {
        "upload": "7",
        "month": "7"
    },
    {
        "upload": "6",
        "month": "8"
    },
    {
        "upload": "1",
        "month": "9"
    },
    {
        "upload": "7",
        "month": "10"
    },
    {
        "upload": "11",
        "month": "11"
    },
    {
        "upload": "3",
        "month": "12"
    }
];
//upload data

//download data
var download_data = [
    {
        "download": "15",
        "month": "1"
    }, 
    {
        "download": "13",
        "month": "2"
    }, 
    {
        "download": "3",
        "month": "3"
    }, 
    {
        "download": "7",
        "month": "4"
    }, 
    {
        "download": "10",
        "month": "5"
    }, 
    {
        "download": "1",
        "month": "6"
    },
    {
        "download": "15",
        "month": "7"
    },
    {
        "download": "27",
        "month": "8"
    },
    {
        "download": "0",
        "month": "9"
    },
    {
        "download": "17",
        "month": "10"
    },
    {
        "download": "5",
        "month": "11"
    },
    {
        "download": "9",
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
        return yScale(d.upload);
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
