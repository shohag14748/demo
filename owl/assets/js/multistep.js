var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
$(document).ready(function () {
    var stepBarWidth = 100 / ($('.form .step:last-child').index() + 1) * ($('.form .step.active').index() + 1);
    $('.step-bar span').css({
        width: stepBarWidth + "%"
    });
    $('.next-step').click(function (e) {
        e.preventDefault();
        if ($('.form .step:last-child').index() != $('.form .step.active').index()) {
            $('.form .step.active, .form .heading.active').removeClass('active').next().addClass('active');
            var stepBarWidth = 100 / ($('.form .step:last-child').index() + 1) * ($('.form .step.active').index() + 1);
            $('.step-bar span').css({
                width: stepBarWidth + "%"
            });
            $('.stepnumber').text($('.form .step.active').index() + 1);
            if ($('.form .step.active').index() == 3) {
                $('.personal-details .collapse-area').hide();
                $('.personal-details .collapse-button').addClass('collapsed');
                $('.form .step.active').prev().addClass('show3');
                $('.collapse-item .collapse-button').each(function () {
                    if (!$(this).hasClass('collapsed')) {
                        $(this).siblings('.collapse-area').show();
                    }
                });
                $('.extra-for-3-4').addClass('active');
            } else {
                $('.form .step').removeClass('show3');
            }
            if ($('.form .step.active').index() == 4) {
                $('.extra-for-3-4').removeClass('active');
            }
        }
    })
    $('.prev-step').click(function (e) {
        e.preventDefault();
        if ($('.form .step:first-child').index() != $('.form .step.active').index()) {
            $('.form .step.active, .form .heading.active').removeClass('active').prev().addClass('active');
            var stepBarWidth = 100 / ($('.form .step:last-child').index() + 1) * ($('.form .step.active').index() + 1);
            $('.step-bar span').css({
                width: stepBarWidth + "%"
            });
            $('.stepnumber').text($('.form .step.active').index() + 1);
            if ($('.form .step.active').index() == 2) {
                $('.personal-details .collapse-area').show();
                $('.personal-details .collapse-button').removeClass('collapsed');
                $('.form .step.active').removeClass('show3');
            }
            if ($('.form .step.active').index() == 1) {} else if ($('.form .step.active').index() == 2) {
                $('.form .step.active').prev().removeClass('show3');
                $('.extra-for-3-4.active').removeClass('active');
            } else if ($('.form .step.active').index() == 3) {
                $('.form .step.active').prev().addClass('show3');
                $('.extra-for-3-4').addClass('active');
            }
        }
    })
    $('.personal-details .collapse-button').click(function () {
        if ($('.form .step.active').index() == 3) {
            $(this).siblings('.collapse-area').slideToggle();
            $(this).toggleClass('collapsed');
        }
    });
    $('.collapse-item>.collapse-button').on('click', function () {
        if (!$(this).hasClass('collapsed')) {
            $(this).siblings('.collapse-area').slideUp();
            $(this).addClass('collapsed');
            $(this).siblings('.collapse-area').children('.collapse-sub-item').children('.collapse-button').addClass('collapsed').siblings('.collapse-area').slideUp();
        } else {
            $('.collapse-item>.collapse-button').siblings('.collapse-area').slideUp();
            $('.collapse-item>.collapse-button').addClass('collapsed');
            $(this).siblings('.collapse-area').slideDown();
            $(this).removeClass('collapsed');
            $('.collapse-item>.collapse-button').siblings('.collapse-area').children('.collapse-sub-item').children('.collapse-button').addClass('collapsed').siblings('.collapse-area').slideUp();
        }
    })
    $('.collapse-sub-item>.collapse-button').on('click', function () {
        $(this).siblings('.collapse-area').slideToggle();
        $(this).toggleClass('collapsed');
        $(this).parent('.collapse-sub-item').siblings().children('.collapse-button').addClass('collapsed').siblings('.collapse-area').slideUp();
    })
    $('.swiper-pagination').prepend('Seite ');
    $('.editor').each(function () {
        var quill = new Quill(this, {
            theme: 'snow'
        });
    })
    $('.faq').click(function (e) {
        e.preventDefault();
        $('.popup').addClass('active');
    });
    $('.fertig').click(function (e) {
        e.preventDefault();
        $('.popup').removeClass('active');
    });
    $('.preview-btn').click(function (e) {
        e.preventDefault();
        $('.mutistep-form .preview').addClass('active');
    });
    $('.mutistep-form .preview .close').click(function (e) {
        e.preventDefault();
        $('.mutistep-form .preview').removeClass('active');
    });
    $('.popup .weiter').click(function (e) {
        e.preventDefault();
        if ($('.popup .tips:last-child').prev().index() == $('.popup .tips.active').index()) {
            $('.popup .weiter').hide();
        }
        if ($('.popup .tips:last-child').index() != $('.popup .tips.active').index()) {
            $('.popup .tips.active').removeClass('active').next().addClass('active');
        }
    });
    $('select').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "Land",
        allowClear: true,
    });

    var owl = $('.previewSlider');
    owl.owlCarousel({
        items: 1,
        loop: false,
        margin: 10,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        onInitialized: setcounter,
        onChanged: counter,
    })

    function setcounter(event) {
        if (!event.namespace) {
            return;
        }
        var slides = event.relatedTarget;
        var slide_count = slides.relative(slides.current()) + 1 + ' / ' + slides.items().length;
        $('.previewSlider .owl-nav').prepend('<p>' + "Seite <span>" + slide_count + '</span></p>');
    }

    function counter(event) {
        if (!event.namespace) {
            return;
        }
        var slides = event.relatedTarget;
        $('.previewSlider .owl-nav p span').text(slides.relative(slides.current()) + 1 + ' / ' + slides.items().length);
    }

});
