/* EPL-15812 */
var cdnElement = document.createElement('a');
cdnElement.setAttribute('href', $("body").find("img").attr("src"));
var cdnUrl = cdnElement.protocol + "//" + cdnElement.hostname + "/assets";
/* EPL-15812 */
/* TTM-1483 */
$(window).on('load', function() {
    removeSameTrackingInfo(); // TTM-1483
});
const removeSameTrackingInfo = function() {
    if($(".order-detail").length) {
        $(".order-detail").each(function(){
            if (!$(this).hasClass("order-step_pay-box") && $(this).find('.track_info').length) {
                var trackingCodes = [];
                $(this).find('.track_info').each(function(){
                    if($.inArray($(this).data('track'), trackingCodes) !== -1) {
                        $(this).hide();
                    } else {
                        trackingCodes.push($(this).data('track'));
                    }
                });
            }
        });
    }
// Epl-16803
};
// Epl-16803
/* TTM-1483 */
(function($){
	var animation = false;
	var getWidth  = $(window).width();
    
    // EPL-12350
    function OptanonWrapper() { }
    // EPL-12350
/*EPL-5157*/

$(document).on('click', '.top-brand-select', function(){
	var title 		= $(this).data('value');
	 
	 
	clearAllFilters();
	if(!$('#filterbrandform .filtercheckboxes[data-value="' + title + '"]').is(':checked')){
		$('#filterbrandform .filtercheckboxes[data-value="' + title + '"]').trigger('click');
	}
	scrollTo('.rightcol3bo');
});

   /*paste code here for pagination*/
      // 3bo module
    $(document).on('click', '.o3b-section .next.active', function(e){ 
    	e.preventDefault();    	
		var pageDiv 	= $('.o3b-section .current-page');
		var page 		= Number(pageDiv.html()) + 1;
        var totalPages 	= pageDiv.data('totalpages');
        
        // EPL-15590
        var url = checkRedirectURL(window.location.href);
        window.location	= updateUrlParameters(url, 'page', page);
        // EPL-15590
	});
    $(document).on('click', '.o3b-section .prev.active', function(e){
    	e.preventDefault(); 
		var pageDiv 	= $('.o3b-section .current-page');
		var page 		= Number(pageDiv.html()) - 1;
		/* EPL-6561 */
		var urlParams = getUrlParameters();
		var limitVal = urlParams.limit || 0;
		if(page == 1 && parseInt(limitVal) === 0){
            // EPL-15590
            var removedurl = checkRedirectURL(window.location.href);
            window.location	= removeURLParameter(removedurl, 'page');
            // EPL-15590
		} else{
            // EPL-15590
            var updatedurl = checkRedirectURL(window.location.href);
            window.location	= updateUrlParameters(updatedurl, 'page', page);
            // EPL-15590
		}
		/* End EPL-6561 */
	});
	$(document).on('click', '#tab-filters input[type=checkbox]', function(){
		var pageDiv 	= $('.current-page');
		pageDiv.text(1);
		ajaxProductsPagination(1, updatePagination, $(this));
	});
	$(document).on('change', '#car-tab-filters select', function(){
		var pageDiv 	= $('.current-page');
		pageDiv.text(1);
		ajaxProductsPagination(1, updatePagination, $(this));
	});
	$(document).on('click', '#car-tab-filters input[type=checkbox]', function(){
		var pageDiv 	= $('.current-page');
		pageDiv.text(1);
        /*** EPL-4710 EPL-9813 EPL-9823 
		$('[data-value="'+$(this).val()+'"]').prop('checked',$(this).prop('checked'));
        EPL-4710 EPL-9813 EPL-9823 */
		ajaxProductsPagination(1, updatePagination, $(this));
	});
	$(document).on('click', '#category-filters input[type=radio]', function(){
		var pageDiv 	= $('.current-page');
		pageDiv.text(1);
		ajaxProductsPagination(1, updatePagination, $(this));
	});
	$(document).on('click', '.clear-category-refine', function(){
		var pageDiv 	= $('.current-page');
		pageDiv.text(1);
		$('#category-filters input[type=radio]').prop('checked', false);
		ajaxProductsPagination(1, updatePagination);
		removepricefilters();/*** EPL-4710 EPL-9813 EPL-9823 */
	});
/*** EPL-4710 EPL-9813 EPL-9823 */
$(document).on('click', '#clearpricefilters', function(){

		if( $(window).width() <= 767 ){
		if($(this).hasClass('open')){
			$(this).removeClass('open').addClass('close'); 
		   $('#mobdivpricefilters').hide( "slow" );
	   	} else {
		   $(this).removeClass('close').addClass('open');
		   $('#mobdivpricefilters').show( "slow" );
	   	}
		}
		
		$('#min').val('');
		$('#max').val('');
		selmin='';
		selmax='';
		if($('.clear-refine').length > 0){
		$('#category-filters input[type=radio]').prop('checked', false);
		$('.clear-refine').trigger('click');	
		} else {
			removepricefilters();	//epl-4710	
			ajaxProductsPagination(1, updatePagination);
		}
	
	});
/*** EPL-4710 EPL-9813 EPL-9823 */

	
	$(document).on('click', '.reset-btn', function(){
		/*** EPL-4710 EPL-9813 EPL-9823 */
		$('#min').val('');
		$('#max').val('');
		selmin='';
		selmax='';
		removepricefilters();
		
     	if($('.clear-refine').length > 0){
        $('#category-filters input[type=radio]').prop('checked', false);
        $('.clear-refine').trigger('click');
		} else {
			ajaxProductsPagination(1, updatePagination);
		}
		/*** EPL-4710 EPL-9813 EPL-9823 */
    });
    $(document).on('click', '#tab-filters .clear-refine', function(){
        var pageDiv     = $('.current-page');
        $('#tab-filters input[type=checkbox]').prop('checked', false);
        ajaxProductsPagination(1, updatePagination);
		removepricefilters();/*** EPL-4710 EPL-9813 EPL-9823 */
    });
    $(document).on('click', '#car-tab-filters .clear-refine', function(){
	 clearAllFilters();
        if($('#filtervehiclespec select').length < 1){
            ajaxProductsPagination(1, updatePagination);
        }
    });
	
	
	$(document).on('click', '.page-list .showall', function(){ 
		$(this).addClass('active');
		ajaxProductsPagination(1, updatePagination);
	});	

	$(document).on('change', '.sort-col select', function(){ 
		var value 		= $(this).val();	
        var url 		= updateUrlParameters(window.location.href, 'page', 1);
        
        // EPL-15590
		var updatedurllink = checkRedirectURL(url);
        window.location	= updateUrlParameters(updatedurllink, 'sort', value);
        // EPL-15590
	});
	$(document).on('click', '.page-list .changelimit', function(){ 
		var datalimit = $('.changelimit').attr('data-limit');	
        var url 		= updateUrlParameters(window.location.href, 'page', 1);
        
        // EPL-15590
		var updatedurllink = checkRedirectURL(url);
        window.location	= updateUrlParameters(updatedurllink, 'limit', datalimit);
        // EPL-15590
	});

   /*paste code here for pagination*/

    /*EPL-5157*/

	/*EPL-8434*/
	$('#guestsignupform').submit(function(e){
		e.preventDefault();
		var passwordval = $("#gpassword").val().trim();
		
		var bsubscribe = 0;
		if ($("#bsubscribe").is(":checked")) {
			bsubscribe = 1;
		}

		if(passwordval == ''){
            /* CI-4785 */	
            document.querySelector('#gsignupmsg').innerHTML = "<span id='gpassword-error' class='error loginEmailError' style='display:block'>Please enter a valid password.</span>";
            /* CI-4785 */
			return false;
		}
		if(passwordval.length < 8){
            /* CI-4785 */	
            document.querySelector('#gsignupmsg').innerHTML = "<span id='gpassword-error' class='error loginEmailError' style='display:block'>Password must contain minimum 8 characters.</span>";
            /* CI-4785 */
			return false;
		}
		
		$('#gcreatebtn').prop('disabled',true);
		$('#gcreatebtn').text("Please wait...");
		$('#gcreatebtn').addClass('loadingbtn');
		
		$.ajax({
		      type: "POST",			     
		      url: ECP.getBase()+"/guestsignup", 
		      data: {'password': passwordval, 'bsubscribe': bsubscribe},
			  dataType: 'JSON',
		      success: function(responseData) {	  
			  $('#gcreatebtn').prop('disabled',false);
			  $('#gcreatebtn').text("Create Account");
			  $('#gcreatebtn').removeClass();
				if(responseData['status'] == 1){
					$('.guestsignupform-div').hide();
					$('.guestsignupthankyou-div').show();
					if (bsubscribe == 1) {
						$('.smsg').show();
					} else {
						$('.smsg1').show();
					}
   
					$('.dnt-miss-out-text').addClass('hiddendivres'); // hide the div on mobile devices
				}else{
					$('.guestsignupform-div').show();
					$('.guestsignupthankyou-div').hide();
                    /* CI-4785 */ /* CI-4825 */	
                    document.querySelector('#gsignupmsg').innerHTML = DOMPurify.sanitize(responseData['data']);
                    /* CI-4785 */ /* CI-4825 */
				}
				return true;
		     }
	    }); 
   
		return false;
	})
	/*End EPL-8434*/
	
	/*EPL-8567*/
	$('#newsletterSubscriptionform').submit(function(e){
		e.preventDefault();
		var bsubscribe = 1;
		if ($("#bsubscribe").is(":checked") == false) {
            /* CI-4785 */	
            document.querySelector('#nl-msg').innerHTML = "<span id='gpassword-error' class='error loginEmailError' style='display:block'>Sorry, you need to tick the checkbox before receiving our latest offers.</span>";
            /* CI-4785 */
			bsubscribe = 0;
			return false;
		}
		
		$('#gcreatebtn').prop('disabled',true);
		$('#gcreatebtn').text("Please wait...");
		$('#gcreatebtn').addClass('loadingbtn');
		
		$.ajax({
		      type: "POST",			     
		      url: ECP.getBase()+"/secure/signuptonewsletter", 
		      data: {'bsubscribe': bsubscribe},
			  dataType: 'JSON',
		      success: function(responseData) {
				$('#gcreatebtn').prop('disabled',false);
				$('#gcreatebtn').text("Create Account");
				$('#gcreatebtn').removeClass();
				if(responseData['status'] == 1){
					$('.guestsignupform-div').hide();
					$('.guestsignupthankyou-div').show();
					$('.dnt-miss-out-text').addClass('hiddendivres'); // hide the div on mobile devices
				}else{
					$('.guestsignupform-div').show();
					$('.guestsignupthankyou-div').hide();
                    /* CI-4785 */ /* CI-4825 */	
                    document.querySelector('#gsignupmsg').innerHTML = DOMPurify.sanitize(responseData['data']);
                    /* CI-4785 */ /* CI-4825 */
				}
				return true;
		     }
	    }); 
		
		return false;
	})
	/*End EPL-8567*/
	// EPL-11228
	$('#forgot_password_popup #email').keydown(function(event){
		return event.keyCode != 32 ? true: false ;
	});
	// EPL-11228
	
})(jQuery);

/* EPL-6561 */
function getUrlParameters() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
/* End EPL-6561 */

function getUrlParams(e, t) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var o = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
    return null === o ? "" : decodeURIComponent(o[1].replace(/\+/g, " "))
}

function updateUrlParameters(e, t, o) {
    var r = new RegExp("([?&])" + t + "=.*?(&|$)", "i"),
        s = -1 !== e.indexOf("?") ? "&" : "?";
    return e.match(r) ? e.replace(r, "$1" + t + "=" + o + "$2") : e + s + t + "=" + o
}

// EPL-6561
function removeURLParameter(url, parameter) {
    //prefer to use l.search if you have a location/link object
    var urlparts= url.split('?');   
    if (urlparts.length>=2) {

        var prefix= encodeURIComponent(parameter)+'=';
        var pars= urlparts[1].split(/[&;]/g);

        //reverse iteration as may be destructive
        for (var i= pars.length; i-- > 0;) {    
            //idiom for string.startsWith
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {  
                pars.splice(i, 1);
            }
        }

        url= urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : "");
        return url;
    } else {
        return url;
    }
}


