$(document).ready(function(){
	
	if( $.isFunction('initialize') ){ initialize(); }
	
	
	$( 'a.submit' ).click(function( e ){
		e.preventDefault();
		$( this ).closest( 'form' ).submit();
	});
	
	
	$( 'a.close' ).click(function(e){
		e.preventDefault();
		$(this).closest( '.info' ).fadeOut();
	});
	
	
	$( '.expand' ).click(function( e ){
		e.preventDefault();
		$(this).parent().parent().next().show();
	});

	$( '.closeExpand' ).click(function( e ){
		e.preventDefault();
		$(this).parent().parent().parent().hide();
	});
	
	

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