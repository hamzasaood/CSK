/**add to cart click on pdp page */
$(document).ready(function(){   
	if (window.location.href.indexOf("/basket") > -1) {
		setCookie('issearched', 0, 30); // DCX-459
		viewBasketPage();
	}

    /* CI-6502 */
    if (window.location.href.indexOf("/p/") > -1 || window.location.href.indexOf("/search/") > -1) {
        viewPdpPage()
    }
    /* CI-6502 */
});
/* CI-6455 */
$(window).on('load', function () {
    // track the sign-up event
    if (getCookie('GA4SignupCompleted') !== '') 
    {
        dataLayer_signup();
    }
});
/* CI-6455 */
function viewBasketPage() {
	var total = 0;
	var discountTotal = 0;
	var items = [];
	$("select.custom-select.numeric.prdQty").each(function(){
		var item = $(this);
		var prdcode = item.closest("span").find("select").data('prdcode');
		var title = item.closest("span").find("select").data('description');
		var brand = item.closest("span").find("select").data('brand');
		var discount = item.closest("span").find("select").data('discount');
		var qty = parseInt(item.find(":selected").text());
		var amount = parseFloat(item.closest("span").find("select").data('amount'));
		var tamount = parseFloat(item.closest("span").find("select").data('tamount'));
		var cats = item.data('category').split('/');
		// DCX-459
		if(getCookie('issearched') == 0 && localStorage.getItem('list_item_name'+prdcode) == ''){
			localStorage.setItem('list_item_name'+prdcode, 'Search Listing');		
		}
		// DCX-459		
		items.push({
			item_id: String(prdcode),
			item_name: title.replace(/&nbsp;/g, ' '),
			item_list_name: localStorage.getItem('list_item_name'+prdcode) ?? '',
			discount: parseFloat($.trim(parseFloat(discount).toFixed(2))),
			item_brand: brand,
			item_category: cats[1] ?? '',
			item_category2: cats[2] ?? '',
			item_category3: cats[3] ?? '',
			item_category4: cats[4] ?? '',
			item_category5: '',
			price: amount,
			currency: 'GBP',
			quantity: qty
		});
		total += tamount;
		discountTotal += parseFloat(discount);
	});
	total = parseFloat(total) - parseFloat(discountTotal);
	window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: 'view_cart',
		ecommerce: {
			value: parseFloat(parseFloat(total).toFixed(2)),
			items: items
		}
	});
}
/**Remove From Cart using remove link */
$(document).on('click', 'a.remove-link', function(e){
    
    var basketprdcode = $(e.target).closest("div").find("select").data('basketprdcode');
    var prdcode = $('#qty_'+basketprdcode).data('prdcode');
	var cat = $('#qty_'+basketprdcode).data('category');
	var cats = cat.split('/');
	window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: 'remove_from_cart',
		ecommerce: {
			items: [
			{
			item_id: String(prdcode),
			item_name: $('#qty_'+basketprdcode).data('description') ? $('#qty_'+basketprdcode).data('description').replace(/&nbsp;/g, ' ') : '',
			item_list_name:  localStorage.getItem('list_item_name'+prdcode) ?? '',
			discount: $('#qty_'+basketprdcode).data('discount') ? parseFloat(parseFloat($.trim($('#qty_'+basketprdcode).data('discount'))).toFixed(2)) : '',
			item_brand: $('#qty_'+basketprdcode).data('brand') ?? '',
			item_category: cats[1] ?? '',
			item_category2: cats[2] ?? '',
			item_category3: cats[3] ?? '',
			item_category4: cats[4] ?? '',
			item_category5: '',
			price: parseFloat($('#qty_'+basketprdcode).data('amount')),
			currency: 'GBP',
			quantity: $('#qty_'+basketprdcode).data('preqty')
			}]
		}
	});
  });
 
/**Remove From Cart using remove link */
$(document).on('click','.product-detail-inner a.addtocartbtn',function(){
	 
	var cat = $('.wishlist-icon').data('prdcategory') ?? '';
	var cats = cat ? cat.split('/') : '';
    var prdcode = $(this).data('prdcode');
    var qty = parseInt($('.prdQty').find(":selected").text());
    var discount = $('.prdQty').data('discount') ?? '';
	var amount = $(".prdQty").data('amount') ?? $(".prdQty").data('amount');
	var title = $('.product-detail-section .heading').html();
	var brand = $('.product-detail-section .wishlist-icon').data('prdbrand') || 'SPECIAL_BUY';
	var item_label = cats[4];
	// DCX-459
	// if (window.location.href.indexOf("/search/") > -1) {
	// 	item_label = 'Search results';
	// }
	// DCX-459
	if (localStorage.getItem('list_item_name'+prdcode)) {
		item_label = localStorage.getItem('list_item_name'+prdcode);
	}
	pushDatatoDataLayerNew(prdcode,cat,qty,amount, 'add_to_cart', title, brand, item_label, discount);  
});
/**add to cart click on pdp page */
/**create list item label value on click on productlink */

