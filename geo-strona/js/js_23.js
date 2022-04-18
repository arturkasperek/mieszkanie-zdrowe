$(document).ready(function(){
	
	if( $.isFunction('initialize') ){ initialize(); }
	
	
	$( 'a.submit' ).click(function( e ){
		e.preventDefault();
		$( this ).closest( 'form' ).submit();
	});
	
	if (getCookie('hide') == 'true') {
        $('.info').hide();
      }
    else
        $('.info').show();
  
	$( 'a.close' ).click(function(e){
		e.preventDefault();
		$(this).closest( '.info' ).fadeOut();
        setCookie('hide', true, 1);
	});
	
	
	$( '.expand' ).click(function( e ){
		e.preventDefault();
		$(this).parent().parent().next().show();
	});

	$( '.closeExpand' ).click(function( e ){
		e.preventDefault();
		$(this).parent().parent().parent().hide();
	});
    
    $( '#close_popup_cookie' ).click(function(e){
		e.preventDefault();
        setCookie('popup_nl', 1, 1000);
        
        $('.featherlight-content').hide();
        $('.featherlight').hide(); 
	});
    
    $( '.fl1Left > h2 > a' ).click(function(e){ 
		e.preventDefault();
		$('.featherlight-content').hide();
        $('.featherlight').hide(); 

        $.ajax({
            type: "POST",
            url: ajaxurl,
            data: {
                action: 'my_set_session',
                value : 1,
            },
            success: function(response){
                window.location = e.currentTarget.href;
            }
        })

	}); 
	
    var x = getCookie('popup_nl');
    if (!x) {
        $('div.fl-page').show();
    }

	/* tabs */
	/*
	$( ".tabs a" ).ready( function(){
		
		$( ".tabs" ).idTabs(function(id,list,set){ 
		   
		    $("a",set).removeClass( "selected" );
		    $("a",set).parent().removeClass( "tabSelected" );
		    $("a",set).filter("[href='"+id+"']",set).addClass( "selected" );
		    $("a",set).filter("[href='"+id+"']",set).parent().addClass( "tabSelected" );
		    
		    for(i in list)  
		      $(list[i]).hide();
		      $(id).fadeIn();  
		    return false;  
			
		});
	});	
	*/
	
});

function openBox( element ){
	$( '.' + element ).fadeIn();
}




function setCookie(c_name,value,exdays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1)
      {
      c_start = c_value.indexOf(c_name + "=");
      }
    if (c_start == -1)
      {
      c_value = null;
      }
    else
      {
      c_start = c_value.indexOf("=", c_start) + 1;
      var c_end = c_value.indexOf(";", c_start);
      if (c_end == -1)
      {
    c_end = c_value.length;
    }
    c_value = unescape(c_value.substring(c_start,c_end));
    }
    return c_value;
}


$(window).scroll(function(){
    if($(window).scrollTop() >= 350 ){
        $(".loadingLoadScroll").css('display', 'block')

    } else {
        $(".loadingLoadScroll").css('display', 'none')

    }
});