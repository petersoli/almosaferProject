// almosafer Custom JS




$(document).ready(function () {

    $('.destinationSlider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });

    $(".scrollDownBtn").click(function () {
        $('html, body').animate({
            scrollTop: $(".destinationSection").offset().top
        }, 700);
    });

});
