jQuery(function($) {	
		
	$base_url = $('body').data('template');
	
	$('.button').hover(function(){
		$(this).find('img').attr('src', ''+$base_url+'images/arrow-submit-white.png');
	}, function(){
		$(this).find('img').attr('src', ''+$base_url+'images/arrow-submit.png');
	});
	
	$('.w-box').matchHeight();
	$('.r-box').matchHeight();
	$('.a-content').matchHeight();
	$('.author-box').matchHeight();
	$('.testimonials_item').matchHeight();
	
	function init()
	{
		$('.r-content').css({ 'height' : $('.r-box').height() });
		$('#typ-content').css({ 'margin-top' : ( $('#slider-content').height() - $('#typ-content').height() ) / 2 });
	}
	
	$(window).load(function(){		
		init();
	});
	
	$(window).resize(function(){
		init();
	});
	
	$(".numeric").keypress(function(evt){
		var theEvent = evt || window.event;
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode( key );
		var regex = /[0-9._\b]|\./;
		if( !regex.test(key) ) {
			theEvent.returnValue = false;
			if(theEvent.preventDefault) theEvent.preventDefault();
		}
	});	
	
	$('#scroll-down').click(function(){
		$('html, body').animate({scrollTop: $('#content-section').offset().top}, 1200, "easeInOutQuint");
	});
	
	$('.button').click(function(){
		$('html, body').animate({scrollTop: 0}, 1200, "easeInOutQuint");
	});
	
	$('.buttonwn').click(function(){
		$('html, body').animate({scrollTop: 0}, 1200, "easeInOutQuint");
	});
	
	
	$('input[type=file]').each(function(){
		var $this = $(this);
		var $fileContainer = $('<div class="file-container" />');
		var $text_file = $('<input type="text" class="input-text" value=""/>');
		var $uploadbutton = $('<input class="input-browse" type="button" value=""/>');
		$this.wrap($fileContainer);			
		$this.parents('.file-container').append($text_file).append($uploadbutton);	
		$this.bind('change', function() {
			$this.parent().find('.input-text').val($this.val().replace("C:\\fakepath\\", ""));
		});
	});

	$('.close_link').click(function(event){
		event.preventDefault();
		$('.popup_wrapp').fadeOut();
		$('.popup_wrapp').removeClass('active');
		$('html').removeClass('active_popup');
	});
});
