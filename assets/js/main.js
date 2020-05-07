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
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });

//    var scrollLink = $('.smooth');
//    scrollLink.on("click", function (e) {
//        e.preventDefault();
//        $('body,html').animate({
//            scrollTop: $(this.hash).offset().top
//        }, 1000);
//    });

});
