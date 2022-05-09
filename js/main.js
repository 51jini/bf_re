/* fullpage */
$(document).ready(function(){
    $( window ).resize( function() {
        $('#fullpage > div').addClass('resize');
        $('.panelGnb').fadeOut(0);
        $('.panelGnb').removeClass('on');
        $('.panelIcon a').removeClass('on');
        $('.panelIcon a').children('span').removeClass('on');
        $('.mgnb').fadeOut(0);
        $('.mgnb').removeClass('on');
        $('.mPanelIcon a').removeClass('on');
        $('.mPanelIcon a').children('span').removeClass('on');
        $('.mgnb .subNav').slideUp(0);
        
    } );
    
    $('#fullpage').fullpage({
        css3: false,
        loopBottom: true,
        loopTop: true,
        menu: '#pagebtn',
        anchors: ['page01','page02','page03','page04','page05'],
        onLeave: function(origin, destination, direction){
            $('#fullpage > div').removeClass('resize');
            $('footer').removeClass('on');
            $('.eventWrap').removeClass('on');
            $('.bfmc').removeClass('on');
            $('.shopping').removeClass('on');
            
        },
        afterResize: function(){
            $('#fullpage > div').addClass('resize');
            $('.panelGnb').fadeOut(0);
            $('.panelGnb').removeClass('on');
            $('.panelIcon a').removeClass('on');
            $('.panelIcon a').children('span').removeClass('on');
            $('.mgnb').fadeOut(0);
            $('.mgnb').removeClass('on');
            $('.mPanelIcon a').removeClass('on');
            $('.mPanelIcon a').children('span').removeClass('on');
            $('.mgnb .subNav').slideUp(0);
        },
        afterLoad: function(origin,destination,direction){
            if(destination.index == 0){
                $('#fullpage > div').removeClass('resize');
            }
            if(destination.index == 1){
                $('#fullpage > div').removeClass('resize');
                $('.bfmc').addClass('on');
            }
            if(destination.index == 2){
                $('#fullpage > div').removeClass('resize');
                $('.shopping').addClass('on');
            }
            
            if(destination.index == 3){
                $('footer').addClass('on');
                $('.eventWrap').addClass('on');
            }
        }
    });
});

/* bfmc swiper */
$(document).ready(function(){
    var swiper = new Swiper('.bfmc .swiper-container', {
        breakpoints: {
            1024: {
                slidesPerView: 2.2,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
        },
        loop: true,
        grabCursor: true,
        pagination: {
            el: '.bfmc .swiper-pagination',
            clickable: true,
        },
    });
});

/* mobile - event */
$(document).ready(function(){
    var btn = '.event figcaption';
    var content = '.event figure img';
    $(btn).first().parents('li').addClass('on');
    $(btn).click(function(){
        $(btn).parents('li').removeClass('on');
        $(this).parents('li').addClass('on');
    });
});