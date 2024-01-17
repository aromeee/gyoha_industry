$(document).ready(function(){
    $('.depth2,.depth2_bg,.depth2_bgbk').hide();

    $('.gnb > li').hover(function(){
        $('.depth2,.depth2_bg').stop().slideToggle();
        $('.depth2_bgbk').stop().fadeToggle();
    });

    $('.mgnb_wrap, .mdepth2').hide();

    $('.ham').click(function(){
        $('.mgnb_wrap').fadeIn();
    });

    $('.close').click(function(){
        $('.mgnb_wrap').fadeOut();
    });

    $('.mgnb > li').click(function(){
        $(this).find('.mdepth2').stop().slideDown();
        $(this).siblings().find('.mdepth2').slideUp();
    });
});