var main=function(){
    $('.icon-menu').click(function(){
        $('.menu').animate({left:'0px'},200);
        $('body').animate({left:'285px'},200);
        });
    $('.icon-close').click(function(){
        $('.menu').animate({left:'-285px'},200);
        $('body').animate({left:'0px'},200);
        });
	
	$('.topmenu .nav1, .menu-block .menu li').mouseenter(function(){
		$(this).fadeTo('slow',0.5)});
	$('.topmenu .nav1, .menu-block .menu li').mouseleave(function(){
		$(this).fadeTo('slow',1)});
	
//Меню для маленьких экранов
var touch = $('.menu-block .show-menu');
	var menu = $('.menu-block .menu');
		$(touch).on('click', function(e){
			e.preventDefault();
			menu.slideToggle('fast');
		});
	$(window).resize(function(){
		var wid=$(window).width();
		if (wid>1152 && menu.is(':hidden')){
			menu.removeAttr('style');
			}
		});	
};

$(document).ready(main);


				   
				   
						 