function getCarriagesOptions() {
    //CI-3005
    var e="";
    var t="";
    var o="";
    var deliveryoption= $('.delivery-method').find('.active').children('input').val();
    
   
    if(deliveryoption!='' && deliveryoption=='homedelivery'){
        // e = $('.ukregionsdropdown').find('#scountry').val();
        e = $(".checkout-form #scountry").val();
        t = $("option:selected", ".checkout-form #scountry").attr("international")
        // o =$('.ukregionsdropdown').find('#spostcode').val();
        o = $(".checkout-form #spostcode").val();
    } else if(deliveryoption!='' && deliveryoption=='internationaldelivery'){
        // e = $('.ukregionsdropdown').find('#scountry').val();
		//FBA-PPC
		e = $('.internationaldropdown').find('#scountry').val();
		//FBA-PPC
// e = $(".checkout-form #scountry").val();
        t=1;
        // o =$('.ukregionsdropdown').find('#spostcode').val();
        o = $(".checkout-form #spostcode").val();
    }
    //CI-3005


   
    
   


    if ("" != e && "1" == t || "777" == e && "" != o || "777" == e && "" == o || "" != e && "777" != e && "0" == t) {
            if (window.ECP.__loadervisible) {
                /* CI-4785 */	
                document.querySelector('.billing-col.delivery-option').innerHTML = '<div  class="" style=" left:0; top:0; bottom:0; right:0; background:#233f92; opacity:0.8; height:100%; filter:alpha(opacity=80); z-index:9999999; margin-left:0px; text-align:center;"><img  style="margin-top:20%;margin-bottom:20%;" width="100" src="assets/img/puff.svg" alt="Loading"/></div>';
                $('.billing-col.delivery-option').fadeIn();
                /* CI-4785 */
            }
            $("#deliveryError").hide(), $("#spostcode").attr("disabled", "disabled");
            var r = $("#postedcarriagecode").val();
            $(".delivery-overlay").show(), $.ajax({
                type: "POST",
                url: ECP.getBase() + "/secure/services/getBfpoStatus",
                data: {
                    postcode: o
                },
                success: function(s) {
                    if ($(window).width() > 768) i = $(".select-country fieldset div.bfpomsgdiv");
                    else var i = $(".address-field fieldset div.bfpomsgdiv");
                    "N/A" != s.result ? "invalid" == s.result ? (i.addClass("bfpomsgdiv bfpo-info semibold"), i.html(window.messages.bfpo.error.invalidproduct)) : (i.addClass("bfpomsgdiv bfpo-info"), i.html("<strong>" + window.messages.bfpo.error.validproduct.heading + "</strong>"), i.append(window.messages.bfpo.error.validproduct.msg)) : (i.text(""), i.removeClass("bfpo-info")), $.ajax({
                        type: "POST",
                        url: ECP.getBase() + "/secure/services/getCarriages",
                        data: {
                            countryVal: e,
                            international: t,
                            postcodeVal: o,
                            postedcarriagecode: r
                        },
                        success: function(e) {
                            	/* CI-4825 */
							e = DOMPurify.sanitize(e, {ADD_ATTR: ['onclick','charge','description']});
							/* CI-4825 */
                            if (!$("#clickCollect").is(":checked")) {
                                /* CI-4785 */	
                                $(".billing-col.delivery-option").show(), $(".billing-col.delivery-msg").hide();
                                document.querySelector('.billing-col.delivery-option').innerHTML = e;
                                $("#hdsteps3").show();
                                /* CI-4785 */
                                if ($('.billing-col.delivery-option .nodeliveryOptions').length < 1) {
                                    $("#hdstep4n5").show();
                                } else {
                                    $("#hdstep4n5").hide();
                                }
                                $(".checkout.delivery-option .delivery-table .delivery-data input").click(function() {
                                    this.checked ? ($(".checkout.delivery-option .delivery-table .delivery-data").removeClass("active"), $(this).parent(".delivery-data").addClass("active")) : $(".checkout.delivery-option .delivery-table .delivery-data").removeClass("active")
                                    /** CI-6518 */
                                    addShippingInfoGa4Tag();
                                    /** CI-6518 */
                                });
                                var t = $("#deliveryOptionHidden").val();
                                t && $("#slot" + t).attr("checked", "checked");
                                var o = $(".delivery-data input[type='radio']:checked");
                                o.length > 0 && (selectedChargeId = o.attr("id"), updateDeliveryAmounts(selectedChargeId)), $("#spostcode").removeAttr("disabled"), $(".delivery-overlay").hide()
                            }
                            popoverDeleivery();
                        }
                    })
                }
            })
        }
    }

    function validateEmail(e) {
        /* DCX-4059 Email validation acc. to auth0 */
        // return e = e.trim(), !!/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,7}$/.test(e)
        return e = e.trim(), !!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
    }

    function validateMultipleEmail(e, t) {
        if (t = t || ",", "" != e)
            for (var o = e.split(t), r = 0; r < o.length; r++)
                if ("" != o[r] && !validateEmail($.trim(o[r]))) return !1;
        return !0
    }

    function updateDeliveryAmounts(e) {
        var t = $("#" + e).attr("description"),
            o = $("#" + e).val(),
            r = $("#" + e).attr("charge"),
            s = ($("#currencyIconConatiner").text(), document.getElementById("shippingAmount")),
            i = (document.getElementById("shippingAmountConatiner"), document.getElementById("basketDeliveryAmountDesc")),
            a = (document.getElementById("basketDeliveryDescription"), document.getElementById("totalAmountPayable")),
            n = parseFloat(a.getAttribute("basketprice")),
            l = $("#totalAmountPayable").data("position"),
            d = $("#totalAmountPayable").data("symbol"),
            c = shippingcharges = deliveryAmount = deliveryDesc = shippingcharges = amtforpaypalinterest = "";
            /* DCX-4830 */
            
            //EPL-16333
            var shippinglable = $('#shippinglabel_lat').val();
           
       //EPL-15629		
        n -= 0, "INT_DELIVERY" == o ? (r > 0 ? shippingcharges = deliveryAmount = l > 0 ? r + d : d + r : (deliveryAmount = "TBC", shippingcharges = "0.00"), deliveryDesc = "(" + t + ")") : 0 == r ? (deliveryAmount = "FREE", shippingcharges = "0.00", deliveryDesc = "(" + t + ")") : (shippingcharges = deliveryAmount = l > 0 ? r + d : d + r, deliveryDesc = "(" + t + ")"), c = l > 0 ? currencyFormatted(+n + +r) + d : d + currencyFormatted(+n + +r), a.innerHTML = c, s.innerHTML = deliveryAmount, ($("#totalprice").html(c), $(".summarytotalprice").html(c)), $("#shippingchrges").length > 0 && ($("#shippingchrges").html(shippingcharges), $("#shipdesc").html(deliveryDesc))
    

        /* DCX-4830 */
		amtforpaypalinterest = currencyFormatted(+n + +r);	
		if(amtforpaypalinterest >= 30){
			amtforpaypalinterest = amtforpaypalinterest / 3;
			amtforpaypalinterest = amtforpaypalinterest.toFixed(2);	
			if($('.paypal-interest-free-price-less').length > 0){
				$('.paypal-interest-free-price-less').html('Pay by PayPal (or Pay in 3 interest-free payments of '+d+amtforpaypalinterest+')');
			}else{				
				$('#paypal-interest-free-price').html('<b>'+amtforpaypalinterest+'</b>');
			}	
		}else{
			if($('.paypal-interest-free-price-less').length > 0){
				
				$('.paypal-interest-free-price-less').html('Pay by PayPal (or Pay in 3 interest-free payments for purchases '+d+'30 - '+d+'2000)');
			}
		}
		/* DCX-4830 */

        /*EPL-16333*/
        var shippinglable = $('#shippinglabel_lat').val();
        /*if (r == $('#upliftvalue').val()){*/
        //EPL-16511-fix

        //P1 22nd sept
        var delvrymsgstat = $("#" + e).attr("data-deliverymsgstat");
        //P1 22nd sept
        
        if (delvrymsgstat==1){
            
            //deliveryDesc +=' and excluding delivery surcharges';
            $('#shippinglabel_data').text("Shipping & handling charge inc. specialist delivery charges.");
            $('#basketDeliveryDescription,#basketDeliveryAmountDesc').text(" ");

        }else{
            $('#shippinglabel_data').text(shippinglable);
        }
        /*EPL-16333*/
        
         //EPL-15629
		//One page checkout CI-3212 + 3214 
		if($('#totalprice').length > 0){
            $('#totalpayableamount').val(currencyFormatted(+n + +r));  
        }

    }

    function currencyFormatted(e) {
        var t = parseFloat(e),
            o = "";
        isNaN(t) && (t = 0), t < 0 && (o = "-"), t = Math.abs(t), t = parseInt(100 * (t + .005)), t /= 100;
        var r = new String(t);
        return r.indexOf(".") < 0 && (r += ".00"), r.indexOf(".") == r.length - 2 && (r += "0"), r = o + r
    }

    function capitalizeFirstLetter(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
/*CI-3005*/
    function clearAddress(e) {
		if($("#registrationAfdDiv #address").length !=undefined ||  $("#registrationAfdDiv #address").length ==1){
			$("#registrationAfdDiv #address > option:eq(0)").prop('selected', true);
		}

        "s" == e ? $("#shippingAddress #address > option:eq(0)").prop("selected", !0) : $("#billingAddress #address > option:eq(0)").prop("selected", !0), $("#" + e + "address1").val(""), $("#" + e + "address2").val(""), $("#" + e + "town").val(""), $("#" + e + "county").val(""), $("#" + e + "postcode").val("")
    }
/*CI-3005*/
    function changeAddressPCA(e, t, o) {
        var r = e.value,
            s = $(e).children("#" + r),
            i = $(s).attr("addresstype"),
            a = $(s).attr("containerid"),
            n = $(s).attr("postcode"),
            l = $("#country").val();
        if ("" != a) {
            if ("BuildingNumber" == i) return $.ajax({
                type: "POST",
                /* CI-4825 */
                url: checkRedirectURL(ECP.getBase() + "/secure/services/findAddressLookup"),
                /* CI-4825 */
                data: {
                    postcode: n,
                    country: l,
                    containerid: a
                },
                success: function(t) {
                    /* CI-4825 */
                    t = DOMPurify.sanitize(t, {ADD_ATTR: ['onchange','containerid','addresstype','postcode']});
					/* CI-4825 */
                    addressDropdown = jQuery(t).find("#selectInner").html(), $(e).parents("fieldset").find(".secDropDown").remove(), $('<label for="select" class="secDropDown"></label><span class="outer-select secDropDown">' + addressDropdown + "</span>").insertAfter($(e).parents(".outer-select"))
                }
            }), !1;
            $(e).parents("span.outer-select").addClass("wait"), $(e).attr("disabled", !0);
            var d = e.parentNode.parentNode.id;
            if ("undefined" != t && void 0 != t || (t = ""), "shippingAddress" == d) var c = document.getElementById(t + "saddress1"),
                p = document.getElementById(t + "saddress2"),
                u = document.getElementById(t + "stown"),
                m = document.getElementById(t + "scounty"),
                f = document.getElementById(t + "spostcode");
            else var c = document.getElementById(t + "address1"),
                p = document.getElementById(t + "address2"),
                u = document.getElementById(t + "town"),
                m = document.getElementById(t + "county"),
                f = document.getElementById(t + "postcode");
            $.ajax({
                type: "POST",
                url: ECP.getBase() + "/secure/services/retrieveAddressLookup",
                data: {
                    id: a
                },
                success: function(t, o, r) {
                    if (t.result.postcode) {
                        if (0 == $(e).parents("span").hasClass("secDropDown") && $(e).parents("fieldset").find(".secDropDown").remove(), c.value = t.result.address1, p.value = t.result.address2, u.value = t.result.address3, m.value = t.result.address4, f.value = t.result.postcode, "shippingAddress" == d) {
                            //CI-3005
                            // var s = $(".checkout-form #spostcode").val();
                            // getCarriagesOptions($(".checkout-form #scountry").val(), $("option:selected", ".checkout-form #scountry").attr("international"), s)
                            getCarriagesOptions()
                            //CI-3005
                        }
                    } else c.value = "", p.value = "", u.value = "", m.value = "", f.value = "";
                    $(e).parents("span.outer-select").removeClass("wait"), $(e).attr("disabled", !1)
                }
            })
        }
    }

    function changeAddress(e, t, o) {
        var r = t + e.value,
            s = e.parentNode.parentNode.id,
            i = $(e).children("#" + r),
            a = document.getElementById("updateButton"),
            n = document.getElementById("deleteButton");
        if ("undefined" != t && void 0 != t || (t = ""), "shippingAddress" == s) var l = document.getElementById(t + "saddress1"),
            d = document.getElementById(t + "saddress2"),
            c = document.getElementById(t + "stown"),
            p = document.getElementById(t + "scounty"),
            u = document.getElementById(t + "spostcode");
        else var l = document.getElementById(t + "address1"),
            d = document.getElementById(t + "address2"),
            c = document.getElementById(t + "town"),
            p = document.getElementById(t + "county"),
            u = document.getElementById(t + "postcode");
        var m = document.getElementById(t + "internalId"),
            f = document.getElementById(t + "contactName");
        m && (m.value = $(i).attr("internalId")), f && (f.value = $(i).attr("contactName"));
        var h = $(i).attr("postcode");
        if ("AFD" == o) $.ajax({
            type: "POST",
            url: ECP.getBase() + "/secure/services/getAFDAddressesModeSelect",
            data: {
                postcode: h
            },
            success: function(e) {
                if ("-1" != e.indexOf("|", "6")) {
                    var t = (e = e.replace('<?xml version="1.0"?>', "")).split("|");
                    if ("" == $.trim(t[0]) ? (l.value = t[1], d.value = "") : (l.value = t[0], d.value = t[1]), c.value = t[2], p.value = t[3], u.value = t[4], "shippingAddress" == s) {
                        //CI-3005
                        // var o = $(".checkout-form #spostcode").val();
                        // getCarriagesOptions($(".checkout-form #scountry").val(), $("option:selected", ".checkout-form #scountry").attr("international"), o)
                        getCarriagesOptions()                        
                        //CI-3005
                    }
                } else l.value = "", d.value = "", c.value = "", p.value = "", u.value = ""
            }
        });
        else if ("MATCHCODE" == o) {
            var g = encodeURIComponent($(e).parent(".outer-select").find("#searchstatus").val()),
                v = e.value;
            $.ajax({
                type: "POST",
                url: ECP.getBase() + "/secure/services/getSelectedAddressDet",
                data: {
                    postcode: $(e).parents(".outer-select").find("#hdpostcode").val(),
                    searchstatus: g,
                    listitem: v
                },
                success: function(t, o, r) {
                    /* CI-5475 */
                    t = DOMPurify.sanitize(t, {ADD_ATTR: ['onchange','containerid','addresstype','postcode']});
					/* CI-5475 */
                    if (r.getResponseHeader("content-type").indexOf("text/html") >= 0) addressDropdown = jQuery(t).find("#selectInner").html(), $(e).parents("fieldset").find(".secDropDown").remove(), $('<label for="select" class="secDropDown"></label><span class="outer-select secDropDown">' + addressDropdown + "</span>").insertAfter($(e).parents(".outer-select"));
                    else if (t.result.address1) {
                        if (l.value = t.result.address1, d.value = t.result.address2, c.value = t.result.address3, p.value = t.result.address4, t.result.postcode) {
                            if (!i) var i = $(e).parents(".outer-select").find("#hdpostcode").val();
                            u.value = i.toUpperCase()
                        }
                        if ("shippingAddress" == s) {
                            var a = $(".checkout-form #spostcode").val();
                            //CI-3005
                            // getCarriagesOptions($(".checkout-form #scountry").val(), $("option:selected", ".checkout-form #scountry").attr("international"), a)
                            getCarriagesOptions()
                            //CI-3005
                        }
                    } else l.value = "", d.value = "", c.value = "", p.value = "", u.value = ""
                }
            })
        } else if ("0" == $(i).attr("internalId") ? a && (a.style.display = "none", n.style.display = "none") : a && (a.style.display = "block", "-1" == $(i).attr("internalId") ? n.style.display = "none" : n.style.display = "block"), l.value = $(i).attr("address1"), d.value = $(i).attr("address2"), c.value = $(i).attr("town"), p.value = $(i).attr("county"), u.value = $(i).attr("postcode"), "shippingAddress" == s) {
            
            //CI-3005
            // var w = $(".checkout-form #spostcode").val();
            // getCarriagesOptions($(".checkout-form #scountry").val(), $(i).attr("international"), w)
            getCarriagesOptions()
            //CI-3005
        }
    }
            // CI-3005	

    function changeCountry(e) {
        // 0 == $("option:selected", e).attr("international") ? 
        var international = $('option:selected', e).attr('international');

        var selectedCountry = $(e).val();

        if(international == 0 || selectedCountry=='780' ){
            $(e).parents('fieldset').next('fieldset').find('input').val('');
            $(e).parents('fieldset').next('fieldset').show();
        }else{
				$(e).parents('fieldset').next('fieldset').hide();
                $(e).parents('fieldset').next('fieldset').next().hide();
                $("#registrationAfdDiv").hide();
                $("#findPostcode, #address1, #address2, #town, #county, #postcode").val("");
            
           
        }
            // CI-3005	


        // ($(e).parents("fieldset").next("fieldset").find("input").val(""),
        //  $(e).parents("fieldset").next("fieldset").show()) : 
        
        // ($(e).parents("fieldset").next("fieldset").hide(),
        //  $(e).parents("fieldset").next("fieldset").next().hide()), 
        //  $("#registrationAfdDiv").hide(), $("#findPostcode, #address1, #address2, #town, #county, #postcode").val("")
    }

    function checkADSFilter(e) {
        
    }

    function focusChangeStore() {
        return document.getElementById("clickncollectdetails").style.display = "block", $(".checkout.delivery-detail .loc-post-field #changecncpostcode").focus(), !1
    }

    function slideProducts() {
        $("li.productbrandslisting").each(function() {
            $(this).find(".brand-list  li").removeClass("active"), $(this).find('.brand-list  li[brand="applied"]').eq(0).addClass("active"), 0 == $(this).find('.brand-list  li[brand="applied"]').length && $(this).find('.brand-list  li[position="applied"]').eq(0).addClass("active"), $(this).find(".brand-list  .active").trigger("click")
        }), 0 == $(".product_brand_detail:visible").length && ECP.alert("", window.messages.refine.error.noProducts)
    }

    function hideEmptyProductDiv() {
        $("li.productbrandslisting").each(function() {
            0 == $(this).find(".product-content:visible").length && $(this).hide()
        })
    }

    function showFilterCount() {
        var e = 0,
            t = 0;
        if (0 != $("#filterform").length) {
            $("#filterform select option:selected").each(function() {
                0 != $(this).val() && e++
            }), $("#filterbrandform input:checked").each(function() {
                "" != $.trim($(this).val()) && t++
            });
            var o = e + t;
            /* CI-4785 */ /* CI-4825 */
            o = parseInt(o);	
            /* CI-4825 */
            if($('#selectioncounter').length > 0){
            document.querySelector('#selectioncounter').innerHTML = o;
            }
            /* CI-4785 */
        }
    }

    function searchKeyword(e) {
        return "" != $(e).parent(".searchFormCont").find('input[name="search"]').val() || (ECP.alert("", window.messages.search.error.required), !1)
    }

    function setCookie(e, t, o) {
        var r = new Date;
        r.setTime(r.getTime() + 24 * o * 60 * 60 * 1e3);
        var s = "expires=" + r.toUTCString();
        document.cookie = e + "=" + t + "; " + s
    }

    function getCookie(e) {
        for (var t = e + "=", o = document.cookie.split(";"), r = 0; r < o.length; r++) {
            for (var s = o[r];
                " " == s.charAt(0);) s = s.substring(1);
            if (0 == s.indexOf(t)) return s.substring(t.length, s.length)
        }
        return ""
    }

    function deleteCookie(e) {
        /* CI-4825 */
        document.cookie = e + "=;expires=Wed; 01 Jan 1970";
        /* CI-4825 */
    }
/*epl-5157*/
function updatePagination(){
	var totalPages 			= $('#paginationData').data('totalpages');
	var totalItems 			= $('#paginationData').data('totalitems');
	var itemsPerPage 		= $('#paginationData').data('itemsperpage');
	var items 				= (totalItems > itemsPerPage) ? itemsPerPage : totalItems;
	if(items > 0){
		$('.rightcol3bo .list-refine').css('visibility', 'visible');
	} else{
		$('.rightcol3bo .list-refine').css('visibility', 'hidden');
	}
	
	var pageDiv 			= $('.o3b-section .current-page');
	if(totalPages > 1){
		$('.o3b-section .next').addClass('active');
	} else{
		$('.o3b-section .next').removeClass('active');
	}

	$('.o3b-section .page-result span').text(items);
	$('.o3b-section .total-pages').text(totalPages);
	$('.o3b-section .category-product-count').text(totalItems);
	pageDiv.data('totalpages', totalPages);
	var getWidth  = $(window).width();
	if(getWidth >= 768){
	  	scrollTo('.rightcol3bo');
	}
	 
}

function scrollTo(div){
	$('html, body').animate({
        'scrollTop' : $(div).position().top
    });
}

function clearAllFilters(){
	$('#selectioncounter').text(0);
	$('.filterCount').text(0);
	$(".filter-box input:checked").each(function(){
		$(this).attr('checked',false);
	});
	if($('#filtervehiclespec3bo select').length > 0){
	 
		$("#filtervehiclespec3bo select option").each(function(){
			$(this).prop("selected", false);
		});
		$('#filtervehiclespec select:first').trigger('change');
	}
}

function ajaxProductsPaginations(page, callback, currentElement){
	callback 				= callback || '';
	currentElement 			= currentElement || '';
	$('.wait-box').show();
	$('.filtercheckboxes').attr('disabled', 'disabled');
	var filters 		= getSelectedFilters();
	if($('.page-list .showall').hasClass('active')){
		var showall 			= true;
	} else{
		var showall 			= '';
	}
	
	var currentFilterBlock			= '';
	if(currentElement){
		currentFilterBlock 	= getCurrentSelectedFilterBlock(currentElement);
	}

	$.ajax({
	      type: "POST",			     
	      url: window.location.href, 
	      data: {'page': page, filters: filters, currentFilterBlock:currentFilterBlock, showall: showall},
	      success: function(data) {	
                /* CI-4785 */	
                $('.section3bo').hide();
                 if($('.section3bo').length > 0){
                     /*  CI-5475  */    	 
					data = DOMPurify.sanitize(data, {ADD_ATTR: ['onclick','charge','description']});
					/*  CI-5475  */
                    document.querySelector('.section3bo').innerHTML = data;
                 }
                $('.section3bo').fadeIn(1000, function(){
					ipadZoomDisable();
			  });
                /* CI-4785 */
			  
	    	  $('.filtercheckboxes').removeAttr('disabled');
	    	  $('.wait-box').hide();
	    	  $('.zoom').zoom();
			  popoverDiv();
			  var getWidth  = $(window).width();
			  if(getWidth >= 768){
	    		  $('.custom-select').niceSelect();
	    	  }
			  
	    	  if(callback != ''){
	    	  	callback(data);
	      	}
	      }
  });
}
function ajaxProductsPagination(page, callback, currentElement){
	callback 				= callback || '';
	currentElement 			= currentElement || '';
/*** EPL-4710 EPL-9813 EPL-9823 */
	var removePricefilters=true;
	$('.wait-box').show();
	$('.filtercheckboxes').attr('disabled', 'disabled');
    if (currentElement != '') {
		
		if(currentElement.hasClass('ui-slider')){
			removePricefilters=false;
		}
	
        if(!currentElement.is(':checked')){
            $('.filtercheckboxes').each(function(){
                var currentObj = $(this);
                if (currentObj.data('value') === currentElement.data('value')){
                    currentObj.prop('checked',false);
                }
            });
        }
    } else {
        $('.filtercheckboxes').each(function () {
            var currentObj = $(this);
            currentObj.prop('checked', false);
        });
    }
/*** EPL-4710 EPL-9813 EPL-9823 */
	var filters 		= getSelectedFilters();
	if($('.page-list .showall').hasClass('active')){
		var showall 			= true;
	} else{
		var showall 			= '';
	}
	
	var currentFilterBlock			= '';
	if(currentElement){
		currentFilterBlock 	= getCurrentSelectedFilterBlock(currentElement);
	}
/*** EPL-4710 EPL-9813 EPL-9823 */
 
	if(removePricefilters==true){
		 filters = JSON.parse(filters);
		jQuery.each(filters, function(i, val) {
			if(i == "min"){
			   delete filters[i];
		   }
		   if(i == "max"){
			   delete filters[i];
		   }
		 })
		filters = JSON.stringify(filters);
	}

	$.ajax({
	      type: "POST",			     
	      url: window.location.href, 
	      data: {'page': page, filters: filters, currentFilterBlock:currentFilterBlock, showall: showall, removePricefilters: removePricefilters},
	      success: function(data) {	
		  data = jQuery.parseJSON( data );
		    // epl-4710
			if($(window).width() < 768  && (data.productcounts!=undefined &&  data.productcounts!='' && data.productcounts==0)){
				ECP.alert('Note', "<img src='" + cdnUrl + "/ecp/images/warning-icon.png' class='warning-icon'> "+ window.messages.pricerefine.error.noProducts);
			} 
			// epl-4710
		  var html = data.html;
                var priceFilterSel = data.priceFilterSel;	
				var slidershow=false;
			 
				
				if (data.hasOwnProperty('db') && data.hasOwnProperty('sel')) {
					slidershow=true;
				}
				/* CI-1468 */
           	if (priceFilterSel && priceFilterSel.hasOwnProperty('db')) {
				/* CI-1468 */
                    dbmin = priceFilterSel.db.min;
                    dbmax = priceFilterSel.db.max;
				}
			if(slidershow==true){
				if(typeof(data.priceFilterSel.sel.min) != "undefined" && data.priceFilterSel.sel.min !== null) {
					selmin = parseInt(data.priceFilterSel.sel.min);
				}
				if(typeof(data.priceFilterSel.sel.max) != "undefined" && data.priceFilterSel.sel.max !== null) {
 					selmax = parseInt(data.priceFilterSel.sel.max);
				} 
				if( data.priceFilterRemUrl ==true ){		
					if((selmin>=dbmin && selmin<=dbmax) && (selmax>=dbmin && selmax<=dbmax ) ){
						 //do nothing
					} else {
						//update default amout
                        /* CI-4785 */	
                        if($('#amount').length > 0){
                        /* CI-5475 */
                            document.querySelector('#amount').innerHTML = "&#163;" + DOMPurify.sanitize(dbmin) +" - &#163;" + DOMPurify.sanitize(dbmax);
                        /* CI-5475 */
                        }
                        /* CI-4785 */
					}
					
					removepricefilters(true);
				}
			}
			/***epl-4710 */
            /* CI-4785 */	
            $('.section3bo').hide();
            if($('.section3bo').length > 0){
                /* CI-5475 */
				html = DOMPurify.sanitize(html, {ADD_ATTR: ['onchange','onclick']});
                /* CI-5475 */
                document.querySelector('.section3bo').innerHTML = html;
            }
            $('.section3bo').fadeIn(1000, function(){ipadZoomDisable(); });
            /* CI-4785 */
			  
	    	  $('.filtercheckboxes').removeAttr('disabled');
/*** EPL-4710 EPL-9813 EPL-9823 */
              loadpriceslider();
              if ( $(window).width() < 768  && $('.refine-mobile-btn').hasClass('open')==true) {
			 
                $('#category-filterss').css('display','block');
                }	
				if ( $(window).width() < 768  && $('.refine-mobile-btn').hasClass('open')==false) {
				$('.pricediv').css('display','none');
				}	
				  mobileevents();
/*** EPL-4710 EPL-9813 EPL-9823 */
	    	  $('.wait-box').hide();
	    	  $('.zoom').zoom();
			  popoverDiv();
			  var getWidth  = $(window).width();
			  if(getWidth >= 768){
	    		  $('.custom-select').niceSelect();
	    	  }
			  
	    	  if(callback != ''){
				/*** EPL-4710 EPL-9813 EPL-9823 */
	    	  	callback(html);
/*** EPL-4710 EPL-9813 EPL-9823 */
			  }

			  var brandChk 		= $('.brandselection').hasClass('active');
				if(brandChk){
					$('.brand-list').each(function(){
						$(this).find(':first').trigger('click');
					});
				}
			/* CI-1042 CI-1833*/
            bind3boCrousel();
            /* CI-1042 CI-1833*/
	      }
  });
}
function getSelectedFilters(){
	var filters = {};
	var checkedfiltercounter=0;
	$(".filter-box input:checked").each(function(){
		checkedfiltercounter++;
		var filter= $(this).attr('data-filtertype');
		var type = $(this).attr('data-type');
		var value = $(this).val();
		if(filter == 'attr'){	
			var id 		= $(this).data('attrid');
			if(typeof filters[filter]=='undefined'){
				filters[filter] 	= {};
				filters['attrtype']	= {};
			}
			if(typeof filters[filter][id] =='undefined'){
				filters[filter][id] 	= [];
				filters['attrtype'][id] 	= type;
			}
			/*** EPL-4710 EPL-9813 EPL-9823 */
			if (filters[filter][id].indexOf(value) === -1) {
               /* CI-4825 */
                filters[filter][id].push(DOMPurify.sanitize(value));
                /* CI-4825 */
            }
		/*** EPL-4710 EPL-9813 EPL-9823 */			
		} else{
			if(typeof filters[filter]=='undefined'){
				filters[filter] 	= [];
			}	
			if (filters[filter].indexOf($(this).val()) === -1) {
			filters[filter].push($(this).val());	
		}
		}
		
	});	
	
	var vehSpec 			= 'ManualSelectCarFilter';
	filters[vehSpec] 		= {};
	$(".filter-box select").each(function(){
		var value 		= $(this).val();
		if(value  != ''){
			checkedfiltercounter++;
			var subfilter = $(this).attr('name');
			if(typeof filters[vehSpec][subfilter] == 'undefined'){
				filters[vehSpec][subfilter] = '';
			}		
			filters[vehSpec][subfilter] = $(this).val();
		}
	});
	
        /* CI-4825 */
	var url 			= checkRedirectURL(window.location.pathname);
/* CI-4825 */
	/*** EPL-4710 EPL-9813 EPL-9823 */
 
	var pricefiltermin='min';
	var pricefiltermax='max';	
	if($('#min').val()!='' &&  ( typeof $('#min').val()!='undefined'  ) ){
		var min=$('#min').val();
		filters[pricefiltermin]=min;
	}
	if($('#max').val()!='' && typeof $('#max').val()!='undefined'   ){
		var max=$('#max').val();
		filters[pricefiltermax]=max;
	}
	/*** EPL-4710 EPL-9813 EPL-9823 */
	var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
	$.each(vars, function(k,v){
		if(k == 'page'){
			url = updateUrlParameters(url, 'page', v);
		}
		if(k == 'sort'){
			url = updateUrlParameters(url, 'sort', v);
		}
	});
	
/*** EPL-4710 EPL-9813 EPL-9823 */
var price='pricerange';
	var pricevalues='';
	$.each(filters, function(index, value){
		// epl-4710 
		
		if(index == 'min' && value != 'undefined' ){
			pricevalues=value;
		}
		if(index == 'max' && value != 'undefined'){
			pricevalues=pricevalues+'|'+value;
		}
		if(pricevalues!=''){
			url 			= updateUrlParameters(url, price, pricevalues);
		}
	/*** EPL-4710 EPL-9813 EPL-9823 */

		if(index == 'attr'){
			$.each(value, function(attrid, attrValArr){
				var label 		= $('.attrlabel-'+ attrid).text().replace(/ /g,"_");
				var values 		= '';
				$.each(attrValArr, function(valIndex, value){
					values 		+= value.replace(/ /g,"_") + '|';
				});
				values 			= values.substring(0, values.length-1);
				url 			= updateUrlParameters(url, label, values);
			});
		} else if(index == 'brand'){
		 	var label 			= 'Brands';
			var brandValues 	= '';
			$.each(value, function(brandIndex, brandValueAarr){
				brandValues 	+= brandValueAarr.replace(/ /g,"_") + '|';
			});
            brandValues 		= brandValues.substring(0, brandValues.length-1);

            // EPL-15590
            url = checkRedirectURL(url);
            // EPL-15590

			url 				= updateUrlParameters(url, label, brandValues);
		}/*CI-1042 CI-1833*/else if (index == 'component') {
            var label = 'Fitments';
            var brandValues = '';
            $.each(value, function (brandIndex, brandValueAarr) {
                brandValues += brandValueAarr.replace(/ /g, "_") + '|';
            });
            brandValues = brandValues.substring(0, brandValues.length - 1);
            url = updateUrlParameters(url, label, brandValues);
        } /*CI-1042 CI-1833*/ else if(index == 'ManualSelectCarFilter'){
			$.each(value, function(typendex, typeValue){
			url 	= updateUrlParameters(url, 'vsp' + typendex, typeValue);
			});
		}
	});
	/*var limit 		= getUrlParams(window.location.href, 'limit');
	if(limit > 0){
		url			= updateUrlParameters(url, 'limit', limit);
	}
	/*var sort 		= getUrlParams(window.location.href, 'sort');
	if(sort){
		url			= updateUrlParameters(url, 'sort', sort);
	}*/
	window.history.propertyIsEnumerable('', '', url);
	
	$('#selectioncounter').text(checkedfiltercounter);
	//$('.filterCount').html(checkedfiltercounter);
	return JSON.stringify(filters);
}
function getCurrentSelectedFilterBlock(currentElement){
	var filters = {};
	var currentFilterBlock 	= currentElement.closest('ul').find('.filtercheckboxes');
	var currentElementVal 	= currentElement.val();
	filters['current']		= {'filterType': currentElement.data('filtertype'), id: currentElement.data('attrid'), value: currentElement.val(), 'type': currentElement.attr('data-type')};
	filters['check']		= currentElement.is(':checked');
	filters['iscurrent']	= currentElement.hasClass('current-selected');
	return JSON.stringify(filters);
}
/*epl-5157*/
    //BT validation
function validateMyAccountForm(){	
	var isError = 0;

 
	var firstname  = $("input#firstname").val(); 
	var secondname = $("input#secondname").val(); 
	var address1 = $('input#address1').val();
	var address2 = $('input#address2').val();  

	var mobileno = $('input#mobileno').val();  
	var phoneno = $('input#phoneno').val();  
	  // Epl-16803
      var confirmpassword = $('input#confirmpassword').val(); 
      if (confirmpassword == '') {
          $('#CP').show().text("Please enter your password ");
          isError = isError + 1;	
      }
      //  Epl-16803
	if(firstname == '') {
		$('#FN').show().text("Please enter valid first name");
		isError = isError + 1;	
	}		
	if (firstname != '' && firstname.length>40) {
		$('#FN').show().text("Maximum length allowed 40 characters");
		isError = isError + 1	;
	} else if (firstname != '' &&  firstname.length <= 40 ) {			
	   $('#FN').hide().text("");
		isError = isError + 0	;
	}
	 
	if(secondname == '') {
		$('#LN').show().text("Please enter valid first name");
		isError = isError + 1;	
	}		
	if (secondname!='' &&  secondname.length>40) {
		$('#LN').show().text("Maximum length allowed 40 characters");
		isError = isError + 1	;
	} else if (secondname!='' && secondname.length <= 40 ) {			
	   $('#LN').hide().text("");
		isError = isError + 0	;
	}
	 

/**** Start: EPL-16704 *****/

	// Address1
	var address1 = $("#address1").val();
	if( (address1 == '' || address1.trim().length == 0) && $("#address1").is(':visible')  ) {
		$('.address1_error').show().text("Please enter valid address.");
		$("#address1").css('border','1px solid red');	
		isError = isError + 1;	
	}else{
		result = address_one_validation_account(address1,'address1');
		if(result ==1){
			isError = result + 1;	
		}else{
			isError = isError + 0;	
		}

	}

	// Address2
	var address2 = $("#address2").val();
	if(address2 != '' && address2.trim().length != 0 ) {
		result = address_one_validation_account(address2,'address2');
		if(result ==1){
			isError = result + 1;	
		}else{
			isError = isError + 0;	
	}
	}else{

		$('.address2_error').hide().text("");
		$("input[name='address2']").css('border','1px solid #e3e3e3'); 
		isError = isError + 0;
	} 
	

	// City
	var town = $('#town').val();
	if(town != '' && town.trim().length != 0 ) {
		result = address_one_validation_account(town,'town');
		if(result ==1){
			isError = result + 1;	
		}else{
			isError = isError + 0;	
		}
	}else{

		$('.town_error').hide().text("");
		$('#town').css('border','1px solid #e3e3e3'); 
		isError = isError + 0;
	}

	
	//County
	var county = $('#county').val();

	if(county != '' && county.trim().length != 0 ) {
		result = address_one_validation_account(county,'county');
		if(result ==1){
			isError = result + 1;	
		}else{
		isError = isError + 0;
	} 
	}else{

		$('.county_error').hide().text("");
		$('#county').css('border','1px solid #e3e3e3'); 
		isError = isError + 0;
	}
	/**** End: EPL-16704 *****/
	
	//BT Validation
    if(mobileno!=''){
        var regex = new RegExp(/^[0-9]+$/);
        if(!mobileno.match(regex)) {
            $("#mobileno").siblings('.error').show().text("Please enter valid mobile no.");
            isError = isError + 1;
        }	
        if(mobileno.match(regex) && mobileno.length < 10) { 
            $("#mobileno").siblings('.error').show().text("Mobile no. must contain minimum 10 characters.");
            isError = isError + 1;
        }
        if(mobileno.match(regex) && mobileno.length > 15) { 
            $("#mobileno").siblings('.error').show().text("Mobile no. must contain maximum 15 characters.");
            isError = isError + 1;
        }
    }
    if(phoneno!=''){
        var regex = new RegExp(/^[0-9]+$/);
        if(!phoneno.match(regex)) {
            $("#phoneno").siblings('.error').show().text("Please enter valid phoneno.");
            isError = isError + 1;
        }	
        if(phoneno.match(regex) && phoneno.length < 10) { 
            $("#phoneno").siblings('.error').show().text("Phoneno must contain minimum 10 characters.");
            isError = isError + 1;
        }
        if(phoneno.match(regex) && phoneno.length > 20) { 
            $("#phoneno").siblings('.error').show().text("Phoneno must contain maximum 20 characters.");
            isError = isError + 1;
        }

    }
    //BT Validation
	
	
	var attr = $('#email').attr('readonly');	
	if (typeof attr == typeof undefined) {
		var savedemail = $("#savedemail").val();	
		var email = $("#email").val();
		var emailError = $('.registerEmailError').css('display');
		var cemail = $("#cemail").val();
		if (emailError == 'block') {
			isError = isError + 1;
		} else {	
			var $errorDiv = $(".login-info-form .registerEmailError");
			if(savedemail == email){
				$errorDiv.text(messages.editprofile.changeEmail);
				$errorDiv.show();
				isError = isError + 1;
			} else {
				$errorDiv.hide();
				if(cemail == ""){
					$("#CE").text(messages.editprofile.emptyConfirmEmailField);
					$("#CE").show();
					isError = isError + 1;
				} else {
					if(email == cemail) {
						isError = isError + 0;
					} else {
						$("#CE").text(messages.editprofile.notMatchedConfirmEmailField);
						$("#CE").show();
						isError = isError + 1;
					}
				}			
			}
		}
	} 
    
    // Start - EPL-16703 - Postcode Validation
	var postcodeVal = $( "#postcode" ).val();
	var firstCharPostCode = postcodeVal.charAt(0);
	var postStat = 0;
	var lettersForm = /^[0-9a-zA-Z]+$/;
	var validChar = /^[a-zA-Z0-9\s\-']*$/;
	var checkalphanu = 0;

	/*if(postcodeVal == "" || postcodeVal.trim().length == 0){
		$('#post_code_error').show().text("Please enter postcode");
		isError = isError + 1;
	}else{
		postStat = 1;
	}*/
	if(postcodeVal != "" && postcodeVal.trim().length != 0){
		postStat = 1;
	}
	var posterror =0;
	if(!firstCharPostCode.match(lettersForm) && postStat ==1 )
	{
		$('#post_code_error').show().text("Postal code must begin with a letter or number.");
		$('#postcode').css('border','1px solid red'); 
		isError = isError + 1;
		posterror =1;
	}

	if(postcodeVal.length < 4 && postStat ==1 )
	{
		$('#post_code_error').show().text("The minimum length allowed 4 characters.");
		$('#postcode').css('border','1px solid red'); 
		isError = isError + 1;
		posterror =1;
	}
	
	if(postcodeVal.length > 10 && postStat ==1 )
	{
		$('#post_code_error').show().text("The maximum length allowed 10 characters.");
		$('#postcode').css('border','1px solid red'); 
		isError = isError + 1;
		posterror =1;
	}
	
	if(!postcodeVal.match(validChar) && postStat ==1 )
	{
		$('#post_code_error').show().text("Postal code can only contain letters, numbers, spaces, and hyphens.");
		$('#postcode').css('border','1px solid red'); 
		checkalphanu = 1;
		isError = isError + 1;
		posterror =1;
	}
	
	if(postcodeVal.length == 10 && postStat ==1 && ( (postcodeVal.indexOf('-') == -1) && /\s/g.test(postcodeVal) == false) && checkalphanu ==0)
	{
		$('#post_code_error').show().text("Postal code must not contain more than 9 letters or number characters.");
		$('#postcode').css('border','1px solid red'); 
		isError = isError + 1;
		posterror =1;
	}
	
	if( (/\d/.test(postcodeVal) == false || /[a-zA-Z]/g.test(postcodeVal) == false)  &&  postStat ==1 )
	{
		$('#post_code_error').show().text("Postal code must contain letters and number");
		$('#postcode').css('border','1px solid red'); 
		isError = isError + 1;
		posterror =1;
	}
	
	if (posterror == 0 ) {
		$('#post_code_error').hide().text("");
		$('#postcode').css('border','1px solid #e3e3e3'); 
		isError = isError + 0;
	}	
    // End- EPL-16703 - Postcode Validation
    
	if (isError == 0 ) {
		return true;
	} 
	return false;
}
//BT Validation
    function enableUpdateEmail() {
        var e = $("#email"),
            t = e.attr("readonly"),
            o = $("#savedemail").val();
        e.removeClass("valid"), e.removeClass("invalid");
        var r = $(".login-info-form .registerEmailError");
        void 0 !== t && !1 !== t ? (e.removeAttr("readonly"), e.removeClass("greyout"), e.focus(), e.val(""), e.parent().find("label").text(messages.editprofile.editEmailLabel), $(".cemail-box").removeClass("disable"), $(".cemail-box").addClass("enable")) : (e.val(o), $("#cemail").val(""), $("#CE").hide(), r.hide(), e.parent().find("label").text(messages.editprofile.emailLabel), e.attr("readonly", "true"), e.addClass("greyout"), e.blur(), $(".cemail-box").removeClass("enable"), $(".cemail-box").addClass("disable"))
    }! function(e) {
        var t = !1,
            o = e(window).width();
        if (e(document).ajaxSend(function(e, t, o) {
                ECP.showloader()
            }), e(document).ajaxComplete(function(e, t, o) {
                ECP.loaderClose(), ECP.addCart()
                             
            }), e(document).ajaxError(function(e, t, o) {
                ECP.loaderClose()
            }), e("#brakeDiscWarning .modal-close").on("click", function() {
                e(".addtocartbtn").removeClass("wait")
            }), e("#scrollToTop").on("click", function() {
                return e("html, body").animate({
                    scrollTop: 0
                }, 600), !1
            }), e(document).on("change", "select#makeSelection", function() {
                e(this).parents("form").find("select").removeAttr("disabled"), e("select#engineSelection,select#yearSelection,select#fuelSelection").attr("disabled", "disabled");
                var t = e(this).val(),
                    o = jQuery.parseJSON(e("input[name=jsonmodels]").val()),
                    r = e("#modelSelection").find("option").get(0);
                e("select#modelSelection").find("option").remove(), e("select#modelSelection").append(r), r = e("#engineSelection").find("option").get(0), e("select#engineSelection").find("option").remove(), e("select#engineSelection").append(r), r = e("#yearSelection").find("option").get(0), e("select#yearSelection").find("option").remove(), e("select#yearSelection").append(r), r = e("#fuelSelection").find("option").get(0), e("select#fuelSelection").find("option").remove(), e("select#fuelSelection").append(r), e.each(o, function(o, r) {
                    r.make == t && e("select#modelSelection").append('<option  value="' + r.model + '">' + r.model + "</option>")
                });
                var s = e("select#modelSelection option");
                s.sort(function(e, t) {
                    return e = e.value, t = t.value, e - t
                }), e("select#modelSelection option:first-child").prop("selected", "selected")
            }), e(".tierseocontent > span").length > 0) {
            var r = e(".tierseocontent > span");
            (r[0].offsetHeight < r[0].scrollHeight || r[0].offsetWidth < r[0].scrollWidth) && e(".tierseocontent > .view-more").show()
        }
        if (e(document).on("change", "select#modelSelection", function() {
                e(this).parents("form").find("select").removeAttr("disabled"), e("select#yearSelection,select#fuelSelection").attr("disabled", "disabled");
                var t = e(this).val(),
                    o = e("select#makeSelection").val(),
                    r = jQuery.parseJSON(e("#jsonengines").val()),
                    s = e("#engineSelection").find("option").get(0);
                e("select#engineSelection").find("option").remove(), e("select#engineSelection").append(s), s = e("#yearSelection").find("option").get(0), e("select#yearSelection").find("option").remove(), e("select#yearSelection").append(s), s = e("#fuelSelection").find("option").get(0), e("select#fuelSelection").find("option").remove(), e("select#fuelSelection").append(s), e.each(r, function(r, s) {
                    s.make == o && s.model == t && e("select#engineSelection").append('<option value="' + s.engine + '">' + s.engine + "</option ")
                });
                var i = e("select#engineSelection option");
                i.sort(function(e, t) {
                    return e = e.value, t = t.value, e - t
                }), e("select#engineSelection option:first-child").prop("selected", "selected")
            }), e(document).on("change", "select#engineSelection", function() {
                e(this).parents("form").find("select").removeAttr("disabled"), e("select#fuelSelection").attr("disabled", "disabled");
                var t = e(this).val(),
                    o = e("select#modelSelection").val(),
                    r = e("select#makeSelection").val(),
                    s = jQuery.parseJSON(e("#jsonyears").val());
                i = e("#fuelSelection").find("option").get(0), e("select#fuelSelection").find("option").remove(), e("select#fuelSelection").append(i);
                var i = e("#yearSelection").find("option").get(0);
                e("select#yearSelection").find("option").remove(), e.each(s, function(s, i) {
                    i.make == r && i.model == o && i.engine == t && e("select#yearSelection").append('<option value="' + i.year + '">' + i.year + "</option ")
                });
                var a = e("select#yearSelection option");
                a.sort(function(e, t) {
                    return e = e.value, (t = t.value) - e
                }), e("select#yearSelection").prepend(i), e("select#yearSelection option:first-child").prop("selected", "selected")
            }), e(document).on("change", "select#yearSelection", function() {
                var t = e(this).val(),
                    o = e("select#modelSelection").val(),
                    r = e("select#makeSelection").val(),
                    t = e("select#engineSelection").val(),
                    s = e("select#yearSelection").val(),
                    i = jQuery.parseJSON(e("#jsonfuels").val()),
                    a = e("#fuelSelection").find("option").get(0);
                e("select#fuelSelection").find("option").remove(), e("select#fuelSelection").append(a), e.each(i, function(i, a) {
                    a.make == r && a.model == o && a.engine == t && a.year == s && (e("select#fuelSelection").append('<option value="' + a.fuel + '">' + a.fuel + "</option "), e("select#fuelSelection").removeAttr("disabled"))
                });
                var n = e("select#fuelSelection option");
                n.sort(function(e, t) {
                    return e = e.value, t = t.value, e - t
                }), e("select#fuelSelection option:first-child").prop("selected", "selected")
            }), ECP.addCart = function() {
                o >= 768 && (e(".cart-btn-outer").on("click", function(t) {
                    e(this).children(".cart-btn-dropdown").slideToggle(400), t.stopPropagation()
                }), e(document).click(function(t) {
                    "cart-btn-dropdown" == t.target.class || e(".cart-btn-dropdown").find(t.target).length || e(".cart-btn-dropdown").hide()
                }))
            }, o < 768) {
            if (e(".info-box").length > 0) {
                var s = e("<div>" + e(".info-box").html() + "</div>");
                s.find("img").addClass("warning-icon"), ECP.alert("", s.html())
            }
            1 == e(".vrmInp").prop("disabled") && e(".vrmInp").closest("span").on("click", function() {
                e("a.clearselection").trigger("click")
            })
        }
        if (e(document).on("click", ".product-listing-col .right-col .brand-list li", function() {
                if (t) return !0;
			  if($('#withoutgroup').val()==1){
					return true;  
	  			}
	  
	  // Added escapeSelector for EPl-5157 feedback by swathi
                var o = e(this),
                r = "." + o.data("productdetailclass").toString().escapeSelector();
                o.parents(".productbrandslisting").find(".product_brand_detail").not(r).slideUp(400), e(r).slideDown(400, function() {
                    t = !1
                }), o.parent(".brand-list").children("li").removeClass("active"), o.addClass("active");
                e(window).width()
            }), o < 768 && e("input[type='text']").on("keydown", function(t) {
                if (8 != t.keyCode && (maxlength = e(this).attr("maxlength"), this.value.length >= maxlength)) {
                    var o = e(this).attr("tabindex");
                    return e("[tabindex=" + o + "]").focus(), !1
                }
            }), e(".numeric").on("keyup", function(t) {
                e(this).val(e(this).val().replace(/[^0-9]/g, ""))
            }), e(".prdQty").on("blur", function() {
                e(this).val() < 1 && e(this).val(1)
            }), e("#zoom-image").on("show.bs.modal", function(t) {
                e(this).find("img").attr("src", "");
                var o = e(t.relatedTarget).find("img").attr("src");
                /* CI-4825 */
                o = DOMPurify.sanitize(o);
                /* CI-4825 */
                e(this).find("img").attr("src", o)
            }), e("#referFriend").on("show.bs.modal", function() {
                e(".success").text(""), e("#referForm .error").text(""), e("#referFriend input").val(""), e("#referFriend .referFormCont").show()
            }), e(".referFriendPop").on("click", function() {
                e("button.reg-btn").removeClass("wait"), e(".success").text(""), e("#referForm .error").text(""), e("#referFriend input").val(""), e("#referFriend button[type=submit]").prop("disabled", !1), e("#referFriend .referFormCont").show(), e("#referFriend").openModal()
            }), e("#referForm").submit(function() {
                var t = !1;
                if (e(this).find(".error").text(""), e(this).find(".error").show(), e(this).find(".required").each(function() {
                        "" == e.trim(e(this).val()) && (e(this).parent("fieldset").find(".error").text("This field is required."), t = !0)
                    }), 0 == t && (validateEmail(e.trim(e("#referEmail").val())) || (e("#referEmail").parent("fieldset").find(".error").text("Please enter valid email address."), t = !0), validateMultipleEmail(e("#referfriendEmail").val()) || (e("#referfriendEmail").parent("fieldset").find(".error").text("Please enter valid email address."), t = !0)), 0 == t) {
                    e(this).find("button[type=submit]").prop("disabled", !0), e(this).find("button[type=submit]").addClass("wait");
                    var o = e(this).serializeArray();
                    o.push({
                        name: "link",
                        value: window.location.href
                    }), e.ajax({
                        type: "POST",
                        url: ECP.getBase() + "/users/referFriend",
                        data: o,
                        success: function(t) {
                            if (t.hasOwnProperty("errors")) e.each(t.errors, function(t, o) {
                                if(o == 'emptyfield'){
                                    /* CI-4785 */	
                                    document.querySelector('#refer' + capitalizeFirstLetter(index) + 'Err').innerHTML = messages.referFriend.empty;
                                    /* CI-4785 */
                                }
                                  else if(o == 'invalidemail' || o == 'callback'){
                                      /* CI-4785 */	
                                    document.querySelector('#refer' + capitalizeFirstLetter(index) + 'Err').innerHTML = messages.referFriend.invalidEmail;
                                    /* CI-4785 */
                                  }
                            });
                            else if (t.hasOwnProperty("success") && 1 == t.success) {
                                e("#referFriend").closeModal();
                                var o = '<div class="popNotificationMessage success">' + messages.referFriend.success + "</div>";
                                ECP.alert("", o)
                            }
                        }
                    })
                }
                return !1
            }), e(".jtooltip:not(.disable)").jBox("Tooltip"), ECP.setConfig(settings), ECP.AdsLookup.loadMakers(function(t) {
                var o = e("select[name=make]"),
                    r = e(o).find("option").get(0);
                e(o).find("option").remove(), o.append(r), e.each(t.manufacturers, function(e, t) {
                    o.append('<option value="' + t.Id + '">' + t.Maker + "</option>")
                    /**adsv2-286 */
                }), e("select[name=model],select[name=year],select[name=engine],select[name=fuel],select[name=fuel-pdp]").attr("disabled", !0)
                    /**adsv2-286 */
            }), e("select[name=make]").on("change", function() {
                ECP.AdsLookup.__data.makestr = e(this).find("option:selected").text(), e("select[name=model] option").not("option:first").remove(), e("select[name=year] option").not("option:first").remove(), e("select[name=engine] option").not("option:first").remove(), e("select[name=fuel] option").not("option:first").remove(), ECP.AdsLookup.loadModel(this.value, function(t) {
						/*EPL-14549*/
						if(t.models=='service_down'){
							sendAdsErrorGaEvent("GetModels");
							adsdownalertbox();
							return false;
						}
						/*EPL-14549*/
					
                    var o = e("select[name=model]"),
                        r = e(o).find("option").get(0);
                    o.find("option").remove(), o.append(r), e.each(t.models, function(e, t) {
                        o.append('<option value="' + t.Id + '">' + t.Model + "</option>")
                    }), e("select[name=year],select[name=engine],select[name=fuel]").attr("disabled", !0), e("select[name=model]").removeAttr("disabled")
                })
            }), e("select[name=model]").on("change", function() {
                ECP.AdsLookup.__data.modelstr = e(this).find("option:selected").text();
                var t = e("select[name=year]"),
                    o = e(t).find("option").get(0);
                e("select[name=year] option").not("option:first").remove(), e("select[name=engine] option").not("option:first").remove(), e("select[name=fuel] option").not("option:first").remove(), ECP.AdsLookup.loadYear(this.value, function(r) {
					
							/*EPL-14549*/
						if(r.years=='service_down'){
							sendAdsErrorGaEvent("GetYears");
							adsdownalertbox();
							return false;
						}
						/*EPL-14549*/
                    t.find("option").remove(), t.append(o), e.each(r.years, function(e, o) {
                        t.append('<option value="' + o.Id + '">' + o.Year + "</option>")
                    }), e("select[name=year],select[name=engine],select[name=fuel]").attr("disabled", !0), e("select[name=year]").removeAttr("disabled")
                })
            }), e("select[name=year]").on("change", function() {
                var t = e("select[name=engine]"),
                    o = e(t).find("option").get(0);
                e("select[name=engine] option").not("option:first").remove(), e("select[name=fuel] option").not("option:first").remove(), ECP.AdsLookup.loadEngine(this.value, function(r) {
						/*EPL-14549*/
						if(r.engines=='service_down'){
							sendAdsErrorGaEvent("GetEngine");
							adsdownalertbox();
							return false;
						}
						/*EPL-14549*/
                    t.find("option").remove(), t.append(o), e.each(r.engines, function(e, o) {
                        t.append('<option value="' + o.Id + '">' + o.Engine + "</option>")
                    }), e("select[name=fuel]").attr("disabled", !0), e("select[name=engine]").removeAttr("disabled")
                })
            }), e("select[name=engine]").on("change", function() {
                var t = e("select[name=fuel]"),
                    o = e(t).find("option").get(0);
					/* 898 :- EMDM-235 */
					 if (1 == window.settings.emdm.enabled) {
						/* 898 :- EMDM */	
						e("select[name=fuel] option").not("option:first").remove(), ECP.AdsLookup.loadFuel(this.value, function(r) {
													/*EPL-14549*/
						if(r.fuels=='service_down'){
							sendAdsErrorGaEvent("Getfuels");
							adsdownalertbox();
							return false;
						}
						/*EPL-14549*/
							
							t.find("option").remove(), t.append(o), e.each(r.fules.fuel, function(e, o) {
								t.append('<option value="' + o.Fuel + '">' + o.Fuel + "</option>")
							}), ECP.AdsLookup.__data.vehicleid = r.fules.vehicleid, e("select[name=fuel]").removeAttr("disabled")
						})/* 898 :- EMDM */					 
					 } else {
                e("select[name=fuel] option").not("option:first").remove(), ECP.AdsLookup.loadFuel(this.value, function(r) {
                    t.find("option").remove(), t.append(o), e.each(r.fules, function(e, o) {
                        t.append('<option value="' + o.Fuel + '">' + o.Fuel + "</option>")
                    }), e("select[name=fuel]").removeAttr("disabled")
                })
				}/* 898 :- EMDM-235 */
                /**ADSv2-286 */
            }), e(".vehicle-form-pdp select[name=engine]").on("change", function() {
                var t = e("select[name=fuel-pdp]"),
                    o = e(t).find("option").get(0);
					/* 898 :- EMDM-235 */
					 if (1 == window.settings.emdm.enabled) {
						/* 898 :- EMDM */	
						e("select[name=fuel-pdp] option").not("option:first").remove(), ECP.AdsLookup.loadFuel(this.value, function(r) {
													/*EPL-14549*/
						if(r.fuels=='service_down'){
							sendAdsErrorGaEvent("Getfuels");
							adsdownalertbox();
							return false;
						}
						/*EPL-14549*/
							
							t.find("option").remove(), t.append(o), e.each(r.fules.fuel, function(e, o) {
								t.append('<option value="' + o.Fuel + '">' + o.Fuel + "</option>")
							}), ECP.AdsLookup.__data.vehicleid = r.fules.vehicleid, e("select[name=fuel-pdp]").removeAttr("disabled")
						})/* 898 :- EMDM */					 
					 } else {
                e("select[name=fuel-pdp] option").not("option:first").remove(), ECP.AdsLookup.loadFuel(this.value, function(r) {
                    t.find("option").remove(), t.append(o), e.each(r.fules, function(e, o) {
                        t.append('<option value="' + o.Fuel + '">' + o.Fuel + "</option>")
                    }), e("select[name=fuel-pdp]").removeAttr("disabled")
                })
				}/* 898 :- EMDM-235 */
/**ADSv2-286 */
            }), e("select[name=width]").on("change", function() {
                var t = e(this).val(),
                    o = e("select[name=profile]"),
                    r = e(o).find("option").get(0);
                "" != t && e.ajax({
                    type: "POST",
                    url: ECP.getBase() + "/catalog/categories/getTyreProfile",
                    data: {
                        width: t
                    },
                    dataType: "json",
                    success: function(t) {
                        o.find("option").remove(), o.append(r), e.each(t.profiles, function(e, t) {
                        	/* CI-4825 */
                            o.append('<option value="' + DOMPurify.sanitize(t.profile) + '">' + DOMPurify.sanitize(t.profile) + "</option>")
                            /* CI-4825 */
                        })
                    }
                }), e("select[name=profile]").removeAttr("disabled")
            }), e("select[name=profile]").on("change", function() {
                var t = e(this).val(),
                    o = e("select[name=width]").val(),
                    r = e("select[name=tyresize]"),
                    s = e(r).find("option").get(0);
                "" != o && e.ajax({
                    type: "POST",
                    url: ECP.getBase() + "/catalog/categories/getTyreSizes",
                    data: {
                        width: o,
                        profile: t
                    },
                    dataType: "json",
                    success: function(t) {
                        r.find("option").remove(), r.append(s), e.each(t.tyresizes, function(e, t) {
                        	/* CI-4825 */
                            r.append('<option value="' + DOMPurify.sanitize(t.rim) + '">' + DOMPurify.sanitize(t.rim) + "</option>")
                            /* CI-4825 */
                        })
                    }
                }), e("select[name=tyresize]").removeAttr("disabled")
            }), e(".vehicle-form").on("submit", function() {/* 898 :- EMDM-235 */
                return  (0 == window.settings.ads.enabled && 0 == window.settings.emdm.enabled) ? (ECP.alert("", window.messages.modules.error.ads), !1) : (ECP.AdsLookup.__data.fuel = e("select[name=fuel]").val(), "" == ECP.AdsLookup.__data.fuel ? ECP.alert("", "Please select all the required fields.") : (e(this).hasClass("portraitform") ? (global = !1, e(".portrait").hide(), e(".loading-screen").show()) : global = !0, ECP.AdsLookup.getCompoents(function(t) {
                    /* ci-309 start- handle response when service down */
                    if( typeof t.result.errors != 'undefined' && t.result.errors.error[0]=='service_down'){
						/*EPL-14549*/
						sendAdsErrorGaEvent("getComponents");
						/*EPL-14549*/
                        return e(".loading-screen").hide(), e(".portrait").show(),adsdownalertbox(), !1;
                    }
                    /* ci-309 ends */
                    if (1 == t.result.success) {
                        var o = e("select[name=make]").val() + ", " + e("select[name=model]").val() + ", " + e("select[name=year]").val() + ", " + e("select[name=engine]").val() + ", " + e("select[name=fuel]").val();
                        
                        var r = window.location.href;
                        if (parseInt(r.indexOf("engine-oils-fluids")) > 0) return window.location.href = "/engineoil", !0;
                        if (parseInt(r.indexOf("battery")) > 0) return window.location.href = "/car-battery", !0;
                        var s = window.location.href.split("?")[0];
                        /* DCX-2987 DCX-3306 dcx-3305*/
                        s == window.settings.docroot + "/" || s == window.settings.docroot ? window.location.href = checkRedirectURL(r) : location.reload()
                        /* DCX-2987 DCX-3306 dcx-3305*/
                    } else e(".loading-screen").hide(), e(".portrait").show(), ECP.alert("", "Invalid REG.")
                }, global)), !1)
                /**ADSv2-286 */
            }) , e(".vehicle-form-pdp").on("submit", function() {/* 898 :- EMDM-235 */
                    return  (0 == window.settings.ads.enabled && 0 == window.settings.emdm.enabled) ? (ECP.alert("", window.messages.modules.error.ads), !1) : (ECP.AdsLookup.__data.fuel = e("select[name=fuel-pdp]").val(), "" == ECP.AdsLookup.__data.fuel ? ECP.alert("", "Please select all the required fields.") : (e(this).hasClass("portraitform") ? (global = !1, e(".portrait").hide(), e(".loading-screen").show()) : global = !0, ECP.AdsLookup.getCompoents(function(t) {
                        /* ci-309 start- handle response when service down */
                        if( typeof t.result.errors != 'undefined' && t.result.errors.error[0]=='service_down'){
                            /*EPL-14549*/
                            sendAdsErrorGaEvent("getComponents");
                            /*EPL-14549*/
                            return e(".loading-screen").hide(), e(".portrait").show(),adsdownalertbox(), !1;
                        }
                        /* ci-309 ends */
                        if (1 == t.result.success) {
                            /**adsv2 feedback */
                            var checkifpdppage = $('.loadmakerajax').length;
                            if(checkifpdppage) {
                                localStorage.setItem('scrolltobottom',1);
                            }
                            /**adsv2 feedback */
                            var o = e("select[name=make]").val() + ", " + e("select[name=model]").val() + ", " + e("select[name=year]").val() + ", " + e("select[name=engine]").val() + ", " + e("select[name=fuel]").val();
                            /*ga("send", {
                                hitType: "event",
                                eventCategory: "MVL lookup",
                                eventAction: "click",
                                eventLabel: o,
                                transport: "beacon"
                            });*/
                            var r = window.location.href;
                            if (parseInt(r.indexOf("engine-oils-fluids")) > 0) return window.location.href = "/engineoil", !0;
                            if (parseInt(r.indexOf("battery")) > 0) return window.location.href = "/car-battery", !0;
                            var s = window.location.href.split("?")[0];
                            s == window.settings.docroot + "/" || s == window.settings.docroot ? window.location.href = window.settings.vrm.redirecturl : location.reload()
                        } else e(".loading-screen").hide(), e(".portrait").show(), ECP.alert("", "Invalid REG.")
                    }, global)), !1)
                    /**ADSv2-286 */
                }), e(".search-selection-filter form").on("submit", function() {/* 898 :- EMDM-235 */
                return (0 == window.settings.ads.enabled && 0 == window.settings.emdm.enabled) ? (ECP.alert("", window.messages.modules.error.ads), !1) : (ECP.AdsLookup.__data.make = e("select[name=makeSelection]").val(), ECP.AdsLookup.__data.fuel = e("select[name=fuelSelection]").val(), ECP.AdsLookup.__data.engine = e("select[name=engineSelection]").val(), ECP.AdsLookup.__data.year = e("select[name=yearSelection]").val(), ECP.AdsLookup.__data.model = e("select[name=modelSelection]").val(), void 0 === ECP.AdsLookup.__data.fuel || "" == ECP.AdsLookup.__data.fuel ? ECP.alert("", "Please select all the required fields.") : (e(this).hasClass("portraitform") ? (global = !1, e(".portrait").hide(), e(".loading-screen").show()) : global = !0, ECP.AdsLookup.getCompoents(function(t) {
					/* ci-309 start- handle response when service down */
                    if( typeof t.result.errors != 'undefined' && t.result.errors.error[0]=='service_down'){
                        return e(".loading-screen").hide(), e(".portrait").show(), adsdownalertbox(), !1;
                    }
                    /* ci-309 ends */
                    1 == t.result.success ? window.location == window.settings.docroot + "/" || window.location == window.settings.docroot ? window.location.href = window.settings.vrm.redirecturl : location.reload() : (e(".loading-screen").hide(), e(".portrait").show(), ECP.alert("", "Invalid REG."))
                }, global)), !1)
            }), e("a.clearselection").on("click", function() {
                var t = this.href;
				var a = window.location.href.split("?")[0];
                
                return e.post(t, {}, function(e) {
                    if(a!='undefined' && a!=''){
                        // EPL-15590
                        window.location.href = checkRedirectURL(a)
                        // EPL-15590
					} else {
                    location.reload()
					}
					
                }), !1
            }), e("#vrmForm").on("submit", function() {
                if (0 == window.settings.vrm.enabled && 0 == window.settings.emdm.enabled) return ECP.alert("", window.messages.modules.error.vrm), !1;
                e(this).hasClass("portraitform") ? (global = !1, e(".portrait").hide(), e(".loading-screen").show()) : global = !0;
                var t = e("#vrmReg").val();
                return "" == t ? (ECP.alert("Registration no not given.", "Please enter valid REG no."), !1) : (ECP.VrmLookup.getDetailByReg(t, function(o) {
                    /* ci-309 start- handle response when service down */
                    if( typeof o.result.errors != 'undefined' && o.result.errors.error[0]=='service_down'){
								/*EPL-14549*/
						sendAdsErrorGaEvent("getDetailByReg");
						
						/*EPL-14549*/
                        return e(".loading-screen").hide(), e(".portrait").show(), 	adsdownalertbox(), !1;
                    }
                    if (1 != o.result.success) return e(".loading-screen").hide(), e(".portrait").show(), ECP.alert("Invalid Reg No.", "Please enter valid REG no."), !1;
                    /* adsv2 feedback*/
                    var checkifpdppage = $('.loadmakerajax').length;
                    if(checkifpdppage) {
                        localStorage.setItem('scrolltobottom',1);
                    }
                    /* adsv2 feedback*/
                    var eventLabelStr = o.result.make + ', ' + o.result.model + ', ' + o.result.year + ', ' + o.result.engine + ', ' + o.result.fuel;
                    
					var r= window.location.href.split('?')[0];
                    //var r = window.location.href;
                    if (parseInt(r.indexOf("car-engine-oils")) > 0 || parseInt(r.indexOf("landing-engine-oil")) > 0) return window.location.href = "/engineoil", !0;
                    if (parseInt(r.indexOf("car-batteries")) > 0 || parseInt(r.indexOf("accessories-car-batteries")) > 0) return window.location.href = "/car-battery", !0;
                   
                    var a = window.location.href.split("?")[0];
                if(a == window.settings.docroot + "/" || a == window.settings.docroot || a == "http:" + window.settings.docroot || a == "http:" + window.settings.docroot + "/") {
                    /* DCX-2987 DCX-3306 dcx-3305*/
                    window.location.href = checkRedirectURL(a)
                    /* DCX-2987 DCX-3306 dcx-3305*/ 
				}  else {
                    // EPL-15590
                    window.location.href = checkRedirectURL(r)
                    // EPL-15590
				}
                }, global), !1)
            }), e(".login-info-form #email").focusout(function() {
                callAjaxFlag = !0;
                var t = e("#savedemail").val(),
                    o = e(this);
                if (userEmail = o.val(), void 0 !== t && (e("#email").removeClass("valid"), e("#email").removeClass("invalid"), t == userEmail && (callAjaxFlag = !1)), callAjaxFlag) {
                    var r = e(".login-info-form .registerEmailError");
                    r.hide(), e(this).removeClass("invalid"), "" != userEmail && (validateEmail(userEmail) ? e.ajax({
                        type: "POST",
                        url: ECP.getBase() + "/users/login/checkifemailexists",
                        data: {
                            email: userEmail
                        },
                        async: !1,
                        success: function(t) {
                            void 0 !== t.form && (1 == t.form.success.status ? (r.show(), r.text(messages.loginHeader.callback), o.removeClass("valid"), o.addClass("invalid")) : 0 == t.form.success.status && (o.removeClass("invalid"), o.addClass("valid"), e.ajax({
                                type: "POST",
                                url: ECP.getBase() + "/secure/newsletter/checkIfEmailExists",
                                data: {
                                    email: userEmail
                                },
                                success: function(t) {
                                    void 0 !== t.form && (1 == t.form.success.status ? (e("#bsubscribe").prop("checked", !0), e("#main-bsubscribe").hide()) : 0 == t.form.success.status && (e("#main-bsubscribe").show(), e("#bsubscribe").prop("checked", !1), e("#main-bsubscribe").removeClass("hidden")))
                                }
                            })))
                        }
                    }) : (e(this).removeClass("valid"), e(this).addClass("invalid"), r.show(), r.text(messages.forgotpassword.invalidemail)))
                }
                return !1
            }), e("#loginSubmitBtn").click(function() {
                return userEmail = e(".login-box .login-form .email").val(), userPassword = e(".login-box .login-form #password").val(), validateEmail(userEmail) && "" != userPassword ? (e(".login-box .login-form .error").hide(), e.ajax({
                    type: "POST",
                    url: ECP.getBase() + "/login",
                    data: {
                        email: userEmail,
                        password: userPassword
                    },
                    success: function(t) {
                        "undefined" != typeof t.form && ("undefined" != typeof t.form.errors.error.email && "invalidemail" == t.form.errors.error.email ? (e(".login-box .login-form .error").show(), e(".login-box .login-form .error").text(messages.loginHeader.invalidemailpassword)) : "callback" == t.form.errors.error.email ? (e(".login-box .login-form .error").show(), e(".login-box .login-form .error").text(messages.loginHeader.emailerror)) : "mismatch" == t.form.errors.error.formError ? (e(".login-box .login-form .error").show(), e(".login-box .login-form .error").text(messages.loginHeader.formerror)) : 1 == t.form.success.status)

                        /** CI-6462 **/
                        if(1 == t.form.success.status)
                        {
                            dataLayer_login();
                        }
                        /** CI-6462 **/
                    }
                })) : (e(".login-box .login-form .error").text(messages.loginHeader.invalidemailpassword), e(".login-box .login-form .error").show()), !1
            }), e("form.login-form").submit(function() {
                var t = e(this).find("#email").val(),
                    o = e(this).find("#password").val();
                (validateEmail(t) || "" != o)
                
                 /** CI-6462 **/
                 if(validateEmail(t) && "" != o)
                 {
                     dataLayer_login();
                 }
                 /** CI-6462 **/

            }), e("#forgot_password_popup .okay-btn").click(function() {
                return userEmail = e("#forgot_password_popup #email").val(), "" != e.trim(userEmail) ? (e("#forgot_password_popup .error").hide(), e(".modal-body .forgotflashMessages").hide(), e.ajax({
                    type: "POST",
                    url: ECP.getBase() + "/forgot-password",
                    data: {
                        email: userEmail
                    },
                    success: function(t) {
                        "invalidemail" == t.form.errors.error.email ? (e("#forgot_password_popup .error").text(messages.forgotpassword.invalidemail), e("#forgot_password_popup .error").show()) : "callback" == t.form.errors.error.email ? (e("#forgot_password_popup .error").text(messages.forgotpassword.callback), e("#forgot_password_popup .error").show()) : "emptyfield" == t.form.errors.error.email ? (e("#forgot_password_popup .error").text(messages.forgotpassword.invalidemail), e("#forgot_password_popup .error").show()) : 1 == t.form.success.status && (e("#forgot_password_popup .error").hide(), e(".modal-body #forgotflashMessages").show(), e("#forgot_password_popup #email").val(""))
                    }
                })) : (e("#forgot_password_popup .error").text(messages.forgotpassword.invalidemail), e("#forgot_password_popup .error").show()), !1
            }), e("#change_password_popup .okay-btn").click(function() {
                userPassword = e("#change_password_popup #password").val(), userCpassword = e("#change_password_popup #cpassword").val();
                 
                //EPL-14417 
                if($('#oldpwd').length == 0 ) {
                var t = userPassword.length,
                    o = userCpassword.length;
                } else {
                    var oldpwd = $('#oldpwd').val();
                    var t = userPassword.length,
                    o = userCpassword.length,
                    op = $('#oldpwd').length;                    
                }
//remove if length condition when go live             
                if(op >0){
                    //remove if length condition when go live
                    if($('#oldpwd').val() =='' ) {
                        $("#change_password_popup #oldpwdError").text("Please enter a password.")
                        $("#change_password_popup #oldpwdError").show()                        
                    }
                    if($('#oldpwd').val() !='' ) {
                        $("#change_password_popup #oldpwdError").hide()                        
                    }
                    //remove if length condition when go live
                }
                //remove if length condition when go live
//EPL-14417
                return t < 8 && o < 8 ? (e("#change_password_popup #cpasswordError").text(messages.changepassword.minlength), e("#change_password_popup #cpasswordError").show(), e("#change_password_popup #passwordError").text(messages.changepassword.minlength), e("#change_password_popup #passwordError").show(), !1) : t < 8 ? (e("#change_password_popup #cpasswordError").hide(), e("#change_password_popup #passwordError").text(messages.changepassword.minlength), e("#change_password_popup #passwordError").show(), !1) : o < 8 ? (e("#change_password_popup #passwordError").hide(), e("#change_password_popup #cpasswordError").text(messages.changepassword.minlength), e("#change_password_popup #cpasswordError").show(), !1) : userPassword != userCpassword ? (e("#change_password_popup #passwordError").hide(), e("#change_password_popup #cpasswordError").text(messages.changepassword.notsametofield), e("#change_password_popup #cpasswordError").show(), !1) : (e("#change_password_popup .error").hide(), e(".modal-body .changeflashMessages").hide(), e.ajax({
                    type: "POST",
                    url: ECP.getBase() + "/my-account/change-password",
                    data: {
                        password: userPassword,
                        cpassword: userCpassword, //EPL-14417
                        oldpwd: oldpwd //EPL-14417
                    },
                    success: function(t) {

                        if(t.noindex == '1' || t == '' ){
                            // EPL-15590
                            window.location.href = checkRedirectURL(ECP.getBase()+"/my-account/logout");
                            // EPL-15590
                        } else {
                                //EPL-14417
                                if(op >0){
                                    if (t.form.errors.error.currentpassword) {				
                                    // CI-5473
                                    // CI-5473
                                    $('#change_password_popup #oldpwdError').text(window.messages.changepassword.CureentPasswordInvalid);
                                    $('#change_password_popup #oldpwdError').show();						  
                                    return false;
                                    }
                                }
                                    //EPL-14417
                                    
                        "emptyfield" == t.form.errors.error.password || "minlength" == t.form.errors.error.password ? (e("#change_password_popup #passwordError").text(messages.changepassword.minlength), e("#change_password_popup #passwordError").show()) : e("#change_password_popup #passwordError").hide(), "emptyfield" == t.form.errors.error.cpassword || "minlength" == t.form.errors.error.cpassword ? (e("#change_password_popup #cpasswordError").text(messages.changepassword.minlength), e("#change_password_popup #cpasswordError").show()) : e("#change_password_popup #cpasswordError").hide(), "notsametofield" == t.form.errors.error.cpassword && (e("#change_password_popup #passwordError").hide(), e("#change_password_popup #cpasswordError").text(messages.changepassword.notsametofield), e("#change_password_popup #cpasswordError").show()), 1 == t.form.success.status && (e("#change_password_popup .error").hide(), e(".modal-body #changeflashMessages").show(), e("#change_password_popup .InputTxtBox").val(""))
                                //EPL-14417
                                                if (t.form.success && t.form.success.status==1) {
                                                    // EPL-15590
                                                    window.location.href = checkRedirectURL(ECP.getBase()+"/my-account/logout");
                                                    // EPL-15590
                                               }
                                //EPL-14417
                        }


                
                       
                    }
                }), !1)
            }), e("#forgot_password_popup").keydown(function(t) {
                if (13 == t.keyCode) return e("#forgot_password_popup .okay-btn").trigger("click"), t.preventDefault(), !1
            }), e(".login-box .login-form").keydown(function(t) {
                if (13 == t.keyCode) return e(".login-box .login-form #loginSubmitBtn").trigger("click"), t.preventDefault(), !1
            }), e(".login-info-form .post-find-btn").on("click", function() {
                e(this).addClass("wait");
                var findPostcodeVal = e("#findPostcode").val(),
                    o = e("#country").val();
                return findPostcodeVal ? (e.ajax({
                    type: "POST",
                    url: ECP.getBase() + "/secure/services/findAddressLookup",
                    data: {
                        postcode: findPostcodeVal,
                        country: o
                    },
                    success: function(t, o, r) {
                        var gaVal = findPostcodeVal.toUpperCase();
                        gaVal = gaVal.replace(/ /g, '');
                        if ($('.enableUpdateEmail').length) {
                            var eventPageType = 'Postcode - My Account'
                        } else {
                            var eventPageType = 'Postcode - Registration'
                        }
                         
                        /* DCX-3951 Shifted code below */
                        if (r.getResponseHeader("content-type").indexOf("text/html") >= 0) {
							/* DCX-3951 */
                            /* CI-5475 */
                            t = DOMPurify.sanitize(t, {ADD_ATTR: ['onchange','containerid','addresstype','postcode']});
                            /* CI-5475 */
                            addressDropdown = jQuery(t).find('#selectInner').html();

                            e(".registration-col .address-finder select").remove();
                            e(".registration-col .address-finder .secDropDown").remove(); /* CI-4785 */
                        
                        var registrationContainer = document.querySelector('.registration-col');	
                        var addressfinderContainer = registrationContainer.querySelector('.address-finder');
                        var childNode = addressfinderContainer.querySelector('.outer-select');
							/* DCX-3951 */
                            childNode.innerHTML = addressDropdown,
                            /* CI-4785 */ /* e(".registration-col .address-finder .outer-select").html(addressDropdown) */ 
                            e(".registration-col #registrationAfdDiv").show(), e(".post-find-btn").removeClass("wait");
                        }else {
                            /* EPL-16801*/
                            addressDropdown = jQuery(DOMPurify.sanitize(t)).find("#selectInner").html(), e(".registration-col .address-finder").hide(), e(".post-find-btn").removeClass("wait");
                            var s = e(this).attr("data-prefix");
                            "undefined" != s && void 0 != s || (s = "");
                            var i = document.getElementById(s + "address1"),
                                a = document.getElementById(s + "address2"),
                                n = document.getElementById(s + "town"),
                                l = document.getElementById(s + "county"),
                                d = document.getElementById(s + "postcode");
                            t.result.address1 ? (i.value = t.result.address1, a.value = t.result.address2, n.value = t.result.address3, l.value = t.result.address4, t.result.postcode && (d.value = t.result.results.POSTCODE)) : (i.value = "", a.value = "", n.value = "", l.value = "", d.value = "")
                        }
                    }
                }), !1) : (ECP.alert("Form Error.", "Please enter you postcode to use address finder."), e(this).removeClass("wait"), !1)
            }), e("#change_password_popup").keydown(function(t) {
                if (13 == t.keyCode) return e("#change_password_popup .okay-btn").trigger("click"), t.preventDefault(), !1
            }), e(".searchStore").on("submit", function() {
                var t = e(this).find('input[name="search"]').val();
                return "" != e.trim(t) || (ECP.alert("", "Search field cannot be empty."), !1)
            }), e(".searchStorePage").on("submit", function() {
                o = e(this).find('input[name="search"]').val();
                if (e(".searchStoreMsg").remove(), "" == e.trim(o)) ECP.alert("", "Search field cannot be empty.");
                else {
                    var t = "",
                        o = e(this).find('input[name="search"]').val(),
                        r = e(this);
                    e.ajax({
                        type: "POST",
                        url: ECP.getBase() + e(this).data("href"),
                        data: {
                            search: o,
                            isajax: "true"
                        },
                        success: function(o) {
                            t = "true" == o ? '<p class="searchStoreMsg succMsg"><img src="' + e("body").data("statichost") + '/product-list-icon.jpg"  /> ' + window.messages.sddsearch.success + "</p>" : '<p class="searchStoreMsg errMsg">' + window.messages.sddsearch.error + "</p>", r.append(t)
                        }
                    })
                }
                return !1
            }), e("div.flashmessage").length > 0) {
            var i = "",
                a = "";
            e("div.flashmessage").each(function() {
                var t = e(this).data("message");
                a = e(this).data("errorclass");
                for (var o = t.split("."), r = window.messages; index = o.shift();) index in r && (r = r[index]);
                void 0 !== r && (i += r), i = '<div class="popNotificationMessage ' + a + '">' + i + "</div>"
            }), a = messages.notificationalert[a], ECP.alert(a, i)
        }
        ECP.addCart();
        var n = e(".branchselector").val();
        void 0 != typeof n && e("#branchbox_" + n).show(), e(document).on("change", ".branchselector", function() {
            e("div [id^=branchbox_]").hide();
            var t = e(".branchselector").val();
            e("#branchbox_" + t).show()
        }), e("body").click(function(t) {
            "login-box" != t.target.class && (e(t.target).closest(".login-box").length || "signin" != t.target.class && (e(t.target).closest(".signin").length || "cls-popup" != t.target.id && (e(t.target).closest("#cls-popup").length || "0" == e(document).scrollTop() && (e("header").removeClass("slide--up").addClass("slide--reset"), e("header .login-box").slideUp(400)))))
        });
        /* CI-4825 */
        var l = DOMPurify.sanitize(window.location.hash);
        /* CI-4825 */
        l && e('.order-heading a[href="' + l + '"]').trigger("click", !0), e(".geolocation").on("click", function() {
            navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(e) {
                window.location = ECP.getBase() + "/store-locator/locate/lat/" + e.coords.latitude + "/lon/" + e.coords.longitude
            }) : alert("Geolocation is not supported by this browser.")
        }), e(document).ready(function() {
            e(".storeAutocomplete").length > 0 && e(".storeAutocomplete").autocomplete({
                serviceUrl: "/stores/store/getStoreNamesAutocomplete",
                ajaxSettings: {
                    global: !1
                }
            })
        }), e(document).on("click", ".tiercatcontentheader .view-more", function() {
            return e(this).text() == e(this).data("more") ? (e(this).text(e(this).data("less")), e(this).parents(".tiercatcontentheader").find("article.moretext").css({
                display: "inline"
            })) : (e(this).parents(".tiercatcontentheader").find("article.moretext").css({
                display: "none"
            }), e(this).text(e(this).data("more"))), !1
        }), e("#feedbackForm").on("submit", function() {
            e(".error").text(""), e(".error").hide();
            var t = !1,
                o = e('#feedbackForm input[name="option1"]:checked').length,
                r = e('#feedbackForm input[name="option2"]:checked').length,
                s = e('#feedbackForm textarea[name="msg"]').val(),
                i = e('#feedbackForm input[name="name"]').val(),
                a = e('#feedbackForm input[name="email"]').val();
            return o < 1 && (/* CI-4785 */ document.querySelector('.option1Err').innerHTML = window.messages.feedback.error.required /* CI-4785 */, t = !0), r < 1 && (/* CI-4785 */ document.querySelector('.option2Err').innerHTML = window.messages.feedback.error.required /* CI-4785 */, t = !0), "" == s && (/* CI-4785 */ document.querySelector('.msgErr').innerHTML = window.messages.feedback.error.required /* CI-4785 */, t = !0), "" == i && (/* CI-4785 */ document.querySelector('.nameErr').innerHTML = window.messages.feedback.error.required /* CI-4785 */, t = !0), "" == a ? (/* CI-4785 */ document.querySelector('.emailErr').innerHTML = window.messages.feedback.error.required /* CI-4785 */, t = !0) : validateEmail(a) || (/* CI-4785 */ document.querySelector('.emailErr').innerHTML = window.messages.feedback.error.validEmail /* CI-4785 */, t = !0), 
            !t || (e(".error").show(), !1),
            t?(e(".error").show(),!1):"undefined"==typeof captchaFeedback||0!=gcaptchaSubmit||(grecaptcha.execute(),!1)
            // EPL-9096
        }), e(".tyresize-form").on("submit", function() {
            return width = e("select[name=width] option:selected").val(), profile = e("select[name=profile] option:selected").val(), tyresize = e("select[name=tyresize] option:selected").val(), "" != width && "" != tyresize && "" != profile || (ECP.alert("", window.messages.snowchains.error.required), !1)
        }), e("#cookieBarCloseId").on("click", function() {
            setCookie("cookiealert", "1", 30)
        })
    }(jQuery), $(document).on("click", "#productfilters", function() {
        $("#filter-popup").modal({
            backdrop: "static",
            keyboard: !1,
            show: !0
        })
    }), $(document).on("click", "#clear-allfilters", function() {
        $("#filter-popup").modal({
            backdrop: "static",
            keyboard: !1,
            show: !0
        })
    }), $(document).on("click", "#filterProductListing", function() {
        var e = "tier5Code=" + $("#filtertier5codes").val() + "&",
            t = "",
            o = "",
            r = 0,
            s = 0,
            i = !1;
        $("#filterform select option:selected").each(function() {
            0 == $(this).val() ? t = "" : (t = $(this).val(), r = 1, s++), e += $(this).parent().attr("name") + "=" + t.replace("-", " ") + "&"
        }), e += "selected=" + r + "&";
        var a = {},
            n = 0;
        if ($("#filterform input:checked").each(function() {
                n++;
                var e = $(this).attr("data-filtertype");
                void 0 === a[e] && (a[e] = []), a[e].push($(this).val()), o += $(this).val() + ","
            }), e += "checkboxfiltres=" + o + "&totalFilterSelected=" + (s + n) + "&", $.ajax({
                type: "POST",
                url: $("#filterform").attr("action"),
                data: e,
                async: !1,
                success: function(e) {
					/*cp4l fixes*/
					var html = '';
                    try{
                       var resultData =   JSON.parse(e);
                      html = resultData.html;
                    }catch(e){
                            html = e;
                    }
					/*cp4l fixes*/                    /* CI-4785 */	
                    if($('#carpartslistingsection').length > 0){
                    /* CI-5475 */
                    html = DOMPurify.sanitize(html, {ADD_ATTR: ['onchange','onclick']});
                    /* CI-5475 */


document.querySelector('#carpartslistingsection').innerHTML = html;
                    }
/* CI-4785 */ $(".zoom").on("click", function() {
                        var e = $(this).find("img").attr("src");
                        $("#zoom-image").find("img").attr("src", e), $("#zoom-image").openModal(), $(window).width() <= 767 && $("html, body").animate({
                            scrollTop: 0
                        }, "slow")
                    });
                    var t = $(window).width(),
                        o = /ipad/i.test(navigator.userAgent.toLowerCase());
                    t >= 1024 && !o && $(".zoom").length > 0 && $(".zoom").zoom()
                }
            }), $("form.product-content").is(":visible") && $("form.product-content").hide(), $("li.brandselection").hide(), $.each(a, function(e, t) {
                $("form.product-content").removeAttr(e), $.each(t, function(t, o) {
                    $("form.product-content").each(function() {
                        $(this).attr("data-" + e) == o && "applied" != $(this).attr(e) && (i ? $(this).is(":visible") && ($(this).attr(e, "applied"), $(this).show()) : ($(this).attr(e, "applied"), $(this).show()))
                    }), $("li.brandselection").each(function() {
                        $(this).attr("data-" + e) == o && "applied" != $(this).attr(e) && (i ? $(this).is(":visible") && ($(this).attr(e, "applied"), $(this).show()) : ($(this).attr(e, "applied"), $(this).show()))
                    })
                }), i || (i = !0), $("form.product-content:not([" + e + "=applied])").hide()
            }), $.isEmptyObject(a) ? ($("form.product-content").show(), $("li.brandselection").show()) : slideProducts(), hideEmptyProductDiv(), showFilterCount(), $(window).width() < 768 && $(".info-box").length > 0) {
            var l = $("<div>" + $(".info-box").html() + "</div>");
            l.find("img").addClass("warning-icon"), ECP.alert("", l.html())
        }
    }), $(document).on("click", "#clearallfilters", function() {
        var e = "tier5Code=" + $("#filtertier5codes").val() + "&",
            t = "",
            o = 0;
        $("#filterform select").each(function(e) {
            $("#" + $(this).attr("id") + " option:selected").prop("selected", !1)
        }), $("#filterform input:checked").each(function() {
            this.checked = !1
        }), $("#filterform select option:selected").each(function() {
            0 == $(this).val() ? t = "" : (t = $(this).val(), o = 1), e += $(this).parent().attr("name") + "=" + t.replace("-", " ") + "&"
        }), e += "selected=" + o + "&totalFilterSelected=0&";
        var r = {};
        $("#filterform input:checked").each(function() {
            var e = $(this).attr("data-filtertype");
            void 0 === r[e] && (r[e] = []), r[e].push($(this).val())
        }), $.ajax({
            type: "POST",
            url: DOMPurify.sanitize($("#filterform").attr("action")),
            data: e,
            async: !1,
            success: function(e) {
				/*cp4l fixes*/
 				var html = '';
                try{
                   var resultData =   JSON.parse(e);
                  html = resultData.html;
                }catch(e){
                        html = e;
                }  
				/*cp4l fixes*/ 
                /* CI-4785 */	
                if($('#carpartslistingsection').length > 0){  
                /* CI-5475 */
                e = DOMPurify.sanitize(e, {ADD_ATTR: ['onchange','onclick']});
                /* CI-5475 */	              
                document.querySelector('#carpartslistingsection').innerHTML = e;
                }
                /* CI-4785 */
            }
        }), $("form.product-content").show(), $("li.brandselection").show()
    }), $(document).on("click", "#filterBrandProductListing", function() {
        var e = !1,
            t = {},
            o = 0;
		/*CI-680*/
		$('.filterExhausts').filter('[data-filtertype="componentcode"]').prop('checked',false);
		$('.filterExhausts').removeClass('selected');
		/*CI-680*/	
			
    /** CI-1468 */
	var nohide			= $(this).data('nohide');
	if(nohide == '' || nohide == undefined){
		$('.product-listing-col .filter-box .filter-overlay').hide();
		$('.filter-box .sfilter').removeClass('active');
		$('.product-listing-col .filter-box .small-filter').slideUp(200);
		$('.filter-box .selection-count').show();
	}
	var filterapplied = false;	
			
			
	var filters = {};
	var checkedfiltercounter=0;
	$('#filterbrandform input[type="checkbox"]').removeAttr('filterApplied');
        $("#filterbrandform input:checked").each(function() {
            var e = $(this).attr("data-filtertype");
				/*CI-680*/		
			if(e=='componentcode'){
				$('.filterExhausts').filter('[data-filtertype="componentcode"][value="'+$(this).val()+'"]').prop('checked',true).addClass('selected');
			}
			/*CI-680*/
		checkedfiltercounter++;
		$(this).attr('filterApplied', true);
		var filter= $(this).attr('data-filtertype');
		if(typeof filters[filter]=='undefined'){
			filters[filter] = [];
		}		
		filters[filter].push($(this).val());	
	});	
			// EPL-16611
        if ($('.infinite-scroll').data('pages') >= 1) {
        // EPL-16611
		ajaxProductsPagination(1, function(data){
            /* EPL-16801*/
            $('.infinite-scroll:first').hide().html(DOMPurify.sanitize(data)).fadeIn(1000);
            /* EPL-16801*/
		},$('#filterbrandform'));
	} else{
		// $('.filtercheckboxes').attr('disabled', 'disabled');
		$('.wait-box').show();
		
		
		$("li.productbrandslisting").show();
		$("form.product-content").hide();
		$("li.brandselection").hide();
		$.each(filters,function(filtername,filterarr){			
				$('form.product-content').removeAttr(filtername);
				$('li.brandselection').removeAttr(filtername);
				$.each(filterarr,function(index,filter){				
					$('form.product-content').each(function(){					
						if($(this).attr('data-'+filtername)==filter && $(this).attr(filtername)!='applied'){						
							if(filterapplied){
								if($(this).is(":visible")){
									$(this).attr(filtername,'applied');
									$(this).slideDown();
								}
							}else{
								$(this).attr(filtername,'applied');
								$(this).slideDown();
							}						
							
						}
					});
					$('li.brandselection').each(function(){
						if($(this).attr('data-'+filtername)==filter && $(this).attr(filtername)!='applied'){
			
							if(filterapplied){
								if($(this).is(":visible")){
									$(this).attr(filtername,'applied');
									$(this).slideDown();
								}
							}else{
								$(this).attr(filtername,'applied');
								$(this).slideDown();
							}
						}else{
							
						}
					});
				});
				if(!filterapplied){				
					filterapplied = true;
				}			
				$('form.product-content:not(['+filtername+'=applied])').hide();
				//$('li.brandselection:not(['+filtername+'=applied])').hide();
			
		});
			
		if($.isEmptyObject(filters)){
			$("form.product-content").show();
			$("li.brandselection").show();
			$('li.brandselection').removeAttr('brand');
			$('.brand-list').each(function(){
				$(this).find('li:first').attr('brand', 'applied');
			});
		}
        /* CI-4785 */	
        if($('#selectioncounter').length > 0){
        document.querySelector('#selectioncounter').innerHTML = checkedfiltercounter;
        }
        if($('#filterCount').length > 0){
        document.querySelector('#filterCount').innerHTML = checkedfiltercounter;
        }
        /* CI-4785 */
		slideProducts();
		hideEmptyProductDiv();
	}
    /** CI-1468 */
    }), $(document).on("click", "#clearallbrandfilters", function() {
        $(window).width();
        $("li.productbrandslisting").show(), $("li.productbrandslisting").each(function() {
            $(this).find(".brandselection:first").trigger("click")
        }), $("form.product-content").show(), $("li.brandselection").show(), $("#selectioncounter").text(0), $("#filterbrandform input:checked").each(function() {
            $(this).attr("checked", !1)
        }), $(".product-listing-col .filter-box .filter-overlay").hide(), $(".filter-box .sfilter").removeClass("active"), $(".product-listing-col .filter-box .small-filter").slideUp(200), $(".filter-box .selection-count").show();
				/*CI-680*/
	$('.filterExhausts').filter('[data-filtertype="componentcode"]').prop('checked',false);
	$('.filterExhausts').removeClass('selected');
	/*CI-680*/
    }), $(document).ready(function() {
        showFilterCount()
    }), $(document).on("change", "#filterform select", function() {
        var e = "",
            t = 0;
        $("#filterform select option:selected").each(function() {
            0 == $(this).val() ? val = "" : (val = $(this).val(), t = 1), e += $(this).parent().attr("name") + "=" + val + "&"
        }), e += "selected=" + t + "&", $("#filterform select").attr("disabled", "disabled"), $.ajax({
            type: "POST",
            url: ECP.getBase() + "/catalog/categories/showDistinctFilters",
            data: e,
            async: !1,
            success: function(e) {
                /* CI-4785 */	
                if($('#filtervehiclespec').length > 0){
                /* CI-5475 */
				e = DOMPurify.sanitize(e, {ADD_ATTR: ['onchange','onclick']});
                /* CI-5475 */
                document.querySelector('#filtervehiclespec').innerHTML = e;
                }
                /* CI-4785 */ $("#filterform select").attr("disabled", !1);
            }
        })
    }), $(document).on("click", ".page-list .changelimit", function() {
        var e = $(".changelimit").attr("data-limit"),
            t = updateUrlParameters(window.location.href, "page", 1);

            // EPL-15590
            var upurl = checkRedirectURL(t)
        window.location = updateUrlParameters(upurl, "limit", e)
        // EPL-15590
    });
    $(document).ready(function() {
        /* adsv2 feedback*/
		if(localStorage.getItem('scrolltobottom') == 1) {
			
			localStorage.removeItem('scrolltobottom');
			if($('.product-thumb').length > 0) {
				$('html, body').animate({
					'scrollTop' : $('.product-thumb').offset().top
				});
			}
		}
		/* adsv2 feedback*/
        $("#ingenico-policy").click(function() {
            $('.img-spinner').show();
            $.ajax({
                url: ECP.getBase() + "/secure/payment/privacyPolicy",
                type: 'GET',
                success: function(response) {
                    /* CI-4785 */	 /* CI-4825 */
                    document.querySelector('#ingenico-pp').innerHTML = DOMPurify.sanitize(response.privacyPolicy);
                    /* CI-4785 */ /* CI-4825 */
                    $('#ingenico-privacy-policy').openModal('show');
                    $('.img-spinner').hide();
                }
            });
        });
    });
/*** EPL-4710 EPL-9813 EPL-9823 */    
function GetURLParameter(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    { 
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam.toLowerCase()) 
        {
			return sParameterName[0]; 
        } 
    } 
}
/*** EPL-4710 EPL-9813 EPL-9823 */
    function popoverDeleivery() {
        var e = {
            over: function() {
                $(this).children(".delivery-popover").fadeIn(100);
            },
            timeout: 100,
            out: function() {
                $(this).children(".delivery-popover").fadeOut(100);
            }
        };
        $(".delivery-data .delivery-info-icon").hoverIntent(e), $(".info-close").click(function() {
            $(".delivery-popover").fadeOut(100);
        })
    }
	
	$('#contactusform-btn').click(function(){
	var errorName = false;
	var errorEmail = false;
	var errorMsg = false;

	if ($("#contactname").val().trim() == '') {
        /* CI-4785 */
        $("#contactname").siblings('.error').css({"display": "block"});
        document.getElementById('contactname').nextSibling.innerHTML = messages.contact.contactname.error;
        /* CI-4785 */
		errorName = true;
	}else{
		$("#contactname").siblings('.error').css({"display": "none"}).text("");
		errorName = false
	}
	if($("#contactemail").val() == ''){
        /* CI-4785 */
        $("#contactemail").siblings('.error').css({"display": "block"});
        document.getElementById('contactemail').nextSibling.innerHTML = messages.contact.contactemail.error;
        /* CI-4785 */
		errorEmail = true
	}else if(!validateEmail($("#contactemail").val())){
        /* CI-4785 */
        $("#contactemail").siblings('.error').css({"display": "block"});
        document.getElementById('contactemail').nextSibling.innerHTML = messages.contact.contactemail.invalidError;
        /* CI-4785 */
		errorEmail = true
	}else{
		$("#contactemail").siblings('.error').css({"display": "none"}).text("");
		errorEmail = false
	}
	if($("#contactmsg").val().trim() == ''){
        /* CI-4785 */
        $("#contactmsg").siblings('.error').css({"display": "block"});
        document.getElementById('contactmsg').nextSibling.innerHTML = messages.contact.contactmsg.error;
        /* CI-4785 */
		errorMsg = true
	}else{
		$("#contactmsg").siblings('.error').css({"display": "none"}).text("");
		errorMsg = false
	}
	if(!errorName && !errorEmail && !errorMsg){
		grecaptcha.execute();
	}
	return true;
});