$(document).on('click','.owl-carousel .content-box a',function(e){
	var prdcode = $(e.target).closest("form").find("input").data('prdcode');
	localStorage.setItem('list_item_name'+prdcode, 'Pick up where you left off');
});

$(document).on('click','.home-latest-offer a.shop-overlay',function(e){
	var prdcode = $(e.target).closest("li").find("input:hidden").data('prdcode');
	localStorage.setItem('list_item_name'+prdcode, 'Latest Offers');
});

$(document).on('click','.recent-items-inner .recent-block-right h3 a ',function(e){
	var prdcode = $(e.target).closest(".recent-block-right").find("input").data('prdcode');
	localStorage.setItem('list_item_name'+prdcode, 'Recently viewed'); /** DCX-457 **/
});

/* CI-6448 */
$(document).on('click','.recent-items-inner a ',function(e){
	var prdcode = $(e.target).parents(".recent-block").find("input[type=hidden]").data('prdcode');

    if(typeof prdcode !== 'undefined'){
	    localStorage.setItem('list_item_name'+prdcode, 'Recently viewed'); /** DCX-457 **/
    }
});
$('.productbrandslisting .product_brand_detail .product-info a').on('click', function(e){

    var prdcode = $(e.target).parents("form.product-content").find("input[type=hidden]").data('prdcode');
    var list_item_name = $(e.target).parents("form.product-content").find("input[type=hidden]").data('list');

    if (typeof prdcode !== 'undefined' && typeof list_item_name !== 'undefined' && list_item_name != '') {
        localStorage.setItem('list_item_name' + prdcode, list_item_name);
    }
});
/* CI-6448 */
/**create list item label value on click on productlink */
/**add to cart event from other pages */
 
  $(document).on('click', '.product-content a.addtocartbtn', function(e){    
    var prdcode = $(e.target).closest("form").find("input").data('prdcode');
    var category = $(e.target).closest("form").find("input").data('category');
    var amount = $(e.target).closest("form").find("input").data('amount');
    var discount = $(e.target).closest("form").find("input").data('discount');
    var list = $(e.target).closest("form").find("input").data('list');
    var type = $('#PQ_'+prdcode).data('type');   
	var title = $('#PQ_'+prdcode).data('description'); 
	var brand = $('#PQ_'+prdcode).data('brand'); 
	var cats = category.split('/');
	// DCX-459
	if(getCookie('issearched') == 1){
		list = 'Search Listing';		
	}
	// DCX-459	
    pushDatatoDataLayerNew(prdcode,category,type,amount, 'add_to_cart', title, brand, list, discount);    
  });    
  $(document).on('click','.wishlist-mobile-items a.addtocartbtn',function(e){
    var prdcode = $(e.target).closest("form").find("input").data('prdcode');
    var category = $(e.target).closest("form").find("input").data('category');
    var amount = $(e.target).closest("form").find("input").data('amount');
    var type = $('#PQ_'+prdcode).data('type'); 
	var title = $('#PQ_'+prdcode).data('description');
	var brand = $('#PQ_'+prdcode).data('brand');
    pushDatatoDataLayerNew(prdcode,category,type,amount, 'add_to_cart', title, brand, 'WishList Section');
  });
  $(document).on('click','.recommend-section a.addtocartbtn',function(e){
    var prdcode = $(e.target).closest("form").find("input").data('prdcode');
    var category = $(e.target).closest("form").find("input").data('category');
    var amount = $(e.target).closest("form").find("input").data('amount');
    var type = $('#PQ_'+prdcode).data('type'); 
	var title = $('#PQ_'+prdcode).data('description');
	var brand = $('#PQ_'+prdcode).data('brand');
    pushDatatoDataLayerNew(prdcode,category,type,amount, 'add_to_cart', title, brand, 'You might also like');
  });
  $(document).on('click','.addtocartbtn.js-fifm-service-basket',function(e){
    var mobilePrdcode = $(e.target).parents("div").find('.border .row.popupproducts:visible .hidden-xs input').data('prdcode');
    var webPrdcode = $(e.target).closest("div").find('input').data('prdcode');
    var prdcode = webPrdcode?webPrdcode:mobilePrdcode;
    var mobileCategory = $(e.target).parents("div").find(".border .row.popupproducts:visible .hidden-xs input").data('description');
    var webCategory = $(e.target).closest("div").find("input").data('category');
    var category = webCategory?webCategory:mobileCategory;
    var mobileType = $(e.target).parents("div").find(".border .row.popupproducts:visible .hidden-xs input").data('type');
    var webType = $('#PQ_'+prdcode).data('type');
    var type = webType?webType:mobileType;
    var mobileAmount = $(e.target).parents("div").find(".border .row.popupproducts:visible .hidden-xs input").data('amount');
    var webAmount = $(e.target).closest("div").find("input").data('amount');
    var amount = webAmount?webAmount:mobileAmount;   
	var title = $('#PQ_'+prdcode).data('description');
	var brand = $('#PQ_'+prdcode).data('brand');
    pushDatatoDataLayerNew(prdcode,category,type,amount, 'add_to_cart', title, brand, 'Fifm service');
  });
  $(document).on('click','.recent-items-inner a.addtocartbtn',function(e){
    if(!$('.wishlist-mobile-items').length){
      var prdcode = $(e.target).closest("form").find("input").data('prdcode');
      var category = $('#PQ_'+prdcode).data('category');
      var type = $('#PQ_'+prdcode).data('type');
      var amount = $(e.target).closest("form").find("input").data('amount');
	  var title = $('#PQ_'+prdcode).data('description');
	  var brand = $('#PQ_'+prdcode).data('brand');
      pushDatatoDataLayerNew(prdcode,category,type,amount, 'add_to_cart', title, brand, 'Recently viewed'); /** DCX-457 **/
    } 
  }); 
  $(document).on('click','.owl-carousel .shop-now-btn.addtocartbtn',function(e){
    if(!$('.wishlist-mobile-items').length){
      var prdcode = $(e.target).closest("form").find("input").data('prdcode');
      var category = $('#PQ_'+prdcode).data('category');
      var type = $('#PQ_'+prdcode).data('type');
      var amount = $(e.target).closest("form").find("input").data('amount');
	  var title = $('#PQ_'+prdcode).data('description');
	  var brand = $('#PQ_'+prdcode).data('brand');
      pushDatatoDataLayerNew(prdcode,category,type,amount, 'add_to_cart', title, brand, 'Pick up where you left off');
    } 
  }); 
  /**basket page dropdown */
  if(!$('.product-detail-inner select.custom-select.numeric.prdQty').length){
    var previousVal = '';
    $(document).on('click', '.nice-select.custom-select.numeric.prdQty', function (e) {
      previousVal = $(e.target).parent('.quantity-inner').find(":selected").text();
      previousDiscount = $(e.target).parent('.quantity-inner').find("select.prdQty").data('discount');
    });
    $(document).on('click', '.quantity-inner.webviews select', function (e) {
      previousVal = $(e.target).parent('.quantity-inner').find(":selected").text();
      previousDiscount = $(e.target).parent('.quantity-inner').find("select.prdQty").data('discount');
    });
    $(document).on('change', 'select.custom-select.numeric.prdQty', function(e){
      var prdcode = $(e.target).closest("span").find("select").data('prdcode');
      var title = $(e.target).closest("span").find("select").data('description');
      var brand = $(e.target).closest("span").find("select").data('brand');
      var discount1 = $(e.target).closest("span").find("select").data('discount');
	  var qty = parseInt($(e.target).find(":selected").text());
      var triggreevent = (previousVal < qty) ? 'add_to_cart' : 'remove_from_cart';
      //var action = (previousVal < qty) ? 'a' : 'r';
      var newqty = (previousVal < qty) ? (qty-previousVal) : (previousVal-qty);
	  category = $(e.target).closest("span").find("select").data('category');
	  var amount = $(e.target).closest("span").find("select").data('amount');
	  var item_list_name =  localStorage.getItem('list_item_name'+prdcode) ?? '';

	  var newDiscount = previousDiscount/previousVal;
	  var discount = (previousVal < qty) ? discount1 : (previousVal-qty)*newDiscount;
	  pushDatatoDataLayerNew(prdcode,category,newqty,amount, triggreevent, title, brand, item_list_name, discount)
      previousVal = '';
    });
  } 
  /**basket page dropdown */ 
  function pushDatatoDataLayerNew(prdcode,category,type,amount, event, title, brand, item_list_name, discount){
	localStorage.setItem('list_item_name'+prdcode, item_list_name);
    var qty = type ? type : 1;
	var cats = category.split('/');
    window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
	event: event,
	ecommerce: {
		items: [
		{
			item_id: String(prdcode),
			item_name: title.replace(/&nbsp;/g, ' '),
			item_list_name: item_list_name,
			discount: parseFloat(parseFloat(discount ? $.trim(discount) : 0).toFixed(2)),
			item_brand: brand,
			item_category: cats[1] ?? '',
			item_category2: cats[2] ?? '',
			item_category3: cats[3] ?? '',
			item_category4: cats[4] ?? '',
			item_category5: '',
			price: parseFloat(amount),
			currency: 'GBP',
			quantity: qty
		}]
	}
	});
  }
