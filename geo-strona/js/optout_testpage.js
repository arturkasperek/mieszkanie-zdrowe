(function ($) {
    //console.log('TEST!!');
    /**
     * Partner object
     **/
	 
	 
	 
	 
    var Partner = function (anchor, options) {
        var obj = this;
        test_token = [];
        window.testPartner = obj;
		obj.okPartners = 0;
		obj.failedPartners = 0;
        obj.anchor = $(anchor);
        obj.options = options;
        obj.iframe = obj.anchor.find('iframe');
        obj.status = obj.anchor.find('.status');
        obj.action = obj.anchor.find('.action');
        obj.currentstate = obj.anchor.find('.currentstate');
        obj.radio_opt = obj.anchor.find('input[name=opt_state]');
		
		obj.iframe.attr('failedPartners',obj.failedPartners);
		
        /* loading lock (yes, this is atomic) */
        obj.mutex = false;

        /* Hide iframe  */
	/* obj.iframe.hide(); */

        /* Click handler toggle for actions */
        obj.action.click(function () {
            var status = obj.getStatus();

            if (status == "cookie" || status == "nocookie") {
                obj.optout();
            } else if (status == "optedout") {
                obj.optin();
            } else {
                obj.call_partner_service('status',0,0);
            }


            //var status = obj.getStatus();
            //if(this.id == "rdio_in"){
            //    obj.optin();
            //}
            //if(this.id == "rdio_out"){
            //    obj.optout();
            //}
            //
            //if (status == "cookie" || status == "nocookie") {
            //    // nothing ehere
            //} else if (status == "optedout") {
            //    // nothing ehere
            //} else {
            //    obj.call_partner_service('status');
            //}

        });

        obj.radio_opt.click(function () {
            var status = obj.getStatus();
            /* if(status == "cookie" || status == "nocookie") {
             window.activity(4,obj.anchor.attr("id").slice(8));
             obj.optout();
             } else if(status == "optedout") {
             window.activity(5,obj.anchor.attr("id").slice(8));
             obj.optin();
             } else {
             obj.call_partner_service('status');
             }*/ 

            if(this.id == "rdio_in"){
                obj.optin();
               // alert("optin click in js");
            }
            if(this.id == "rdio_out"){
                obj.optout();
               // alert("optout click in js");
            }

            if (status == "cookie" || status == "nocookie") {
                window.activity(4, obj.anchor.attr("id").slice(8));
            } else if (status == "optedout") {
                window.activity(5, obj.anchor.attr("id").slice(8));
            } else {
                obj.call_partner_service('status',0,0);
            }

        });

        /* Opt-out directly */
        obj.optout = function () {
			window.testPartner.iframe.attr('failedPartners',0);
			window.testPartner.failedPartners = 0;
            obj.call_partner_service("optout",0,0);
        }

        /* Opt-in directly */
        obj.optin = function () {
			window.testPartner.iframe.attr('failedPartners',0);
			window.testPartner.failedPartners = 0;
            obj.call_partner_service("optin",0,0);
        }

        /* Call partner and get status */
        obj.call_partner_service = function (action,request_nr,failedPartners) {
		
	        console.log('action= '+action+' request_nr= '+request_nr);
            /* if we're already loading, bail */
            if (!obj.mutex) {
                obj.mutex = true;
            } else if(failedPartners <= 0) {	
                return;
            }

			
            /* reset frame */
			
	
				//obj.resetFrame();
			console.log("aci");
            /* reset visuals of the div */
            obj.anchor.removeClass("network-error");
            obj.anchor.removeClass("network-optout");
            obj.anchor.removeClass("nocookie");

            var src = options.srcStatus;
			
            var src_split = src.split(',');
			console.log("STATUS URL: " + src_split[request_nr]);
            
            
           
		   
				//if(i == src_split.length - 1)
					//{obj.iframe.attr('is-final', is_final);
					//is_final = -1;}
				//else
					//obj.iframe.attr('is-final', i);
		   

		   src = src_split[request_nr];
            if (action == "optout") {
                
				src_split = options.srcOptout.split(',');
				src = src_split[request_nr];
				//src = options.srcOptout;
				
				//if(obj.getToken.length > 0)
				//	src += obj.getToken();

                src += test_token[request_nr];
                console.log("Optout" + src);
            
			} else if (action == "optin") {
                
				src_split = options.srcOptin.split(',');
				src = src_split[request_nr];
				//src = options.srcOptin;
				
				//if(obj.getToken.length > 0)
				//	src += obj.getToken();

                src += test_token[request_nr];
                console.log("Optin" + src);
            }
			
			if(failedPartners > 0)
				obj.iframe.attr('failedPartners',failedPartners);
			
			
            /* display loading message */
            obj.status.text(localisedStrings["contact_server"]);
            obj.action.text("");
            obj.action.css("cursor", "default");
            obj.anchor.fadeTo("fast", 0.33);		
            obj.currentstate.text("")
			;
            obj.currentstate.removeClass();
            obj.currentstate.addClass("currentstate-loading");
			
			obj.iframe.attr('action',action);
			request_nr++;
			obj.iframe.attr('request_nr',request_nr);
			
			
            /* Make call to partner server */

				
				console.log("Url pentru " + action + " nr: "  + request_nr + " " + src);
			obj.iframe.attr('src', src);
            /* Set timeout for call to partner server */
			
			window.confirmSetLoadTimeoutID = setTimeout(obj.confirmLoad,8000,request_nr,action);
				
	
		

	
		
			
    }
	
	
	
	
	
	
	

        obj.saveToken = function(request_nr){
            test_token[request_nr] = obj.getToken();
            console.log("test token: = "+test_token[request_nr]);
        }
	
        /* Partner call load timeout */
        obj.confirmLoad = function (request_nr,action) {
		
		    console.log('in confirm, action= '+action+' request_nr= '+request_nr);

            try {
                current_state = obj.getStatus();
            } catch (err) {
				window.testPartner.failedPartners++;
				current_state = false;

            }

			
		
            if (!current_state) {
                obj.iframe.attr('src', '');
                obj.status.html(localisedStrings["unable_to_connect"]);
                obj.action.text(localisedStrings["try_to_connect"]);
                obj.anchor.addClass("network-error");
				
				
				
				
				if(action == "status" && request_nr < window.testPartner.options.srcStatus.split(',').length)
					{

					obj.mutex = false;
					obj.call_partner_service(action,request_nr,window.testPartner.failedPartners);
					}
				
				if(action == "optin" && request_nr < window.testPartner.options.srcOptin.split(',').length)
					{
					obj.mutex = false;
					obj.call_partner_service(action,request_nr,window.testPartner.failedPartners);
					}
					
				if(action == "optin" && request_nr < window.testPartner.options.srcOptout.split(',').length)
					{
					obj.mutex = false;
					obj.call_partner_service(action,request_nr,window.testPartner.failedPartners);
					}
				
					
			
					
				
            } else {
                obj.status.html(obj.getMessage());
                obj.action.text(obj.getAction());
            }
            obj.anchor.fadeTo("fast", 1);
            obj.action.css("cursor", "pointer");
            

            if (current_state == "optedout" && (obj.getFailed() == 'undefined' || obj.getFailed() == 0)) {
			
                //set radio button to out
                obj.anchor.find("form input:radio").filter("[value=out]").attr('checked', true);
                //obj.anchor.find("form input:radio").filter("[value=in]").attr('checked', false);
                // hilite div
                obj.anchor.addClass("network-optout");

            } else if ((current_state == "nocookie" || current_state == "cookie") && (obj.getFailed() == 'undefined' || obj.getFailed() == 0)) {
				
                if (current_state == "nocookie") {

					
                    obj.anchor.addClass("nocookie");
                }
                else {
                    obj.anchor.find("form input:radio").filter("[value=in]").attr('checked', true);
                }
                ;
                //set radio button to in
                //obj.anchor.find("form input:radio").filter("[value=out]").attr('checked', false);


            } else {
                //obj.iframe.attr('src', '');
				
                obj.status.html(localisedStrings["unable_to_connect"]);
                obj.action.text(localisedStrings["try_to_connect"]);
                obj.anchor.addClass("network-error");
				
				
            }

			if(obj.getFailed() == 0)
				obj.currentstate.text(current_state);
			else
				obj.currentstate.text('false');
            obj.currentstate.removeClass();
            obj.currentstate.addClass("currentstate-loaded");
            /* release lock */
            obj.mutex = false;
			
			
			
			
        }

        /* Action accessor */
        obj.getAction = function () {
            return localisedStrings[obj.iframe.contents().find('#action').val()];
        }
		
		obj.getFailed = function () {
		
			return obj.iframe.attr('failedPartners');
		}

        /* Message accessor */
        obj.getMessage = function () {
            return localisedStrings[obj.iframe.contents().find('#message').val()];
        }

        /* Token accessor */
        obj.getToken = function () {
            console.log("iframe= "+obj.iframe.contents());
            return obj.iframe.contents().find('#token').val();
        }

        /* Status accessor */
        obj.getStatus = function () {
            return obj.iframe.contents().find('#status').val();
        }
		

        obj.resetFrame = function () {
            obj.iframe.contents().find('#status').val('');
        }

    };

    /**
     * loadPartner
     * Creates a Partner object and associates it with the given
     * partner div.
     * */
    $.fn.loadPartner = function () {
        return this.each(function () {
            var obj = $(this);

            /* Build options based on HTML */
            var srcStatus = obj.children('#srcStatus').attr('href');
            var srcOptin = obj.children('#srcOptin').attr('href');
            var srcOptout = obj.children('#srcOptout').attr('href');

            console.log('status: '+srcStatus+'optin: '+srcOptin+'optout: '+srcOptout);

            var options = {
                srcStatus: srcStatus,
                srcOptin: srcOptin,
                srcOptout: srcOptout
            };
			
            /* Create and call the partner for initial status/token */
            var partner = new Partner(this, options);
            partner.call_partner_service("status",0,0);

            /* store the partner object in div */
            obj.data('partner', partner);

        });
    }

    /**
     * optout
     * Optout of this partner div by looking up the
     * related object and opting out of that.
     * */
    $.fn.optout = function () {
        return this.each(function () {
            var obj = $(this);
            var partner = obj.data('partner');
		
            partner.optout();
        });
    };

    /**
     * optin
     * Optin of this partner div by looking up the
     * related object and opting out of that.
     * */
    $.fn.optin = function () {
        return this.each(function () {
            var obj = $(this);
            var partner = obj.data('partner');
            partner.optin();
        });
    };

})(jQuery);

