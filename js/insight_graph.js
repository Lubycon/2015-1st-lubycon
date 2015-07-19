$(function () { // upload grahp //
    var context = $('.uploaded_graph')[0].getContext('2d');
    var uploaded_max = Math.max.apply(null, [$('.uploaded_data1').text(), $('.uploaded_data2').text(), $('.uploaded_data3').text(), $('.uploaded_data4').text(), $('.uploaded_data5').text(), $('.uploaded_data6').text(), $('.uploaded_data7').text()]); // => 89
    var uploaded_ratio = 150 / (uploaded_max * 1.2);

    context.beginPath();
    context.lineTo(13, 150 - (uploaded_ratio * $('.uploaded_data1').text()));
    context.lineTo(13 + 46, 150 - (uploaded_ratio * $('.uploaded_data2').text()));
    context.lineTo(13 + 46 + (44.5 * 1), 150 - (uploaded_ratio * $('.uploaded_data3').text()));
    context.lineTo(13 + 46 + (44.5 * 2), 150 - (uploaded_ratio * $('.uploaded_data4').text()));
    context.lineTo(13 + 46 + (44.5 * 3), 150 - (uploaded_ratio * $('.uploaded_data5').text()));
    context.lineTo(13 + 46 + (44.5 * 4), 150 - (uploaded_ratio * $('.uploaded_data6').text()));
    context.lineTo(13 + 46 + (44.5 * 5), 150 - (uploaded_ratio * $('.uploaded_data7').text()));
    context.lineWidth = 2;
    context.strokeStyle = '#ffbe54';
    context.stroke();

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
    var like_max = Math.max.apply(null, [$('.like_data1').text(), $('.like_data2').text(), $('.like_data3').text(), $('.like_data4').text(), $('.like_data5').text(), $('.like_data6').text(), $('.like_data7').text()]); // => 89
    var like_ratio = 150 / (like_max * 1.2);

    context.beginPath();
    context.lineTo(13, 150 - (like_ratio * $('.like_data1').text()));
    context.lineTo(13 + 46, 150 - (like_ratio * $('.like_data2').text()));
    context.lineTo(13 + 46 + (44.5 * 1), 150 - (like_ratio * $('.like_data3').text()));
    context.lineTo(13 + 46 + (44.5 * 2), 150 - (like_ratio * $('.like_data4').text()));
    context.lineTo(13 + 46 + (44.5 * 3), 150 - (like_ratio * $('.like_data5').text()));
    context.lineTo(13 + 46 + (44.5 * 4), 150 - (like_ratio * $('.like_data6').text()));
    context.lineTo(13 + 46 + (44.5 * 5), 150 - (like_ratio * $('.like_data7').text()));
    context.lineWidth = 2;
    context.strokeStyle = '#9054ff';
    context.stroke();

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
    var downloaded_max = Math.max.apply(null, [$('.downloaded_data1').text(), $('.downloaded_data2').text(), $('.downloaded_data3').text(), $('.downloaded_data4').text(), $('.downloaded_data5').text(), $('.downloaded_data6').text(), $('.downloaded_data7').text()]); // => 89
    var downloaded_ratio = 150 / (downloaded_max * 1.2);

    context.beginPath();
    context.lineTo(13, 150 - (downloaded_ratio * $('.downloaded_data1').text()));
    context.lineTo(13 + 46, 150 - (downloaded_ratio * $('.downloaded_data2').text()));
    context.lineTo(13 + 46 + (44.5 * 1), 150 - (downloaded_ratio * $('.downloaded_data3').text()));
    context.lineTo(13 + 46 + (44.5 * 2), 150 - (downloaded_ratio * $('.downloaded_data4').text()));
    context.lineTo(13 + 46 + (44.5 * 3), 150 - (downloaded_ratio * $('.downloaded_data5').text()));
    context.lineTo(13 + 46 + (44.5 * 4), 150 - (downloaded_ratio * $('.downloaded_data6').text()));
    context.lineTo(13 + 46 + (44.5 * 5), 150 - (downloaded_ratio * $('.downloaded_data7').text()));
    context.lineWidth = 2;
    context.strokeStyle = '#2e7bf5';
    context.stroke();

    $('#downloaded_ul li').children('.graph_data').css('background', 'rgba(46,123,245,0.5)');
    $('#downloaded_ul li').hover(function () {
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

    hint_box.hover(function () {
        hint_box.stop().fadeIn(150);
    }, function () {
        hint_box.stop().fadeOut(150);
    });

    $('.graph_box > ul').mouseenter(function () {
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