/* CI-6502 */
/**
 * add to cart event from other pages 
 */
function viewPdpPage() {
	

    if ($('.product-detail-inner ').length > 0) {

var cats = $('select.prdQty').data('category').split('/');
	var prdcode = $('.wishlist-icon').data('prdcode');
	var item_label = cats[4];
	// DCX-459
	var prdcode1 = $('select.prdQty').data('prdcode');	
	if(getCookie('issearched') == 1 && localStorage.getItem('list_item_name'+prdcode1) != 'Search Listing'){
		localStorage.setItem('list_item_name'+prdcode1, 'Search Listing');		
	}else if(getCookie('issearched') == 0 && localStorage.getItem('list_item_name'+prdcode1) == 'Search Listing'){
		localStorage.setItem('list_item_name'+prdcode1, '');	
	}

    if (localStorage.getItem('list_item_name' + prdcode1)) {
        item_label = localStorage.getItem('list_item_name' + prdcode1);
	}
	// DCX-459
        var discount        = 0;

        if (typeof $("select.prdQty").data('discount') != 'undefined') {
            discount        = $("select.prdQty").data('discount') ?? 0;
        }

        var brand           = $('#PQ_' + prdcode).attr('data-brand');

        window.dataLayer    = window.dataLayer || [];
		window.dataLayer.push({
			event: 'view_item',
			ecommerce: {
                currency: 'GBP',
                value: parseFloat($(".prdQty").data('amount')),
				items: [{
					item_id: String(prdcode1),
                    item_name: $('#PQ_' + prdcode).attr('data-description') ?? '',
					item_list_name: item_label,
                    discount: Number(parseFloat(discount).toFixed(2)) ?? 0,
                    item_brand: brand ?? 'SPECIAL_BUY',
					item_category: cats[1] ?? '',
					item_category2: cats[2] ?? '',
					item_category3: cats[3] ?? '',
					item_category4: cats[4] ?? '',
					item_category5: '',
					price: parseFloat($(".prdQty").data('amount')),
					quantity: parseInt($('.prdQty').find(":selected").text()),
					currency: 'GBP',
				}]
			}
		});
	}
}
/* CI-6502 */

