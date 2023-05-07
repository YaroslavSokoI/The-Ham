
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-naw',
    autoplay: false,
});
$('.slider-naw').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev-arr"></button>',
    nextArrow: '<button type="button" class="slick-next-arr"></button>'
});