function partnerFinishedLoading(status, frameElementId,action,request_nr){
	console.log("ATAT!!" + window.testPartner.options.srcStatus.split(',').length + " si " + action + " plus " + request_nr);


	if(action == 'status'){
		if(request_nr == window.testPartner.options.srcStatus.split(',').length)
		{	
			window.testPartner.okPartners++;
			clearTimeout(window.confirmSetLoadTimeoutID);
            window.testPartner.saveToken(request_nr-1);
			window.testPartner.confirmLoad();

            console.log()
		}

		else{
		
		console.log("ELSE!!!");
		window.testPartner.mutex = false;
		window.testPartner.okPartners++;
		clearTimeout(window.confirmSetLoadTimeoutID);
            window.testPartner.saveToken(request_nr-1);
		window.testPartner.call_partner_service(action,request_nr,window.testPartner.failedPartners);

		}
	}

	else if (action == 'optin'){

		if(request_nr == window.testPartner.options.srcOptin.split(',').length)
		{
			clearTimeout(window.confirmSetLoadTimeoutID);
            /*window.testPartner.saveToken(request_nr-1);*/
			window.testPartner.confirmLoad();
		}

		else{
		window.testPartner.mutex = false;
		clearTimeout(window.confirmSetLoadTimeoutID);
         /*   window.testPartner.saveToken(request_nr-1);*/
		window.testPartner.call_partner_service(action,request_nr,window.testPartner.failedPartners);

		}




	}

	else if (action == 'optout'){

		if(request_nr == window.testPartner.options.srcOptout.split(',').length)
		{
			clearTimeout(window.confirmSetLoadTimeoutID);
           /* window.testPartner.saveToken(request_nr-1);*/
			window.testPartner.confirmLoad();
		}

		else{
		window.testPartner.mutex = false;
		clearTimeout(window.confirmSetLoadTimeoutID);
         /*   window.testPartner.saveToken(request_nr-1);*/
		window.testPartner.call_partner_service(action,request_nr,window.testPartner.failedPartners);
	
		}
	
	
	
	
	}
}


