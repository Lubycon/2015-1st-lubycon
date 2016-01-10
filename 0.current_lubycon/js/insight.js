
/*-------------------------json loader start-------------------------------*/
////////////import like data start
var likedata = [];
var likedata_loader = 
$.getJSON("js/chart/data/likedata.json", function(data) {
    $.each(data, function(i, v) {
        //console.log("date :" + v["date"] +", "+ "value :" + v["value"]);
        likedata.push({
            date: v["date"],
            value: v["value"]
        });
    });
    console.log("loaded likedata");  
});
////////////import like data end
/*-------------------------json loader end-------------------------------*/
/*-------------------------make chart start-------------------------------*/
var likeChart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "likeChart",
    "marginRight": 40,
    "marginLeft": 40,
    "autoMarginOffset": 20,
    "dataDateFormat": "YYYY-MM-DD",
    "valueAxes": [{
        "id": "v1",
        "axisAlpha": 0,
        "position": "left",
        "ignoreAxisWidth":true
    }],
    "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
    },
    "graphs": [{
        "id": "g1",
        "balloon":{
          "drop":true,
          "adjustBorderColor":false,
          "color":"#ffffff"
        },
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "value",
        "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
    }],
    "chartScrollbar": {
        "graph": "g1",
        "oppositeAxis":false,
        "offset":30,
        "scrollbarHeight": 80,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount":true,
        "color":"#AAAAAA"
    },
    "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha":1,
        "cursorColor":"#7feed2",
        "limitToGraph":"g1",
        "valueLineAlpha":0.2
    },
    "valueScrollbar":{
      "oppositeAxis":false,
      "offset":50,
      "scrollbarHeight":10
    },
    "categoryField": "date",
    "categoryAxis": {
        "parseDates": true,
        "dashLength": 1,
        "minorGridEnabled": true
    },
    "export": {
        "enabled": false
    },
    "dataProvider": likedata
});
likeChart.addListener("rendered", zoomChart);

/*-------------------------make chart end-------------------------------*/




zoomChart();

function zoomChart(){
    likeChart.zoomToIndexes(likeChart.dataProvider.length - 40, likeChart.dataProvider.length - 1);
}
