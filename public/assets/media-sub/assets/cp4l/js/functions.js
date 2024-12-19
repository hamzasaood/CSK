/* CI-5207 */
fixHeader = function() {
    var sc = $(window).scrollTop()
    if (sc > 60) {
        $("body").addClass("fix-header");
    } else {
        $("body").removeClass("fix-header");
        $("body").removeClass("overflow-scroll");
    }
};
$(window).scroll(function() {
    var winWidth = $(window).width();
    if (winWidth < 767){ 
        fixHeader(); 
    }
});
$(document).ready(function() {
    var winWidth = $(window).width();
    if (winWidth < 767){ 
        fixHeader(); 
    }
    if(location.pathname == "/basket"){
        $("body").addClass("no-sticky-search");
    }
    
});
/* CI-5207 */
/* EPL-15590 */
/* CI-5476 */
//checking (Get URL domain)
var getValidUrl = function (url) {
	/*check HTTP or HTTPs*/
	var pattern = /^((http|https):\/\/)/;
	if(!pattern.test(url)) {
		url = url.replace('//','');
    	url = "https://" + url;
	}
	/*GET DOMAIN*/
	var createURL  = document.createElement('a');/*create URL*/
	createURL.href = url;
	createURL.href;
	var urlHost = createURL.host;
	urlHost = urlHost.replace('www.','');
	return urlHost.slice(0, urlHost.indexOf(':'));
};



// CI-5590
$('.covid-19.alert.alert-dismissible button.close').on('click',function(){ 
    $('.covid-19.alert.alert-dismissible').hide(); 
});
// CI-5590




/*check window.location.href is redirecting to domain*/
var checkRedirectURL = function(url){
	let redirectUrl = "";
	var webHost = window.settings.docroot;
	if(new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(url)) {
			if((getValidUrl(url)) && (getValidUrl(url) == getValidUrl(webHost))){/*My domain and redirect*/
				redirectUrl =  url;
			}else{/*Other domain and redirect to webhost*/
				redirectUrl =  webHost;
			}
	}else{
		/*No domain*/
		let firstLetter = url.slice(0,1);
		if(firstLetter != '/'){
			url = '/'+url;
		}
		redirectUrl = webHost+url;
	}
	/*Senitize URL with DOMPurify*/
	return  DOMPurify.sanitize(redirectUrl);
};
/* CI-5476 */
/* EPL-15590 */

/*** Guides Section **/
$(document).ready(function() {
    if($('#latestGuides').length>0 && getUrlParams(window.location.href, 'page')){
        scrollTo('#latestGuides');
    }
    
    if($('.guideSearchAutoComplete').length>0){
        $('.guideSearchAutoComplete').autocomplete({
            serviceUrl: '/catalog/guides/getSearchAutoComplete',
            minChars: 3,
            onSelect: function(e, i) {
                $(this).closest("#searchGuidesForm").submit()
            },             
            ajaxSettings: {
                global: false,
            }
        });	
    }    
});
function searchGuides(){
	var value  = $.trim($('#searchGuidesKeyword').val());
	if(value == ''){ 
		ECP.alert('', 'Please enter a valid Keyword to proceed.');
		return false;
	} else{
		return true;
	}
}
/*** Guides Section **/
/*epl-5157*/

$(document).on('click', '.modal.fade.zoom-image-popup', function() {
                $('.lean-overlay').css('display', 'none');
				 $('.zoom-container').find('img').attr('src', '');
                $('#zoom-image').closeModal();
})

$(document).on('click', '.thumb-box', function(e) {
 var elenode=e.target.nodeName.toLowerCase();

 if(elenode=='figure' || elenode=='span'){
 var src = $(this).find('.zomIMG').attr('data-zoomimg');
 if(src==undefined){
	var src = $(this).attr('src');
 }
  $('.zoom-container').find('img').attr('src', '');
 $('#zoom-image').openModal();
 $('.zoom-container').find('img').attr('src', src);
   }
});

$(document).on('click', '.zomIMG', function(e) {	
	var src = $(this).attr('data-zoomimg');
 if(src==undefined){
	var src = $(this).attr('src');
 }
 $('#zoom-image').openModal();
$('.zoom-container').find('img').attr('src', src);
})	


if (window.settings.mixbasket.enabled == 1 ){
    var orignalAvailableDivheight = $('.availability-check').outerHeight();
    var orignalDiscountDivheight = $('.discount-height').outerHeight();
  //  var focusdeliverytab = getCookie("focusdeliverytab");
 
}
 
$(document).ready(function() {
	
	
	
	 /** FIFM-1216 Fifmbasket POCI_CP4L */
    window.settings.fifmbasketurl = '/basket';
    window.settings.fifmchekouturl = '/secure/checkout';
    window.settings.fifmukcnccheckouturl = '/secure/checkout';
	/*POCI-28*/
    window.settings.fifmcnccheckouturl = '/secure/checkout';
	/*POCI-28*/
	if (getCookie("POCICP4lBASKETURL") == 1) {
       window.settings.fifmbasketurl = '/collection-basket';
    }
	
	
    if (getCookie("FIFMBASKETURL") == 2) {
        window.settings.fifmbasketurl = '/basket-fifmbasket';
        window.settings.fifmchekouturl = '/secure/checkout-fifmbasket';
    }
    /** FIFM-1216 Fifmbasket  POCI_CP4L*/
	
	
	
	
    var getWidth = $(window).width();
    if (getWidth <= 767) {
        //3b&o section
        $('.shop-brand-list .bxslider').bxSlider({
            mode: 'horizontal',
            auto: false,
            pager: false,
            minSlides: 1,
            maxSlides: 1,
            slideWidth: 270,
            slideMargin: 0,
            infiniteLoop: false,
            hideControlOnEnd: false
        });

    }



    //Left Refine Section 3BO
    $(document).on('click', '.leftcol3bo #tab-filters .refine-col .heading, .leftcol3bo #car-tab-filters .refine-col .heading ', function() {
        $(this).toggleClass('close').next('.filterSpec').slideToggle(400);
    });
    $(document).on('click', '.leftcol3bo .left-vrm .search-detail-box .separator', function() {
        $(this).next('.select-vehicle').slideToggle(400);
    });
    /* $(document).on('click','.leftcol3bo #category-filters .filter-box .brand-listing li',function(){
    	$('.leftcol3bo #category-filters .filter-box .brand-listing li').removeClass('active');
    	$(this).addClass('active');
    }); */
    $(document).on('click', '.o3b-section .product-btn .quick-btn.desktop', function() {
        $(this).toggleClass('active');
        $(this).parents('.product-content').children('.quick-info-data').show();
    });
    $(document).on('click', '.o3b-section.product-listing-col .rightcol3bo .quick-info-data .close-data', function() {
        $(this).parents('.quick-info-data').hide();
        $('.o3b-section.product-listing-col .rightcol3bo .product-btn .quick-btn').removeClass('active');
    });
    $(document).on('click', '.o3b-section.product-listing-col .rightcol3bo .quick-info-data .addtocartbtn', function() {
        $(this).parents('.quick-info-data').hide();
        $('.o3b-section.product-listing-col .rightcol3bo .product-btn .quick-btn').removeClass('active');
    });
    $(document).on('click', '.o3b-section.product-listing-col .rightcol3bo .quick-info-data .overlay', function() {
        $(this).parent('.quick-info-data').hide();
        $('.o3b-section.product-listing-col .rightcol3bo .product-btn .quick-btn').removeClass('active');
    });
    $(document).on('click', '.leftcol3bo #category-filters .clear-category-refine', function() {
        $('.leftcol3bo #category-filters .filter-box .brand-listing li').removeClass('active');
    });
    $(document).on('click', '.leftcol3bo .filter-box .brand-listing li.view-link', function() {
        $(this).hide();
        $(this).parent('.filterSpec').children('.list').show();
        //$('.leftcol3bo .filter-box .brand-listing li.view-less').show();
        $(this).parent('.filterSpec').find('li.view-less').show();
    });
    $(document).on('click', '.leftcol3bo .filter-box .brand-listing li.view-less', function() {
        $(this).hide();
        $(this).parent('.filterSpec').children('.list').hide();
        //$('.leftcol3bo .filter-box .brand-listing li.view-link').show();
        $(this).parent('.filterSpec').find('li.view-link').show();
    });
    /*** EPL-4710 EPL-9813 EPL-9823 */
    $('.leftcol3bo #category-filterss #mob-category-filterss').click(function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open').addClass('close');
            $('#mobdivpricefilters').hide("slow");
        } else {
            $(this).removeClass('close').addClass('open');
            $('#mobdivpricefilters').show("slow");
        }
    });
    /*** EPL-4710 EPL-9813 EPL-9823 */

    $(document).on('click', '.refine-mobile-btn', function() {

        /*** EPL-4710 EPL-9813 EPL-9823 */
        if ($(this).hasClass('open') == false) {
            if ($('#category-filterss').css('display') == 'none') {
                $('#category-filterss').removeClass('close').addClass('open');
                $('.pricediv').css('display', 'block');
                $('#category-filterss').show();
            }
        } else {
            $('#category-filterss').removeClass('open').addClass('close');
            $('.pricediv').css('display', 'none');
            $('#category-filterss').hide();
        }
        /*** EPL-4710 EPL-9813 EPL-9823 */

        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $('.leftcol3bo .refine-tabbing').hide();
            $('.leftcol3bo #tab-filters, .leftcol3bo #category-filters, .leftcol3bo .left-inner').hide();
            $('.leftcol3bo .refine-tabbing span').removeClass('active');
            $(this).parent('.leftcol3bo').children('.mobile-buttons').hide();
            $('.leftcol3bo .refine-tabbing, .leftcol3bo .mobile-buttons, .leftcol3bo #tab-filters, .leftcol3bo .left-inner').removeClass('displayBlock');
            //$('.o3b-section .rightcol3bo').show();
			/*EPL-5157*/
				$('#car-tab-filters').show();
				/*EPL-5157*/
        } else {
            $('.refine-mobile-btn').removeClass('open');
            $(this).addClass('open');
            //$('.o3b-section .rightcol3bo').hide();
            $(this).next('.refine-tabbing').children('span:last-child').addClass('active');
            $(this).next('.refine-tabbing').slideDown(400);
            $(this).parent('.leftcol3bo').children('#tab-filters, .left-inner').slideDown(400);
            $(this).parent('.leftcol3bo').children('.mobile-buttons').show();
				/*EPL-5157*/
				$('#car-tab-filters').show();
				/*EPL-5157*/
        }
    });
});
/*Apply button on filter EPL-5157*/
$(document).on('click','.o3b-section .leftcol3bo .mobile-buttons .apply-btn',function(){
   /*** EPL-4710 EPL-9813 EPL-9823 */
    $('#category-filterss').removeClass('open').addClass('close');
    $('#category-filterss').hide();
    /*** EPL-4710 EPL-9813 EPL-9823 */

			$('.refine-mobile-btn').removeClass('open');
			$('.leftcol3bo .refine-tabbing').hide();
            $('.leftcol3bo #tab-filters, .leftcol3bo #car-tab-filters, .leftcol3bo #category-filters, .leftcol3bo .left-inner').hide();
			$('.leftcol3bo .refine-tabbing span').removeClass('active');
			$('.leftcol3bo .mobile-buttons').hide();
			$('.leftcol3bo .refine-tabbing, .leftcol3bo .mobile-buttons, .leftcol3bo #tab-filters, .leftcol3bo .left-inner,.leftcol3bo #car-tab-filters').removeClass('displayBlock');
			$('html, body').animate({
		        'scrollTop' : $('.rightcol3bo').position().top
		    });
		});
