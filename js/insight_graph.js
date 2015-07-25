$(function () { // upload grahp //
    var context = $('.uploaded_graph')[0].getContext('2d');
    var conarc = $('.uploaded_arc')[0].getContext('2d');
    var uploaded_max = Math.max.apply(null, [$('.uploaded_data1').text(), $('.uploaded_data2').text(), $('.uploaded_data3').text(), $('.uploaded_data4').text(), $('.uploaded_data5').text(), $('.uploaded_data6').text(), $('.uploaded_data7').text()]); // => 89
    var uploaded_ratio = 150 / (uploaded_max * 1.2);

    var y_defort = 13;
    var y_first = 46;
    var y_margin = 44.5;
    var y_1 = y_defort;
    var y_2 = y_defort + y_first;
    var y_3 = y_defort + y_first + (y_margin * 1);
    var y_4 = y_defort + y_first + (y_margin * 2);
    var y_5 = y_defort + y_first + (y_margin * 3);
    var y_6 = y_defort + y_first + (y_margin * 4);
    var y_7 = y_defort + y_first + (y_margin * 5);


    var x_1 = 150 - (uploaded_ratio * $('.uploaded_data1').text());
    var x_2 = 150 - (uploaded_ratio * $('.uploaded_data2').text());
    var x_3 = 150 - (uploaded_ratio * $('.uploaded_data3').text());
    var x_4 = 150 - (uploaded_ratio * $('.uploaded_data4').text());
    var x_5 = 150 - (uploaded_ratio * $('.uploaded_data5').text());
    var x_6 = 150 - (uploaded_ratio * $('.uploaded_data6').text());
    var x_7 = 150 - (uploaded_ratio * $('.uploaded_data7').text());


    context.beginPath();
    context.lineTo(y_1, x_1);
    context.lineTo(y_2, x_2);
    context.lineTo(y_3, x_3);
    context.lineTo(y_4, x_4);
    context.lineTo(y_5, x_5);
    context.lineTo(y_6, x_6);
    context.lineTo(y_7, x_7);
    context.lineWidth = 3;
    context.strokeStyle = '#ffbe54';
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.stroke();

    var conarc_size = 3;

    conarc.beginPath();
    conarc.moveTo(y_1, x_1);
    conarc.arc(y_1, x_1, conarc_size, 0, 2 * Math.PI, false);
    conarc.moveTo(y_2, x_2);
    conarc.arc(y_2, x_2, conarc_size, 0, 2 * Math.PI, false);
    conarc.moveTo(y_3, x_3);
    conarc.arc(y_3, x_3, conarc_size, 0, 2 * Math.PI, false);
    conarc.moveTo(y_4, x_4);
    conarc.arc(y_4, x_4, conarc_size, 0, 2 * Math.PI, false);
    conarc.moveTo(y_5, x_5);
    conarc.arc(y_5, x_5, conarc_size, 0, 2 * Math.PI, false);
    conarc.moveTo(y_6, x_6);
    conarc.arc(y_6, x_6, conarc_size, 0, 2 * Math.PI, false);
    conarc.moveTo(y_7, x_7);
    conarc.arc(y_7, x_7, conarc_size, 0, 2 * Math.PI, false);
    conarc.fillStyle = '#ff9e00';
    conarc.fill();

    


    $('#uploaded_ul li').children('.graph_data').css('background', 'rgba(255,190,84,0.5)');
    $('#uploaded_ul li').hover(function () {
        $(this).children('.graph_data').stop().fadeIn(150);
    }, function () {
        $(this).children('.graph_data').stop().fadeOut(150);
    }
    );
});
$(function () { // like grahp //
    var context = $('.like_graph')[0].getContext('2d');
    var conarc = $('.like_arc')[0].getContext('2d');
    var like_max = Math.max.apply(null, [$('.like_data1').text(), $('.like_data2').text(), $('.like_data3').text(), $('.like_data4').text(), $('.like_data5').text(), $('.like_data6').text(), $('.like_data7').text()]); // => 89
    var like_ratio = 150 / (like_max * 1.2);

    var y_defort = 13;
    var y_first = 46;
    var y_margin = 44.5;
    var y_1 = y_defort;
    var y_2 = y_defort + y_first;
    var y_3 = y_defort + y_first + (y_margin * 1);
    var y_4 = y_defort + y_first + (y_margin * 2);
    var y_5 = y_defort + y_first + (y_margin * 3);
    var y_6 = y_defort + y_first + (y_margin * 4);
    var y_7 = y_defort + y_first + (y_margin * 5);


    var x_1 = 150 - (like_ratio * $('.like_data1').text());
    var x_2 = 150 - (like_ratio * $('.like_data2').text());
    var x_3 = 150 - (like_ratio * $('.like_data3').text());
    var x_4 = 150 - (like_ratio * $('.like_data4').text());
    var x_5 = 150 - (like_ratio * $('.like_data5').text());
    var x_6 = 150 - (like_ratio * $('.like_data6').text());
    var x_7 = 150 - (like_ratio * $('.like_data7').text());


    context.beginPath();
    context.lineTo(y_1, x_1);
    context.lineTo(y_2, x_2);
    context.lineTo(y_3, x_3);
    context.lineTo(y_4, x_4);
    context.lineTo(y_5, x_5);
    context.lineTo(y_6, x_6);
    context.lineTo(y_7, x_7);
    context.lineWidth = 3;
    context.strokeStyle = '#9054ff';
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.stroke();

    var conarc_size = 3;

    conarc.beginPath();
    conarc.moveTo(y_1, x_1);
    conarc.arc(y_1, x_1, conarc_size, 0, 2 * Math.PI, false);
    conarc.moveTo(y_2, x_2);
    conarc.arc(y_2, x_2, conarc_size, 0, 2 * Math.PI, false);
    conarc.moveTo(y_3, x_3);
    conarc.arc(y_3, x_3, conarc_size, 0, 2 * Math.PI, false);
    conarc.moveTo(y_4, x_4);
    conarc.arc(y_4, x_4, conarc_size, 0, 2 * Math.PI, false);
    conarc.moveTo(y_5, x_5);
    conarc.arc(y_5, x_5, conarc_size, 0, 2 * Math.PI, false);
    conarc.moveTo(y_6, x_6);
    conarc.arc(y_6, x_6, conarc_size, 0, 2 * Math.PI, false);
    conarc.moveTo(y_7, x_7);
    conarc.arc(y_7, x_7, conarc_size, 0, 2 * Math.PI, false);
    conarc.fillStyle = '#5900ff';
    conarc.fill();

    $('#like_ul li').children('.graph_data').css('background', 'rgba(144,84,255,0.5)');
    $('#like_ul li').hover(function () {
        $(this).children('.graph_data').stop().fadeIn(150);
    }, function () {
        $(this).children('.graph_data').stop().fadeOut(150);
    }
    );
});

