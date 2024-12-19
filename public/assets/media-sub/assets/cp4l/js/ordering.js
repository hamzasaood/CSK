
function checkloginUser(){
var userEmail =  $('.form-fields.contact-info-form').children().find('#email').val();

if($('#pocicheckoutcnc').length>0){
	 return false;
}


$.ajax({
type: "POST",  
dataType: 'json',               
url: ECP.getBase()+"/secure/checkout/getBOOrderProcessMessage", 
data: {'emailid':userEmail , 'ordertype':'Web Order'},
success: function(data) {

if(data!='0' &&  data.platformorderid !='') 
{ 
    
var msgfailedpay = "<span class='info-icon'></span><span class='checkout-mobile-info-text-error checkout-mobile-info-text'>" + window.messages.failedpaymentstatus.warning+"</span>";

$('#errorOrderExsist').html(msgfailedpay).show();
return true;				
}
else 
{ 
$('#errorOrderExsist').html('');
$('#errorOrderExsist').fadeOut('fast');        
} 
}
});
}

$(document).ready(function(){

    
	if($('.form-fields.contact-info-form').children().find('#email').length>0){
		$('.form-fields.contact-info-form').children().find('#email').focus();
    }
    
    if($('.form-fields.sign-form').children().find('#emailid').length>0){
    	$('.form-fields.sign-form').children().find('#emailid').focus();
    }

    $(".form-fields.sign-form #emailid").focusout(function() {
	var checkoutpage = "checkout";
	if($('#pocicheckoutcnc').length>0){
		checkoutpage = "cnccheckout";
	}
			
		
		
    var userEmail =  $('.form-fields.sign-form').children().find('#emailid').val();
    $.ajax({
    type: "POST",  
    dataType: 'json',               
    url: ECP.getBase()+"/secure/"+checkoutpage+"/getBOOrderProcessMessage", 
    data: {'emailid':userEmail , 'ordertype':'Web Order'},
    success: function(data) {

    // var isHideShow = hideOutMsg(data.to_time)
    // if(data.platformorderid !='' && isHideShow==1) 
    // if required hide show!

    if(data!='0' &&  data.platformorderid !='') 
    { 
    
    
    var msgfailedpay = "<span class='info-icon'></span><span class='checkout-mobile-info-text-error checkout-mobile-info-text'>" + window.messages.failedpaymentstatus.warning+"</span>";

    $('#errorOrderExsistsign').html(msgfailedpay).show();
    // setTimeout(function() {
    //   $('#errorOrderExsist').html();
    //   $('#errorOrderExsist').fadeOut('fast');
    // }, 180000); // <-- time in milliseconds m minute 3*60*1000   1s = 1000 ms 
    return true;				
    }
    else 
    { 
    $('#errorOrderExsistsign').html('');
    $('#errorOrderExsistsign').fadeOut('fast');        
    } 
    }
    });
    });
})




$(window).on("load",function(){
    if(loginuser==true){
        checkloginUser();
    }    
})


if (window.settings.mixbasket.enabled == 1 ){
	   
	   	$('#basketdetailsdiv').on('click','.promoUpdate', function(){ 
			 if($.trim($('.promotionalCode:visible').val()) != ''){
				window.Basket.updateBasket(2);		
			}else{
				window.ECP.alert($('.promoerror').attr('data-type'), $('.promoerror').val());
				return false;
			} 
			
			if($.trim($('.promotionalCode:visible').val()) != ''){
				var gaVal = $('.promotionalCode:visible').val().toUpperCase();
				var gaVal = gaVal.replace(/ /g,'');
				//google Event tracking
				
			}
			
			window.Basket.updateBasket(2);		
		});
	   
	   
		$('#basketdetailsdiv').on('click','.promoRemove', function(){
			$('.promotionalCode:visible').val('');
			$('.promoRemove').addClass('wait');
			window.Basket.updateBasket(0);
		});
		
		$('#basketdetailsdiv').on('keypress','.promotionalCode', function(e){	
			if(e.which == 13) {
				window.Basket.updateBasket();	
			}
		});	
	  	$(document).on('click','.promo-alert .close', function(){
			var elem = $('.close').data('dismiss');
			$(this).closest("."+elem).remove();
		}); 
	   
   }

//EPL-14576