/*EPL-5157*/
function popoverDiv() {
    var infoHover = {
        over: function() {
            $(this).children('.popover').fadeIn(400);
        },
        timeout: 100, // number = milliseconds delay before onMouseOut
        out: function() {
            $(this).children('.popover').fadeOut(400);
        }
    };
    $(".o3b-section .rightcol3bo .delivery-option .info-icon, .checkout-mobile-info-icon .info-icon,.checkout-more-info").hoverIntent(infoHover);
}

function ipadZoomDisable() {
    var getWidth = $(window).width();
    var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());
    if (getWidth >= 1024 && !isiPad) {
        if ($('.zoom').length > 0) {
            //$('.zoom').zoom();
        }
    }
    //detectOrientation
    detectOrientation();
    window.onorientationchange = detectOrientation;
    var orientation = 0;

    function detectOrientation() {
        if (typeof window.onorientationchange != 'undefined') {
            if (orientation == 0) {
                if ($('.zoom').length > 0) {
                    $('.zoom').trigger('zoom.destroy');
                }
                $('.product-listing-col .thumb-box figure, .product-detail-inner .product-thumb figure').removeClass('zoom');
                $('.product-listing-col .thumb-box figure .zoomImg, .product-detail-inner .product-thumb figure .zoomImg').hide();
                $('header .right-col a.desktop').css('display', 'none');
                $('header .right-col a.mobile').css('display', 'block');
            } else if (orientation == 90) {
                if ($('.zoom').length > 0) {
                    $('.zoom').trigger('zoom.destroy');
                }
                $('.product-listing-col .thumb-box figure, .product-detail-inner .product-thumb figure').removeClass('zoom');
                $('.product-listing-col .thumb-box figure .zoomImg, .product-detail-inner .product-thumb figure .zoomImg').hide();
                $('header .right-col a.desktop').css('display', 'none');
                $('header .right-col a.mobile').css('display', 'block');
            } else if (orientation == -90) {
                if ($('.zoom').length > 0) {
                    $('.zoom').trigger('zoom.destroy');
                }
                $('.product-listing-col .thumb-box figure, .product-detail-inner .product-thumb figure').removeClass('zoom');
                $('.product-listing-col .thumb-box figure .zoomImg, .product-detail-inner .product-thumb figure .zoomImg').hide();
                $('header .right-col a.desktop').css('display', 'none');
                $('header .right-col a.mobile').css('display', 'block');
            } else if (orientation == 180) {
                if ($('.zoom').length > 0) {
                    $('.zoom').trigger('zoom.destroy');
                }
                $('.product-listing-col .thumb-box figure, .product-detail-inner .product-thumb figure').removeClass('zoom');
                $('.product-listing-col .thumb-box figure .zoomImg, .product-detail-inner .product-thumb figure .zoomImg').hide();
                $('header .right-col a.desktop').css('display', 'none');
                $('header .right-col a.mobile').css('display', 'block');
            }
        }
    }
}


$(document).on('click', '.leftcol3bo .refine-tabbing span', function() {
    var getData = $(this).attr('data-id');
    $('.leftcol3bo .refine-tabbing span').removeClass('active');
    $(this).addClass('active');
    $('.leftcol3bo .refine-box').removeClass('displayBlock');
    $('.leftcol3bo .refine-box').hide();
    $(this).parents('.leftcol3bo').find('#' + getData).show();

    /*** EPL-4710 EPL-9813 EPL-9823 */
    if (getData == 'category-filters') {
        $('#category-filterss').removeClass('open').addClass('close');
        $('#category-filterss').hide();
    }
    if (getData == 'car-tab-filters' || getData == 'tab-filters') {
        if ($('#category-filterss').hasClass('open')) {
            $('#category-filterss').removeClass('open').addClass('close');
            $('#category-filterss').hide();
        }
        if ($('#category-filterss').hasClass('close')) {
            $('#category-filterss').removeClass('close').addClass('open');
            $('.pricediv').css('display', 'block');
            $('#category-filterss').show();
        }

    }
    /*** EPL-4710 EPL-9813 EPL-9823 */

});

/*epl-5157*/

function createSlider(e) {
    return null == slider ? slider = $(".brand-slider .bxslider").bxSlider({
        pager: !1,
        controls: !1,
        auto: !0,
        minSlides: e,
        maxSlides: e,
        slideWidth: 130,
        slideMargin: 10,
        swipeThreshold: 0
    }) : slider.reloadSlider({
        pager: !1,
        controls: !1,
        auto: !0,
        minSlides: e,
        maxSlides: e,
        slideWidth: 130,
        slideMargin: 10,
        swipeThreshold: 0
    }), !0
}

function createSlider(e) {
    return null == slider ? slider = $(".all-product .bxslider").bxSlider({
        controls: !1,
        auto: !0,
        minSlides: e,
        maxSlides: e,
        slideWidth: 320
    }) : slider.reloadSlider({
        controls: !1,
        auto: !0,
        minSlides: e,
        maxSlides: e,
        slideWidth: 320
    }), !0
}

function delete_cookie(e) {
    document.cookie = e + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString()
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/"
}

function clearSearch() {
    delete_cookie('ecp-sh');
    //setCookie('ecp-sh-delete', 1, 1);
    jQuery('.searchHistory').remove();
    return !1
}
var slider, clock, bindAutoComplete = function() {
    $(".searchAutoComplete").autocomplete({
        serviceUrl: ECP.getBase() + "/search/index/getSearchAutoComplete",
        appendTo: ".searchbox-home",
        beforeRender: function(e) {
            $(".autocomplete-suggestions").addClass("mainsearch")
        },
        onSelect: function(e, i) {
            $(this).closest(".search-from").submit()
        },
        ajaxSettings: {
            global: !1
        }
    })
};

function popupResize() {
    $('#ingenico-pp').height($(window).height() * 0.9 - 60);
    $(window).height() < 800 && $("#cart-button.cart-button-popup .model-outer").height(.7 * $(window).height() - 60)
}