$(function () { // downloaded grahp //
    var context = $('.downloaded_graph')[0].getContext('2d');
    var conarc = $('.downloaded_arc')[0].getContext('2d');
    var downloaded_max = Math.max.apply(null, [$('.downloaded_data1').text(), $('.downloaded_data2').text(), $('.downloaded_data3').text(), $('.downloaded_data4').text(), $('.downloaded_data5').text(), $('.downloaded_data6').text(), $('.downloaded_data7').text()]); // => 89
    var downloaded_ratio = 150 / (downloaded_max * 1.2);

    var y_defort = 13;
    var y_first = 46;
    var y_margin = 44.5;
    var y_1 = y_defort;
    var y_2 = y_defort + y_first;
    var y_3 = y_defort + y_first + (y_margin * 1);
    var y_4 = y_defort + y_first + (y_margin * 2);
    var y_5 = y_defort + y_first + (y_margin * 3);
    var y_6 = y_defort + y_first + (y_margin * 4);
    var y_7 = y_defort + y_first + (y_margin * 5);


    var x_1 = 150 - (downloaded_ratio * $('.downloaded_data1').text());
    var x_2 = 150 - (downloaded_ratio * $('.downloaded_data2').text());
    var x_3 = 150 - (downloaded_ratio * $('.downloaded_data3').text());
    var x_4 = 150 - (downloaded_ratio * $('.downloaded_data4').text());
    var x_5 = 150 - (downloaded_ratio * $('.downloaded_data5').text());
    var x_6 = 150 - (downloaded_ratio * $('.downloaded_data6').text());
    var x_7 = 150 - (downloaded_ratio * $('.downloaded_data7').text());


    context.beginPath();
    context.lineTo(y_1, x_1);
    context.lineTo(y_2, x_2);
    context.lineTo(y_3, x_3);
    context.lineTo(y_4, x_4);
    context.lineTo(y_5, x_5);
    context.lineTo(y_6, x_6);
    context.lineTo(y_7, x_7);
    context.lineWidth = 3;
    context.strokeStyle = '#2e7bf5';
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.stroke();

    var conarc_size = 3;

    conarc.beginPath();
    conarc.moveTo(y_1, x_1);
    conarc.arc(y_1, x_1, conarc_size, 0, 2 * Math.PI, false);
    conarc.moveTo(y_2, x_2);
    conarc.arc(y_2, x_2, conarc_size, 0, 2 * Math.PI, false);
    conarc.moveTo(y_3, x_3);
    conarc.arc(y_3, x_3, conarc_size, 0, 2 * Math.PI, false);
    conarc.moveTo(y_4, x_4);
    conarc.arc(y_4, x_4, conarc_size, 0, 2 * Math.PI, false);
    conarc.moveTo(y_5, x_5);
    conarc.arc(y_5, x_5, conarc_size, 0, 2 * Math.PI, false);
    conarc.moveTo(y_6, x_6);
    conarc.arc(y_6, x_6, conarc_size, 0, 2 * Math.PI, false);
    conarc.moveTo(y_7, x_7);
    conarc.arc(y_7, x_7, conarc_size, 0, 2 * Math.PI, false);
    conarc.fillStyle = '#003cff';
    conarc.fill();

    $('#downloaded_ul li').children('.graph_data').css('background', 'rgba(46,123,245,0.5)');
    $('#downloaded_ul li').hover(function () {
        $(this).children('.graph_data').stop().fadeIn(150);
    }, function () {
        $(this).children('.graph_data').stop().fadeOut(150);
    }
    );
});