function contactFormSubmit(){
	$('form[name=contact-form]')[0].submit();
}
//  EPL-6695
$('#reg-btn').click(function(){
	var errorName = false;
	var errorEmail = false;
	var errorMsg = false;
 
	if ($("#firstname").val().trim() == '') {
        /* CI-4785 */
        $("#firstname").siblings('.error').css({"display": "block"});
        document.getElementById('firstname').nextSibling.innerHTML = window.messages.newsletter.error;
        /* CI-4785 */
		errorName = true;
	}else{
		$("#firstname").siblings('.error').css({"display": "none"}).text("");
		errorName = false
	}
	if ($("#lastname").val().trim() == '') {
        /* CI-4785 */
        $("#lastname").siblings('.error').css({"display": "block"});
        document.getElementById('lastname').nextSibling.innerHTML = window.messages.newsletter.error;
        /* CI-4785 */
		errorName = true;
	}else{
		$("#lastname").siblings('.error').css({"display": "none"}).text("");
		errorName = false
	}
	if($("#email").val() == ''){
        /* CI-4785 */
        $("#email").siblings('.error').css({"display": "block"});
        document.getElementById('email').nextSibling.innerHTML = window.messages.newsletter.error;
        /* CI-4785 */
		errorEmail = true
	}else if(!validateEmail($("#email").val())){
        /* CI-4785 */
        $("#email").siblings('.error').css({"display": "block"});
        document.getElementById('email').nextSibling.innerHTML = window.messages.newsletter.email.invalidError;
        /* CI-4785 */
		errorEmail = true
	}else{
		$("#email").siblings('.error').css({"display": "none"}).text("");
		errorEmail = false
	}
//BT Validation
var mobileno = $('input#mobileno').val();  
var phoneno = $('input#phoneno').val();  

		var regex = new RegExp(/^[0-9]+$/);
		if(mobileno!='' && !mobileno.match(regex)) {
			$("#mobileno").siblings('.error').css({"display": "block"}).html("Please enter valid mobile no.");
			errorMob = true;
		} else if(mobileno!='' && mobileno.match(regex) && mobileno.length < 10) { 
			$("#mobileno").siblings('.error').css({"display": "block"}).html("Mobile no. must contain minimum 10 characters.");
			errorMob = true;
		}else  if(mobileno!='' && mobileno.match(regex) && mobileno.match(regex) && mobileno.length > 15) { 
			$("#mobileno").siblings('.error').css({"display": "block"}).html("Mobile no. must contain maximum 15 characters.");
			errorMob = true;
		} else {
			$("#mobileno").siblings('.error').css({"display": "none"}).html("");
			errorMob = false;
		}
 
		var regex = new RegExp(/^[0-9]+$/);
		if(phoneno!='' && !phoneno.match(regex)) {
			$("#phoneno").siblings('.error').css({"display": "block"}).html("Please enter valid phoneno.");
			errorPh = true;
		} else if(phoneno!='' && phoneno.match(regex) && phoneno.length < 10) { 
			$("#phoneno").siblings('.error').css({"display": "block"}).html("Phoneno must contain minimum 10 characters.");
			errorPh = true;
		}
		if(phoneno!='' && phoneno.match(regex) && phoneno.length > 20) { 
			$("#phoneno").siblings('.error').css({"display": "block"}).html("Phoneno must contain maximum 20 characters.");
			errorPh = true;
		} else {
			$("#phoneno").siblings('.error').css({"display": "none"}).html("");
			errorPh = false;
		} 
	//BT Validation
	 
	if ($('#tos').is(":checked") ==false || $('#tos2').is(":checked") ==false ) { 
		//ECP.alert('Error',window.messages.newsletter.checkboxerror);
        /* CI-4785 */
        $("#tos2Error").css({"display": "block"});
        document.getElementById('tos2Error').innerHTML = window.messages.newsletter.checkboxerror;
        /* CI-4785 */
		errorName = true;
	}
	
	//BT validation
	if(!errorName && !errorEmail && !errorMsg && !errorMob && !errorPh){		
	
		grecaptcha.execute();
	} 
	//BT validation
	return true;
});

