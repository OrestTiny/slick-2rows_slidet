$(document).ready(function () {
    const slider = $('#slider');

    slider.slick({
        dots: true,
        slidesPerRow: 3,
        rows: $(window).width() <= 375 ? 1 : 2,
        nextArrow: $('#next'),
        prevArrow: $('#prev'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesPerRow: 2,
                }
            },

        ]
    });


    let widthDots = $('.slick-dots').width();
    $('.navigate_slider').css('width', widthDots + 130);
    $(window).resize(function () {
        $('.navigate_slider').css('width', widthDots + 130);
        if ($(window).width() <= 375) {
            location.reload();
        }
    })





});