/**CI-6314 */
function pageView(pageLocation,pagePath,pageTitle,pageType){
	
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': 'pageView',
		'userid' : $('#infimail').val() ? $('#infimail').val() : '',
		'logged_in_status' : $('#infimail').val() ? true : false,
		'page_type' : (typeof page_type === 'undefined') ? pageType :  page_type ,
		'page_category' : (typeof page_category === 'undefined' || page_category === null) ? '' :  page_category, 
		'page_url' : pageLocation,
		'page_path': pagePath,
		'page_title': pageTitle 
	});
} 
/**CI-6314 */

/* CI-6494 */
/**
 * Function to track select item event
 * @param {*} prdCode   Product code
 * @param {*} title     Item list name
 */
function productClick(prdCode, title = '') { 
	var gprdCode = prdCode.replace(/\./g,'--');
	gprdCode = gprdCode.replace(/\//g,'_');
    
	/* CI-6448 */
    if(title == '')
	{
		title = $('#PQ_' + gprdCode).data('list') ?? '';
	}
	
	localStorage.setItem('list_item_name' + gprdCode, title);
	/* CI-6448 */
 
	select_item(gprdCode, title);
}

/**
 * Function  to trigger select_item GTA event
 * 
 * @param {*} gprdCode          Product code
 * @param {*} item_list_name    Item list name
 */
function select_item(gprdCode, item_list_name = '') {
    if (item_list_name == '') {

        if ($("#PQ_" + gprdCode).closest('.latest-product-offers').find("h2:eq(0)").length > 0) {
            item_list_name = $("#PQ_" + gprdCode).closest('.latest-product-offers').find("h2:eq(0)").text();
        } else if ($("#PQ_" + gprdCode).closest('.product-listing-col').find("h1:eq(0)").length > 0) {
            item_list_name = $("#PQ_" + gprdCode).closest('.product-listing-col').find("h1:eq(0)").text();
		}
        if ($.trim(item_list_name) == '' && $(".breadcrumbs-col ul li:last a").length > 0) {
			item_list_name = $(".breadcrumbs-col ul li:last a").text();
		}
	}
	// DCX-459
	if(getCookie('issearched') == 1){
		item_list_name = 'Search Listing';		
	}
	// DCX-459
    var cats = $('#PQ_' + gprdCode).data('category').split('/');
    var discount = 0;

    if (typeof $('#PQ_' + gprdCode).data('discount') != 'undefined') {
        discount = $('#PQ_' + gprdCode).data('discount') ?? 0;
    }

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: 'select_item',
		ecommerce: {
            currency: 'GBP',
            value: parseFloat($('#PQ_' + gprdCode).data('amount') ?? 0),
			items: [
			{
				item_id: String(gprdCode),
                item_name: $('#PQ_' + gprdCode).data('description').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&'),
				item_list_name: item_list_name,
                discount: Number(parseFloat(discount).toFixed(2)) ?? 0,
                item_brand: $('#PQ_' + gprdCode).data('brand') ?? '',
				item_category: cats[1] ?? '',
				item_category2: cats[2] ?? '',
				item_category3: cats[3] ?? '',
				item_category4: cats[4] ?? '',
				item_category5: '',
                price: parseFloat($('#PQ_' + gprdCode).data('amount') ?? 0),
				currency: 'GBP',
				quantity: 1
			}]
		}
	});
}
/* CI-6494 */
/* CI-6510 */
function beginCheckoutGa4Tag(checkout_type) {
	if(checkout_type == "storecollection") {
		checkout_type = "cnc";
	} else if(checkout_type == "homedelivery") {
		checkout_type = "hwd";
	} else if(checkout_type == "fifmbasket") {
		checkout_type = "fifm";
	}
	var items = [];
	var haveDiscount = 0;
	$("select.custom-select.numeric.prdQty").each(function(){
		var item = $(this);
		var prdcode = item.closest("span").find("select").data('prdcode');
		var title = item.closest("span").find("select").data('description');
		var brand = item.closest("span").find("select").data('brand');
		var discount = $.trim(item.closest("span").find("select").data('discount'));
		discount = parseFloat(parseFloat(discount != "" ? (discount) : 0).toFixed(2));
		var amount = item.closest("span").find("select").data('amount');
		var qty = parseInt(item.find(":selected").text());
		var cats = item.data('category').split('/');
		if(discount > 0) {
			haveDiscount = 1;
		}
		
		items.push({
			item_id: String(prdcode),
			item_name: title.replace(/&nbsp;/g, ' '),
			item_list_name: localStorage.getItem('list_item_name'+prdcode) ?? '',
			discount: discount,
			item_brand: brand,
			item_category: cats[1] ?? "",
			item_category2: cats[2] ?? "",
			item_category3: cats[3] ?? "",
			item_category4: cats[4] ?? "",
			item_category5: '',
			price: parseFloat(amount),
			currency: 'GBP',
			quantity: qty
		});
	});
	var gBasketCoupon = (haveDiscount > 0 ? basketCoupon : "");
	var data = {
		event: 'begin_checkout',
		ecommerce: {
			value: parseFloat(parseFloat($(".total-val").find("span.text-sub").text().match(/-?(?:\d+(?:\.\d*)?|\.\d+)/)[0]).toFixed(2)),
			coupon: $("#promotion_description").val() ?? gBasketCoupon,
			checkout_type: checkout_type,
			items: items
		}
	};

	window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push(data);
}
/* CI-6510 */
 /** CI-6518 */