function popoverDiv() {
    var infoHover = {
        over: function() {
            $(this).children('.popover').fadeIn(400)
        },
        timeout: 100,
        out: function() {
            $(this).children('.popover').fadeOut(400)
        }
    };
    $(".o3b-section .rightcol3bo .delivery-option .info-icon, .checkout-mobile-info-icon .info-icon,.checkout-more-info").hoverIntent(infoHover)
}
if ($(window).resize(function() {
        popupResize()
    }), $(document).ready(function() {
        function e() {
            void 0 !== window.onorientationchange && (0 == orientation ? ($(".zoom").length > 0 && $(".zoom").trigger("zoom.destroy"), $(".product-listing-col .thumb-box figure .zoomImg, .product-detail-inner .product-thumb figure .zoomImg").hide(), $("header .right-col a.desktop").css("display", "none"), $("header .right-col a.mobile").css("display", "block"), $("#referFriendPop").click(function() {
                $("html, body").animate({
                    scrollTop: $("#referFriend").offset().top - 40
                }, "slow")
            })) : 90 == orientation ? ($(".zoom").length > 0 && $(".zoom").trigger("zoom.destroy"), $(".product-listing-col .thumb-box figure .zoomImg, .product-detail-inner .product-thumb figure .zoomImg").hide(), $("header .right-col a.desktop").css("display", "none"), $("header .right-col a.mobile").css("display", "block"), $("#referFriendPop").click(function() {
                $("html, body").animate({
                    scrollTop: $("#referFriend").offset().top - 40
                }, "slow")
            })) : -90 == orientation ? ($(".zoom").length > 0 && $(".zoom").trigger("zoom.destroy"), $(".product-listing-col .thumb-box figure .zoomImg, .product-detail-inner .product-thumb figure .zoomImg").hide(), $("header .right-col a.desktop").css("display", "none"), $("header .right-col a.mobile").css("display", "block"), $("#referFriendPop").click(function() {
                $("html, body").animate({
                    scrollTop: $("#referFriend").offset().top - 40
                }, "slow")
            })) : 180 == orientation && ($(".zoom").length > 0 && $(".zoom").trigger("zoom.destroy"), $(".product-listing-col .thumb-box figure .zoomImg, .product-detail-inner .product-thumb figure .zoomImg").hide(), $("header .right-col a.desktop").css("display", "none"), $("header .right-col a.mobile").css("display", "block"), $("#referFriendPop").click(function() {
                $("html, body").animate({
                    scrollTop: $("#referFriend").offset().top - 40
                }, "slow")
            })))
        }
        $(document).on("click", "body", function(e) {
            if ($(e.target).closest(".searchHistory").length > 0 && !$(e.target).is("a")) return !1;
            $(".searchHistory").hide()
        }), $(document).on("keydown keyup click", ".searchAutoComplete", function(e) {
            if (9 == e.keyCode) return $(".searchHistory").hide(), !0;
            $(this).val().length > 0 ? $(".searchHistory").hide() : ($(".searchHistory").show(), $(".searchbox-home").length < 1 && $('<div class="searchbox-home"></div>').insertAfter(this), bindAutoComplete())
        }), $(document).on("click", ".searchAutoComplete", function() {
            if (0 == $(this).val().length) return $(".searchHistory").show(), !1;
            $(".searchHistory").hide()
        });
        $("a#archive-orders").click(function() {
            window.location = $(this).attr("href")
        }), $("#reviewwidgetctrl").click(function() {
            $("#ruk_frame").toggle()
        }), $("body").click(function(e) {
            return "ruk_frame" != e.target.id && "reviewwidgetctrl" != e.target.id && void $("#ruk_frame").hide()
        });
        var i = $(window).width();
        if (i >= 768) {
            popoverDiv();
            var t = {
                over: function() {
                    $(this).children(".drop-arrow").animate({
                        opacity: 1,
                        height: "toggle"
                    }, 150), $(this).children(".cart-dropdown").animate({
                        opacity: 1,
                        height: "toggle"
                    }, 150)
                },
                timeout: 100,
                out: function() {
                    $(this).children(".drop-arrow").animate({
                        opacity: 0,
                        height: "toggle"
                    }, 150), $(this).children(".cart-dropdown").animate({
                        opacity: 0,
                        height: "toggle"
                    }, 150)
                }
            };
            
            /* EPL-13388 */
            // $("header .cart-area li.cart").hoverIntent(t), 
            $("header .cart-area li.cart").click(function(){
                $(this).children('.drop-arrow').animate({opacity:1, height:'toggle'}, 150);
                $(this).children('.cart-dropdown').animate({opacity:1, height:'toggle'}, 150);
            });
            /* EPL-13388 */
            $("header .right-col li.fourth-col").hoverIntent(t), $(".cookie-bar").length ? $(".content-section").addClass("cookiebar") : $(".content-section").removeClass("cookiebar"), $(".cookie-bar.active .close-btn").click(function() {
                $(".cookie-bar").slideUp(400).removeClass("active"), $("header").removeClass("extbar"), $(".content-section").removeClass("cookiebar")
            }), $(".search-detail-box .reg-field input").focus(function() {
                $(this).parents('.reg-field').addClass('focus');
                $('.search-detail-box .select-vehicle').addClass('disable');
                /**adsv2-285 */
                $('.search-detail-box .reg-field').removeClass('disable');
                /**adsv2-285 */
            }).blur(function() {
                $(this).parents('.reg-field').removeClass('focus');
                /**adsv2-285 removed code */
                
                /**adsv2-285 */
            }), $(".search-detail-box .select-vehicle select").focus(function() {
                $(this).parents('.select-vehicle').addClass('focus');
                $('.search-detail-box .reg-field').addClass('disable');
                /**adsv2-285 */
                $('.search-detail-box .search-wrapper .select-vehicle').removeClass('disable')
                /**adsv2-285 */
            }).blur(function() {
                $(this).parents('.select-vehicle').removeClass('focus');
                /**adsv2-285 remove code */
                
                /**adsv2-285 */
            }), $(".custom-select").length && $(".custom-select").niceSelect(), $(".checkout .pswd-link, .basket-bottom-col .modal-trigger, .account-container .login-form .pswd-link, .my-account-container .account-edit .inner a span").click(function() {
                // $("html, body").animate({
                //     scrollTop: 0
                // }, "slow")
            })
        }
        if (i >= 320 && 1024 >= i && ($(".nav-col .tier1nav").click(function(e) {
            /* CI-5476 DCX-4695*/
                return "A" == e.target.nodeName.toUpperCase() && 0 == $(e.target).parent(".back-link").length ? (window.open(checkRedirectURL($(e.target).attr("href")), "_self"), !0) : ($(this).addClass("main"), $(".nav-col .country-selection, .nav-col .tier1nav:not(.main)").hide(), $(this).children(".sub-nav").show(), void $(this).children(".out-list").find("li").show())
            /* CI-5476 DCX-4695*/
            }), $(document).on("click", ".nav-col .sub-li", function() {
                $(this).addClass("active"), $(".nav-col .country-selection, .nav-col .tier1nav:not(.main)").hide(), $(".left-sub-nav .sub-li").not(this).removeClass("active").hide(), $(this).children(".inner-nav").show()
            }), $(document).on("click", ".nav-col .back-link", function(e) {
                $(this).closest("li").parent("ul.outer-ul").length > 0 && $(".nav-col .country-selection, .nav-col .tier1nav").removeClass("main").show(), $(this).parent(".out-list").hide(), $(this).parents("li.active").show(), e.stopPropagation()
            }), $("header .tab-menu").click(function() {
                $("header .right-col li.fourth-col .drop-arrow").hide(), $("header .right-col li.fourth-col .cart-dropdown").hide(), $(this).toggleClass("active"), $("header nav").slideToggle(400), $(".tab-overlay").fadeToggle(400), $("header").css({
                    zIndex: "99999",
                    "border-bottom": "1px solid #d1d1d1"
                }), $(this).hasClass("active") || ($("header").css({
                    zIndex: "auto",
                    "border-bottom": "0px"
                }), $(".nav-col .outer-ul li").show(), $(".nav-col .sub-nav, .nav-col .inner-nav").hide(), $(".nav-col .sub-li").removeClass("active").show())
            }), $("header .right-col > li.first-col, header .right-col li.third-col, header .right-col li.fourth-col, header .nav-col .tab-nav .search-from").click(function() {
                $("header .nav-col nav, .tab-overlay").hide(), $("header .nav-col .tab-nav .tab-menu").removeClass("active")
            }), $(".tab-overlay").click(function() {
                $("header .nav-col nav, .tab-overlay").hide(), $("header .nav-col .tab-nav .tab-menu").removeClass("active"), $(".nav-col .outer-ul li").show(), $(".nav-col .sub-nav, .nav-col .inner-nav").hide(), $(".nav-col .sub-li").removeClass("active").show()
            }, $(".checkout-mob-more").on("click", function(event) {
                event.stopPropagation();
                $(".checkout-mobile-info-icon .info-icon .popover").hide();
                $(".checkout-mob-overlay").show();
                $(".checkout-mob-list").show()
            }),

            /* CI-6255 */
            $(".checkout-mob-more-pdp").on("click", function(event) {
                event.stopPropagation();
                $(".checkout-mobile-info-icon .info-icon .popover").hide();
                $( this ).find(".checkout-mob-overlay").show();
                $( this ).find(".checkout-mob-list").show()
            }), 
            /* CI-6255 */
            
            $(".close-mob-checkout").on("click", function(event) {
                event.stopPropagation();
                $(".checkout-mob-overlay").hide();
                $(".checkout-mob-list").hide()
            }))), i >= 1025) {
            var o;
            $("header .nav-col nav li.tier1nav").mouseenter(function() {
                var e = this;
                o = setTimeout(function() {
                    $("header .nav-col nav li.tier1nav .sub-nav").hide(), $(e).children(".sub-nav").show(), $(e).children(".sub-li").addClass("active"), $($(e).find(".sub-li").get(0)).addClass("active")
                }, 400)
            }).mouseleave(function() {
                clearTimeout(o), $("header .nav-col nav li.tier1nav .sub-nav").hide(), $("header .nav-col nav li.tier1nav .sub-nav .sub-li").removeClass("active"), $($(this).find(".sub-li").get(0)).addClass("active")
            });
            var l = {
                over: function() {
                    $(this).siblings().removeClass("active"), $(this).addClass("active"), $(this).children(".inner-nav").fadeIn(200)
                },
                timeout: 400,
                out: function() {}
            };
            $("header .nav-col .sub-nav .left-sub-nav .sub-li").hoverIntent(l)
        }
        var n = {
            over: function() {
                $(this).children(".country-list").slideDown(200), $(this).children(".drop-arrow").slideDown(200)
            },
            timeout: 100,
            out: function() {
                $(this).children(".country-list").slideUp(200), $(this).children(".drop-arrow").slideUp(200)
            }
        };
        $("header .right-col li.first-col").hoverIntent(n), $(".country-list a").click(function() {
            var e = $(this).children("img").attr("src");
            $(this).parents(".first-col").children(".counrty-flag").children("img").attr("src", e)
        }), $("header .right-col .third-col a").click(function() {
            $(".login-box").slideToggle(400)
        }), $(document).on("click", "#add11", function() {
            var e = $(this).next(".qty"),
                i = parseInt(e.val());
            !isNaN(i) && 99 > i && (e.val(i + 1), e.attr("data-qty", i + 1))
        }), $(document).on("click", "#minus11", function() {
            var e = $(this).prev(".qty"),
                i = parseInt(e.val());
            !isNaN(i) && i > 1 && (e.val(i - 1), e.attr("data-qty", i - 1))
        }), $(document).on("click", ".quantity-inner .add", function() {
            var e = $(this).next(".qty"),
                i = parseInt(e.val());
            !isNaN(i) && 99 > i && (e.val(i + 1), e.attr("data-qty", i + 1))
        }), $(document).on("click", ".quantity-inner .minus", function() {
            var e = $(this).prev(".qty"),
                i = parseInt(e.val());
            !isNaN(i) && i > 1 && (e.val(i - 1), e.attr("data-qty", i - 1))
        }), $(document).on("click", ".qty-col .add", function() {
            var e = $(this).next(".qty"),
                i = parseInt(e.val());
            isNaN(i) || (e.val(i + 1), e.attr("data-qty", i + 1))
        }), $(document).on("click", ".qty-col .minus", function() {
            var e = $(this).prev(".qty"),
                i = parseInt(e.val());
            !isNaN(i) && i > 1 && (e.val(i - 1), e.attr("data-qty", i - 1))
        }), $(".search-from input").focus(function() {
            $(this).parents(".search-from").addClass("active")
        }).blur(function() {
            $(this).parents(".search-from").removeClass("active")
        }), $(".search-result-display .view-btn").click(function() {
            $(".search-result-display .popup-box").fadeOut(400), $(this).parent(".left-col").next(".popup-box").fadeIn(400)
        }), $(".search-result-display .close-btn").click(function() {
            $(".search-result-display .popup-box").fadeOut(400), $(this).parents(".popup-box").hide()
        }), $(document).on("click", ".product-listing-col .product-btn .quick-btn.desktop", function() {
            $(this).toggleClass("active"), $(this).parents(".left-col").children(".quick-info-data").slideToggle(400)
        }), $(".shopping-cart-col .basket-body .info-btn").click(function() {
            $(this).parents(".left-col").next(".right-col").slideToggle(400)
        }), $(".choose-country .inner-box .country-selector").click(function(e) {
            $(this).parent(".inner-box").children(".country-list").slideToggle(200), e.stopPropagation()
        }), $(".order-confirm-col .order-header .tab-link").click(function() {
            $(this).parent(".order-header").next(".order-detail").slideToggle(400)
        }), $(".order-confirm-col .order-header .tab-link").click(function(e) {
            $(this).hasClass("active") ? ($(this).toggleClass("active").html("-"), $(this).parent(".order-header").css("margin-bottom", "0")) : ($(this).toggleClass("active").html("+"), $(this).parent(".order-header").css("margin-bottom", "20px"))
        }), $(document).on("click", ".order-review .collapse-arrow", function() {
            $(this).toggleClass("active"), $(this).hasClass("active") ? 767 >= i ? $(this).children("img").attr("src", ECP.getStatic() + "/checkout-review-arrow-active.png") : $(this).children("img").attr("src", ECP.getStatic() + "/open-arrow.png") : 767 >= i ? $(this).children("img").attr("src", ECP.getStatic() + "/checkout-review-arrow.png") : $(this).children("img").attr("src", ECP.getStatic() + "/close-arrow.png"), $(".toggle-view").slideToggle(400)
        }), $(document).on("click", ".checkout.delivery-option .table-data .toggle-option", function() {
            $(this).toggleClass("active"), $(this).hasClass("active") ? $(this).children("img").attr("src", ECP.getStatic() + "/open-arrow.png") : $(this).children("img").attr("src", ECP.getStatic() + "/close-arrow.png"), $(this).parent(".row-inner").children(".sub-list").slideToggle(400)
        }), $(document).click(function(e) {
            "country-list" == e.target.class || $(".country-list").find(e.target).length || $(".country-list, .first-col .drop-arrow").hide()
        }), $(".panel-heading").click(function() {
            var e = $(this);
            setTimeout(function() {
                $("html, body").animate({
                    scrollTop: e.offset().top
                }, 1e3)
            }, 500)
        }), i >= 768 && 1023 >= i && ($(".content-section, footer").on("click touchstart", function(e) {
            -1 == $(e.target).parents().index($(".sub-nav-col")) && $(".sub-nav").is(":visible") && $(".sub-nav").hide()
        }), $(".stock-availability-data .select-store-btn").click(function() {
            $(this).next(".store-btn-popup").slideDown(400)
        }, function() {
            $(this).next(".store-btn-popup").slideUp(400)
        }));
        var r = !1;
        if ($(".sitemap-col .sub-listing span").click(function() {
                r || (r = !0, $(this).parent("li").toggleClass("active").find("ul").slideToggle(400, function() {
                    r = !1
                }), $(".sitemap-col .sub-listing > li.active").not($(this).parent("li")).removeClass("active"), $(".sitemap-col .sub-listing ul:visible").not($(this).parent("li").find("ul")).slideUp(400, function() {
                    r = !1
                }))
            }), $(".checkout.payment-detail .select-payment-mode li input").click(function() {
                this.checked ? ($(".checkout.payment-detail .select-payment-mode li").removeClass("active"), $(this).parent("li").addClass("active")) : $(".checkout.payment-detail .select-payment-mode li").removeClass("active")
            }), $(".checkout.payment-detail .detail-form .address-confirm-col label").click(function() {
                $(".checkout.payment-detail .detail-form .address-confirm-col label").removeClass("active"), $(this).addClass("active")
            }), $(document).on("click", ".product-listing-col .sfilter", function() {
                $(this).toggleClass("active"), $(this).hasClass("active") ? ($(".filter-box .selection-count").hide(), $(".product-listing-col .filter-box .filter-overlay").show(), $(".product-listing-col .filter-box .small-filter").slideDown(200), $(".clearance-listing-col.product-listing-col .filter-overlay").hide()) : ($(".filter-box .selection-count").show(), $(".product-listing-col .filter-box .filter-overlay").hide(), $(".product-listing-col .filter-box .small-filter").slideUp(200))
            }), $(document).on("click", ".product-listing-col .lfilter", function() {
                $(this).toggleClass("active"), $(this).hasClass("active") ? ($(".filter-box .selection-count").hide(), $(".product-listing-col .filter-box .filter-overlay").show(), $(".product-listing-col .filter-box .full-filter").slideDown(200), $(".clearance-listing-col.product-listing-col .filter-overlay").hide()) : ($(".filter-box .selection-count").show(), $(".product-listing-col .filter-box .filter-overlay").hide(), $(".product-listing-col .filter-box .full-filter").slideUp(200))
            }), $(document).on("click", ".filter-box .filter-overlay", function() {
                $(this).hide(), $(".filter-box .selection-count").show(), $(".filter-box .lfilter").removeClass("active"), $(".filter-box .sfilter").removeClass("active"), $(".product-listing-col .filter-box .full-filter").slideUp(200), $(".product-listing-col .filter-box .small-filter").slideUp(200)
            }), $(".feedback-link").hover(function() {
                $(this).animate({
                    right: "0"
                }, 400)
            }, function() {
                $(this).animate({
                    right: "-92px"
                }, 400)
            }), $(".tierseocontent .view-more").click(function() {
                $(this).hide(), $(".tierseocontent span").addClass("expand"), $(".tierseocontent .view-less").css("display", "inline")
            }), $(".tierseocontent .view-less").click(function() {
                $(this).hide(), $(".tierseocontent span").removeClass("expand"), $(".tierseocontent .view-more").fadeIn(400)
            }), $(".tierseocontent .view-more").click(function() {
                $(this).hide(), $(".tierseocontent p").addClass("expand"), $(".tierseocontent .view-less").css("display", "inline")
            }), $(".tierseocontent .view-less").click(function() {
                $(this).hide(), $(".tierseocontent p").removeClass("expand"), $(".tierseocontent .view-more").fadeIn(400)
            }), 767 >= i) {
            $(".cookie-bar.active .close-btn").click(function() {
                $(".cookie-bar").slideUp(400).removeClass("active")
            }), $("header .right-grid li.cart .basket-icon").attr("href", "javascript:void(0);"), $(".car-parts-form .select-vehicle").addClass("nowActive"), $(document).on("click", ".car-parts-form .select-vehicle.nowActive .heading", function() {
                $(this).addClass("open"), $(this).parent(".select-vehicle").removeClass("nowActive"), $(this).next(".vehicle-form").slideToggle(400), $(".car-parts-form .number-col .vrm-form").slideToggle(400), $(".car-parts-form .number-col").addClass("nowActive"), $(".car-parts-form .number-col .heading").addClass("close")
            }), $(document).on("click", ".car-parts-form .number-col.nowActive .heading", function() {
                $(this).removeClass("close"), $(this).parent(".number-col").removeClass("nowActive"), $(this).next(".vrm-form").slideToggle(400), $(".car-parts-form .vehicle-form").slideToggle(400), $(".car-parts-form .select-vehicle").addClass("nowActive"), $(".car-parts-form .select-vehicle .heading").removeClass("open")
            }), $(".car-parts-form.filled-form").click(function() {
                $(".car-parts-form.filled-form .number-col .vrm-form").stop()
            }), $(".search-detail-box .select-vehicle").addClass("nowActive"), $(document).on("click", ".search-detail-box .select-vehicle.nowActive .heading", function() {
                $(this).addClass("open"), $(this).parent(".select-vehicle").removeClass("nowActive"), $(this).next(".vehicle-form").slideToggle(400), $(".search-detail-box .reg-field .vrm-form").slideToggle(400), $(".search-detail-box .reg-field").addClass("nowActive"), $(".search-detail-box .reg-field .heading").addClass("close")
            }), $(document).on("click", ".search-detail-box .reg-field.nowActive .heading", function() {
                $(this).removeClass("close"), $(this).parent(".reg-field").removeClass("nowActive"), $(this).next(".vrm-form").slideToggle(400), $(".search-detail-box .select-vehicle .vehicle-form").slideToggle(400), $(".search-detail-box .select-vehicle").addClass("nowActive"), $(".search-detail-box .select-vehicle .heading").removeClass("open")
            }), $(".store-finder-detail .find-form input").attr("placeholder", "Search again"), $("header .right-grid li.cart").click(function() {
                $("header .right-grid .mobile-menu").removeClass("active"), $("header .nav-col").hide(), $(this).children(".drop-arrow").slideToggle(200), $(this).children(".cart-dropdown").slideToggle(200)
            }), $("header .right-col li.first-col").click(function() {
                $("header .right-col li.fourth-col .drop-arrow").hide(), $("header .right-col li.fourth-col .cart-dropdown").hide(), $("header .nav-col").hide()
            }), $(document).click(function(e) {
                "slide--reset" == e.target.class || $(".slide--reset").find(e.target).length || ($(".slide--reset .mobile-menu").removeClass("active"), $(".nav-col").hide())
            }), $(".services h5").click(function(e) {
                $(this).hasClass("open") ? ($("footer .services ul").slideUp(400), $("footer .services h5").removeClass("open"), $("footer .services .col.s12").removeClass("active"), e.preventDefault()) : ($("footer .services ul").slideUp(400), $("footer .services h5").removeClass("open"), $("footer .services .col.s12").removeClass("active"), $(this).parent(".col.s12").addClass("active"), $(this).addClass("open"), $(this).parent("div").children("ul").slideDown(400))
            }), $(".mobile-search").click(function() {
                 /*** Guides Section **/
                if($( "body header section" ).hasClass( "covid-19" )){
                $("header").css("min-height", "98px") 
                } else {
                $("header").css("min-height", "47px")
                }/*** Guides Section **/            
				$(' header .nav-col').hide();
				$(".mobile-menu").removeClass("active"), 				
				$('.search-from,.search-overlay').toggle(),
                $('.search-from .searchAutoComplete').focusTextToEnd();
            }), 
			$('.search-overlay').click(function(){	
                $('.search-from').css('display','none');
                $('.search-overlay').css('display','none');
            }), $(document).ready(function () {
                $(window).on("resize", function (e) {
                    checkScreenSize();
                });

                checkScreenSize();

                function checkScreenSize(){
                    var newWindowWidth = $(window).width();
                    if (newWindowWidth < 767) {
                        $('body').click(function(){
                                if($('.search-from').css('display') == 'block'){
                                    $('body').addClass('overflow-scroll');
                        
                    }
                    else{
                        $('body').removeClass('overflow-scroll');
                    }
                            });
                    
                    }
                }
            }),
            $(".mobile-menu").click(function() {
                /* CI-3891 */
                $('html, body').toggleClass("nav-open");
                /* CI-3891 */
                $('.search-from').css('display','none'),
                $('.search-overlay').css('display','none'),
                $('.search-from').hide(), $("header .right-col li.fourth-col .drop-arrow").hide(), $("header .right-col li.fourth-col .cart-dropdown").hide(), $(this).toggleClass("active"), $(".nav-col").slideToggle(400), $(this).hasClass("active") || ($(".nav-col .outer-ul li").show(), $(".nav-col .sub-nav, .nav-col .inner-nav").hide(), $(".nav-col .sub-li").removeClass("active").show())
            }), $("#product-popup").leanModal("show"), $(document).on("click", ".product-listing-col .quick-btn.desktop", function() {
                var e = $(this).data("quickinfo");
                $(this).parents(".left-col").children(".quick-info-data").find(".popup-title").replaceWith($("#" + e)), $(this).parents(".left-col").append('<div class="overlay-bg"></div>'), $(this).parents(".left-col").children(".quick-info-data").fadeIn(400)
            }), $(document).on("click", ".product-listing-col .quick-info-data .close-data", function() {
                $(".product-listing-col .quick-btn.desktop").removeClass("active"), $(this).parent(".product-listing-col").children(".quick-btn").removeClass("active"), $(this).parent(".quick-info-data").fadeOut(400), $(this).parent(".quick-info-data").next(".overlay-bg").fadeOut(400, function() {
                    $(this).remove()
                })
            }), $(".mobile-brand .bxslider").bxSlider({
                mode: "vertical",
                auto: !1,
                pager: !1,
                slideMargin: 5,
                minSlides: 3,
                maxSlides: 3
            }), $(document).on("click", ".mobile-brand-right .viewAllBrands", function() {
                $(".custom-overlay").fadeIn(400), $(this).parents(".productbrandslisting").children(".right-col").fadeIn(400)
            }), $(document).on("click", ".product-listing-col .right-col .close", function() {
                $(".custom-overlay").fadeOut(400), $(this).parent(".right-col").fadeOut(400)
            }), $(".cusotmer-bought-list .bxslider").bxSlider({
                mode: "horizontal",
                auto: !0,
                pager: !1,
                infiniteLoop: !1,
                hideControlOnEnd: !0,
                useCSS: !1
            }), $(".stock-availability-data .select-store-btn").click(function() {
                $(this).next(".store-btn-popup").slideDown(400)
            }, function() {
                $(this).next(".store-btn-popup").slideUp(400)
            }), $(".cart-btn-outer").click(function(e) {
                $(this).children(".cart-btn-dropdown").slideToggle(400), e.stopPropagation()
            }), $(document).click(function(e) {
                "cart-btn-dropdown" == e.target.class || $(".cart-btn-dropdown").find(e.target).length || $(".cart-btn-dropdown").hide()
            }), $(".checkout.delivery-option .table-data .toggle-option").click(function() {
                $(this).children("img").attr("src", ECP.getStatic() + "/open-arrow.png"), $(this).parent(".row-inner").children(".sub-list").slideDown(400)
            }), $(".checkout .delivery-method .box").click(function() {
                $(this).hasClass("disable") ? $(".checkout .delivery-method .box.disable").show() : ($(".checkout .delivery-method-toggle").show(), $(".checkout .delivery-method .box").removeClass("active"), $(".checkout .delivery-method .box:not(.active)").hide(), $(this).not(".disable").toggleClass("active").show()), $(".checkout .delivery-method-toggle").click(function() {
                    $(this).hide(), $("#order-place-btn").removeClass("reserve-btn").html("Place Order"), $("#shippingform .enter-text").show()
                })
            }), $(".checkout .delivery-method-toggle").click(function() {
                $(".checkout .delivery-method .box").fadeIn(400), $(".checkout .delivery-method .box").removeClass("active"), $("#clickncollectdetails, #homedeliveryshipping").css("display", "none")
            }), $(document).on("click", ".checkout .delivery-method .box.click-collect", function() {
                $("#order-place-btn").addClass("reserve-btn").html("Reserve")
            }), $(document).on("click", ".checkout .delivery-method .loc-delivery", function() {
                $("#shippingform .enter-text").hide()
            }), $(".contact-info-form label, .sign-form label").each(function() {
                var e = $(this).text();
                $(this).next("input").attr("placeholder", e)
            }), $("#shippingform label, #billingform label").each(function() {
                var e = $(this).text();
                $(this).next("input").attr("placeholder", e)
            }), $(document).on("click", ".checkout.delivery-option .click-collect-right .detail-box .timing", function() {
                $(this).toggleClass("active")
            }), $(".seo-content .show-more").click(function() {
                $(this).hide(), $(".seo-content span").addClass("expand"), $(".seo-content .show-less").css("display", "inline")
            }), $(".seo-content .show-less").click(function() {
                $(this).hide(), $(".seo-content span").removeClass("expand"), $(".seo-content .show-more").fadeIn(400)
            }), $(".country-selection").click(function() {
                $(this).children(".country-dropdown").slideToggle(400)
            });
            if ($('.recent-items').length) {
                var winOwl = $('.recent-items .owl-carousel').owlCarousel({
                    lazyLoad: !0,
                    loop: !0,
                    loop: ($(".recent-items-inner .owl-item").length > 1) ? !0 : !1,
                    nav: !1,
                    margin: 0,
                    dots: !0,
                    responsiveClass: !0,
                    responsiveBaseWidth: 1000,
                    animateOut: 'fadeOut',
                    autoHeight: !0,
                    responsive: {
                        300: {
                            items: 1,
                            dots: !0,
                            slideBy: 1
                        }
                    }
                });
                winOwl.on('change.owl.carousel', function(event) {
                    $('.owl-item.active').each(function() {
                        $(this).find('.recent-image img').each(function() {
                            var imgsrc = $(this).attr('data-src');
                            $(this).attr('src', imgsrc).css({
                                'opacity': 1
                            })
                        })
                    })
                })
            }
            $(".content-section .product-listing-col").find("div.error-banner").length > 0 ? ($(".search-detail-box").addClass("search-popup").append('<a class="error-close-btn" href="javascript:void(0);" title="Close">x</a>'), $(".custom-overlay").fadeIn(400)) : ($(".search-detail-box").removeClass("search-popup"), $(".search-detail-box").find(".error-close-btn").remove(), $(".custom-overlay").hide()), $(".search-detail-box .error-close-btn").click(function() {
                $(".custom-overlay").hide(), $(".search-detail-box").removeClass("search-popup"), $(".search-detail-box").find(".error-close-btn").remove()
            }), $(".custom-overlay").click(function() {
                $(this).hide(), $(".search-detail-box").removeClass("search-popup"), $(".search-detail-box").find(".error-close-btn").remove(), $(".product-listing-col .right-col").hide()
            }), $(window).scroll(function() {
                $(window).scrollTop() > 600 ? $(".scrollToTop").fadeIn(400) : $(".scrollToTop").fadeOut(400)
            }), $(".clearance-listing-col .clearance-list figure").addClass("zoom").attr("data-target", "#zoom-image"), $(".latest-product-offers .bxslider").bxSlider({
                mode: "horizontal",
                auto: !1,
                /* CI-5053 */ 
				pager: !0, 
				/* CI-5053 */
                minSlides: 1,
                maxSlides: 1,
                /* CI-5053 */ 
                slideWidth: 767,
                /* CI-5053 */ 
                slideMargin: 0,
                infiniteLoop: !1,
                hideControlOnEnd: !1
            }), $(".tier-one .tier-listing .mobile-display").on("click", function() {
                $(this).hasClass("active") ? ($(".tier-one .tier-listing .mobile-display").removeClass("active"), $(".tier-one .tier-listing .option-list").slideUp(300, "linear")) : ($(".tier-one .tier-listing .mobile-display").removeClass("active"), $(".tier-one .tier-listing .option-list").slideUp(300, "linear"), $(this).toggleClass("active"), $(this).next(".option-list").slideToggle(300, "linear"))
            }), $(".tier-one-category .tier-listing .mobile-display").on("click", function() {
                $(this).hasClass("active") ? ($(".tier-one-category .tier-listing .mobile-display").removeClass("active"), $(".tier-one-category .tier-listing .mobile-expand").slideUp(400)) : ($(".tier-one-category .tier-listing .mobile-display").removeClass("active"), $(".tier-one-category .tier-listing .mobile-expand").slideUp(400), $(this).toggleClass("active"), $(this).next(".mobile-expand").slideToggle(400))
            }), $(".shopping-cart-col #promotionalCode").attr("placeholder", "Enter promo code"), $(".checkout .pswd-link, .basket-bottom-col .modal-trigger, .account-container .login-form .pswd-link, .my-account-container .account-edit .inner a span").click(function() {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow")
            }), $(document).on("click", ".o3b-section .rightcol3bo .delivery-option .info-icon", function() {
                $(this).hasClass("active") ? ($(this).toggleClass("active"), $(".o3b-section .rightcol3bo .delivery-option .info-icon .popover").hide()) : ($(".o3b-section .rightcol3bo .delivery-option .info-icon .popover").hide(), $(this).toggleClass("active"), $(this).children(".popover").show())
            }), $(document).on('click', '.delivery-mob .delivery-info-icon', function() {
                $(this).next(".delivery-mob .delivery-popover").toggle();
                $(".delivery-popup-overlay.show-delivery-popup").show()
            }), $(document).on('click', '.info-close', function() {
                $(".delivery-popup-overlay.show-delivery-popup").hide()
            })
        } else if (i >= 1024) {
            if ($(".checkout-right-col").length) {
                var s, a = 0,
                    c = 1,
                    d = $("header").outerHeight(),
                    h = $(window).width() - ($(".checkout-form").offset().left + $(".checkout-form").outerWidth());
                $(window).scroll(function(e) {
                    s = !0
                }), setInterval(function() {
                    s && (function() {
                        var e = $(window).scrollTop(),
                            i = $(this).scrollTop();
                        Math.abs(a - i) <= c || (i > a && i > d ? $(".checkout-right-col").css({
                            top: "20px",
                            position: "fixed",
                            right: h,
                            width: "345px"
                        }) : d > i ? $(".checkout-right-col").css({
                            top: "0",
                            position: "static"
                        }) : i + $(window).height() < $(document).height() && $(".checkout-right-col").css({
                            top: "150px",
                            position: "fixed",
                            right: h,
                            width: "345px"
                        }), e >= $(".checkout-left-col").height() - 250 && $(".checkout-right-col").css({
                            position: "absolute",
                            top: "auto",
                            bottom: "20px",
                            right: "0"
                        }), a = i)
                    }(), s = !1)
                }, 100)
            }
            var u;
            $("header .nav-col nav .sub-nav").hover(function() {
                u || (u = window.setTimeout(function() {
                    u = null, $(".search-detail-box .vehicle-form .field").hide()
                }, 200))
            }, function() {
                u ? (window.clearTimeout(u), u = null) : $(".search-detail-box .vehicle-form .field").show()
            }), $(".cusotmer-bought-list .bxslider").bxSlider({
                mode: "horizontal",
                auto: !0,
                pager: !1,
                minSlides: 3,
                maxSlides: 3,
                slideWidth: 320,
                slideMargin: 15,
                infiniteLoop: !1,
                hideControlOnEnd: !0
            });
            var p = $("input").attr("placeholder");
            $("HTML.lt-ie10").length && p && $("input").each(function() {
                var e = $(this).attr("placeholder");
                $(this).attr("value", e), $(this).focus(function() {
                    $(this).attr("value", " ")
                }).blur(function() {
                    $(this).attr("value", e)
                })
            }), $(".checkout .delivery-method .box").click(function() {
                $(this).hasClass("disable") || $(".checkout .delivery-method .box").removeClass("active"), $(this).not(".disable").toggleClass("active")
            }), $(".o3b-section .rightcol3bo .product-section .delivery-option .info-icon").hover(function() {
                $(".o3b-section .rightcol3bo .product-section .delivery-option .popover").hide(), $(this).find(".popover").fadeIn(400)
            }, function() {
                $(".o3b-section .rightcol3bo .product-section .delivery-option .popover").hide()
            })
        } else $(".stock-availability-data .select-store-btn").hover(function() {
            $(this).next(".store-btn-popup").slideDown(400)
        }, function() {
            $(this).next(".store-btn-popup").slideUp(400)
        }), $(".checkout .delivery-method .box").click(function() {
            $(this).hasClass("disable") || $(".checkout .delivery-method .box").removeClass("active"), $(this).not(".disable").toggleClass("active")
        });
        var v = /ipad/i.test(navigator.userAgent.toLowerCase());
        i >= 1024 && !v && $(".zoom").length > 0 && $(".zoom").zoom(), e(), window.onorientationchange = e, $(".addtocartbtn").click(function() {
            $(this).addClass("wait")
        }), $(".modal-trigger").leanModal(), $(".collapsible").collapsible({
            accordion: !1
        }), $(".home-slider .bxslider").bxSlider({
            mode: "horizontal",
            auto: !0,
            infiniteLoop: $(".home-slider .bxslider>li").length > 1,
            controls: !1,
            preventDefaultSwipeY: !1,
            onSliderLoad: function() {
                $(".home-slider").css("visibility", "visible")
            },
            // CI-6432
            onSlideAfter: function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            var position = $(currentSlideNumber).find('img').data('position');
            setGa4SelectPromotion(position,'view_promotion','homepage hero banner');
            
			},
            // CI-6432
        }), popupResize()
    }), $(".brand-slider").length) {
    var sliderActive = !1;
    $(document).ready(function() {
        window.innerWidth >= 768 || (window.innerWidth >= 414 && window.innerWidth <= 767 ? createSlider(3) : window.innerWidth <= 413 && createSlider(2)), $(window).resize(function() {
            window.innerWidth >= 768 ? null != slider && (slider.destroySlider(), slider = null) : window.innerWidth >= 414 && window.innerWidth <= 767 ? createSlider(3) : window.innerWidth <= 413 && createSlider(2)
        })
    })
}
if ($(".all-product").length) {
    var slider;
    sliderActive = !1;
    $(document).ready(function() {
        window.innerWidth >= 768 || window.innerWidth <= 767 && createSlider(2), $(window).resize(function() {
            window.innerWidth >= 768 ? null != slider && (slider.destroySlider(), slider = null) : window.innerWidth <= 767 && createSlider(2)
        })
    })
}
if ($("#bx-pager").length) {
    $(".product-thumb .bxslider").bxSlider({
        mode: "horizontal",
        auto: !1,
        pagerCustom: "#bx-pager",
        pagerSelector: "jQuery selector",
        useCSS: !1,
        controls: !1,
        maxSlides: 1,
        minSlides: 1
    });
    var pagerr, mySettings = {
            slideWidth: 70,
            useCSS: !1,
            pager: !1,
            infiniteLoop: !1,
            autoStart: !1,
            maxSlides: 3,
            moveSlides: 1,
            slideMargin: 10
        },
        maxSlides = 3,
        wiidth = $(window).innerWidth();
    $(document).ready(function() {
        var e = mySettings;
        e.maxSlides = 480 >= wiidth ? 2 : wiidth > 481 && 767 >= wiidth ? 2 : 3, pagerr = $(".product-thumb #bx-pager").bxSlider(e), $(window).resize(function() {
            $(window).on("orientationchange", function() {
                var e = mySettings;
                e.maxSlides = 480 >= wiidth ? 2 : wiidth > 481 && 767 >= wiidth ? 2 : 3, pagerr.destroySlider(), setTimeout(function() {
                    pagerr.reloadSlider(e)
                }, 100)
            })
        })
    })
}
if ($(document).ready(function() {
        var e = navigator.userAgent.toLowerCase(),
            i = -1 != e.indexOf("msie") && parseInt(e.split("msie")[1]),
            t = navigator.userAgent.toString().toLowerCase(),
            o = (/(trident)(?:.*rv:([\w.]+))?/.exec(t) || /(msie) ([\w.]+)/.exec(t) || ["", null, -1])[2];
        ("number" == typeof i || "12.0" == o || "11.0" == o || "10.0" == o || "9.0" == o || "8.0" == o) && $("html").addClass("ieView"), $(document).on("click", ".zoom", function() {
            var e = $(this).find("img").attr("src");
            $("#zoom-image").find("img").attr("src", e), $("#zoom-image").openModal(), 767 >= $(window).width() && $("html, body").animate({
                scrollTop: $("#zoom-image").offset().top - 40
            }, "slow")
        })
    }), $(window).resize(function() {
        767 >= $(window).width() ? $(".clearance-listing-col .clearance-list figure").addClass("zoom").attr("data-target", "#zoom-image") : $(".clearance-listing-col .clearance-list figure").removeClass("zoom").removeAttr("data-target", "#zoom-image")
    }), $(".product-detail-table").length) {
    RESPONSIVEUI.responsiveTabs();
    var getWidth = $(window).width();
    $(".tabcontrolswrap a.tabcontrols").click(function() {
        var e = $(this);
        if (767 >= getWidth) {
            $("div.product-detail-table .responsive-tabs").find("h4").removeClass("responsive-tabs__heading--active");
            var i = $("div.product-detail-table .responsive-tabs").find("#tablist1-panel2");
            return $(i).prev("h4").addClass("responsive-tabs__heading--active"), $(i).addClass("responsive-tabs__panel--active").show(), $("html,body").animate({
                scrollTop: $("#" + e.data("id")).offset().top - 40
            }, 500), !1
        }
        $("div.product-detail-table .responsive-tabs").find("li").removeClass("responsive-tabs__list__item--active"), $("div.product-detail-table .table-data").removeClass("responsive-tabs__panel--active").hide();
        var t = $("div.product-detail-table .responsive-tabs").find("#tablist1-tab2");
        return $(t).addClass("responsive-tabs__list__item--active"), $("#" + $(t).attr("aria-controls")).addClass("responsive-tabs__panel--active").show(), $("html,body").animate({
            scrollTop: $("#" + e.data("id")).offset().top - 40
        }, 500), !1
    })
}
if ($(document).on("click", ".category-tier-col.list-with-products .search-result-list .view-more-link", function() {
        $(this).hide(), $(this).prev(".data").children(".list-box.products").css("display", "block")
    }), $(".super-session .tier-latest-offer").length) {
    var slider1;

    function createSlider1(e, i) {
        return null == slider1 ? slider1 = $(".tier-latest-offer .bxslider").bxSlider({
            pager: !0,
            controls: !0,
            auto: !1,
            minSlides: e,
            maxSlides: e,
            slideWidth: i,
            slideMargin: 9,
            infiniteLoop: !1,
            hideControlOnEnd: !0,
            touch: !1,
            useCSS: !1,
            preventDefaultSwipeY: !1,
            preventDefaultSwipeX: !1,
            oneToOneTouch: !0,
            touchEnabled: !0,
            swipeThreshold: 0
        }) : slider1.reloadSlider({
            pager: !0,
            controls: !0,
            auto: !1,
            minSlides: e,
            maxSlides: e,
            slideWidth: i,
            slideMargin: 9,
            infiniteLoop: !1,
            hideControlOnEnd: !0,
            touch: !1,
            useCSS: !1,
            preventDefaultSwipeY: !1,
            preventDefaultSwipeX: !1,
            oneToOneTouch: !0,
            touchEnabled: !0,
            swipeThreshold: 0
        }), !0
    }
    $(window).on('load', function() {        
        var e = $(document).width(),
            i = $(document).width();
        i >= 1024 ? createSlider1(3, 319) : i >= 620 && i <= 1023 ? createSlider1(2, 319) : i >= 320 && i <= 767 && createSlider1(1, 300), $(window).resize(function() {
            var i = $(document).width();
            i != e && (i >= 1024 ? createSlider1(3, 319) : i >= 620 && i <= 1023 ? createSlider1(2, 319) : i >= 320 && i <= 767 && createSlider1(1, 300), e = i)
        })
    })
}
var clock;
$(document).ready(function() {
    var timerDate = $('#timerDate').val();
    var futureDate = new Date(timerDate);
    var currentDate = new Date();
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
    if (diff < 0) {
        diff = 0
    }
    clock = $('.clock').FlipClock(diff, {
        clockFace: 'DailyCounter',
        countdown: !0,
    })
});