function moveAllToHomedel() {
	$.ajax({
		type: "POST",
		url: ECP.getBase() + "/basket/basket/moveAllToHomedelivery",
		data: {
			basketType: "homedelivery"
		},
		success: function(t) {
			// EPL-15590
			1 == t.response.success ? window.location.href = checkRedirectURL(ECP.getBase() + "/basket"):''
// EPL-15590
		}
	})
}! function(t, e, a, s) {
	t(a).on("click", "a[id^=cncanchor_ ]", function(e) {
		var a = t(this).attr("data-prdcode");
		t("#cncprdcode").val(a)
	}), t("#basketdetailsdiv").on("click", "a[id^='delete-btn']", function() {
		e.Basket.removefromcart(t(this).attr("data-prdcode"))
	}), t("#basketdetailsdiv").on("click", ".add", function() {
		var e = t(this).prev(".qty"),
			a = parseInt(e.val());
		isNaN(a) || e.val(a + 1)
	}), t("#basketdetailsdiv").on("click", ".minus", function() {
		var e = t(this).next(".qty"),
			a = parseInt(e.val());
		!isNaN(a) && a > 0 && e.val(a - 1)
	}), t("#basketdetailsdiv").on("click", "#promoUpdate", function() {
		if("" != t.trim(t("#promotionalCode").val())) {
			var a = t("#promotionalCode").val().toUpperCase(),
				a = a.replace(/ /g, "");
			
		}
e.Basket.updateBasket(2)
	}), /*EPL-11310*/ t("#basketdetailsdiv").on("click", ".promoRemove", function() {
		t(".promotionalCode").val('');
		t(".promoRemove").addClass('wait');
/* CI-4283 CI-4287 */
e.Basket.updateBasket(0);
/* CI-4283 CI-4287 */
	}), t("#basketdetailsdiv").on("click", "#promoRemove", function() {
		t("#promotionalCode").val('');
		t("#promoRemove").addClass('wait');
/* CI-4283 CI-4287 */
e.Basket.updateBasket(0);
/* CI-4283 CI-4287 */
	}), /*EPL-11310*/ t("#basketdetailsdiv").on("keypress", "#promotionalCode", function(t) {
		13 == t.which && e.Basket.updateBasket()
	}), t(".content-section").on("click", ".model-btn", function() {
		t("#" + t(this).data("target")).openModal("show")
	}), t("#cart-button").on("shown.bs.modal", function() {
		t(".pswd-form .error").hide()
	}), t('#checkout-form input.userTypeSelect[value="s"]').prop("checked") && t("#checkout-form #signinbtn").trigger("click"), $(".checkout .contact-info-form #email").focusout(function() {
//EPl-14576
		var s = $(this);
		
		var checkoutpage = "checkout";
		if($('#pocicheckoutcnc').length>0){
			checkoutpage = "cnccheckout";
		}
		
		userEmail = s.val();
if(userEmail!=''){
$.ajax({
type: "POST",   
dataType: 'json',              
url: ECP.getBase()+"/secure/"+checkoutpage+"/getBOOrderProcessMessage", 
data: {'emailid':userEmail , 'ordertype':'Web Order'},
success: function(data) {

if(data!='0' &&  data.platformorderid !='') 
{ 
     

var msgfailedpay = "<span class='info-icon'></span><span class='checkout-mobile-info-text-error checkout-mobile-info-text'>" + window.messages.failedpaymentstatus.warning+"</span>";


$('#errorOrderExsist').html(msgfailedpay).show();
 
return true;				
} 
else
{ 
/*EPL-14225*/
$('#errorOrderExsist').html('');
$('#errorOrderExsist').fadeOut('fast');
/*EPL-14225*/
  
$('#errorOrderExsist').html('');
$('#errorOrderExsist').fadeOut('fast');
		var e = $(".checkout .contact-info-form .registerEmailError");
		return e.hide(), $(this).removeClass("invalid"), "" != userEmail && (validateEmail(userEmail) ? ($.ajax({
			type: "POST",
			url: ECP.getBase() + "/secure/newsletter/checkIfEmailExists",
			data: {
				email: userEmail
			},
			success: function(s) {
				if(void 0 !== s.form)
					if(1 == s.form.success.status) 
                        $("#main-bsubscribe").show(); /* DCX-1843 */
					else if(0 == s.form.success.status) {
					var e = '<input type="checkbox" value="1" class="chkBox" id="bsubscribe" name="bsubscribe" /><label for="bsubscribe">' + messages.bsubscribe.label + "</label>";
					$("#main-bsubscribe").html(e), $("#main-bsubscribe").show()
				}
			}
		}), $(".checkout .contact-info-form .registerPassword").is(":visible") ? $.ajax({
			type: "POST",
			url: ECP.getBase() + "/users/login/checkifemailexists",
			data: {
				email: userEmail
			},
			success: function(a) {
				void 0 !== a.form && (1 == a.form.success.status ? (e.show(), e.text(messages.loginHeader.callback), s.removeClass("valid"), s.addClass("invalid")) : 0 == a.form.success.status && (s.removeClass("invalid"), s.addClass("valid")))
			}
		}) : (s.removeClass("invalid"), s.addClass("valid"))) : ($(this).removeClass("valid"), $(this).addClass("invalid"), e.show(), e.text(messages.forgotpassword.invalidemail))), !1
return false;
}
}        
});	
}
// EPL-14576

	});
	var c = t(e).width();
	767 >= c && (t("#shippingform #scountry").on("change", function() {
		t(this).val() && (t("#shippingform .select-country").css("opacity", 1), t("#shippingform .address-field").css("opacity", .5))
	}), t("#shippingform .address-field input").on("focus", function() {
		var e = t("#shippingform #scountry").val();
		t("#shippingform .address-field").css("opacity", 1), "" == e ? t("#shippingform .select-country").css("opacity", .5) : t("#shippingform .select-country").css("opacity", 1)
	}));
	var o;
	e.Basket = {
		setConfig: function(e) {
			return o = t.extend({}, o, e), this
		},
		__goToProductPage: function(t) {
			e.location.href = t
		},
		closeModal: function(e) {
			t("#" + e).closeModal()
		},
		buyProductBD: function(a, s, c, o) {
			c = c || !1, o = o || "";
			var r = t("#PQ_" + a).val();
			if(!/[0-9]/.test(r)) return e.ECP.alert("Error", "Please enter a valid quantity value", ""), !1;
			var n = 1;
			r = Math.round(r);
			var i = t("#PQ_" + a).data("type") ? t("#PQ_" + a).data("type") : 0;
			if(i > 1 && (n = i), i > r && (r = n), 1 == r) {
				t("#brakeDiscWarning").find(".addToBasket").attr("onclick", "window.Basket.__closeModalAndAddtoBasket('" + a + "','homedelivery','brakeDiscWarning')"), t("#brakeDiscWarning").find(".goToProductPage").attr("onclick", "window.Basket.__closeModalAndAddtoBasket('" + a + "','homedelivery','brakeDiscWarning', 2)"), t("#brakeDiscWarning").openModal({
					complete: function() {
						t(".addtocartbtn").removeClass("wait")
					}
				});
				var d = t(e).width();
				return 767 >= d && t("html, body").animate({
					scrollTop: 0
				}, 600), !1
			}
			e.Basket.buyProduct(a, s, r)
		},
		__closeModalAndAddtoBasket: function(t, a, s, c) {
			c = "undefined" != typeof c ? c : 0, e.Basket.closeModal(s), e.Basket.buyProduct(t, a, c)
		},
		buyProduct: function(a, s, c) {
			t(".addtocartbtn").each(function() {
				t(this).attr("onclick").search(a) > 0 && t(this).addClass("wait addtocartbtn"), t(this).data("onclick", t(this).attr("onclick")), t(this).removeAttr("onclick")
			}), c = "undefined" != typeof c ? c : 0;
			var o = t("#PQ_" + a).data("type") ? t("#PQ_" + a).data("type") : 0,
				r = (jQuery.parseJSON(t("#product_" + a).attr("data-jsondata")), t("#PQ_" + a).data("friendlyurl")),
				n = t("#PQ_" + a).data("description"),
				i = t("#PQ_" + a).data("lookup"),
				d = t("#PQ_" + a).data("hash"),
				l = t("#PQ_" + a).data("collect"),
				u = t("#PQ_" + a).data("tier5code"),
				h = t("#PQ_" + a).val(),
				p = t("#PQ_" + a).data("ishdenabled"),
				m = t("#PQ_" + a).data("iscncenabled"),
				k = (t("#PQ_" + a).data("amount"), o),
				/*** EPL-11738 EPL-12808 EPL-12806 ***/ g = t("#PQ_" + a).data("category") /*** EPL-11738 EPL-12808 EPL-12806 ***/ ;
			if(c > 0 && (h = c), !/[1-9]/.test(h)) return e.ECP.alert("Error", "Please enter a valid quantity value", ""), !1;
			h = Math.round(h);
			var f = 1;
			o > 1 && (f = o), o > h && (h = f);
			var v = t("#tier3cat").val();
			v = encodeURIComponent(v);
			var b = a.replace("_", "/");
			b = b.replace("--", "."), t.ajax({
				type: "POST",
				url: ECP.getBase() + "/basket/basket/addtocart",
				data: {
					Productcode: b,
					Quantity: h,
					Description: encodeURIComponent(n),
					ProductUrl: r,
					Tier5Code: u,
					LookUp: i,
					ProductHash: d,
					Collect: l,
					Tier3cat: v,
					basketType: s,
					ishdenabled: p,
					iscncenabled: m,
					type: k,
					/*** EPL-11738 EPL-12808 EPL-12806 ***/ category: g /*** EPL-11738 EPL-12808 EPL-12806 ***/
				},
				success: function(s) { /*** EPL-12392 ***/
					if(s.error == 2) {
						window.ECP.alert("Product Limit", s.result, {
							class: 'product-limit-popup'
						});
					} /*** EPL-12392 ***/
					s.success ? (e.Basket.__displayQuickBasket(), e.Basket.__displaySuccessMsg(a, null), e.Basket.__updateBrontoCart()) : ( t(".addtocartbtn").each(function() {
						t(this).data("onclick").search(a) > 0 && t(this).removeClass("wait"), t(this).attr("onclick", t(this).data("onclick"))
					}))
				}
			})
		},
		/* DCX-1280 DCX-1282*/
		buyBundleProduct: function(as, s, c) {
			t(".bougthtogetheradd").each(function() {
				t(this).addClass("wait").show(), t(this).data("onclick", t(this).attr("onclick")), t(this).removeAttr("onclick")
			}), c = "undefined" != typeof c ? c : 0;
			var requestParams = [];
			$.each(as, function(i, a) {
				var a = a + '';
				// DCX-2995				
				a = String(a).replace('.','--').replace('/','_');
				// DCX-2995				
				var o = t("#PQ_" + a).data("type") ? t("#PQ_" + a).data("type") : 0,
					r = (jQuery.parseJSON(t("#product_" + a).attr("data-jsondata")), t("#PQ_" + a).data("friendlyurl")),
					n = t("#PQ_" + a).data("description"),
					i = t("#PQ_" + a).data("lookup"),
					d = t("#PQ_" + a).data("hash"),
					l = t("#PQ_" + a).data("collect"),
					u = t("#PQ_" + a).data("tier5code"),
					h = t("#PQ_" + a).val(),
					p = t("#PQ_" + a).data("ishdenabled"),
					m = t("#PQ_" + a).data("iscncenabled"),
					k = (t("#PQ_" + a).data("amount"), o),
					g = t("#PQ_" + a).data("category");
				if(c > 0 && (h = c), !/[1-9]/.test(h)) return e.ECP.alert("Error", "Please enter a valid quantity value", ""), !1;
				h = Math.round(h);
				var f = 1;
				o > 1 && (f = o), o > h && (h = f);
				var v = t("#tier3cat").val();
				v = encodeURIComponent(v);
				var b = a.replace("_", "/");
				b = b.replace("--", ".");
				requestParams.push({
					Productcode: b,
					Quantity: h,
					Description: encodeURIComponent(n),
					ProductUrl: r,
					Tier5Code: u,
					LookUp: i,
					ProductHash: d,
					Collect: l,
					Tier3cat: v,
					basketType: s,
					ishdenabled: p,
					iscncenabled: m,
					type: k,
					category: g
				})
			});
			t.ajax({
				type: "POST",
				url: ECP.getBase() + "/basket/basket/addbundletocart",
				data: {products: requestParams},
				success: function(s) {
					if(s.error == 2) {
						window.ECP.alert("Product Limit", s.result, {
							class: 'product-limit-popup'
						});
					} /**DCX-1282 */
					s.success ? (window.location.href = checkRedirectURL(ECP.getBase() + 'basket')) : ( t(".bougthtogetheradd").each(function() {
						t(this).removeClass("wait"), t(this).attr("onclick", t(this).data("onclick"))
					}))
				}
			})
		},
		/* DCX-1280 */
		__displaySuccessMsg: function(a, s) {
			var c = t("#PQ_" + a).data("type") ? t("#PQ_" + a).data("type") : 0;
			// DCX-144
			var productCode = a.replace(/_/g,'/');
			productCode = productCode.replace(/--/g,'.');
			// DCX-144
			t.ajax({
				global: !1,
				type: "POST",
				url: ECP.getBase() + "/basket/basket/addtocartsucessmsg",
				data: {
					prductname: t("#PQ_" + a).data("description"),
					productCode: productCode,// DCX-144
					productPrice: t("#PQ_" + a).data("amount"),
					productImg: t("#PQ_" + a).data("imgsrc"),
					productsurcharge: t("#PQ_" + a).data("surcharge"),
					productType: c
				},
				success: function(s) {
					/* CI-4825 */
					t("#addtocartsuccess").find(".modal-content").html(DOMPurify.sanitize(s)), t("#addtocartsuccess").openModal({
						/* CI-4825 */
						backdrop: "static",
						keyboard: !1,
						show: !0
					}), t(".addtocartbtn").each(function() {
						t(this).data("onclick").search(a) > 0 && t(this).removeClass("wait"), t(this).attr("onclick", t(this).data("onclick"))
					});
					var c = t(e).width();
					767 >= c && t("html, body").animate({
						scrollTop: 0
					}, 600)
				}
			})
		},
		removefromcart: function(a) {
			t("#qty_" + a).val(0), e.Basket.updateBasket(getCookie('AUTOPOPULATE'))
		},
/* CI-4283 CI-4287 */
updateBasket: function(autopopulate) {
/* CI-4283 CI-4287 */
			/* DCX-1028 */
			if(typeof autopopulate == "undefined") {
				autopopulate = getCookie('AUTOPOPULATE');
				autopopulate = ($.trim(autopopulate) == "" ? 2 : autopopulate);
			}
			/* DCX-1028 */
			var a = [];
			t("select[id^=qty_]").each(function(e) {
				prod = {
					productcode: t(this).data("prdcode"),
					quantity: t(this).val(),
					preqty: t(this).data("preqty"),
					carhash: t(this).data("carhash"),
					hash: t(this).data("hash"),
					prdunq: t(this).data("prdunq"),
					isfree: t(this).data("isfree"),
					isClone: t(this).data("isclone")
				}, a.push(prod)
			});
			
			if (window.settings.mixbasket.enabled == 1 ){
				if ($(window).width() < 767) {
					/* EPL-15573 */
					if($('.candc a').hasClass('active')){
						var selectedCheckoutBtn = 'storeCollectionActive';
					} else if($('.deliveryc a').hasClass('active')){
						var selectedCheckoutBtn = 'homeDeliveryActive';
					}
					/* EPL-15573 */
					var promocode = t('.promotionalCode:visible').val();
				} else {
					var promocode = t('.promotionalCode').val();
					}
				}else{
					var promocode = t('#promotionalCode').val();
				}
			
			
			var s = promocode;
			t.ajax({
				type: "POST",
				url: ECP.getBase() + "/basket/basket/updatebasket",
				data: {
					products: a,
promocode: s,
/* CI-4283 CI-4287 */
autopopulate: autopopulate
/* CI-4283 CI-4287 */
				},
				success: function(a) {
/* CI-4283 CI-4287 */
document.cookie="AUTOPOPULATE="+autopopulate+"; path=/";
 if (autopopulate == 2) {
     var cookiepromo = getCookie("AUTOPOPULATEPROMOCODE");
     if (cookiepromo.toLowerCase() == promocode.toLowerCase()) {
         $(".autoapplied").show();
         $(".autonotapplied").hide();
     } else {
        $(".autonotapplied").css({ display: "block" });
        $(".autoapplied").css({ display: "none" });
     }
 } else {
$(".autonotapplied").css({ display: "block" });
$(".autoapplied").css({ display: "none" });
 }
/* CI-4283 CI-4287 */ /* CI2-9*/
					e.Basket.__displayQuickBasket(), e.Basket.__updateBrontoCart(), t("#basketdetailsdiv").html($.parseHTML(a)), t(".modal-trigger").leanModal(); /* CI2-9*/
					var s = t(e).width();
					s >= 768 && t(".custom-select").length && t(".custom-select").niceSelect();
					/* EPL-15573 */
					if ( window.settings.mixbasket.enabled == 1 && $(window).width() < 767) {
						window[selectedCheckoutBtn]();
					}
					/*** Mix Basket :- Phase 2 ***/	
					if(window.settings.mixbasket.enabled == 1){ 
						$('.check-nav li a').click(function(){
							setTimeout(function(){
								if($('.candc a').hasClass('active')){
									storeCollectionActive();
								$('.tab-content').removeClass('fifm-acive');
								}
								else if($('.deliveryc a').hasClass('active')){
									homeDeliveryActive();
								$('.tab-content').removeClass('fifm-acive');
								}
							},100)
						});
					}                     
					setTimeout(function () {
						if ($('.candc a').hasClass('active')) {
							storeCollectionActive();
							$('.tab-content').removeClass('fifm-acive');
						}
						else if ($('.deliveryc a').hasClass('active')) {
							homeDeliveryActive();
							$('.tab-content').removeClass('fifm-acive');
						}
					}, 300)
					/* EPL-15573 */
				}
			})
		},
		updateQuickBasket: function() {
			var e = [];
			t("input[id^=mini_qty_]").each(function(a) {
				prod = {
					productcode: t(this).data("prdcode"),
					quantity: t(this).val(),
					preqty: t(this).data("preqty"),
					carhash: t(this).data("carhash"),
					hash: t(this).data("hash")
				}, e.push(prod)
			});
			var a = t("#mini_promotionalCode").val();
			t.ajax({
				type: "POST",
				url: ECP.getBase() + "/basket/basket/updatebasket",
				data: {
					products: e,
					promocode: a,
					mainbasket: !1
				},
				success: function(e) {
					/* CI-4825 */
					t("#quickbasketLi").html(DOMPurify.sanitize(e));
					/* CI-4825 */
				}
			})
		},
		__displayQuickBasket: function() {
			t.ajax({
				type: "POST",
				url: ECP.getBase() + "/basket/basket/quickbasket",
				success: function(e) {
					/* CI-4825 */
					t("#quickbasketLi").html(DOMPurify.sanitize(e))
					/* CI-4825 */
				}
			})
		},
		__updateBrontoCart: function() {
			//updateBrontoCart(customerCartId)
		}
	};
	var r;
window.Basket.Cnc = {
				setConfig:function(options){
					defaults = $.extend({}, cncdefaults, options);
					return this;
		},
		checkPostcode: function() {
					var	postcode = $('#postcode').val();
					if($.trim(postcode) ==''){
						$(".pswd-form .error").html(messages.cncpopup.error.required);
						$(".pswd-form .error").show();		
					} 		
					$('.wait').css("display",'inline-block');
					var	prdcode = $('#cncprdcode').val();
					var	prdurl = $('#cncanchor_'+prdcode).data('link');

					// EPL-15590
					var  qty = $('#cncanchor_'+ DOMPurify.sanitize(prdcode)).data('qty');
					// EPL-15590
					
					if(qty == undefined){
						qty = 0;
					}
					
					var prdurlparts  = prdurl.split('/?');
					prdurl = prdurlparts[0];	

					var querystring = '/?'+prdcode+'&'+$('#cncanchor_'+prdcode).data('lookup');
					if($.trim($('#cncanchor_'+prdcode).data('hash')) != ''){
						querystring = querystring+'&'+$('#cncanchor_'+prdcode).data('hash');
					}
					querystring = querystring+'&'+$('#cncanchor_'+prdcode).data('catcode');
					
					if($.trim(postcode) !='' && prdcode != ''){
						$.ajax({
				type: "POST",
				url: ECP.getBase() + "/stores/cnc/checkValidPostcode",
				data: {
								'postcode':postcode
				},
							success: function(response){
					try {
										var data =  $.parseJSON( response )
									  	window.settings.postcode = postcode;
										/* EPL-15178 */

										// EPL-15590
										var url = checkRedirectURL(prdurl+'/'+data.lat+'/'+data.long+'/'+qty+querystring);
										// EPL-15590

										window.location.replace(url);
										/* EPL-15178 */			
									} catch(e) {
										$(".pswd-form .error").hide();
										/* CI-4825 */
										$(".pswd-form .error").html(DOMPurify.sanitize(response));
										/* CI-4825 */
										$(".pswd-form .error").show();			
										$('.wait').css('display', 'none');
									}
								return false;				
							}
						});		
					}
				},
				 addToCncBasket:function(prdCode, ordertype, branchid,branchaccount){					
					var jsondata =  jQuery.parseJSON($('#product_'+prdCode).attr('data-jsondata'));
					var strFriendlyUrl = $('#PQ_'+prdCode).data('friendlyurl');
					var description = $('#PQ_'+prdCode).data('description');
					var iLookup = $('#PQ_'+prdCode).data('lookup');
					var strHash = $('#PQ_'+prdCode).data('hash');
					var iCollect = $('#PQ_'+prdCode).data('collect');
					var tier5code = $('#PQ_'+prdCode).data('tier5code');
					var productbasketqty = $('#PQ_'+prdCode).data('basketqty');
					var iQuantity = $('#PQ_'+prdCode).val();
					var isHdEnabled = $('#PQ_'+prdCode).data('ishdenabled');
					var isCncEnabled = $('#PQ_'+prdCode).data('iscncenabled');
					var amount 		= $('#PQ_'+prdCode).data('amount');	
					
					if(typeof($('#PQ_'+prdCode+'_'+branchid).val()) != 'undefined'){  
						var iQuantity = $('#PQ_'+prdCode+'_'+branchid).val();
						var branchname = $('#branchstock_'+branchid).data('branchname');
						var continuelink = ECP.getBase()+'/basket';
					}else{ 
						var iQuantity = $('#PQ_'+prdCode).val();
						var branchname = window.settings.cncselectedbranchname;
						var continuelink =  null;
					}
					
					var branchstock = $('#branchstock_'+branchid).val();	
					if(jsondata.tier5code != tier5code){ 
						return false;
					}
					if(jsondata.collect != iCollect){ 
						return false;
					}
					if(jsondata.lookup != iLookup){ 
						return false;
					}
					
					if($.trim(ordertype) == 'clickncollect'){
						if((typeof branchstock != undefined) && (parseInt(iQuantity) > parseInt(branchstock))){ 
						//window.ECP.confirm('Confirm',"Order will be delieverd next day since ordered quantity is greater than branch stock.",function(){addToCncBasket(prdCode, 'orderncollect', branchid,branchaccount)});
							window.ECP.alert('Error','Ordered quantity is more than branch stock');
						return false;
						}
					}   

					if(!/[1-9]/.test(iQuantity)) {
						window.ECP.alert('Error', "Please enter a valid quantity value",'');	
						return false;
					}
					
					var tier3cat = $('#tier3cat').val();
					tier3cat = encodeURIComponent(tier3cat);
					var productCode = prdCode;
					if(isNaN(prdCode)){
						var productCode = prdCode.replace('_','/');
						productCode = productCode.replace('--','.');
					}
					
					iQuantity = Math.round(iQuantity);

					if(iQuantity == 0) {
						iQuantity = 1;
					}	
					//for moving product from hd to cnc and selecting branch
					if(productbasketqty != undefined){
						if(iQuantity > productbasketqty){
							iQuantity = iQuantity - productbasketqty;
						}else {
							iQuantity = 0;
						}
					}
					 $('.addtocartbtn').each(function(){	
						 if($(this).attr('onclick').search(prdCode) > 0){
								$(this).addClass('wait addtocartbtn');
							}
							$(this).data('onclick', $(this).attr('onclick'));
							$(this).removeAttr('onclick');
					});
					$.ajax({
				type: "POST",
				url: ECP.getBase() + "/basket/basket/addtocart",
				data: {
					    	  'Productcode': productCode,
					    	  'Quantity':iQuantity,
					    	  'Description':encodeURIComponent(description),
					    	  'ProductUrl':strFriendlyUrl,
					    	  'Tier5Code':tier5code,
					    	  'LookUp':iLookup,
					    	  'ProductHash':strHash,
					    	  'Collect':iCollect,
					    	  'Tier3cat':tier3cat,
					    	  'basketType':'clickncollect',
					    	  'branchid':branchid,
					    	  'ordertype':ordertype,
					    	  'branchname':branchname,
					    	  'branchaccount':branchaccount,
					    	  'ishdenabled':isHdEnabled,
					    	  'iscncenabled':isCncEnabled
					    	  },
					      
					      success: function(data) {		
					    	  if(data.success){
								  window.Basket.__displayQuickBasket();
					    		  window.Basket.__displaySuccessMsg(prdCode,null);
					    		 /*window.Basket.__updateBrontoCart();*/
					    		 
					    	  }else{
					    		  window.ECP.alert('Error', data.error+data.result);	    	
					    		  
					    		  
					    	  }
					      }
					});		
				},
				changeStore:function(inputid){
					var	postcode = $('#'+inputid).val();					
					$('#'+inputid).next().next().hide();

					if($.trim(postcode) !=''){
						$('.wait').css("display",'inline-block');
						$.ajax({
				type: "POST",
				url: ECP.getBase() + "/stores/cnc/checkValidPostcode",
				data: {
								'postcode':postcode,
								'storechange':1
				},
							success: function(response){
					try {
										var data =  $.parseJSON( response )

										  // EPL-15590
										  window.location.href = checkRedirectURL(ECP.getBase()+'/stores/cnc/changecncstore/?lat='+data.lat+'&long='+data.long);
										  // EPL-15590						
									} catch(e) {
										/* CI-4825 */
										$('#'+inputid).next().next().html(DOMPurify.sanitize(response));
										/* CI-4825 */
										$('#'+inputid).next().next().show();
										$('.wait').css("display",'none');
									}
								return false;				
							}
						});
					}else{
						/* CI-4825 */
						$('#'+inputid).next().next().html(DOMPurify.sanitize(messages.cncpopup.error.required));
						/* CI-4825 */
						$('#'+inputid).next().next().show();
						$('.wait').css("display",'none');
					}
					
				},/* 898 :- Mix Basket */ 
                changeStoreMix:function(inputid, ischngstore){  
                    /*** 
                    2 for first time cncpopup on basket page
                    3 for first time hwd check
                    4 for cncpopup on basket page
                    5 for hwd on basket page
                    7 cnc bfpo popup desktop
                    8 cnc bfpo popup mobile ***/
                    
                    $('#'+inputid).removeClass('mixpostcodeerror');
				
                    var    postcode = $('#'+inputid).val();
                    $('#'+inputid).next().next().hide();
                    if (ischngstore === undefined) {
                        var chnstoretype = 0;
                    } else {
                        var chnstoretype = ischngstore;
                    }                    
                    if($.trim(postcode) !=''){
                        $('.wait').css("display",'inline-block');
                        $.ajax({
                            type : "POST",
                            url :ECP.getBase()+ "/stores/cnc/checkValidPostcode",
                            data : {
                                'postcode':postcode,
                                'storechange':1,
                                'chnstoretype':chnstoretype,
                                'inputid':inputid
                            },
                            timeout: 20000,
                            success: function(response){
                                try { 
                                    if((chnstoretype==7 || chnstoretype==8)){
                                        if(inputid != 'postcodemob1' &&  inputid != 'newpostcodemob' ){ 
                                            $('#mix-change-store').addClass('new-nearby-store');
                                            $('#mix-change-store').removeClass('find-post');
                                        }
										/* EPL-15618 New */
										$('#mix-change-store').find('.modal-content').html(DOMPurify.sanitize(response, {ADD_ATTR: ['onclick']}));
										/* EPL-15618 New */
										if($('#mix-change-store:visible').length<1){
											$('#mix-change-store').openModal(); 
										}
                                        
                                        return true;                                                
                                    }
                                    
                                    if((chnstoretype==3 || chnstoretype==5) && response == 'valid'){
                                        window.Basket.checkProductDelivery(inputid, 0, 0, chnstoretype);
                                        return true;
                                    }
                                    if(response == 'error-bfo'){
                                        $('#'+inputid).addClass('mixpostcodeerror');
										response = 'Unfortunately we are unable to deliver to this postcode.';
                                        $('#'+inputid).next().next().html(response);
                                        $('#'+inputid).next().next().show();
                                        $('.wait').css("display",'none');
                                        if(orignalAvailableDivheight){
                                            var diff = $('.availability-check').outerHeight()-orignalAvailableDivheight;
                                            $('.discount-height').outerHeight(orignalDiscountDivheight+diff);
                                        }
                                        
                                        
                                        return false;                                                
                                    }       
                                    if((chnstoretype==2 || chnstoretype==3 || chnstoretype==4 || chnstoretype==5) && response == 'error'){
                                        $('#'+inputid).addClass('mixpostcodeerror');
                                        if( inputid == 'newpostcode' || inputid == 'newpostcodemob'){
                                            $('#'+inputid).next().next().html('Sorry your postcode could not be recognized. Please try another.');
                                        } else {
                                            $('#'+inputid).next().next().html('Please enter a valid postcode.');
                                        }
                                        $('#'+inputid).next().next().show();
                                        $('.wait').css("display",'none');
                                        if(orignalAvailableDivheight){
                                            var diff = $('.availability-check').outerHeight()-orignalAvailableDivheight;
                                            $('.discount-height').outerHeight(orignalDiscountDivheight+diff);
                                        }
                                        
                                        
                                        return false;                                                
                                    }  
                                        
                                    var gaVal = postcode.toUpperCase();
                                    gaVal = gaVal.replace(/ /g,'');
                                    var eventPageType = $('input[name=eventPageType]').val();
                                    //google Event tracking
                                   
                                    
                                    if(chnstoretype!=2 && chnstoretype!=4){                                        
                                        var data =  $.parseJSON( response );
                                    }
					
                                    if(chnstoretype==1){
										/* EPL-15178 */
										// EPL-15590
										var url = checkRedirectURL(ECP.getBase()+'/stores/cnc/changecncstore/?ischeckout=1&lat='+data.lat+'&long='+data.long);
										// EPL-15590

										window.location.replace(url);
										/* EPL-15178 */
                                    } else if (chnstoretype == 2 || chnstoretype == 4){
                                        if(inputid != 'postcodemob1' &&  inputid != 'newpostcodemob' ){ 
                                            $('#mix-change-store').addClass('new-nearby-store');
                                            $('#mix-change-store').removeClass('find-post');
																				}
																				/* EPL-15618 New  */
																		$('#mix-change-store').find('.modal-content').html(DOMPurify.sanitize(response, {ADD_ATTR: ['onclick']}));
																			/* EPL-15618 New */
										if($('#mix-change-store:visible').length<1){
											$('#mix-change-store').openModal(); 
										}
 
                                   }  else if (chnstoretype == 3 || chnstoretype == 5){
                                        window.Basket.checkProductDelivery(inputid, data.lat, data.long, chnstoretype);
                                   } else {
										/* EPL-15178 */
										// EPL-15590
										var url = checkRedirectURL(ECP.getBase()+'/stores/cnc/changecncstore/?lat='+data.lat+'&long='+data.long);
										// EPL-15590

										window.location.replace(url);
										/* EPL-15178 */                    
                                    }
                                } catch(e) { 
																		$('#'+inputid).addClass('mixpostcodeerror');
																		/* EPL-15618 New*/   
																		$('#'+inputid).next().next().html(DOMPurify.sanitize(response, {ADD_ATTR: ['onclick']}) );
																		/* EEPL-15618 New*/   
                                    $('#'+inputid).next().next().show();
                                    $('.wait').css("display",'none');
                                }
                                return false;
				},
                            error: function(xhr, status, message) {
                                if(status == "timeout") {                                    
                                    $('#'+inputid).next().next().html('Sorry, Please try after some time.');
                                    $('#'+inputid).next().next().show();
                                    $('.wait').css("display",'none');
                               }
                           }
                        });
                    }else{ 
                        $('#'+inputid).addClass('mixpostcodeerror');
                        $('#'+inputid).next().next().html(messages.cncpopup.error.required);
                        $('#'+inputid).next().next().show();
                        $('.wait').css("display",'none');
                        if(orignalAvailableDivheight){
                            var diff = $('.availability-check').outerHeight()-orignalAvailableDivheight;
                            $('.discount-height').outerHeight(orignalDiscountDivheight+diff);
                        }  
                    }
				},
				changestoreoncheckout:function(inputid){
					var	postcode = $('#'+inputid).val();
					var oncheckout = $('#oncheckout').val();
					
					if($.trim(postcode) !=''){
						$('.order-place-btn').unbind( "click" );
						$('#cncpostcodefindbtn').attr('disabled','disabled');
						
						$.ajax({
				type: "POST",
				url: ECP.getBase() + "/stores/cnc/checkValidPostcode",
				data: {
								'postcode':postcode,
								'storechange':1,								
				},
							success: function(response){
					try {
										var data =  $.parseJSON( response );
										$('#cncerrorspan').hide();
										$('.loc-data').html('<div class="img-spinner"><img id="img-spinner"  width="100" src="assets/img/puff.svg" alt="Loading"/></div>');
									 $.ajax({
							type: "GET",
							url: ECP.getBase() + "/stores/cnc/changecncstore",
							data: {
												'lat':data.lat,
												'long':data.long,		
												'oncheckout':oncheckout
											},
											success: function(cncresponse){
												if(cncresponse != 'sessionexpired'){													
													$("#hdsteps3").hide();
													/* EPL-15618 New */
													$('.loc-data').html(DOMPurify.sanitize(cncresponse, {ADD_ATTR: ['onclick']}));
													/* EPL-15618 New */
													$(document).on('click','.order-place-btn',function(){
														formsubmition();
													});
													$('#cncpostcodefindbtn').removeAttr('disabled');
												}else{
													document.location.href = ECP.getBase()+'/basket';
					}
				}
										
										}); 
									  						
									} catch(e) {
										/* CI-4825 */
										$('#cncerrorspan').html(DOMPurify.sanitize(response));
										/* CI-4825 */
										$('#cncerrorspan').show();
										$(document).on('click','.order-place-btn',function(){
											formsubmition();											
										});
										$('#cncpostcodefindbtn').removeAttr('disabled');
									}
									
								return false;				
							}
						});
					}else{
						$('#cncerrorspan').html(messages.cncpopup.error.required);
						$('#cncerrorspan').show();
					}
					
				},
				selectStore:function(branchid, branchAcc, branchName){
					if($.trim(branchid) == '' || $.trim(branchAcc) == '' || $.trim(branchName) == ''){
						return false;
					}
					$.ajax({
						type:'POST',
						url: ECP.getBase()+'/stores/cnc/selectStore',
						data:{
							'branchid':branchid,
							'branchAccount':branchAcc,
							'name':branchName
		},
						
						success:function(data){
							
							if(data.response.success == true){
								var msg 	= '<div class="popNotificationMessage success">' + window.messages.selectstore.success.message + '</div>';
									// EPL-15590
									window.ECP.confirm(window.messages.selectstore.success.label, msg,function(){ window.location.href = checkRedirectURL(ECP.getBase()+'/basket'); });
									// EPL-15590
							}else{
								window.ECP.alert(window.messages.selectstore.error.label,window.messages.selectstore.error.message);
							}
						}
					});
				}, 
                /*** Mix Basket :- Phase 2 ***/
                selectStoreMix:function(branchid, branchAcc, branchName, ischeckout){
                    if($.trim(branchid) == '' || $.trim(branchAcc) == '' || $.trim(branchName) == ''){
                        return false;
                    }
                    if (ischeckout === undefined) {
                        var checkoutchk = 0;
                    } else {
                        var checkoutchk = ischeckout;
                    }
                    $.ajax({
                        type:'POST',
                        url: ECP.getBase()+'/stores/cnc/selectStore',
				data: {
                            'branchid':branchid,
                            'branchAccount':branchAcc,
                            'name':branchName,
                            'oncnccheckout':checkoutchk,
                        },
                        
                        success:function(data){
                            if(data.response.success == true){
                                if(checkoutchk == 2 || checkoutchk == 4) { 
							/** FIFM-1216 Fifmbasket */
							
							// EPL-15590
							window.location.href = checkRedirectURL(ECP.getBase() + window.settings.fifmbasketurl);
							// EPL-15590
                                } else {            
                                    var msg     = '<div class="popNotificationMessage success">' + window.messages.selectstore.success.message + '</div>';
                                        window.ECP.confirm(window.messages.selectstore.success.label, msg,function(){ 
                                        if(checkoutchk == 1) {
									// EPL-15590
									window.location.href = checkRedirectURL(ECP.getBase() + window.settings.fifmchekouturl);
									// EPL-15590
                                        } else {
									// EPL-15590
									window.location.href = checkRedirectURL(ECP.getBase() + window.settings.fifmbasketurl);
									// EPL-15590
                                    /** FIFM-1216 Fifmbasket */
                                        }
                                        });
                                }        
                            }else{
                                window.ECP.alert(window.messages.selectstore.error.label,window.messages.selectstore.error.message);
                            }
                        }
                    });
                }, 
				checkoutselectStore:function(changestorebtn, branchid, branchAcc, branchName){
					if($.trim(branchid) == '' || $.trim(branchAcc) == '' || $.trim(branchName) == ''){
						return false;
					}
					/* CI-4825 */
					branchid = DOMPurify.sanitize(branchid);
					/* CI-4825 */
					var branchdistance = changestorebtn.getAttribute('data-brdistance');
					var branchseourl = changestorebtn.getAttribute('data-brseourl');
					$.ajax({
						type:'POST',
						url: ECP.getBase()+'/stores/cnc/selectStore',
				data: {
							'branchid':branchid,
							'branchAccount':branchAcc,
							'name':branchName,
							'oncheckout': 1
				},
						
						success:function(data){										
							//window.ECP.alert(window.messages.selectstore.success.label,window.messages.selectstore.success.message);								
							$('#hdstep4n5').hide();						
							$('.loc-selected').show();						
							$('.loc-data').html('');				
							$('#branchid').val(branchid);
							$('#cncselectedbranch').html(branchName);
							$('#cncselectedbranchdistance').html(branchdistance);
							$('#cncselectedbranchlink').attr('href',branchseourl);
							$('#cncstep').show();
							$('#clickncollectdetails').hide();
							/* EPL-15618 New */
							$('#collectionpoint .detail-box').html(DOMPurify.sanitize(data, {ADD_ATTR: ['onclick']}));
							/* EPL-15618 New */
							 // $.ajax({
                                    // type:'POST',
                                    // url: ECP.getBase()+'/secure/checkout/getOrderSummary',                                                
                                    // success:function(data){        
                                        // $('.checkout.order-review').replaceWith(data);
                                        // $('#summarytotalprice').text($("#totalAmountPayable").text());                                    
                                    // }
                                // });
							
							// POCI 
							$(".lean-overlay").hide();
							// POCI
							$('#mix-change-store').closeModal();
						}
					});
				} 
		}

					/**DCX-1282 */
	window.Bundle = {
		getProducts: function(){
			var relatedprdcodes = {};
			$(".frqPrdLst li .bCheckbox").each(function(){
				if($(this).prop('checked') == true){
					var pcode = $(this).data('prdcode');
					var prdtitle = $(this).data('prdtitle');
					relatedprdcodes[pcode] = prdtitle;
				}
			});
			return relatedprdcodes;
		},
				
		selectStore: function(branchid,branchAccount, name){
			$.ajax({
				type : "POST",
				url :ECP.getBase()+ "/stores/cnc/checkValidPostcodeBundle",
				data : {
					'branchid':branchid,
					'branchAccount': branchAccount,
					'name': name,
					'changestore': 4,
				},
				timeout: 20000,
				success: function(response){
					location.reload();
				},
				error: function(xhr, status, message){
					console.log(status);
				}
			});
		},

		changeStore: function(changeType,device='desktop'){
			var products = window.Bundle.getProducts();
			var postcode = $("#bpostcode").val();
			if(changeType == 3){
				$(".bundleWait").css("display",'inline-block');
				postcode = $("#newpostcode").val();
				}
			var postData = {
				'products': products,
				'changestore': changeType,
				'device':device
			}

			postData.postcode = postcode;

			if($.trim(postcode) !=''){
			$.ajax({
				type : "POST",
				url :ECP.getBase()+ "/stores/cnc/checkValidPostcodeBundle",
				data : postData,
				timeout: 20000,
				success: function(response){
						$(".bundleWait").hide();
						if(response == "postcodenotfound"){
							$(".pcadown").text('Unfortunately we are unable to deliver to this postcode.').show();
						}else if(response == "pcadown" || response == "error"){
							$(".pcadown").text('Sorry, Please try after some time.').show();
						}else{
							var changeStoreContainer = document.querySelector('#bundle-change-store');
							var childNode = changeStoreContainer.querySelector('.modal-content');
							childNode.innerHTML = DOMPurify.sanitize(response, {ADD_ATTR: ['onclick']});
							if(changeType != 3){
								$('#bundle-change-store').openModal("show");
							}
						}
				},
				error: function(xhr, status, message){
						$(".bundleWait").hide();
					console.log(status);
				}
			});
			}else{
				$(".pcadown").text("This field is required.");
			}
		},

		checkPostcode: function(reload = 1){
			$(".bundleError").text('');
			$('#bpostcode').removeClass('postcodeerr');
			var postcode = $('#bpostcode').val();
								
			if($.trim(postcode) !=''){
				$("#bLoader").css("display",'inline-block');
				var products = window.Bundle.getProducts();
				$.ajax({
					type : "POST",
					url :ECP.getBase()+ "/stores/cnc/checkValidPostcodeBundle",
					data : {
						'postcode':postcode,
						'products':products,
						'changestore': 1
					},
					timeout: 20000,
					success: function(response){
						window.Bundle.refreshIndicators();
						$("#bLoader").hide();
						if(response == "postcodenotfound"){
							$(".bundleError").text('Unfortunately we are unable to deliver to this postcode.');
						}else if(response == "pcadown" || response == "error"){
							$(".bundleError").text('Sorry, Please try after some time.');
						}else{
							var responseData = DOMPurify.sanitize(response, {ADD_ATTR: ['onclick','target']});
							$("#bundleMessages").html(responseData);
							$('.tooltipped').tooltip();
						}
					},
					error: function(xhr, status, message) {
						console.log(message);
						$("#bLoader").hide();
						$(".bundleError").text('Sorry, Please try after some time.');
					}
				});
			}else{ 
				$('#bpostcode').addClass('postcodeerr');
			}
		},
		refreshIndicators: function(){
			var products = window.Bundle.getProducts();
			$.ajax({
				type : "POST",
				url :ECP.getBase()+ "/stores/cnc/refreshBundleIndicators",
				data : {
					'products':products,
				},
				timeout: 20000,
				success: function(response){
					var responseData = DOMPurify.sanitize(response);// DCX-1829, DCX-2995
					var result = $.parseJSON(responseData);
					$.each(result, function(key,value){// DCX-1829, DCX-2995	
						if(value.cnc === 0){
							$("#prod-"+key + " .cnc-icon").addClass('disable');
							$("#prod-"+key + " .cnc-icon").attr('data-tooltip','Collection Unavailable')
						}else{
							$("#prod-"+key + " .cnc-icon").removeClass('disable');
							$("#prod-"+key + " .cnc-icon").attr('data-tooltip','Collection Available')
						}

						if(value.hwd === 0){
							$("#prod-"+key + " .delivery-icon").addClass('disable');
							$("#prod-"+key + " .delivery-icon").attr('data-tooltip','Delivery Unavailable')
						}else{
							$("#prod-"+key + " .delivery-icon").removeClass('disable');
							$("#prod-"+key + " .delivery-icon").attr('data-tooltip','Delivery Available')
						}
					})

					$('[data-toggle="popover"]').tooltip();
				},
				error: function(xhr, status, message) {
					console.log(message);
				}
			});
		},
		changeStoreLocation: function(){
			$.ajax({
				type : "POST",
				url :ECP.getBase()+ "/stores/cnc/changeStoreLocation",
				timeout: 20000,
				success: function(response){
					var responseData = DOMPurify.sanitize(response, {ADD_ATTR: ['onclick']});
					$("#bundleMessages").html(responseData);
				},
				error: function(xhr, status, message){
					console.log(status);
				}
			});
		},
		geolocationFinder: function(){
			$(".bundleError").text('');
			$("#bLoader").css("display",'inline-block');
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(position){
					var products = window.Bundle.getProducts();
			
					$.ajax({
						/* DCX-1771 DCX-5069 */
						type : "POST",
						url :ECP.getBase()+ "/stores/cnc/checkValidPostcodeBundle",
						data : {
							'requestData' : JSON.stringify({
							'products':products,
							'changestore': 5,
							'position': {'coords':{'latitude': position.coords.latitude.toFixed(4), 'longitude': position.coords.longitude.toFixed(4)}} 
						})},
						/* DCX-1771 DCX-5069 */
						timeout: 20000,
						success: function(response){
							$("#bLoader").hide();
							if(response == "nobranch"){
								$(".bundleError").text('No branch found.');
							}else{
								window.Bundle.refreshIndicators();
								var responseData = DOMPurify.sanitize(response, {ADD_ATTR: ['onclick']});
								$("#bundleMessages").html(responseData);
							}
						},
						error: function(xhr, status, message) {
							$("#bLoader").hide();
							$(".bundleError").text('Sorry, Please try after some time.');
				}
			});

				});
			} else { 
				$(".bundleError").text("Geolocation is not supported by this browser.");
			}
		}
		/**DCX-1282 */
}
/**DCX-1282 */
$(".frqPrdLst li .bCheckbox").on('click',function(){
window.Bundle.checkPostcode(6);
});
/**DCX-1282 */
}(jQuery, window, document);