function newsletterFormSubmit(){	
	$('form[name=newsletterform]')[0].submit();
}
//  EPL-6695

//ci-253
function emailTrim(param){
  var self = $(param);
  var valTrimmed = self.val().trim();
  self.val(valTrimmed);
}

// EPl-5157 Feedback by swathi
//ci-364
String.prototype.escapeSelector = function () {
    return this.replace(
        /([$%&()*+,./:;<=>?@\[\\\]^\{|}~])/g,
        '\\$1'
    );
};

/* CI-680*/
/*
 $('.exhaust-more-toggle').click(function(){
 $(this).parents('.exhaust-collection').find('.exhaust-product').show();
 $(this).hide();
 });
 */
$(document).on('click','.hide-exhuast-products',function (){
    // CI-1573
    $([document.documentElement, document.body]).animate({
        scrollTop: $(this).closest('.exhaust-collection').find('.exhaust-main').find('.exhaust-row').offset().top 
    }, 0);
    // CI-1573
closeAllExhaust();

});
$(document).on('click','.exhaust-more-toggle',function (){
    if($(this).find('.exhaust-less').is(':visible')){
        $(this).find('.exhaust-expand').show().removeClass('display-none');
        $(this).find('.exhaust-less').hide().removeClass('display-inline');
        return true;
    }
    
    
	$(this).find('.exhaust-expand').toggleClass('display-none');
    $(this).find('.exhaust-less').toggleClass('display-inline');
	$(this).parents('.exhaust-collection').find('.exhaust-product').toggle();
});