var addShippingInfoGa4TagTriggered = 0;
function addShippingInfoGa4Tag() {
	if(addShippingInfoGa4TagTriggered == 0) {
		var frontendService = $(".delivery-data input[type='radio']:checked").parent().find(".carriage-logo img").attr('alt') ?? "";
		var strDescription = $(".delivery-data input[type='radio']:checked").attr("description") ?? "";
		var shipping_tier = ($.trim(frontendService) != "" ? frontendService + ' - ' : '') + strDescription;
		var cats;
		var items = [];
		var itemIds = [];
		$.each(productBasketArray, function (i, item) {
			var qty = item.quantity;
			if ($.inArray(item.id, itemIds) == '-1') {
				itemIds.push(item.id);
				cats = item.category.split('/');
				items.push({
					item_id: String(item.id),
					item_name: item.name,
					item_list_name: localStorage.getItem('list_item_name' + item.id) ?? '',
					discount: parseFloat(parseFloat($.trim(item.per_item_discount)).toFixed(2)),
					item_brand: item.brand,
					item_category: cats[1] ?? "",
					item_category2: cats[2] ?? "",
					item_category3: cats[3] ?? "",
					item_category4: cats[4] ?? "",
					item_category5: '',
					price: parseFloat(item.unit_price),
					currency: (item.currency ?? 'GBP'),
					quantity: parseInt(qty)
				});
			}
		});

		window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			event: 'add_shipping_info',
			ecommerce: {
				currency: 'GBP',
				value: parseFloat(parseFloat($("#totalpayableamount").val().match(/-?(?:\d+(?:\.\d*)?|\.\d+)/)[0]).toFixed(2)),
				coupon: basketCoupon,
				shipping_tier: shipping_tier,
				checkout_type: "hwd",
				items: items
			}
		});
		addShippingInfoGa4TagTriggered = 1;
	}
} 
 /** CI-6518 */
