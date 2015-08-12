
var sample_svg = d3.select('#viz')//select d3>#viz
    .append('svg')//make svg tag in #viz
    .attr('width',100)
    .attr('height',100);

sample_svg.append('circle')//make circle tag in svg tag
    .style('stroke','#c1c1c1')
    .style('fill','#fff')
    .attr('r',40)
    .attr('cx',50)
    .attr('cy',50)
/*
<div id="viz">
    <svg width="100" height="100">
        <circle style="stroke: #c1c1c1; fill: #fff;" cx="50" cy="50" r="40">
        </circle>
    </svg>
</div>
*/
    .on('mouseover', function(){
        d3.select(this).style('fill','#48cfad');
    })
    .on('mouseout', function(){
        d3.select(this).style('fill','#fff');
    })
    .on('mousedown', ani1);
//////////////////////////////////animation start////////////////
function ani1(){
    d3.select(this)
        .transition()
            .delay(0)
            .duration(1000)
            .attr('r',10)
            .each('end',ani2);
};

function ani2(){
    d3.select(this)
        .transition()
            .duration(1000)
            .attr('r',40)
};
////////////////////////////////animation end///////////////////
////////////////////////////////control for object//////////////
var svg = d3.selectAll('#svg2');
var dataset=[500, 50, 500, 50, 500, 50, 500, 50];//8
var circle = svg.selectAll('circle')
    .data(dataset);


var make_cir = circle.enter().append('circle');//enter->input data to object, append->make object
make_cir.style('fill','#488ccb');
make_cir.attr('cy',60);
make_cir.attr('cx', 
    function(d,i){
        return i*100+30;//30->130->230->330->...
    });

circle.attr('r',
    function(d){
        return Math.sqrt(d);
    });
