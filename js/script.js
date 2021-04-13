var swiper = new Swiper('.swiper-container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button__next',
        prevEl: '.swiper-button__prev',
    },
    pagination: {
        el: '.swiper__pegination'
    },
    mousewheel: true,
    keyboard: true,
});