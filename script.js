$(document).ready(function(){
	var current_page = "#first-page";
	var G1 = {};
	var chastota = {1530:'3.844*10<sup>12</sup>',1540:'3.79*10<sup>12</sup>',1550:'3.74*10<sup>12</sup>',1560:'3.69*10<sup>12</sup>'};

	$('#to-first-page').click(function(e){
		$('ul li').each(function(i){$(this).removeClass('current')});
		$(current_page).fadeOut(0);
		current_page = "#first-page";
		$(current_page).fadeIn(500);
		$(this).addClass("current");
	});
	$('#to-second-page').click(function(e){
		$('ul li').each(function(i){$(this).removeClass('current')});
		$(current_page).fadeOut(0);
		current_page = "#second-page";
		$(current_page).fadeIn(0);
		$(this).addClass("current");
	});
	$('#to-third-page').click(function(e){
		$('ul li').each(function(i){$(this).removeClass('current')});
		$(current_page).fadeOut(0);
		current_page = "#third-page";
		$(current_page).fadeIn(500);
		$(this).addClass("current");
	});
	$('#to-last-page').click(function(e){
		$('ul li').each(function(i){$(this).removeClass('current')});
		$(current_page).fadeOut(0);
		current_page = "#last-page";
		$(current_page).fadeIn(500);
		$(this).addClass("current");
	});
	

	$('input[name=pin]').click(function(){
		if($('#lambda').val() == 1560){
			if($(this).val() == -30){
				G1 = 26;
			}else if($(this).val() == -20){
				G1 = 22.8;
			}else if($(this).val() == -10){
				G1 = 21;			
			}else if($(this).val() == 0){
				G1 = 13.2;
			}else if($(this).val() == 10){
				G1 = 4.2;
			}	
			$('.gresult_in').html("G = "+(G1));
		}
		if($('#lambda').val() == 1550){
			if($(this).val() == -30){
				G1 = 29;
			}else if($(this).val() == -20){
				G1 = 27.4;
			}else if($(this).val() == -10){
				G1 = 23.6;
				drawGraph(oldX,oldY,-10+150,G1);
				oldX = -10+150;
				oldY = G1;	
				cordX(-10+250,-10);				
			}else if($(this).val() == 0){
				G1 = 14.2;
			}else if($(this).val() == 10){
				G1 = 6;
			}	
			console.log(G1);
			$('.gresult_in').html("G = "+(G1));
		}
		if($('#lambda').val() == 1540){
			if($(this).val() == -30){
				G1 = 26.8;
			}else if($(this).val() == -20){
				G1 = 23.5;
			}else if($(this).val() == -10){
				G1 = 22;		
			}else if($(this).val() == 0){
				G1 = 14;
			}else if($(this).val() == 10){
				G1 = 5.3;
			}	
			$('.gresult_in').html("G = "+(G1));
		}
		if($('#lambda').val() == 1530){
			if($(this).val() == -30){
				G1 = 36.7;
			}else if($(this).val() == -20){
				G1 = 32.6;
			}else if($(this).val() == -10){
				G1 = 23.8;		
			}else if($(this).val() == 0){
				G1 = 15.2;
			}else if($(this).val() == 10){
				G1 = 7.4;
			}	
			$('.gresult_in').html("G = "+(G1));
		}
	});
	
	$('#lambda').change(function(){
		//if(typeof G1[$(this).val()] === "undefined") {return false;}
		$('#chastota').html(chastota[$(this).val()]);
	});
	
	$('#draw2').click(function(){
		$('.xcord').html('P<sub>kir</sub>');
		$('.ycord').html('P<sub>chiq</sub>');
		if($('#lambda').val() == 1560){
			$('#graph img').remove();
			$('#graph').append("<img src='images/image002.png' width='100%' height='450px'/>");
		}else if($('#lambda').val() == 1550){
			$('#graph img').remove();
			$('#graph').append("<img src='images/image004.png' width='100%' height='450px'/>");
		}else if($('#lambda').val() == 1540){
			$('#graph img').remove();	
			$('#graph').append("<img src='images/image006.png' width='100%' height='450px'/>");
		}else if($('#lambda').val() == 1530){
			$('#graph img').remove();
			$('#graph').append("<img src='images/image008.png' width='100%' height='450px'/>");
		}
	});

	$('#draw').click(function(){
		$('.xcord').html('P<sub>kir</sub>');
		$('.ycord').html('G');
		if($('#lambda').val() == 1560){
			$('#graph img').remove();
			$('#graph').append("<img src='images2/image001.png' width='100%' height='450px'/>");
		}else if($('#lambda').val() == 1550){
			$('#graph img').remove();
			$('#graph').append("<img src='images2/image002.png' width='100%' height='450px'/>");
		}else if($('#lambda').val() == 1540){
			$('#graph img').remove();	
			$('#graph').append("<img src='images2/image003.png' width='100%' height='450px'/>");
		}else if($('#lambda').val() == 1530){
			$('#graph img').remove();
			$('#graph').append("<img src='images2/image004.png' width='100%' height='450px'/>");
		}
	});
	

});