function changePostcodeMob(elemt){
    if($('.changepostcode').hasClass('reset')){
        $('.changepostcode').removeClass('reset'); 
        $('.changepostcode').html('Change postcode'); 
        $('.changePostcodeMob').removeClass('hide');
        $('#'+elemt).addClass('hide');
        $('.mixHwdPostcodeUdt').addClass('hide'); 
        $('.error').hide(); 
        $('#hwdpostcode').hide(); 
        $('.deliverto').show();
        
    } else {
        $('.changepostcode').html('Reset'); 
        $('.changepostcode').addClass('reset'); 
        $('.changepostcode').removeClass('hide'); 
        $('.changePostcodeMob').addClass('hide');
        $('#'+elemt).removeClass('hide');
        $('.mixHwdPostcodeUdt').removeClass('hide');  
        $('#hwdpostcode').show();
        $('.deliverto').hide();
         $('.changepostcode').hide(); 
    }
}

window.Basket.checkProductDelivery = function(inputid,latitude,longitude,isfirsttym){ 
		var postcodeVal = $.trim($('#'+inputid).val());
		if( postcodeVal != '') { 
			$.ajax({
				type: "POST",
				url: ECP.getBase()+"/secure/services/getProductDelivery", 
				data: {'isfirsttym':isfirsttym,'postcodeVal':postcodeVal,'latitude':latitude,'longitude':longitude},
				success: function(data) {
					var getWidth  = $(window).width();
					if(getWidth < 768){
						if( $('.candc').hasClass('active') ){
						   setCookie("focusdeliverytab", 'storeCollectionActive',30);
						}else if( $('.deliveryc').hasClass('active') ){
						   setCookie("focusdeliverytab", 'homeDeliveryActive',30);              
						}else if( $('.fifmc').hasClass('active')){
							setCookie("focusdeliverytab", 'fifmActive',30);       
						}
					}
				//FIFM-1216
					// EPL-15590
					window.location.href = checkRedirectURL(ECP.getBase()+window.settings.fifmbasketurl);
					// EPL-15590                       
				//FIFM-1216
			}
			});
		} else {
				$('#'+inputid).next().next().html(messages.cncpopup.error.required);
				$('#'+inputid).next().next().show();
				$('.wait').css("display",'none');                
		}
	}/*** Mix Basket :- Phase 2 ***/
