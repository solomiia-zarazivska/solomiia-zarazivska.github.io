$(document).ready(function () {

	$(".pop-overlay .close").on("click", function(){

  		var grandpa = $(this).parent().parent();

  		if (grandpa.hasClass('open')) {
        	grandpa.removeClass('open');
        	// grandpa.hide();
  		}
  		return false;
	});

	$(".popup-lnk").on("click", function(){

		var lnk = $(this).attr('href');
		if (lnk && (lnk !="") && (lnk !="#")) { 	

  			var popObj = $(lnk);

  			if (popObj) {
  				if (!popObj.hasClass('open')) 
        			popObj.addClass('open');			
        	}
        }
  		return false;
	});

  $(".pop-overlay").on("click", function(){

      if ($(this).hasClass('open'))
        $(this).removeClass('open');      
  });

});