/* CI-6526 */
var addPaymentInfoGa4TagTriggered = 0; 
function addPaymentInfoGa4Tag(checkout_type) {
	var cats;
	var items = [];
	var itemIds = [];
	$.each(productBasketArray, function (i, item) {
		if ($.inArray(item.id, itemIds) == '-1') {
			itemIds.push(item.id);
			cats = item.category.split('/');
			var qty = item.quantity;
			items.push({
				item_id: String(item.id),
				item_name: item.name,
				item_list_name: localStorage.getItem('list_item_name' + item.id) ?? '',
				discount: parseFloat(parseFloat($.trim(item.per_item_discount)).toFixed(2)),
				item_brand: item.brand,
				item_category: cats[1] ?? "",
				item_category2: cats[2] ?? "",
				item_category3: cats[3] ?? "",
				item_category4: cats[4] ?? "",
				item_category5: '',
				price: parseFloat(item.unit_price),
				currency: (item.currency ?? 'GBP'),
				quantity: parseInt(qty)
			});
		}
	});

	window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: 'add_payment_info',
		ecommerce: {
			currency: 'GBP',
			value: parseFloat($("#summarytotalprice").length > 0 ? parseFloat($("#summarytotalprice").text().match(/-?(?:\d+(?:\.\d*)?|\.\d+)/)[0]).toFixed(2) : $("#totalpayableamount").val()),
			coupon: basketCoupon,
			payment_type: localStorage.getItem('payment_type') ?? '',
			checkout_type: checkout_type,
			items: items
		}
	});
	addPaymentInfoGa4TagTriggered = 1;
} 
/* CI-6526 */
// CI-6410
if ($('.payment-detail .select-payment-mode li').length) {
    $(document).on('click', '.payment-detail .select-payment-mode li', function() {
        var payment = $(this).find('img').attr("alt");
        var cardCheck = payment.toLowerCase();
        if (cardCheck == 'visa' || cardCheck == 'mastercard' || cardCheck == 'maestro' || cardCheck == 'american express') {
            localStorage.setItem('payment_type', 'Card');
        } else {
            localStorage.setItem('payment_type', payment.replace(" ", ""));
        }
		/* CI-6526 */
		if(addPaymentInfoGa4TagTriggered == 0) {
			var checkout_type = "";
			if($("#cncordertype").length) {
				checkout_type = "cnc";
			} else if($("#homedeliveryshipping").length) {
				checkout_type = "hwd";
			}
			if(checkout_type != "") {
				addPaymentInfoGa4Tag(checkout_type);
			}
		}
		/* CI-6526 */
    });
}
function setGa4Purchase() {
    var itemArr = [];
    var orderData = {};
    var price = 0;
    
    jQuery.map(orderProductDataArray, function(product) {
        var item = {};  
        var category = product['category'].split("/");      
		var discount = 0;
		price = product['unit_price'];
        if (product['discount']) {            
            discount = product['discount'];            
        }
        if (product['multibuy_disc']) {
            discount = product['multibuy_disc'];           
        }        

        item['item_id'] = product['id'] ?? "";
        item['item_name'] = product['name'] ?? "";
        item['item_list_name'] = localStorage.getItem('list_item_name'+product['id']) ?? "";
        item['discount'] = Number(parseFloat(discount).toFixed(2)) ?? 0;
        item['item_brand'] = product['brand'] ?? "";
        item['item_category'] = category[1] ?? "";
        item['item_category2'] = category[2] ?? "";
        item['item_category3'] = category[3] ?? "";
        item['item_category4'] = category[4] ?? "";
        item['item_category5'] = category[5] ?? "";
        item['price'] = Number(parseFloat(price).toFixed(2)) ?? 0;
        item['currency'] = placeorderSummary.currency ?? "GBP",
        item['quantity'] = product['quantity'] ?? 0;

        itemArr.push(item);        
    });

    orderData['event'] = 'purchase';   
    orderData['ecommerce'] = {
    transaction_id: checkoutSummary.order_id ?? "",   
	currency: placeorderSummary.currency ?? "GBP", 
    value: checkoutSummary.grandTotal ?? "",
    tax: placeorderSummary.tax ?? 0,
    shipping: checkoutSummary.shipping ?? 0,
    coupon: placeorderSummary.coupon ?? "",
    checkout_type: placeorderSummary.order_type ?? "",
    payment_type: localStorage.getItem('payment_type') ?? "",
    'items': itemArr
};	
	window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(orderData);  
	localStorage.removeItem('payment_type'); 
    console.log(orderData);
}
// CI-6410
// CI-6432 CI-6424
function setGa4SelectPromotion(position,event,location) {
	window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
	  event: event,
	  ecommerce: {
		items: [
			  {
	  creative_name: position ?? "",
	  location_id: location
		}]
	  }
	   });
}
// CI-6432 CI-6424
// CI-6424
$(document).ready(function(){   
	$(document).on('click','.home-slider .bxslider img', function(){
    var position = $(this).data('position');
	setGa4SelectPromotion(position,'select_promotion','homepage hero event');
    console.log(position);
	});
});
// CI-6424

// CI-6317
function setGa4Error(type) {	
	if(type){
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({event: type});
		console.log(type);
	}
}
// CI-6317

