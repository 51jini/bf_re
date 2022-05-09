/* popup */
$(document).ready(function(){
    function setCookie(name, value, expiredays) {  
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
    };

    $('.tClose').click(function(){ 
        setCookie('maindiv','done',1);
		$('.popupWrap').slideUp(0);
        
    });	
    $('.eClose').click(function(){
        $('.popupWrap').slideUp(0);
        
    });

    cookiedata = document.cookie;
    if(cookiedata. indexOf('maindiv=done') < 0 ){ 
        $('.popupWrap').css('display','block');  
        $('html, body').css('overflow','hidden');
    }else{                                  
        $('.popupWrap').css('display','none');   
    }
});

$(document).ready(function(){
    
    $('.panelGnb').fadeOut(0);
    
    $('.panelIcon a').click(function(){
        $(this).toggleClass('on');
        $(this).children('span').toggleClass('on');
        $('.panelGnb').slideToggle(0);
        $('.panelGnb').toggleClass('on');
        
    });
    
});

$(document).ready(function(){
    
    $('.mgnb').fadeOut(0);
    $('.subNav').slideUp(0);
    
    $('.mPanelIcon a').click(function(){
        $(this).toggleClass('on');
        $(this).children('span').toggleClass('on');
        $('.mgnb').fadeToggle(0);
        $('.mgnb').toggleClass('on');
        $('.subnav').slideUp(0);
    });
    
    //menu click
	$('.mainNav').click(function(){
		
		$('.mainNav > ul > li').removeClass('on');
		$(this).parent().addClass('on');
		
		var is = $(this).next().is(':hidden'); 
		
		if(is){
			$('.subNav').slideUp(0);
			$(this).next().slideDown('fast');
		}else{
			$('.mainNav > ul > li').removeClass('on');
			$('.subNav').slideUp(0);
		}
	});
});

//gnb
$(document).ready(function(){
    $('.gnb .subNav').stop().slideUp(0);
    
    
    $('.gnb .mainNav').mouseenter(function(){
        $(this).next().stop().slideDown('fast');
        
        $(this).parent().mouseleave(function(){
            $(this).children('.gnb .subNav').stop().slideUp('fast');
        });
    }); 
    
    $('.gnb .mainNav').focus(function(){
        $('.gnb .mainNav').removeClass('on');
        $(this).addClass('on'); 
        

        var is = $(this).next().is(':hidden'); 
        
        if(is){
            $('.gnb .subNav').slideUp(0);
            $(this).next().stop().slideDown('fast');
        }
    });
    
    
    $('.gnb .subNav li:last a').keydown(function(e){
        
        if(e.keyCode == 9){ 
            if(!e.shiftKey){ 
                $('.gnb .mainNav').removeClass('on');
                $('.gnb .subNav').stop().slideUp('fast');
            }
        }
    });
    

    $('.gnb .mainNav').first().keydown(function(e){
        if(e.keyCode == 9){ 
            if(e.shiftKey){ 
                $('.gnb .mainNav').removeClass('on');
                $('.gnb .subNav').stop().slideUp('fast');
            }
        }
    });
    
     $('.gnb .subNav a').focus(function(){
        $('.gnb .subNav li').removeClass('on');
        $(this).parent().addClass('on');
        
    });
    
});