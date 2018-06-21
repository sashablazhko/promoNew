$(function() {      

	$(document).ready(function() {

	// Select language
	selwl('.select_lang_one_callback', '.lang_call');
	selwl('.select_phone_one_callback', '.phone_call');
	function selwl(sel, divb) 
	{
		$(sel).click(function(event) 
		{
			event.stopPropagation();
			selelc(sel, divb);
			if ($(this).children(divb).is(':hidden')) 
			{
				$(this).closest(sel).children(divb).slideDown(100);
				$(sel).children('.init').addClass('init_open');
			}

		});

		var seack = $(sel + " " + divb).find('li:not(.init)');
		$(sel).on("click", "li:not(.init)", function() {
			seack.removeClass('selected');
			$(this).addClass('selected');
			$(sel).children('.init').html($(this).html());
			$(divb).slideUp(100);
			$(sel).children('.init').removeClass('init_open');
		});
	}
	
	function selelc(sel, divb) {
		$(sel).children(divb).slideUp(100);
		$(sel).children('.init').removeClass('init_open');
	}
			
	$('html').click(function(){
		selelc('.select_lang_one_callback', '.lang_call');
		selelc('.select_phone_one_callback', '.phone_call');
	});  
	// END Select language

		$("#menu").mmenu({
			wrappers: ["bootstrap4"]
		});
 	});

});