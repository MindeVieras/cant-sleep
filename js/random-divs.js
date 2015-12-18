(function($){

	$.fn.imageCollage = function(F,P,S){
		F = 700;
		P = 1000;
		S = S-1||0;		

		var div = this.children(),T;

		function rndDivs(){
			
			var divSize = ((Math.random()*200) + 100).toFixed();
			var textSize = ((Math.random()*32) + 16).toFixed();
			var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
			div.css({
				'width':divSize+'px',
				'font-size':textSize+'px',
				'background-color': color
			});

			var posX = (Math.random() * ($(window).width() - divSize)).toFixed();
			var posY = (Math.random() * ($(window).height() - divSize)).toFixed();
			div.css({
				'position':'absolute',
				'left':posX+'px',
				'top':posY+'px'
			}); 
			
			div.eq(S=++S%div.length).fadeTo(F,1).siblings(div).stop(1).fadeTo(F,0);
		}
		div.eq(S).show().siblings(div).fadeOut(300);

		function aa(){
			T = setTimeout(function(){
				rndDivs();
				aa();
			},F+P);
		}aa();
	};

})(jQuery);