function closeAllExhaust(){
	$('.exhaust-product').removeClass('loaded').text('');
	$('.exhaust-expand').show().removeClass('display-none');;
	$('.exhaust-expand').css('display','inline');
	$(".exhaust-less").hide().removeClass('display-inline');
	
}


function loadExhaustProducts(obj) {
    var $selectedInstance = $(obj);
    var mapId = $selectedInstance.data('mapid');

    if (!mapId) {

        return false;
    }


	
    if ($('#exhaust-ele-' + mapId).hasClass('loaded')) {
		$('#exhaust-ele-' + mapId).removeClass('loaded');
		$('#exhaust-ele-' + mapId).text('');
        return false;
    }
	
    
       $selectedInstance.addClass('wait');
    $.ajax({
        type: "POST",
        url: ECP.getBase() + "/exhaust-system",
        data: {
            'mapId': mapId,

        },
		dataType: 'html',
        success: function (response) {
			try{
			var result = JSON.parse(response);
			
				if(!result.status){
					window.location.reload();
				}
			}catch(error){
				closeAllExhaust();
				/* CI-4825 */
                response = DOMPurify.sanitize(response, {ADD_ATTR: ['prdcode','onclick']} );
                /* CI-4825 */
                /* CI-4785 */	
                document.querySelector('#exhaust-ele-' + mapId).innerHTML = response;
				$('#exhaust-ele-' + mapId).addClass('loaded').show();
                /* CI-4785 */
				// $selectedInstance.hide();
				$selectedInstance.find('.exhaust-expand').hide();
				$selectedInstance.find(".exhaust-less").css('display','inline');
				$selectedInstance.removeClass('wait');
				//$('[data-toggle="popover"]').popover();
				bindExhaustCrousel();
                // CI-1573
                $([document.documentElement, document.body]).animate({
                    scrollTop: $selectedInstance.offset().top - 25 - $('.sale-counter').height()
                }, 1000);
                // CI-1573
			}

        }
    });
}