/* CI-6486 */
function viewItemList(item_list_name, type = "", that = "") {
	var cats;
	var items = [];
	var itemIds = [];

    if (type == 1) {
		
		$.each($('.latest-product-offers.leftOffSection').find("li"), function (i, item) {

			var input = $(item).find('input[type=hidden]');
			if ($.inArray(input.data('prdcode'), itemIds) == '-1') {
                
				itemIds.push(input.data('prdcode'));
                var itemListName = input.data('list') ?? '';

                // there are two hidden input boxes
                input = $('#PQ_' + input.data('prdcode'));

                if (itemListName == '') {
                    var itemListName = input.data('list') ?? '';
                }

				cats = input.data('category').split('/');
                var discount = 0;

                if (typeof input.data('discount') != 'undefined') {
                    discount = input.data('discount') ?? 0;
                }

				items.push({
					item_id: String(input.data('prdcode') ?? ''),
					item_name: input.data('description').replace(/&nbsp;/g, ' ') ?? '',
                    item_list_name: itemListName,
                    discount: Number(parseFloat(discount).toFixed(2)) ?? 0,
					item_brand: $.trim(input.data('brand') ?? ''),
					item_category: cats[1] ?? '',
					item_category2: cats[2] ?? '',
					item_category3: cats[3] ?? '',
					item_category4: cats[4] ?? '',
					item_category5: '',
					price: parseFloat(input.data('amount') ?? 0),
					currency: 'GBP',
					quantity: 1
				});
			}
		});
		$('.latest-product-offers.leftOffSection').addClass("active");
    } else if (type == 2) {
		
		$.each($('.latest-product-offers:not(.leftOffSection)').find("li"), function (i, item) {
			var input = $(item).find('input[type=hidden]');
			if ($.inArray(input.data('prdcode'), itemIds) == '-1') {
                
				itemIds.push(input.data('prdcode'));
                var itemListName = input.data('list') ?? '';

                // there are two hidden input boxes
                input = $('#PQ_' + input.data('prdcode'));

                if (itemListName == '') {
                    var itemListName = input.data('list') ?? '';
                }

				cats = input.data('category').split('/');

                var discount = 0;

                if (typeof input.data('discount') != 'undefined') {
                    discount = input.data('discount') ?? 0;
                }

				items.push({
					item_id: String(input.data('prdcode') ?? ''),
					item_name: input.data('description').replace(/&nbsp;/g, ' ') ?? '',
                    item_list_name: itemListName,
                    discount: Number(parseFloat(discount).toFixed(2)) ?? 0,
					item_brand: $.trim(input.data('brand') ?? ''),
					item_category: cats[1] ?? '',
					item_category2: cats[2] ?? '',
					item_category3: cats[3] ?? '',
					item_category4: cats[4] ?? '',
					item_category5: '',
					price: parseFloat(input.data('amount') ?? 0),
					currency: 'GBP',
					quantity: 1
				});
			}
		
		});
		$('.latest-product-offers:not(.leftOffSection)').addClass("active");
    } else if (type == 3) {

		itemIds = [];
		items = [];
		$.each($('.recent-items').find("li"), function (i, item) {
			var input = $(item).find('input[type=hidden]');
			
			if ($.inArray(input.data('prdcode'), itemIds) == '-1') {
                
				itemIds.push(input.data('prdcode'));
                var itemListName = input.data('list') ?? '';

                // there are two hidden input boxes
                input = $('#PQ_' + input.data('prdcode'));

                if (itemListName == '') {
                    var itemListName = input.data('list') ?? '';
                }

				cats = input.data('category').split('/');

                var discount = 0;

                if (typeof input.data('discount') != 'undefined') {
                    discount = input.data('discount') ?? 0;
                }

				items.push({
					item_id: String(input.data('prdcode') ?? ''),
					item_name: input.data('description') ?? '',
                    item_list_name: itemListName,
                    discount: Number(parseFloat(discount).toFixed(2)) ?? 0,
					item_brand: $.trim(input.data('brand') ?? ''),
					item_category: cats[1] ?? '',
					item_category2: cats[2] ?? '',
					item_category3: cats[3] ?? '',
					item_category4: cats[4] ?? '',
					item_category5: '',
					price: parseFloat(input.data('amount') ?? 0),
					currency: 'GBP',
					quantity: 1
				});
			}
		});
		$('.recent-items').addClass("active");
    } else if (type == 4) {

		$.each($('.recommend-items').find("li"), function (i, item) {
			var input = $(item).find('input[type=hidden]');
			
			if ($.inArray(input.data('prdcode'), itemIds) == '-1') {
                
				itemIds.push(input.data('prdcode'));
                var itemListName = input.data('list') ?? '';

                // there are two hidden input boxes
                input = $('#PQ_' + input.data('prdcode'));

                if (itemListName == '') {
                    var itemListName = input.data('list') ?? '';
                }
				cats = input.data('category').split('/');

                var discount = 0;

                if (typeof input.data('discount') != 'undefined') {
                    discount = input.data('discount') ?? 0;
                }

				items.push({
					item_id: String(input.data('prdcode') ?? ''),
					item_name: input.data('description').replace(/&nbsp;/g, ' ') ?? '',
                    item_list_name: itemListName,
                    discount: Number(parseFloat(discount).toFixed(2)) ?? 0,
					item_brand: $.trim(input.data('brand') ?? ''),
					item_category: cats[1] ?? '',
					item_category2: cats[2] ?? '',
					item_category3: cats[3] ?? '',
					item_category4: cats[4] ?? '',
					item_category5: '',
					price: parseFloat(input.data('amount') ?? 0),
					currency: 'GBP',
					quantity: 1
				});
			}
		});
		$('.recommend-items').addClass("active");
    } else if (type == 5) {

		$.each($(that).find("li"), function (i, item) {
			var input = $(item).find('input[type=hidden]');
			
			if ($.inArray(input.data('prdcode'), itemIds) == '-1') {
                
				itemIds.push(input.data('prdcode'));
                var itemListName = input.data('list') ?? '';

                // there are two hidden input boxes
                input = $('#PQ_' + input.data('prdcode'));

                if (itemListName == '') {
                    var itemListName = input.data('list') ?? '';
                }

				cats = input.data('category').split('/');
                var discount = 0;

                if (typeof input.data('discount') != 'undefined') {
                    discount = input.data('discount') ?? 0;
                }

				items.push({
					item_id: String(input.data('prdcode') ?? ''),
					item_name: input.data('description').replace(/&nbsp;/g, ' ') ?? '',
                    item_list_name: itemListName,
                    discount: Number(parseFloat(discount).toFixed(2)) ?? 0,
					item_brand: $.trim(input.data('brand') ?? ''),
					item_category: cats[1] ?? '',
					item_category2: cats[2] ?? '',
					item_category3: cats[3] ?? '',
					item_category4: cats[4] ?? '',
					item_category5: '',
					price: parseFloat(input.data('amount') ?? 0),
					currency: 'GBP',
					quantity: 1
				});
			}
		});
		$(that).addClass("active");
    } else if ($('.product-section').length) {
		$.each($('.product-section').find("li"), function (i, item) {
			var data = $(item).find('input[type=hidden]');
			
            $.each(data, function (i1, item1) {
                
				var input = $(item1);
                
                if (typeof input.data('prdcode') != "undefined") {
					if ($.inArray(input.data('prdcode'), itemIds) == '-1') {
                        
						itemIds.push(input.data('prdcode'));
                        var itemListName = input.data('list') ?? '';

                        // there are two hidden input boxes
                        input = $('#PQ_' + input.data('prdcode'));

                        if (itemListName == '') {
                            var itemListName = input.data('list') ?? '';
                        }
						// DCX-459
						if(getCookie('issearched') == 1){
							itemListName = 'Search Listing';		
						}
						// DCX-459
                        var categories = input.data('category');
                        cats = categories.split('/');
                        var discount = 0;

                        if (typeof input.data('discount') != 'undefined') {
                            discount = input.data('discount') ?? 0;
                        }

						items.push({
							item_id: String(input.data('prdcode') ?? ''),
							item_name: input.data('description') ?? '',
                            item_list_name: itemListName,
                            discount: Number(parseFloat(discount).toFixed(2)) ?? 0,
							item_brand: $.trim(input.data('brand') ?? ''),
							item_category: cats[1] ?? '',
							item_category2: cats[2] ?? '',
							item_category3: cats[3] ?? '',
							item_category4: cats[4] ?? '',
							item_category5: '',
							price: parseFloat(input.data('amount') ?? 0),
							currency: 'GBP',
							quantity: 1
						});
					}
				}
			});
		
		});
	}
	
	window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
	  event: 'view_item_list',
	  ecommerce: {
            currency: 'GBP',
            items: items,
        }
    });
 }
