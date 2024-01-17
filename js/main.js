$(document).ready(function(){
    //메인비주얼
    const mainvisual = new Swiper('.mainvisual',{
        effect: "fade",
        speed: 1500,
        loop: true,
        
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        pagination: {
        el: ".swiper-pagination",
        },

        fadeEffect : {
        crossFade : true
        },
    });


    //숫자 카운트
    gsap.registerPlugin(ScrollTrigger);
    const numbers = document.querySelectorAll('.count');
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: numbers,
            start: 'top 90%',
            end: 'bottom',
            markers: false,
            toggleActions: 'restart complete restart pause',
        },
    });

    gsap.utils.toArray('.count').forEach(function (el) {
    var target = { val: 0 }; //시작값
    tl.to(target, {
        val: el.getAttribute('data-number'), //값을 가지고 옴
        duration: 1, //도달하는 시간
        onUpdate: function () {
            el.innerText = target.val.toFixed(0); //1이 될 시에는 소수점까지 표현
        },
    });
    });

    tl.play();


    //prd 가로 슬라이드
    let sections = gsap.utils.toArray(".prd_list");

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#product",
            pin: true,
            scrub: 1.5,
            //snap: 1 / (sections.length - 1),
            start: "top 15%",
            end: "+=4000",
            markers: false,
            // end: document.querySelector("#parallax__cont").offsetWidth,
        }
    });


    //prd bg
    let bg = gsap.timeline({
    scrollTrigger: {
        start: 0,
        end: "max",
        scrub: true
    }
    });

    let txtbg = gsap.timeline({
    scrollTrigger: {
        start: "top 20%",
        end: "bottom 70%",
        scrub: true,
        markers: false
    }
    });

    txtbg.to(".menu_txt", {"--bg-color": "#fff"})
    .to(".menu_txt", {"--bg-color": "#d9d9d9"});


    bg.to("#product", {"--bg-color": "#fff"})
    .to("#product", {"--bg-color": "#d9d9d9"});
  
    //value
    /* const ani2 = gsap.timeline();
    ani2.from("#section2 .i1", {y: -100, autoAlpha:0, borderRadius: 200})
    .from("#section2 .i2", {y: 100, autoAlpha:0, borderRadius: 200})
    .from("#section2 .i3", {y: -100, autoAlpha:0, borderRadius: 200});

    ScrollTrigger.create({
        animation: ani2,
        trigger: "#section2",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: false
    }); */


  //map tab
    $('.map_site > li:nth-child(n+2),.map_add > li:nth-child(n+2)').hide();

    $('.map_tit li').click(function(){
        $(this).addClass('on');
        $(this).siblings().removeClass('on');

       var indexNum = $(this).index();
        $('.map_site > li').eq(indexNum).fadeIn().siblings().fadeOut();
        $('.map_add > li').eq(indexNum).fadeIn().siblings().fadeOut();
    });
});