$(function () {
    $(".in-date").datepicker({
        dateFormat: "dd MM"
    });
    $(".out-date").datepicker({
        dateFormat: "dd MM"
    });

    $("#format").on("change", function () {
        $("#datepicker").datepicker("option", "dateFormat", $(this).val());
    });
    $.datepicker.setDefaults($.datepicker.regional["ru"]);
});

( function (factory) {
    if (typeof define === "function" && define.amd) {

        define(["../widgets/datepicker"], factory);
    } else {

        factory(jQuery.datepicker);
    }
}(function (datepicker) {

    datepicker.regional.ru = {
        closeText: "Закрыть",
        prevText: "&#x3C;Пред",
        nextText: "След&#x3E;",
        currentText: "Сегодня",
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн",
            "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
        dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
        dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        weekHeader: "Нед",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ""
    };
    datepicker.setDefaults(datepicker.regional.ru);

    return datepicker.regional.ru;

}) );

function inc1() {
    var $input = $(".input1");

    $input.val(0);

    $(".click").click(function(){
        if ($(this).hasClass('up'))
            $input.val(parseInt($input.val())+1);
        else if ($input.val()>=1)
            $input.val(parseInt($input.val())-1);
    });
}

function inc2() {
    var $input = $(".input2");

    $input.val(0);

    $(".click").click(function(){
        if ($(this).hasClass('up'))
            $input.val(parseInt($input.val())+1);
        else if ($input.val()>=1)
            $input.val(parseInt($input.val())-1);
    });
}

function inc3() {
    var $input = $(".input3");

    $input.val(0);

    $(".click").click(function(){
        if ($(this).hasClass('up'))
            $input.val(parseInt($input.val())+1);
        else if ($input.val()>=1)
            $input.val(parseInt($input.val())-1);
    });
}


$(document).ready(function () {



    $(".bases-slider").slick({
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<div class="bases-slider_prev-arrow"><i class="fas fa-chevron-left"></i></div>',
        nextArrow: '<div class="bases-slider_next-arrow"><i class="fas fa-chevron-right"></i></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".comments_slider").slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="comments_slider_prev-arrow"><i class="fas fa-chevron-left"></i></div>',
        nextArrow: '<div class="comments_slider_next-arrow"><i class="fas fa-chevron-right"></i></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});