/** CRO-442 */
$('.search-from .searchAutoComplete').keyup('change', function() {
    if ($('.search-from .searchAutoComplete').val() == '') {
        $('.search-from .close-btn').hide();
    } else {
        $('.search-from .close-btn').show();
    }
});

$('.search-from .close-btn').click(function() {
    $('.search-from .searchAutoComplete').val('');
    $('.search-from .close-btn').hide();
    $('.search-from .searchAutoComplete').focusTextToEnd();
});

if ($('.search-from .searchAutoComplete').val() != '') {
    $('.search-from .close-btn').show();
}
(function($) {
    $.fn.focusTextToEnd = function() {
        this.focus();
        var $thisVal = this.val();
        this.val('').val($thisVal);
        return this;
    }
}(jQuery));
/** CRO-442 */
/** CI-1468 */
$(document).ready(function () {
    if ($.isFunction($.fn.owlCarousel)) {
        var winOwl1 = $(".tier-latest-offer .owl-carousel").owlCarousel({
            lazyLoad: true,
            loop: true,
            nav: true,
            margin: 10,
            responsiveClass: true,
            responsiveBaseWidth: 1000,
            animateOut: 'fadeOut',
            autoHeight: true,
            responsive: {
                300: { items: 1, slideBy: 1 },
                768: { items: 3, slideBy: 3 },
                1024: { items: 4, slideBy: 4 }
            }
        });

        winOwl1.on('change.owl.carousel', function (event) {
            $('.owl-item.active').each(function () {
                $(this).find('.gift-image img').each(function () {
                    var imgsrc = $(this).attr('data-src');
                    $(this).attr('src', imgsrc).css({ 'opacity': 1 });
                });
            });
        });

    }
});
/** CI-1468 */
/*** EPL-12549 **/
$(document).ready(function() {
    $(".reviewondetailpage .star-ratings-sprite-rating,.reviewondetailpage .reviewcounter").click(function(event) { 
        var snippet = document.querySelectorAll(".ruk_rating_snippet");
        var reviewTab = document.querySelectorAll(".review-tab");
        var link = document.getElementById(reviewTab[0].getAttribute('aria-labelledby'));
        link.click();
        $('html, body').animate({
            scrollTop: $('#' + reviewTab[0].id).offset().top - 80
        }, 1000);
    });
    
});
/*** EPL-12549 **/