/* CI-6486 */

/* CI-6462 */
/**
 * Function to track login event in GTM
 * 
 * @param {*} event     Type of event. Default value is 'login'
 * @param {*} data      Data to be track in GTM
 */
 function dataLayer_login(event = 'login', method = 'email address', data = {}) {

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
        event: event,
        method: method
    });
}
/* CI-6462 */


/* CI-6455 */
/**
 * Function to track signup event in GTM
 *
 * @param {*} event     Type of event. Default value is 'sign_up'
 * @param {*} data      Data to be track in GTM
 */
function dataLayer_signup(event = 'sign_up', method = 'email address', data = {}) {
    
    var isBsubscribed = JSON.parse(decodeURIComponent(getCookie('GA4SignupCompleted')));
    var bsubscribe  = 'opted out';

    if (isBsubscribed.bsubscribe)
    {
        bsubscribe = 'opted in';
    }

    delete_cookie("GA4SignupCompleted");    
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
        event: event,
        method: method,
        marketing_opt_in: bsubscribe
    });
}
/* CI-6455 */

/* CI-6448 */
/**
 * Function to track add_to_wishlist event in GTM
 * 
 * @param {*} event     Type of event. Default value is 'add_to_wishlist'
 * @param {*} data      Data to be track in GTM
 */
function dataLayer_wislist(event = 'add_to_wishlist', data = {}) {  
    window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
                            event: event,
                            ecommerce: {
                                            value: Number(parseFloat(data.price).toFixed(2)) ?? 0,
                                            items: [
                                            {
                                                item_id: data.item_id,
                                                item_name: data.item_name,
                                                item_list_name: data.item_list_name, 
                                                coupon: data.coupon,
                                                discount: Number(data.discount) ?? 0,
                                                item_brand: data.item_brand,
                                                item_category: data.item_category,
                                                item_category2: data.item_category2,
                                                item_category3: data.item_category3,
                                                item_category4: data.item_category4,
                                                item_category5: data.item_category5,
                                                price: Number(data.price) ?? 0,
                                                quantity: 1,
                                                currency: 'GBP',
                                            }]
                                        }
                            });
}
/* CI-6448 */

/* CI-6478*/
function datalayer_site_search(searchData){
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: 'view_search_results',
		search_term: searchData.search_term,
		search_results: searchData.result_count 
	});
}
/* CI-6478*/