$(document).on('click', '.filterExhausts',function(){
	$(this).toggleClass('selected'); 
	var fitmentDetail = $(this).attr('value');
	$('.filtercheckboxes').filter('[data-filtertype="componentcode"][value="'+fitmentDetail+'"]').prop('checked',$(this).hasClass('selected'));
	$('#filterBrandProductListing').trigger('click')
});





//CI-963
function bindExhaustCrousel(){
	function switchOwl(slider){
  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if ( width >= 768 && slider.data('owlCarousel') == undefined) {
    slider.owlCarousel({
      	loop:false,
				nav:true,
				navText: ['', ''],
				margin:10,
				responsiveClass: true,
				slideBy: 1,
				responsiveBaseWidth:1000,
				autoHeight: true,
				touchDrag  : true,
				mouseDrag  : true,    
				dots:false,
				items:5,
			            slideBy: 1
    });
  } else if ( width < 768 && slider.data('owlCarousel') != undefined ) {
    slider.data('owlCarousel').destroy();
  }
}

$("document").ready(function(){
  var owl = $(".exhaust-filter-slider .owl-carousel");
  switchOwl(owl);
  $(window).on('resize',function(){
    switchOwl(owl);
  });
});

	

}
//CI-963
/* CI-680*/
//CI-1042 CI-1833
$(document).on('click', '.exhaust-filter-slider input[type=checkbox]', function () {
    var pageDiv = $('.current-page');
    if(pageDiv){
    pageDiv.text(1);}
    $('[data-value="'+$(this).val()+'"]').prop('checked',$(this).prop('checked'));
    ajaxProductsPagination(1, updatePagination, $(this),'topFilter');
});
function bind3boCrousel() {
    if ($('.owl-carousel').length < 1) {
  
        return false;
    }


    function switchOwl(slider) {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (width >= 768 && slider.data('owlCarousel') == undefined) {
            slider.owlCarousel({
                loop: false,
                nav: true,
                navText: ['', ''],
                margin: 10,
                responsiveClass: true,
                slideBy: 1,
                responsiveBaseWidth: 1000,
                autoHeight: true,
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                items: 5,
                slideBy: 1
            });
        } else if (width < 768 && slider.data('owlCarousel') != undefined) {
            slider.data('owlCarousel').destroy();
        }
    }

    $("document").ready(function () {
        var owl = $(".exhaust-filter-slider .owl-carousel");
        switchOwl(owl);
        $(window).on('resize', function () {
            switchOwl(owl);
        });
    });



}
$(document).ready(function(){
    
   if($('.exhaust-filter-slider').length>0){
       bind3boCrousel('');
       
   } 
    
});



//CI-1042 CI-1833


// EPL-4040

function hideJSerror(fieldID,timeInterval){
    setTimeout(function(){  
        $("#"+fieldID).css({"display": "none"}).text("");
    }, timeInterval);
}