$(function () { // contents_view grahp //
    var context = $('.contents_view_graph')[0].getContext('2d');
    var conarc = $('.contents_view_arc')[0].getContext('2d');
    var contents_view_max = Math.max.apply(null, [$('.contents_view_data1').text(), $('.contents_view_data2').text(), $('.contents_view_data3').text(), $('.contents_view_data4').text(), $('.contents_view_data5').text(), $('.contents_view_data6').text(), $('.contents_view_data7').text()]); // => 89
    var contents_view_ratio = 150 / (contents_view_max * 1.2);

    var y_defort = 13;
    var y_first = 46;
    var y_margin = 44.5;
    var y_1 = y_defort;
    var y_2 = y_defort + y_first;
    var y_3 = y_defort + y_first + (y_margin * 1);
    var y_4 = y_defort + y_first + (y_margin * 2);
    var y_5 = y_defort + y_first + (y_margin * 3);
    var y_6 = y_defort + y_first + (y_margin * 4);
    var y_7 = y_defort + y_first + (y_margin * 5);


    var x_1 = 150 - (contents_view_ratio * $('.contents_view_data1').text());
    var x_2 = 150 - (contents_view_ratio * $('.contents_view_data2').text());
    var x_3 = 150 - (contents_view_ratio * $('.contents_view_data3').text());
    var x_4 = 150 - (contents_view_ratio * $('.contents_view_data4').text());
    var x_5 = 150 - (contents_view_ratio * $('.contents_view_data5').text());
    var x_6 = 150 - (contents_view_ratio * $('.contents_view_data6').text());
    var x_7 = 150 - (contents_view_ratio * $('.contents_view_data7').text());


    context.beginPath();
    context.lineTo(y_1, x_1);
    context.lineTo(y_2, x_2);
    context.lineTo(y_3, x_3);
    context.lineTo(y_4, x_4);
    context.lineTo(y_5, x_5);
    context.lineTo(y_6, x_6);
    context.lineTo(y_7, x_7);
    context.lineWidth = 3;
    context.strokeStyle = '#ff8174';
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.stroke();

    var conarc_size = 3;

    conarc.beginPath();
    conarc.moveTo(y_1, x_1);
    conarc.arc(y_1, x_1, conarc_size, 0, 2 * Math.PI, false);
    conarc.moveTo(y_2, x_2);
    conarc.arc(y_2, x_2, conarc_size, 0, 2 * Math.PI, false);
    conarc.moveTo(y_3, x_3);
    conarc.arc(y_3, x_3, conarc_size, 0, 2 * Math.PI, false);
    conarc.moveTo(y_4, x_4);
    conarc.arc(y_4, x_4, conarc_size, 0, 2 * Math.PI, false);
    conarc.moveTo(y_5, x_5);
    conarc.arc(y_5, x_5, conarc_size, 0, 2 * Math.PI, false);
    conarc.moveTo(y_6, x_6);
    conarc.arc(y_6, x_6, conarc_size, 0, 2 * Math.PI, false);
    conarc.moveTo(y_7, x_7);
    conarc.arc(y_7, x_7, conarc_size, 0, 2 * Math.PI, false);
    conarc.fillStyle = '#ff412d';
    conarc.fill();

    $('#contents_view_ul li').children('.graph_data').css('background', 'rgba(255,130,115,0.5)');
    $('#contents_view_ul li').hover(function () {
        $(this).children('.graph_data').stop().fadeIn(150);
    }, function () {
        $(this).children('.graph_data').stop().fadeOut(150);
    }
    );
});

$(function () {
    var hint_box = $('#hint_box');
    var hint_name = $('#hint_name');
    var hint_figure = $('#hint_figure');

    hint_box.mouseenter(function () {
        hint_box.hide();
    });

    $('.graph_box').mouseenter(function () {
        hint_box.stop().fadeIn(150);
    }).mouseleave(function () {
        hint_box.stop().fadeOut(150);
    }).mousemove(function (e) {
        hint_box.css(   //mouse follow event
            {
                "top": e.pageY - 30 + "px",
                "left": e.pageX + 20 + "px"
            });
    });

    $('.graph_box').mouseenter(function () {
        hint_name.html($(this).children('.graph_title').text() + ' ' + 'contents'); //graph title text pull
    });
    $('.graph_box > ul > li').mouseenter(function () {
        //alert($(this).children('.graph_data').text());
        hint_figure.html($(this).children('.graph_data').text());   //graph data text pull
    });
});