/* test 3rd party */
window._3rd_party_test_step1_loaded = function () {
    // At this point, a third-party domain has now attempted to set a cookie (if all went to plan!)
    var step2Url = 'https://yoc.edaa.eu/tpc/step2.js.php', resultsEl = document.getElementById('3rd_party_cookie_test_results'), step2El = document.createElement('script');
    // Update loading / results message
    if (resultsEl) {
        resultsEl.innerHTML = 'Stage one complete, loading stage 2&hellip;';
        // And load the second part of the test (reading the cookie)
        step2El.setAttribute('src', step2Url);
        resultsEl.appendChild(step2El);
    }
}

window._3rd_party_test_step2_loaded = function (cookieSuccess) {
    var resultsEl = document.getElementById('3rd_party_cookie_test_results'),
        errorEl = document.getElementById('3rd_party_cookie_test_error');
    if (resultsEl) {
        // Show message
        resultsEl.innerHTML = (cookieSuccess ? 'Third party cookies are <b>functioning</b> in your browser.' : 'Third party cookies appear to be <b>disabled</b>.');

        // Done, so remove loading class
        resultsEl.className = resultsEl.className.replace(/\bloading\b/, ' ');
        // And remove error message
        errorEl.className = 'hidden';
    }
}

window.setTimeout(function () {
    var errorEl = document.getElementById('3rd_party_cookie_test_error');
    if (errorEl && errorEl.className.match(/\berror\b/)) {
        // Show error message
        errorEl.className = errorEl.className.replace(/\bhidden\b/, ' ');
    } else {
    }
}, 15 * 1000); // 7 sec timeout


String.format = function () {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(reg, arguments[i + 1]);
    }

    return s;
}