$(document).ready(function(){
    /* EPL-9709 */
    var totalFilterApplied = parseInt( $('#selectioncounter').html() );
    if( totalFilterApplied > 0 ){        
        $('#filterBrandProductListing').trigger('click')
    }
    /* EPL-9709 */
    $('#sbuscribedToNewsLetter').on('keypress', function(e){        
        if( e.charCode == 13){
            e.preventDefault();
            e.stopPropagation();
            $('#subscribeToEmailBtn').trigger( 'click' );
            return false;
        }
    });
    $('#subscribeToEmailBtn').click(function(e){
        var errorEmail = false
        var email=$("#email").val();
        $('#sbuscribedToNewsLetter').children('.form-group').children('#email').prop("disabled", true);
        $('#sbuscribedToNewsLetter').children('.form-group').children('#subscribeToEmailBtn').prop("disabled", true);
        if(email == ''){
            hideJSerror('sbuscribedToNewsLetterSuccess',0);
            /* CI-4785 */
            $("#sbuscribedToNewsLetterError").css({"display": "block"});
            document.getElementById('sbuscribedToNewsLetterError').innerHTML = window.messages.newsletter.error;
            /* CI-4785 */
            hideJSerror('sbuscribedToNewsLetterError',3000);
            errorEmail = true
        }else if(!validateEmail(email)){
            hideJSerror('sbuscribedToNewsLetterSuccess',0);
            /* CI-4785 */
            $("#sbuscribedToNewsLetterError").css({"display": "block"});
            document.getElementById('sbuscribedToNewsLetterError').innerHTML = window.messages.newsletter.email.invalidError;
            /* CI-4785 */
            hideJSerror('sbuscribedToNewsLetterError',3000);
            errorEmail = true
        }else{
            $("#sbuscribedToNewsLetterError").css({"display": "none"}).text("");
            errorEmail = false
        }
        
        if(errorEmail==true){ 
            $('#sbuscribedToNewsLetter').children('.form-group').children('#email').removeAttr("disabled");
            $('#sbuscribedToNewsLetter').children('.form-group').children('#subscribeToEmailBtn').removeAttr("disabled");
        }
        
        if(errorEmail==false){
            $('#sbuscribedToNewsLetter').children('#email').css('')
            $.ajax({
                type: "POST",                 
                url: ECP.getBase()+"/secure/newsletter/othersubscription", 
                data: {'email': $("#email").val()},
                success: function(data) {
                    setTimeout(function(){ 
                    $('.signup_strip_bg').addClass('signupSuccess');
                    $('#sbuscribedToNewsLetter').children('.form-group').children('#email').removeAttr("disabled");
                    $('#sbuscribedToNewsLetter').children('.form-group').children('#subscribeToEmailBtn').removeAttr("disabled");
                    $('#sbuscribedToNewsLetter').children('.form-group').children('#email').val('');
                    $('.exclusiveSignUpPrivacy').hide();
                    $('#email').hide();
                    $('#subscribeToEmailBtn').hide();
                    
                    $( "form" ).children('div.form-group.signup-div').addClass( "formsuccessmsg" );                                            
                    $("#thankstextmessage").css({"display": "block"});                    
                    $("#sbuscribedToNewsLetterSuccess").css({"display": "block"}).text("You have been successfully subscribed to exclusive deals.");
                }, 2000);
                }        
            }); 
            
            
        }
        e.preventDefault();
    });

    /* CI-6448 */
    $('.recent-wishlists .wishlist-icon, .recent-wishlists .wishlist-text').on('click', function(e){
        var prdcode = $(e.target).closest(".wishlist-icon").data('prdcode');
        
        if(typeof prdcode !== "undefined")
        {
            localStorage.setItem('list_item_name'+prdcode, 'Recently viewed'); /** DCX-457 **/
        }
    });    
    /* CI-6448 */

      //CI-2036
	$('.wishlist-text').on('click', function (e) {	
		$(this).prev('.wishlist-icon').trigger('click');
	 });
//CI-2036
    // CI-1651 
    $('.wishlist-icon').on('click', function () {
        var $this = $(this);
        var productCode = $this.data('prdcode');
        var productTitle = $this.data('prdtitle');

        /* CI-6448 */
        var ga4id               = productCode;
        var ga4title            = productTitle;
        var ga4category         = $('#PQ_' + ga4id).attr('data-category');
        var ga4brand            = $('#PQ_' + ga4id).attr('data-brand');
        var ga4price            = $('#PQ_' + ga4id).attr('data-amount');        
        var ga4idcopoun         = $('#PQ_' + ga4id).attr('data-basketdiscount') ?? '';
        var ga4discount         = $('#PQ_' + ga4id).attr('data-discount') ?? 0;
        var category            = ga4category.split("/");
        category[4]             = category[4] ?? '';
        var itemListName        = $('#PQ_' + ga4id).attr('data-list') ?? '';
        
        if ( itemListName == '') {
            itemListName        = localStorage.getItem('list_item_name' + ga4id) ?? category[4];
        }
        // DCX-459
        if(getCookie('issearched') == 0 && localStorage.getItem('list_item_name'+ga4id) == ''){
			localStorage.setItem('list_item_name'+ga4id, 'Search Listing');		
		}
        // DCX-459
         /** DCX-457 **/
        
        /** DCX-457 **/

        if (window.location.href.indexOf("/search/") > -1) {
            itemListName        = 'Search results';
        }
        
        var gtm_wishlist_item   = {
                                        item_id: ga4id,
                                        item_name: ga4title,
                                        coupon: ga4idcopoun,
                                        discount: Number(parseFloat(ga4discount).toFixed(2)) ?? 0,
                                        item_brand: ga4brand,
                                        item_category: category[1] ?? '',
                                        item_category2: category[2] ?? '',
                                        item_category3: category[3] ?? '',
                                        item_category4: category[4] ?? '',
                                        item_category5: category[5] ?? '',
                                        price: ga4price,
                                        item_list_name:itemListName,
                                        quantity: 1
                                    };

        /* CI-6448 */

        $.ajax({
            type: "POST",
            url: ECP.getBase() + "/my-account/my-wishList/addUpdateWishList",
            data: {
                'Productcode': productCode,
                'ProductTitle': productTitle
            },
            success: function (data) {
                if (data) {
                    data = JSON.parse(data);
                    if (data.total >= 0 && data.total !== '') {
                        if (data.msg == 'ADDED') {
                            /* CI-6448 */                                
                            // GA4 event track for add_to_wishlist
                            dataLayer_wislist('add_to_wishlist', gtm_wishlist_item);
                            /* CI-6448 */
                            $this.html('<img src="' + $("body").data("statichost") + '/heart-filled.svg"  />');
                            $this.siblings('.wishlist-text').html(window.messages.wishListAfterAddedText.label);
                            $('.wishlist-cart-box').removeClass('hide-counter');
                        } else if (data.msg == 'DELETED' || data.total == 0) {
                            $this.html('<img src="' + $("body").data("statichost") + '/heart.svg"  />');
                            $this.siblings('.wishlist-text').html(window.messages.wishListBeforeAddedText.label);
                            data.total == 0 ? $('.wishlist-cart-box').addClass('hide-counter') : null;
                        }
                        /* CI-4785 */	
                        if($('.wishlist-cart-box').length > 0){
             /* CI-4825 */           document.querySelector('.wishlist-cart-box').innerHTML = DOMPurify.sanitize(data.total);
             /* CI-4825 */
                        }
                        /* CI-4785 */
                    } else {
                        $('#wishlistmaxCount').find('.modal-body p').text("You can add a maximum of " + $('.maxwishlistLimit').val() + " items to your wishlist")
                        $('#wishlistmaxCount').openModal();
                    }
                } else {
                    window.location.href = '/my-wishlist';
                }
            }
        });
    });
    $('.img-cancel').on('click', function () {
        var $this = $(this);
        $('#wishlistDelete').openModal({
            ready: function () {
                var productCode = $this.data('prdcode');
                $('#wishlistDelete').on('click', '.delete-wishlist-product', function () {
                    $.ajax({
                        type: "POST",
                        url: ECP.getBase() + "/my-account/my-wishList/addUpdateWishList",
                        data: {
                            'Productcode': productCode,
                        },
                        success: function (data) {
                            if (data) {
                                data = JSON.parse(data);
                                if (data.total >= 0 && data.total !== '') {
                                    if (data.msg == 'DELETED') {
                                        $this.parent().parent('li').remove();
                                        if (data.total == 0) {
                                            $('.wishlist-cart-box').addClass('hide-counter');
                                            $('.wishlist-section.row').removeClass('nowishlist');
                                        }
                                    } /* CI-6448 */    
                                    else
                                    {                               
                                        // GA4 event track for add_to_wishlist
                                        dataLayer_wislist('add_to_wishlist', gtm_wishlist_item);
                                    }
                                    /* CI-6448 */
                                    /* CI-4785 */	
                                    if($('.wishlist-cart-box').length > 0){
       /* CI-4825 */                             document.querySelector('.wishlist-cart-box').innerHTML = DOMPurify.sanitize(data.total);
       /* CI-4825 */
                                    }
                                    /* CI-4785 */
                                }
                            } else {
                                window.location.href = '/my-wishlist';
                            }

                        }
                    });
                    $('#wishlistDelete').closeModal({
                        complete: function () {
                            $('#wishlistDelete').off('click', '.delete-wishlist-product');
                        }
                    });
                });
            },
            complete: function () {
                $('#wishlistDelete').off('click', '.delete-wishlist-product');
            }
        });

    });
    // CI-1651 
});



function feedbackFormSubmit(){
    $('form[name=feedbackForm]')[0].submit();
}

/* epl-9496 */
function getQueryStringValue(key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

function includes(container, value) {
    var returnValue = false;
    var pos = container.indexOf(value);
    if (pos >= 0) {
        returnValue = true;
    }
    return returnValue;
}

$(function() {
    if ($('.catcodefilter').length > 0) {
        $('.catcodefilter').click(function(e) {
            e.preventDefault();
            var substring = "catcode";
            var uri = window.location.href;
            var url = "";
            var myParam = getQueryStringValue("catcode");
            //var urlParams = new URLSearchParams(window.location.search);
            //var myParam = urlParams.get('catcode');
            var explodeduriparams = [];
            if (myParam != '') {
                var explodeduriparams = myParam.split("|");
            }

            var selectedkey = $(this).attr('data-catcode');

            if (includes(explodeduriparams, selectedkey) == true) {
                var index = explodeduriparams.indexOf(selectedkey);
                if (index > -1) {
                    explodeduriparams.splice(index, 1);
                    params = explodeduriparams.join('|');
                    if (params == '') {
                        // EPL-15590
                        window.location = checkRedirectURL(uri.split("?")[0]);
                        // EPL-15590
                    } else {
                        url = updateUrlParameters(uri, 'page', 1);

                        // EPL-15590
                        var updatedlink = checkRedirectURL(url);
                        window.location = updateUrlParameters(updatedlink, 'catcode', params);
                        // EPL-15590
                    }
                }
            } else {
                if (myParam != '' && myParam == selectedkey && includes(uri, substring)) {
                    url = uri.split("?")[0];

                    // EPL-15590
                    window.location = checkRedirectURL(url);
                    // EPL-15590
                } else {
                    var catcodes = "";
                    if (myParam == '') {
                        catcodes = selectedkey;
                    }
                    if (myParam != '' && myParam != selectedkey) {
                        catcodes = myParam + '|' + selectedkey
                    }
                     /* CI-5681 */
                    url = (updateUrlParameters(uri, 'page', 1), updateUrlParameters(uri, 'catcode', catcodes));
                    window.location = checkRedirectURL(url);
                    /* CI-5681 */
                }
            }
        })
    }
});





function searchBind3boCrousel() {
    if ($('#scrollerCatcode .owl-carousel').length < 1) {

        return false;
    }

    function searchSwitchOwl(slider) {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var tocuhoption='';
		if(isipad==1){
			tocuhoption=true;
		} else {
			tocuhoption=false;
		}
        if (width >= 768 && slider.data('owlCarousel') == undefined) {
            slider.owlCarousel({
                loop: false,
                nav: true,
                navText: ['', ''],
                margin: 10,
                responsiveClass: true,
                slideBy: 1,
                responsiveBaseWidth: 1000,
                autoHeight: true,
                touchDrag: tocuhoption,
                mouseDrag: false,
                dots: false,
                items: 5
            });
            
        } else if (width < 768 && slider.data('owlCarousel') != undefined) {
            slider.data('owlCarousel').destroy();
        }
    }

    $("document").ready(function() {
        var owl = $("#scrollerCatcode .exhaust-filter-sliders .owl-carousel");
        searchSwitchOwl(owl);
        $(window).on('resize', function() {
            searchSwitchOwl(owl);
        });
    });

}


$(document).ready(function() {
    if ($('#scrollerCatcode .exhaust-filter-sliders').length > 0) {
        searchBind3boCrousel('');
        var myParam = getQueryStringValue("catcode");		
		if(myParam!=''){
            $('#clearsearchcategory').css('display','block');
            $('html, body').animate({   
				scrollTop: $("#searchedproducts").offset().top
            }, 500);
        } else {
            $('#clearsearchcategory').css('display','none');
        } 
    }
    if ($(window).width() <= 767) {
        $("#scrollerCatcode .exhaust-filter-sliders .owl-carousel").mCustomScrollbar({
            theme: "dark",
            scrollInertia: 0,
            axis: "x"
        });
    }
    
    
    $('#clearsearchcategory').click(function(){
        // EPL-15590
        window.location    =  checkRedirectURL(window.location.href.split('?')[0]);
        // EPL-15590
	return true;	
    }); 
    
	 // CI-4386
		var embwis_params = new URLSearchParams(window.location.search);
		console.log("params: "+embwis_params);
		if(embwis_params.has('track_emwbis')) {
			var category_value = '';
			var embwis_value = embwis_params.get('track_emwbis');
			if(embwis_value == 'list') {
				category_value = 'On the list';
			} else if (embwis_value == 'instock') {
				category_value = 'In stock';
			} else if (embwis_value == 'outstock') {
				category_value = 'Not in stock';
			}

			
		}
		// CI-4386
    
});
// EPL-9496
/*** EPL-4710 EPL-9813 EPL-9823 */
function coreSlider(selected,db){	
	$( "#slider-range" ).slider({
		range: true,
		min: db[0],
		max: db[1],
		values: selected,
		slide: function( event, ui ) {
/*** EPL-4710 EPL-9813 EPL-9823 - phase 2*/
            if (ui.values[0] == ui.values[1]) {
                return false;
            }
/*** EPL-4710 EPL-9813 EPL-9823 - phase 2*/
			/* CI-4785 */	
            if($('#amount').length > 0){ 
            document.querySelector('#amount').innerHTML = "&#163;" + ui.values[ 0 ] + " - &#163;" + ui.values[ 1 ];
            }
            /* CI-4785 */
			$( "#min" ).val(ui.values[0]);
			$( "#max" ).val(ui.values[1]);
            /* CI-4785 */	
            if($('#minspan').length > 0){ 
            document.querySelector('#minspan').innerHTML = "&#163;"+db[0];
            }
            /* CI-4785 */
			$('#minspan').attr("data-price-min",db[0] );
            /* CI-4785 */	
            if($('#maxspan').length > 0){ 
            document.querySelector('#maxspan').innerHTML = "&#163;"+db[1];
            }
            /* CI-4785 */
			$('#maxspan').attr("data-price-max",db[1] );
			
		},
		stop:updateUrlpricefilter
	});			
}

function updatePriceOnseletFilters(selected,db,pricemin,pricemax,priceselmin,priceselmax){
	var amount='';
	var minp='';
	var maxp='';
	if(priceselmin>=pricemin && priceselmin<=pricemax) {
		amount += "&#163;" + selected[0];
		minp=selected[0];
	} else {
		amount += "&#163;" + db[0];
		minp=db[0];
	}

	if(priceselmax>=pricemin && priceselmax<=pricemax){
		amount +=" - &#163;" + selected[1];
		maxp=selected[1];
	} else {
		amount +=" - &#163;" + db[1];
		maxp=db[1];
	}
	/* CI-4785 */	
    if($('#amount').length > 0){ 
    document.querySelector('#amount').innerHTML = amount;
    }
    if($('#minspan').length > 0){ 
    document.querySelector('#minspan').innerHTML = "&#163;"+db[0];
    }
    /* CI-4785 */
	$('#minspan').attr("data-price-min",db[0] );
    /* CI-4785 */	
    if($('#maxspan').length > 0){ 
    document.querySelector('#maxspan').innerHTML = "&#163;"+db[1];
    }
    /* CI-4785 */
	$('#maxspan').attr("data-price-max",db[1] );
	$( "#min" ).val();
	$( "#min" ).val(minp);
	$( "#max" ).val()
	$( "#max" ).val(maxp);	
}

function updatepricelabel(db){
	var amount='';
	var minp='';
	var maxp='';
	amount += "&#163;" + db[0];
	minp=db[0];
    /** Live - Veracode security fixes - Cross-Site Scripting*/
    if(db[1]) {
	    amount +=" - &#163;" + db[1];
    }
    /** Live - Veracode security fixes - Cross-Site Scripting*/
	maxp=db[1];
	/* CI-4785 */	
if($('#amount').length > 0){ 	
    document.querySelector('#amount').innerHTML = amount;
}
if($('#minspan').length > 0){ 
    document.querySelector('#minspan').innerHTML = "&#163;"+db[0];
}
    /* CI-4785 */
	$('#minspan').attr("data-price-min",db[0] );
    /* CI-4785 */	
    if($('#maxspan').length > 0){ 
    document.querySelector('#maxspan').innerHTML = "&#163;"+db[1];
    }
    /* CI-4785 */
	$('#maxspan').attr("data-price-max",db[1] ); 
}
function sliderprcie(){	
	if(typeof dbmin!='undefined' && typeof dbmax!='undefined'){
		var pricemin=parseInt(dbmin);
		var pricemax=parseInt(dbmax);
	 	var tmp=pricemax-pricemin;
		var priceselmin = pricemin;
		var priceselmax = pricemax;
		if(selmin>=pricemin && selmin<=pricemax){		
			priceselmin = parseInt(selmin);
		} else {
			priceselmin = pricemin;
		}
		if(selmax>=pricemin && selmax<=pricemax){
			priceselmax = parseInt(selmax);
		} else {
			priceselmax = pricemax;
		}
		



		var myParam = getQueryStringValue("pricerange");
		var explodeduriparams = [];
		if(myParam!='' && myParam!='undefined'){
			explodeduriparams = myParam.split("|");
			
		 
			selmin=explodeduriparams[0];
			selmax=explodeduriparams[1];
			if(selmin>=pricemin && selmin<=pricemax){		
				priceselmin = parseInt(selmin);
			} else {
				priceselmin = pricemin;
			}
			if(selmax>=pricemin && selmax<=pricemax){
				priceselmax = parseInt(selmax);
			} else {
				priceselmax = pricemax;
			}
			


			 

            /* CI-4785 */	
            if($('#amount').length > 0){ 
            /* CI-5475 */
            document.querySelector('#amount').innerHTML = DOMPurify.sanitize("&#163;" + selmin + " - &#163;" + selmax);
            /* CI-5475 */
            }
            /* CI-4785 */   
			$( "#min" ).val(selmin);
			$( "#max" ).val(selmax);
            /* CI-4785 */	
if($('#minspan').length > 0){             
            document.querySelector('#minspan').innerHTML = "&#163;"+pricemin;
}
            /* CI-4785 */
			$('#minspan').attr("data-price-min",pricemin );
            /* CI-4785 */	
            if($('#maxspan').length > 0){ 
            document.querySelector('#maxspan').innerHTML = "&#163;"+pricemax;
            }
            /* CI-4785 */
			$('#maxspan').attr("data-price-max",pricemax );

		} else {
		selmin=priceselmin;
		selmax=priceselmax;
		}
	 




		
		var price='pricerange';
		var pricevalues=priceselmin+'|'+priceselmax;
		var url   = removeURLParameter(window.location.href, 'pricerange');
		url 			= updateUrlParameters(url, price, pricevalues);
		window.history.propertyIsEnumerable('','', url);		
		var selected=[ priceselmin, priceselmax ];
		var db=[ pricemin, pricemax ];	
		coreSlider(selected,db);
		if(selmin!='' && selmin!='undefined'  && selmax!='' && selmax!='undefined'){
			updatePriceOnseletFilters(selected,db,pricemin,pricemax,priceselmin,priceselmax);		
		} else {
			updatepricelabel(db);			
		}
	}
}

function loadpriceslider(){
 	var pricerange= GetURLParameter('pricerange');
	if(typeof pricerange=='undefined'){
		if(typeof dbmin!='undefined' && typeof dbmax!='undefined'){
			var pricemin=parseInt(dbmin);
			var pricemax=parseInt(dbmax);
			var tmp=pricemax-pricemin;
			var priceselmin = pricemin;
			var priceselmax = pricemax;
			var selected=[ priceselmin, priceselmax ];
			var db=[ pricemin, pricemax ];		
			coreSlider(selected,db);
			if(selmin!='' && selmin!='undefined'  && selmax!='' && selmax!='undefined'){
				updatePriceOnseletFilters(selected,db,pricemin,pricemax,priceselmin,priceselmax);
			} else {
				updatepricelabel(db);
			}			
		}
	} else {
		sliderprcie();
	}
}

function updateUrlpricefilter(){
	var pageDiv 	= $('.current-page');	 
	ajaxProductsPagination(1, updatePagination,$(this));	
}

function removepricefilters(){		
	var url   = removeURLParameter(window.location.href, 'pricerange');
	window.history.propertyIsEnumerable({}, document.title, url);		
}



function resetSlider() {
	var pricerange= GetURLParameter('pricerange');
	if(typeof pricerange=='undefined'){
		var pricemin=parseInt($('#minspan').attr('data-price-min'));
		var pricemax=parseInt($('#maxspan').attr('data-price-max'));

		var $slider = $("#slider-range");
		$slider.slider("values", 0, pricemin);
		$slider.slider("values", 1, pricemax);
	}

	
  }

$(document).ready(function(){
		
	loadpriceslider();	
	// epl-4710
	var myParam = getQueryStringValue("pricerange");
 		if(myParam!='' && myParam!='undefined'){
		$('.modal-content .modal-header').children('h4.modal-title').text('Note');		
		}
	// epl-4710
	if ( $(window).width() < 768  && $('.refine-mobile-btn').hasClass('open')==false) {
		$('.pricediv').css('display','none');
	}
});


function mobileevents(){
	$('.leftcol3bo #category-filterss #mob-category-filterss').click(function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open').addClass('close'); 
			$('#mobdivpricefilters').hide( "slow" );
		} else {
		 	$(this).removeClass('close').addClass('open');
			$('#mobdivpricefilters').show( "slow" );
		}
	});
	$(document).on('click','.refine-mobile-btn',function(){
		if($(this).hasClass('open')==false){	
			if($('#category-filterss').css('display')=='none' || $('#category-filterss').css('display')==undefined ){ 
				$('#category-filterss').removeClass('close').addClass('open');
				$('.pricediv').css('display','block'); 
	 			$('#category-filterss').show(); 
			} 
			if($('#category-filterss').css('display')=='block'){ 
				$('#category-filterss').removeClass('open').addClass('close');
				$('.pricediv').css('display','none'); 
	 			$('#category-filterss').hide(); 
			} 
			} else {
				if($('#category-filterss').css('display')=='none' || $('#category-filterss').css('display')==undefined ){ 
					$('#category-filterss').removeClass('close').addClass('open');
					$('.pricediv').css('display','block'); 
					 $('#category-filterss').show(); 
			} else {
				// $('#category-filterss').removeClass('open').addClass('close');
				// $('.pricediv').css('display','none'); 
	 			// $('#category-filterss').hide(); 
			}
			}
	});
	$(document).on('click','.o3b-section .leftcol3bo .mobile-buttons .apply-btn',function(){
		$('#category-filterss').removeClass('open').addClass('close'); 
		$('#category-filterss').hide(); 
	});
	$(document).on('click','.leftcol3bo .refine-tabbing span',function(){	
	var getData = $(this).attr('data-id');
		if(getData=='category-filters'){
			$('#category-filterss').removeClass('open').addClass('close'); 
				$('#category-filterss').hide(); 
		}	
		
		if(getData=='car-tab-filters' || getData=='tab-filters'){ 
		 	if($('#category-filterss').hasClass('open')){      
				$('#category-filterss').removeClass('open').addClass('close'); 
				$('#category-filterss').hide(); 
			} 
			if($('#category-filterss').hasClass('close')){      
				$('#category-filterss').removeClass('close').addClass('open');
				$('.pricediv').css('display','block'); 
				$('#category-filterss').show(); 
			} 
		 
		}
	});
}



/*** EPL-4710 EPL-9813 EPL-9823 */