/*MIX-BASKET*/

function mixBasketHighlightDelivery(){
    $('#mix-change-store').closeModal();
    if($('.deliveryc').is(':visible'))
    {
        $('.deliveryc>a').click();
        $("html, body").animate({ scrollTop: 0 }, "slow");
				}
		}



$(document).ready(function(){
    $('ul.nav-tabs ').tabs();
	if($('.form-fields.contact-info-form').children().find('#email').length>0){
		$('.form-fields.contact-info-form').children().find('#email').focus();
	}
	
	if($('.form-fields.sign-form').children().find('#emailid').length>0){
		$('.form-fields.sign-form').children().find('#emailid').focus();
	}
	
});
$( document ).on("click",".store-body .link-tag",function(e) {
	e.preventDefault();
	$(this).toggleClass('collapsed');
});

/* EPL-15573 */
if (window.settings.mixbasket.enabled == 1 ){
	var focusdeliverytab = getCookie("focusdeliverytab");
	if (focusdeliverytab != '') {
		window[focusdeliverytab]();
		setCookie("focusdeliverytab", '',-30);
	}
}
/* EPL-15573 */
/* DCX-1280 */
$("document").ready(function(){
	$(".frqPrdLst input[type=checkbox]").on('change', function() {
		if($(".frqPrdLst input[type=checkbox]:checked").length == 0) {
			$(".bougthtogetheradd").html('Select a Product'); //DCX-1282
		} else if($(".frqPrdLst input[type=checkbox]:checked").length == 1) {
			$(".bougthtogetheradd").html('Add to Basket');
		} else if($(".frqPrdLst input[type=checkbox]:checked").length == 2) {
			$(".bougthtogetheradd").html('Add both to Basket');
		} else {
			$(".bougthtogetheradd").html('Add all ' + $(".frqPrdLst input[type=checkbox]:checked").length + ' to Basket');
		}
		var amount = 0.00;
		if($(".frqPrdLst input[type=checkbox]:checked").length > 0) {
			$.each($(".frqPrdLst input[type=checkbox]:checked"), function() {
				// DCX-2995
				// amount += parseFloat($("#PQ_" + $(this).data('prdcode')).data('amount'));				
				amount += parseFloat($("#PQ_" + String($(this).data('prdcode')).replace('.','--').replace('/','_')).data('amount'));
				// DCX-2995
			});
		}
		$(".amount-price").find('span').html(amount.toFixed(2))
	}).trigger('change');
});
function addFrqToCart() {
	if($(".frqPrdLst input[type=checkbox]:checked").length > 0) {
		var prdCodes = [];
		$.each($(".frqPrdLst input[type=checkbox]:checked"), function() {
			prdCodes.push($(this).data('prdcode'));
		});
		window.Basket.buyBundleProduct(prdCodes,'homedelivery', 1);
	}
}
/* DCX-1280 */



