var swiper = new Swiper('.swiper-container', {
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
    var stepBarWidth = 100/($('.form .step:last-child').index() + 1) * ($('.form .step.active').index() + 1);
    $('.step-bar span').css({width: stepBarWidth + "%"});
    $('.next-step').click(function (e) {
        e.preventDefault();
        if ($('.form .step:last-child').index() != $('.form .step.active').index()){
            $('.form .step.active, .form .heading.active').removeClass('active').next().addClass('active');
            var stepBarWidth = 100/($('.form .step:last-child').index() + 1) * ($('.form .step.active').index() + 1);
            $('.step-bar span').css({width: stepBarWidth + "%"});
            $('.stepnumber').text($('.form .step.active').index()+1);
            if($('.form .step.active').index() == 3){
                $('.personal-details .collapse-area').hide();
                $('.personal-details .collapse-button').addClass('collapsed');
                $('.form .step.active').prev().addClass('show3');
                $('.collapse-item .collapse-button').each(function(){
                    if(!$(this).hasClass('collapsed')){
                        $(this).siblings('.collapse-area').show();
                    }
                });
                $('.extra-for-3-4').addClass('active');
            }else{
                $('.form .step').removeClass('show3');
            }
            if($('.form .step.active').index() == 4){
                $('.extra-for-3-4').removeClass('active');
            }
        }
    })
    $('.prev-step').click(function (e) {
        e.preventDefault();
        if ($('.form .step:first-child').index() != $('.form .step.active').index()){
            $('.form .step.active, .form .heading.active').removeClass('active').prev().addClass('active');
            var stepBarWidth = 100/($('.form .step:last-child').index() + 1) * ($('.form .step.active').index() + 1);
            $('.step-bar span').css({width: stepBarWidth + "%"});
            $('.stepnumber').text($('.form .step.active').index()+1);
            if($('.form .step.active').index() == 2){
                $('.personal-details .collapse-area').show();
                $('.personal-details .collapse-button').removeClass('collapsed');
                $('.form .step.active').removeClass('show3');
            }
            if($('.form .step.active').index() == 1){
            }
            else if($('.form .step.active').index() == 2){
                $('.form .step.active').prev().removeClass('show3');
                $('.extra-for-3-4.active').removeClass('active');
            }
            else if($('.form .step.active').index() == 3){
                $('.form .step.active').prev().addClass('show3');
                $('.extra-for-3-4').addClass('active');
            }
        }
    })
    $('.personal-details .collapse-button').click(function(){
        if($('.form .step.active').index() == 3){
            $(this).siblings('.collapse-area').slideToggle();
            $(this).toggleClass('collapsed');
        }
    });
    $('.collapse-item .collapse-button').on('click', function(){
        $(this).siblings('.collapse-area').slideToggle();
        $(this).toggleClass('collapsed');
    })
        
    $('.swiper-pagination').prepend('Seite ');
    $('.editor').each(function(){
        var quill = new Quill(this, {
                theme: 'snow'
            });
    })
    $('.faq').click(function(e){
        e.preventDefault();
        $('.popup').addClass('active');
    });
    $('.preview-btn').click(function(e){
        e.preventDefault();
        $('.mutistep-form .preview').addClass('active');
    });
    $('.mutistep-form .preview .close').click(function(e){
        e.preventDefault();
        $('.mutistep-form .preview').removeClass('active');
    });
    
});