/*CI-1833 */
var ipadwidth = $(window).width();
$(window).on("orientationchange", function () {
    if (ipadwidth > 767 || ipadwidth < 767) {
        location.reload(true);
    }
});
/*CI-1833 */
/*** EPL-12557 ***/
function trackOrderSubmit(){
	$('form[name=track-order]')[0].submit();
}
$(document).ready(function(){
    $('#trackOrderForm-btn').click(function(){
        var errorOrder = false;
        var errorPCode = false;
        
        if ($("#orderid").val().trim() == '') {
            /* CI-4785 */
            $("#orderid").siblings('.error').css({"display": "block"});
            document.getElementById('orderid').nextSibling.innerHTML = messages.trackorder.orderid.error;
            /* CI-4785 */
            errorOrder = true;
        }else{
            $("#orderid").siblings('.error').css({"display": "none"}).text("");
            errorOrder = false
        }

        if($("#postcode").val().trim() == ''){
            /* CI-4785 */
            $("#postcode").siblings('.error').css({"display": "block"});
            document.getElementById('postcode').nextSibling.innerHTML = messages.trackorder.orderid.error;
            /* CI-4785 */
            errorPCode = true
        }else{
            $("#postcode").siblings('.error').css({"display": "none"}).text("");
            errorPCode = false
        }

        if(!errorOrder && !errorPCode){
            grecaptcha.execute();
        }
        return true;
    });
});
/*** EPL-12557 ***/

// EPL-13206
function signUpFormSubmit() {
	$('form#register-form').submit();
}

$('body').on('click', '#js-sign-up-btn', function (e) {
    e.preventDefault();

    //BT validation
    var isError = 0;
    var isEmpty = false;
    //BT validation

    $('form#register-form').each(function(){
        $(this).find(':input').each(function() {
            if ($(this).attr('id') && $(this).hasClass('required')) {
                isEmpty = isInputEmpty('#' + $(this).attr('id'), false);
                //BT Validation
                if (isEmpty) {
                    isError = isError + 1	;
                }
                //BT Validation
            }
        });
    });
    
   //BT validation
		var firstname  = $("input#firstname").val(); 
		var secondname = $("input#secondname").val(); 
		var address1 = $('input#address1').val();
		var address2 = $('input#address2').val();  
        var mobileno = $('input#mobileno').val();  
        var phoneno = $('input#phoneno').val();  

		if($("input[name='firstname']").val() == '') {
			$('#FN').show().text("Please enter valid first name");
			isError = isError + 1;	
		}		
		if (firstname!='' || firstname!=undefined || $("#firstname").length>40) {
			$('#FN').show().text("Maximum length allowed 40 characters");
			isError = isError + 1	;
		} else if (firstName.length <= 40 ) {			
		   $('#FN').hide().text("");
			isError = isError + 0	;
		}
		 
		if($("input[name='secondname']").val() == '') {
			$('#LN').show().text("Please enter valid first name");
			isError = isError + 1;	
		}		
		if (secondname!='' || secondname!=undefined || $("#secondname").length>40) {
			$('#LN').show().text("Maximum length allowed 40 characters");
			isError = isError + 1	;
		} else if (secondname.length <= 40 ) {			
		   $('#LN').hide().text("");
			isError = isError + 0	;
		}
		 
	

		if($("input[name='address1']").is(':visible') && $("input[name='address1']").val() == '') {
			$('#AD1').show().text("Please enter valid address.");
			isError = isError + 1;	
		}
	
		if(address1.length > 50 ){	
			$('#AD1').show().text("Maximum length allowed 50 characters");		
			isError = isError + 1;     
		}	else if (address1.length <= 50 ) {			
			$('#AD1').hide().text("");			
			isError = isError + 0;
		} 
		

		if($("input[name='address2']").is(':visible') && $("input[name='address2']").val() == '') {
			$('#AD2').hide().text("");
			$('#AD2').remove();
		}

		
		if(address2.length > 50 ){	
			$('#AD2').remove();
			$('<div id="AD2" class="error address2_error">Maximum length allowed 50 characters</div>').insertAfter("#address2");
			$('#AD2').show();
			isError = isError + 1;     
		}	else if (address2.length <= 50 ) {			
			$('#AD2').hide().text("");
			$('#AD2').remove();
			isError = isError + 0;
		} 
	
		if($("input[name='town']").val() != '') {
			$('.town_error').hide().text("");
			$('.town_error').remove();
		}
		
		//BT Validation
		if(mobileno!=''){
			var regex = new RegExp(/^[0-9]+$/);
			if(!mobileno.match(regex)) {
				$('#PH').show().text("Please enter valid mobile no.");
				isError = isError + 1;
			}	
			if(mobileno.match(regex) && mobileno.length < 10) { 
				$('#PH').show().text("Mobile no. must contain minimum 10 characters.");
				isError = isError + 1;
			}
			if(mobileno.match(regex) && mobileno.length > 15) { 
				$('#PH').show().text("Mobile no. must contain maximum 15 characters.");
				isError = isError + 1;
			}
		}
		if(phoneno!=''){
			var regex = new RegExp(/^[0-9]+$/);
			if(!phoneno.match(regex)) {
				$('#PH').show().text("Please enter valid phoneno.");
				isError = isError + 1;
			}	
			if(mobiphonenoleno.match(regex) && phoneno.length < 10) { 
				$('#PH').show().text("Phoneno must contain minimum 10 characters.");
				isError = isError + 1;
			}
			if(phoneno.match(regex) && phoneno.length > 20) { 
				$('#PH').show().text("Phoneno must contain maximum 20 characters.");
				isError = isError + 1;
			}
	
		}
		//BT Validation
		
		if (isError > 0 ) {
			return false;
		}
		//BT validation	

        var passwordError = validatePassword('#password');
        var cPasswordError = validateCPassword('#cpassword', '#password');
        if (!passwordError && !cPasswordError) {
            // EPL-13101
            if( window.settings.registercaptcha.enabled == 1 ){
                grecaptcha.execute();				
            } else {
                signUpFormSubmit();
            }
            // EPL-13101
        }
});

/*EPL-14549*/
function sendAdsErrorGaEvent(name){
	
	
}
function adsdownalertbox(){
	var html = '<div class="adsalert-box">\
		<span class="adsalert-box-text">Oops, looks like a bolt came loose under our hood. Please try again.</span>\
		<span class="adsalert-box-img">	<img class="desktop" src="' + cdnUrl + '/ecp/images/car_err.jpg" alt="Euro Car Parts"></span>\
	</div><span style="clear:both"></span>';

	ECP.alert('Sorry...',html,{closebuttontext:'Try Again','class':'adsboxmodal'});
	
}


$(document).ready(function(){
	if(typeof adsdownfunction !== undefined && adsdownfunction){
		adsdownalertbox();
		sendAdsErrorGaEvent(adsdownfunction);
	}	


});

// CI-5590
$("#covidUpdateAlert").on('click', function(){
	document.cookie = "siteMsg=1; path=/";
});
// CI-5590

function sendErrorGaEvent(name){
	
	
}

$(document ).ajaxComplete(function( event, xhr, settings ) {
	if(xhr.getResponseHeader('x-k8down')){
		sendErrorGaEvent('k8Timeout');
	}
	if( $('ul.nav-tabs ').length>0){
		 $('ul.nav-tabs ').tabs();
	
		if($('.candc a').hasClass('active')){
			storeCollectionActive();
		} else if($('.deliveryc a').hasClass('active')){
			homeDeliveryActive();
		} 
      $('.check-nav li a').on('click',function(){
        setTimeout(function(){
            if($('.candc a').hasClass('active')){
                storeCollectionActive();
				$('.tab-content').removeClass('fifm-acive');
            } else if($('.deliveryc a').hasClass('active')){
				$('.tab-content').removeClass('fifm-acive');
                homeDeliveryActive();
            } 
        },100)
    });
		 
	}
});	

/*EPL-14549*/
// EPL-13206

function onCheckoutCncHwdClick(currentEle,productCheckoutArray,basketType) {
    dataLayer.push({
        'event' : 'productCheckout',
        'ecommerce' : { 
            'checkout' : {
                'products' : productCheckoutArray,
                'actionField' : {'step' : 1 }
            }
        }
    });
    /* CI-6510 */
	beginCheckoutGa4Tag(currentEle);
	/* CI-6510 */
    $('.mixbasketouter').addClass('wait');
    $('.mixbasketouter a.'+currentEle+' .wait').css('display', 'block');
    $('.mixbasketouter a.'+currentEle+' .loader-hide').css('visibility', 'hidden');

    $.ajax({
        type: "POST",                 
        url: ECP.getBase()+"/basket/basket/addToBasketType", 
        data: {'checkoutType': basketType},
        success: function(data) {
            if(data == '1'){
            /** FIFM-1216 Fifmbasket */
                window.setTimeout(function () {
						/*POCI-28*/
						if(basketType=="cncbasket"){
                            /* CI-4825 */
							location.href = checkRedirectURL(window.settings.fifmcnccheckouturl);
						}else{
                            location.href = checkRedirectURL(window.settings.fifmukcnccheckouturl); 
                            /* CI-4825 */
						}
						/*POCI-28*/
                    }, 2000);/** FIFM-1216 Fifmbasket */
            } else {
            alert("No product added found");
            }
        }        
    });
}

/* ADSV2-191 ADSV2-298 ADSV2-376*/
$(document).ready(function(){
	var width = $(window).width();
	$('.dataTablesBox').hide();
	if(width >= 768){
		var compatibleTab = $('.responsive-tabs__list').find( "li:last-child" );
		compatibleTab.one( "click", function() {
			var prcode = $(".pro-detail").html();
			prcode = prcode.substr(14);
			var html = '';
			$.ajax({
				type: "POST",			     
				url: ECP.getBase() + "/catalog/products/compatiblevehicles", 
				data: {'prcode': prcode},
				success: function(data) {
					$('.loaderclasscompatible').hide();
					data = $.parseJSON(data);
					if(data.length == 0){
						html += '<thead><tr><th>Make</th><th>Model</th><th>Engine Size</th><th>Fuel Type</th><th>From</th><th>To</th></tr></thead><tbody>';
					}else{
						html += '<tfoot><tr><th>Make</th><th>Model</th><th>Engine Size</th><th>Fuel Type</th><th>From</th><th>To</th></tr></tfoot><thead><tr><th>Make</th><th>Model</th><th>Engine Size</th><th>Fuel Type</th><th>From</th><th>To</th></tr></thead><tbody>';
					}
					if(data.length == 0){
						html += '<tr><td colspan="6" class="no_result"><h4>No compatible vehicles Found</h4></td></tr></tbody>';
						$("<div class='headingcompat'>Compatible Vehicles (0)</div>").insertAfter(".main-heading");
						$('.dataTablesBox').show();
                        /* EPL-16801*/
						$(".compatiblevehicles-data").append($.parseHTML(html));
                        /* EPL-16801*/
						dataTablesImplement();
					}else{
						var totalcount = 0;
						$.each(data, function (k, values) {
							$.each(values, function (key, value) {
								if(value != null){
									html += '<tr><td data-label="Make">'+ value.Manufacturer+'</td><td data-label="Model">'+  value.Model+'</td><td data-label="Engine Size">'+ value.EngineSizeDescription+'</td><td data-label="Fuel Type">'+  value.Fuel+'</td><td data-label="From">'+  value.DateFrom+'</td><td data-label="To">'+  value.DateTo+'</td></tr>';
								}
								if($.isNumeric(key)){
									totalcount++;
								} 
							});
						});
						$("<div class='headingcompat'>Compatible Vehicles ("+ totalcount+")</div>").insertAfter(".main-heading");
						html += '</tbody>';
						$('.dataTablesBox').show();
                        /* EPL-16801*/
						$(".compatiblevehicles-data").append($.parseHTML(html));
                        /* EPL-16801*/
						dataTablesImplement();
					}
				}
		  });
		});
	}else{
		$('.compatiblevehiclestab').one( "click", function() {
			var prcode = $(".pro-detail").html();
			prcode = prcode.substr(14);
			var html = '';
			$.ajax({
				type: "POST",			     
				url: ECP.getBase() + "/catalog/products/compatiblevehicles", 
				data: {'prcode': prcode},
				success: function(data) {
					$('.loaderclasscompatible').hide();
					data = $.parseJSON(data);
					if(data.length == 0){
						html += '<thead><tr><th>Make</th><th>Model</th><th>Engine Size</th><th>Fuel Type</th><th>From</th><th>To</th></tr></thead><tbody>';
					}else{
						html += '<tfoot><tr><th>Make</th><th>Model</th><th>Engine Size</th><th>Fuel Type</th><th>From</th><th>To</th></tr></tfoot><thead><tr><th>Make</th><th>Model</th><th>Engine Size</th><th>Fuel Type</th><th>From</th><th>To</th></tr></thead><tbody>';
					}
					if(data.length == 0){
						html += '<tr><td colspan="6" class="no_result"><h4>No compatible vehicles Found</h4></td></tr></tbody>';
						$("<div class='headingcompat'>Compatible Vehicles (0)</div>").insertAfter(".main-heading");
						$('.dataTablesBox').show();
                        /* EPL-16801*/
						$(".compatiblevehicles-data").append($.parseHTML(html));
                        /* EPL-16801*/
						dataTablesImplement();
					}else{
						var totalcount = 0;
						$.each(data, function (k, values) {
							$.each(values, function (key, value) {
								if(value != null){
									html += '<tr><td data-label="Make">'+ value.Manufacturer+'</td><td data-label="Model">'+  value.Model+'</td><td data-label="Engine Size">'+ value.EngineSizeDescription+'</td><td data-label="Fuel Type">'+  value.Fuel+'</td><td data-label="From">'+  value.DateFrom+'</td><td data-label="To">'+  value.DateTo+'</td></tr>';
								}
								if($.isNumeric(key)){
									totalcount++;
								} 
							});
						});
						$("<div class='headingcompat'>Compatible Vehicles ("+ totalcount+")</div>").insertAfter(".main-heading");
						html += '</tbody>';
						$('.dataTablesBox').show();
                        /* EPL-16801*/
						$(".compatiblevehicles-data").append($.parseHTML(html));
                        /* EPL-16801*/
						dataTablesImplement();
					}
				}
		    });
		});
	}
});

function dataTablesImplement(){
	$('.compatiblevehicles-data').DataTable({
		"dom":"<'row'<'col-sm-6'l><'col-sm-6'f>>" +
		"<'row'<'col-sm-12 datatable-responsive'tr>>" +
		"<'row'<'col-sm-5'i><'col-sm-7'p>>",
		responsive: true,
		"pageLength": 20,
		"bLengthChange" : false,
		"ordering": false,
		"bInfo" : false,
        "autoWidth": false,
		initComplete: function () {
			this.api()
			    .columns([0,1,2,3,4,5])
				   .every(function (d) {
						var column = this;
						var theadname = $('.compatiblevehicles-data th').eq([d]).text();
						var select = $('<select id="custom_'+theadname+'"><option value="">'+theadname+'</option></select>')
						.appendTo($(column.footer()).empty())
							.on('change', function () {
								var val = $.fn.dataTable.util.escapeRegex($(this).val());
	
								column.search(val ? '^' + val + '$' : '', true, false).draw();
							});
 
					column
						.data()
						.unique()
						.sort()
						.each(function (d, j) {
							select.append('<option value="' + d + '">' + d + '</option>');
						});
				});
		},
	});
}
/**adsv2-450 */
$(document).on('click', '#custom_From', function(){
	var opts = $("#custom_From").find("option").not(':first');
	opts.sort(function(a,b){ 
		if(a.innerHTML.indexOf("/") == -1)
		return -1;
		return getDate(a.innerHTML).getTime() > getDate(b.innerHTML).getTime() ? 1 : -1;
	});
	var length = $("#custom_From option").length;
	opts.each(function(x){ 
		if(x != 0) {
			$("#custom_From").append(this);	
		} 
		if(length == x) {
			$("#custom_From").prepend('<option>From</option>');
		}
	});
	
});

$(document).on('click', '#custom_To', function(){
	var opts = $("#custom_To").find("option").not(':first');
	opts.sort(function(a,b){ 
		if(a.innerHTML.indexOf("/") == -1)
		return -1;
		return getDate(a.innerHTML).getTime() > getDate(b.innerHTML).getTime() ? 1 : -1;
	});
	var length = $("#custom_To option").length;
	opts.each(function(x){ 
		if(x != 0) {
			$("#custom_To").append(this);	
		} 
		if(length == x) {
			$("#custom_To").prepend('<option>To</option>');
		}
	});
	
});

function getDate(strDate){
	var parts = strDate.split('/');
	return new Date(parseInt(parts[1])-1, parseInt(parts[0]));
}
/**adsv2-450 */
/* ADSV2-191 ADSV2-298 ADSV2-376*/
/*** ADSV2-169 adsv2-285***/ 
$('#vrmReg').on('keyup', function(){
    if($(this).val() != '') {
        $('.reg-field .go-btn').removeClass('disabled');
    } else {
        $('.reg-field .go-btn').addClass('disabled');
    }
});
$(document).on('change', '.vehicle-form-pdp select', function() {
    var normal = 1; 
    var mobile = 1; 
    var desktop = 1; 
    $('.vehicle-form-pdp select').each(function(){
        if($(this).val() == '' || $(this).val() == null) {
            normal = 0;
        }
    });
     
    $('.desktopsection .vehicle-form-pdp select').each(function(){
         
        if($(this).val() == '' || $(this).val() == null) {
            desktop = 0;
        }
    });
    $('.mobilesection .vehicle-form-pdp select').each(function(){
        if($(this).val() == '' || $(this).val() == null) {
            mobile = 0;
        }
    });
     
    if(normal == 0) {
        $('.vehicle-form-pdp .go-btn').addClass('disabled');
    } else {
        $('.vehicle-form-pdp .go-btn').removeClass('disabled');
    }
    if(mobile == 0) {
        $('.mobilesection .vehicle-form-pdp .go-btn').addClass('disabled');
    } else {
        $('.mobilesection .vehicle-form-pdp .go-btn').removeClass('disabled');
    }
    if(desktop == 0) {
        $('.desktopsection .vehicle-form-pdp .go-btn').addClass('disabled');
    } else {
        $('.desktopsection .vehicle-form-pdp .go-btn').removeClass('disabled');
    }
});
/*** ADSV2-169 adsv2-285***/ 

/** adsv2-285*/
$(document).on('click', '.changevehicle', function(){
	$("#ChangeVehicleRegModal").openModal();
});
$(document).on('click', '.changevehiclepopup .close', function(){
	$("#ChangeVehicleRegModal").closeModal();
});
/** adsv2-285*/
/**** Start : EPL-16704 *****/
function address_one_validation_account(addressval,fieldId){
	
	var error_var = 0;
	var lengthVal =  addressval.length;
	
	// Character Length
	if(lengthVal > 50 ){	


		if(fieldId == "address2"){
			$('.'+fieldId+'_error').remove();
	   		$('<div id="BAD2" class="error address2_error">&nbsp;</div>').insertAfter("#address2");
		}
		if(fieldId == "county"){
			$('.'+fieldId+'_error').remove();
	   		$('<div id="BSC1" class="error county_error">&nbsp;</div>').insertAfter("#county");
		}


	   	$('.'+fieldId+'_error').show().text("Maximum length allowed 50 characters.");
		$('#'+fieldId).css('border','1px solid red');	
		error_var = error_var + 1;	  

    }

    // String value Check

    if(/^[\x00-\x7F]+$/.test(addressval) == false)
	{	
		var msg;
		
		if(fieldId == "address2"){
			$('.'+fieldId+'_error').remove();
	   		$('<div id="BAD2" class="error address2_error">&nbsp;</div>').insertAfter("#address2");
		}
		if(fieldId == "town"){
			$('.'+fieldId+'_error').remove();
	   		$('<div id="TW" class="error town_error">&nbsp;</div>').insertAfter("#town");
		}
		if(fieldId == "county"){
			$('.'+fieldId+'_error').remove();
	   		$('<div id="BSC1" class="error county_error">&nbsp;</div>').insertAfter("#county");
		}
		if(fieldId == "town"){
			msg = "Please enter a valid Town/City.";
		}else if( fieldId == "county" ){
			msg = "Please enter a valid county name.";
		}else{
			msg = "Please enter a valid address.";
		}
		$('.'+fieldId+'_error').show().text(msg);
		$('#'+fieldId).css('border','1px solid red');	
		error_var = error_var + 1;	

	}

	if(error_var ==0){

		$('.'+fieldId+'_error').hide().text("");
		$('#'+fieldId).css('border','1px solid #e3e3e3'); 
		error_var = error_var + 0;

	}

	return error_var;

}
/**** EPL-17260 DCX-5093 *****/
$( document ).ready(function() {
	$(".static-page.delivery-information ul li:nth-of-type(2) ").addClass("active");
	$(".static-page.delivery-information ul li:nth-of-type(2) div").css("display", "block");
	$(".static-page.delivery-information ul li:nth-of-type(1) ").removeClass("active");
	$(".static-page.delivery-information ul li:nth-of-type(1) div:nth-child(2)").css("display", "none"); 
});
/**** End : EPL-17260 DCX-5093 *****/
/**** End : EPL-16704 *****/
