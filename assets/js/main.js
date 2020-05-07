$(document).ready(function () {
    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();
        $('.bg-dots').css({
            'transform': 'translate(-47%,' + wScroll/40 + '%)'
        });
        if(wScroll>150){
            $('.to-top').fadeIn();
        }else{
            $('.to-top').fadeOut();
        }

    });
    $('.to-top').click(function(){
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });
    $('.menu-icon').click(function(){
        if($('.menu').hasClass('active')){
            $('.menu').addClass('close');
            setTimeout(function(){ $('.menu').removeClass('close'); }, 500);
        }
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });

    $(window).resize(function(){
        $('.menu').removeClass('active');
        $('.menu-icon').removeClass('active');
    });

});