//EPL-13206
function isInputEmpty(elm, message) {
    var $elmError = $(elm).siblings('.error').length ? $(elm).siblings('.error') : $(elm).closest('span, p').siblings('.error');

    $elmError.hide();
    if (!$(elm).val() || ($(elm).attr('type') == 'checkbox' && $(elm).is(':not(:checked)'))) {
        if (message) {
            $elmError.empty().text(message);
        }
        $elmError.show();
        return true;
    }
    // false means no error
    return false;
}

function validatePassword (elm) {
    $(elm).siblings('.error').hide();
    $(elm).removeClass('red-border');
    var password = $(elm).val();
    if (!password) {
        $('.popover-content .glyphicon').removeClass('glyphicon-ok').addClass('glyphicon-remove');
        return true;
    }
	return false;
}

function validateCPassword(confrimElm, elm) {
    $(confrimElm).siblings('.error').hide();
    if (!$(confrimElm).val()) {
        return true;
    } else if ($(confrimElm).val() && $(confrimElm).val() != $(elm).val()) {
        $(confrimElm).siblings('.error').empty().text('The passwords entered do not match. Please try again.').show();
        return true;
    }
    return false;
}

// EPL-13206


// EPL-13127 
$(document).on('click', '#notifypopup', function (e) {
        $('.lean-overlay').hide();
    var prdCode = $(this).attr('prdcode');
    
    var productCode = prdCode.replace(/_/g,'/');
    productCode = productCode.replace(/--/g,'.');

    prdCode = prdCode.replace(".", '--');
    prdCode = prdCode.escapeSelector();
    					
    $.ajax({
        global: false,
        type:"POST",
        url:ECP.getBase()+"/basket/basket/notifypopup",
        data:{
            'prductname' : $('#PQ_'+prdCode).data('description'),
            'productCode' : productCode,
            'productPrice' : $('#PQ_'+prdCode).data('amount'),
            'productsurcharge' : $('#PQ_'+prdCode).data('surcharge'),
            'producturl' : $('#PQ_'+prdCode).data('friendlyurl')
        },
        success:function(response){
            /* CI-4825 */
            response = DOMPurify.sanitize(response, {ADD_ATTR: ['target']});
            $('#emailNoti').find('.modal-content').html(response);
            /* CI-4825 */
            $('#emailNoti').openModal();
            $(".emailStockpopup .product-thumb .bxslider").bxSlider({
        mode: "horizontal",
        auto: !1,
        pagerCustom: "#bx-pager",
        pagerSelector: "jQuery selector",
        useCSS: !1,
        controls: !1,
        maxSlides: 1,
        minSlides: 1
    });
    var pagerr, mySettings = {
            slideWidth: 70,
            useCSS: !1,
            pager: !1,
            infiniteLoop: !1,
            autoStart: !1,
            maxSlides: 3,
            moveSlides: 1,
            slideMargin: 10
        },
        maxSlides = 3,
        wiidth = $(window).innerWidth();
    $(document).ready(function() {
        var e = mySettings;
        e.maxSlides = 480 >= wiidth ? 2 : wiidth > 481 && 767 >= wiidth ? 2 : 3, pagerr = $(".product-thumb #bx-pager").bxSlider(e), $(window).resize(function() {
            $(window).on("orientationchange", function() {
                var e = mySettings;
                e.maxSlides = 480 >= wiidth ? 2 : wiidth > 481 && 767 >= wiidth ? 2 : 3, pagerr.destroySlider(), setTimeout(function() {
                    pagerr.reloadSlider(e)
                }, 100)
            })
        })
    });
        }
    });
});
$(document).on('click', '.emailmeMail .btn', function (e) {
    if (!validateEmail($('#email').val())) {
        $('#validEmail').show();
        return false;
    }
    
    var producturl = $('#producturl').val();
    producturl = producturl.replace(window.location.origin, '');
    
    if ($('#recaptchamodule').val() == 1) {
        /* EPL-13615 */
        grecaptcha.ready(function() {
            grecaptcha.execute($('#recaptchakey').val(), {action: 'notifyMe'}).then(function(token) {
                $('.emailmeMail').prepend('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
                $.ajax({
                    type:"POST",
                    url:ECP.getBase()+"/basket/basket/notifyproduct",
                    data:{
                        'prdcode' : $('#prdcode').val(),
                        'prdname' : $('#prdname').val(),
                        'email' : $('#email').val(),
                        'siteid' : $('#siteid').val(),
                        'producturl' : producturl,
                        'token': token
                    },
                    success:function(response){
                        if(response.response.error == 1) {
                            $(".emailmeSend").addClass("fds").show(); 
                            $(".emailmeMail").hide();
                        } else {
                            $('#spamRequest').show();
                        }
                    }
                });
            });
        });
        /* EPL-13615 */
    } else {
        $.ajax({
            type:"POST",
            url:ECP.getBase()+"/basket/basket/notifyproduct",
            data:{
                'prdcode' : $('#prdcode').val(),
                'prdname' : $('#prdname').val(),
                'email' : $('#email').val(),
                'siteid' : $('#siteid').val(),
                'producturl' : producturl
            },
            success:function(response){
                $(".emailmeSend").addClass("fds").show(); 
                $(".emailmeMail").hide();
            }
        });
    }
});    

  
// EPL-13127 

/* EPL-13388 */
$("header .cart-area li.cart .basket-icon").click(function(){
    trackMiniBasketEvent('Basket');
});
$("header .cart-area li.cart .basket-btn").click(function(){
    trackMiniBasketEvent('View Basket');
});
$("header .cart-area li.cart .checkout-btn").click(function(){
    trackMiniBasketEvent('Checkout');
});
function trackMiniBasketEvent(eventType) {
    
    
}
/* EPL-13388 */

/* CI-3891  */
$(".nav-col .wishlist-btn").click(function() {
    $(".nav-col").remove();
	$('html, body').toggleClass("nav-open");
});
/* CI-3891 */

function heightCheck(){    
    var heightPostCode = $('.discount-height').outerHeight() + $('.custom-height').outerHeight() + 14;
    if($('body').on('load','.nice-select')){
        $('.total-height').css('height', heightPostCode)
    }
}

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

/* PC-788 */
$(document).ready(function() {
$('.post-code-click').on('click', function(){
        $('input.post-code').focus();
    });
    
    $('.enter-post-code').on('click', function(){
        $('input.post-code').focus();
    });
    
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
    
    if($('.candc a').hasClass('active')){
        storeCollectionActive();
    } else if($('.deliveryc a').hasClass('active')){
        homeDeliveryActive();
    } 
    
   


	$('.remove-link').click(function() {
		setTimeout(function(){    
		location.reload();
		},2500)
	});
});


function homeDeliveryActive(){ 
    $('.delivery-active').parent().removeClass('hidden');
    $('.candc-active').parent().addClass('hidden');
    $('.deliveryc').addClass('active');
    $('.deliveryc a').addClass('active');
    $('.candc').removeClass('active');
    $('.candc a').removeClass('active');
    $('#profile').addClass('active');
    $('#profile').show();
    $('#home').removeClass('active'); 
    $('#home').hide(); 
    $('.hwdbasket').removeClass('hidden');     
    $('.hwdbasket').addClass('active');  
    $('.hwdalert1').removeClass('hidden');  
    $('.cncbasket').removeClass('active');      
    $('.cncbasket').addClass('hidden');      
    $('.cncalert1').addClass('hidden');      
    $('.cncalert2').addClass('hidden');      
	$('.fifm-active').parent().addClass('hidden');
	$('.fifmbasket').removeClass('active').addClass('hidden')
	$('.postcode-input').show();
	$('.extra-text').hide();
}

function storeCollectionActive(){ 
    $('.candc-active').parent().removeClass('hidden');
    $('.delivery-active').parent().addClass('hidden');
    $('.candc').addClass('active');
    $('.candc a').addClass('active');
    $('.deliveryc').removeClass('active');
    $('.deliveryc a').removeClass('active');
    $('#home').addClass('active');
    $('#home').show();
    $('#profile').removeClass('active');     
    $('#profile').hide();
    $('.hwdbasket').removeClass('active');      
    $('.hwdbasket').addClass('hidden');
    $('.hwdalert1').addClass('hidden');
    $('.cncbasket').removeClass('hidden'); 
    $('.cncbasket').addClass('active');
    $('.cncalert1').removeClass('hidden');      
    $('.cncalert2').removeClass('hidden');       
	$('.fifm-active').parent().addClass('hidden');
	$('.fifmbasket').removeClass('active').addClass('hidden')
	$('.postcode-input').show();
	$('.extra-text').hide();
}

/* PC-788 */

