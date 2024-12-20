@extends('layout.default')

@section('content')



<section class="main-content"><div class="container content-section">
<div class="row quick-info"><div class="col s12"><ul>
<li class="col s4">
<img src="//media.carparts4less.co.uk/assets/cp4l/images/best-price-icon.svg" alt="Best Price Guarantee" title="Best Price Guarantee"><a href="https://www.carparts4less.co.uk/low-price-guarantee" title="Best Price Guarantee">Best Price Guarantee<span><img src="//media.carparts4less.co.uk/assets/cp4l/images/right-arrow.svg" alt="img"></span></a>
</li>
<li class="col s4">
<img src="//media.carparts4less.co.uk/assets/cp4l/images/delivery-icon.png" alt="Free Standard UK Delivery" title="Free Standard UK Delivery"><a href="https://www.carparts4less.co.uk/delivery-information" title="Free Standard UK Delivery">Free Standard UK Delivery over £30*<span><img src="//media.carparts4less.co.uk/assets/cp4l/images/right-arrow.svg" alt="img"></span></a>
</li>
<li class="col s4">
<img src="//media.carparts4less.co.uk/assets/cp4l/images/CP4LCollectionPointBannerDesigns.png" alt="click_n_collect" title="250+ Collection Points"><a href="https://www.carparts4less.co.uk/delivery-information" title="250+ Collection Points">250+ Collection Points<span><img src="//media.carparts4less.co.uk/assets/cp4l/images/right-arrow.svg" alt="img"></span></a>
</li>
</ul></div></div>
<div class="modal emailStockpopup" id="emailNoti"><div class="modal-dialog"><div class="modal-content"></div></div></div>
<div class="row breadcrumbs-col"><div class="col s12"><div class="inner"><ul>
<li><a href="{{url('/')}}" title="Home">Home</a></li>
<li>
				Shopping Basket
			</li>
</ul></div></div></div>
<section class="row basket-banner"></section><div id="basketdetailsdiv" class="row main-container">
<section class="shopping-cart-col basket-new row"><div class="col-sm-12">
<h1>
				My Basket
			 -
						<span>1
			Item(s)
			</span>
</h1>
<div class="cart-button">
    <a class="cont-btn waves-effect waves-block waves-light" href="{{url('/')}}" title="Continue Shopping">Continue shopping</a></div>
</div>
<div class="clearfix"></div>
<div class="col-xs-12 padding-x-20 visible-xs tabs-stick fixed-without-counter fixed-below">
<ul class="tabs nav-tabs check-nav withfifm" style="width: 100%;">
<li class="tab candc active"><a href="#home" class="active"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="15.999px" height="11.947px" viewBox="0 0 15.999 11.947" enable-background="new 0 0 15.999 11.947" xml:space="preserve"><path d="M7.999,8.973h-4.8V5.224h-1.6v6c0,0.416,0.357,0.75,0.799,0.75h6.4c0.442,0,0.801-0.334,0.801-0.75v-6h-1.6V8.973z                                  M15.865,3.307l-2.133-3c-0.149-0.208-0.399-0.333-0.667-0.333H2.933c-0.268,0-0.518,0.125-0.665,0.333l-2.132,3                                 c-0.356,0.5,0.024,1.167,0.665,1.167h14.397C15.837,4.474,16.217,3.806,15.865,3.307z M12.798,11.6c0,0.205,0.181,0.375,0.4,0.375                                 h0.801c0.22,0,0.398-0.17,0.398-0.375V5.224h-1.6V11.6z"></path></svg>
								Collect
							 </a></li>
<li class="tab deliveryc"><a href="#profile"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="16px" height="12px" viewBox="0 0 16 12" enable-background="new 0 0 16 12" xml:space="preserve"><path d="M15.533,5.499L14.07,3.932c-0.3-0.321-0.707-0.501-1.132-0.501H12V0.857C12,0.383,11.642,0,11.2,0H0.8                                     C0.357,0,0,0.383,0,0.857v9C0,11.042,0.895,12,2,12c0.658,0,1.235-0.346,1.6-0.868C3.965,11.657,4.542,12,5.2,12                                     c1.105,0,2-0.958,2-2.143c0-0.148-0.015-0.289-0.041-0.43h4.081C11.213,9.568,11.2,9.709,11.2,9.857c0,1.185,0.895,2.143,2,2.143                                     c1.105,0,2-0.958,2-2.143c0-0.148-0.015-0.289-0.04-0.43H15.6c0.22,0,0.4-0.192,0.4-0.428V6.71C16,6.255,15.833,5.821,15.533,5.499z                                      M2,10.715c-0.44,0-0.8-0.386-0.8-0.857S1.56,9,2,9s0.8,0.386,0.8,0.857S2.44,10.715,2,10.715z M5.2,10.715                                     c-0.44,0-0.8-0.386-0.8-0.857S4.76,9,5.2,9C5.64,9,6,9.386,6,9.857S5.64,10.715,5.2,10.715z M12,4.714h0.938                                     c0.107,0,0.207,0.046,0.282,0.126L14.303,6H12V4.714z M13.2,10.715c-0.44,0-0.8-0.386-0.8-0.857S12.76,9,13.2,9                                     c0.44,0,0.8,0.386,0.8,0.857S13.641,10.715,13.2,10.715z"></path></svg>
								Delivery
							 </a></li>
<div class="indicator"></div><div class="indicator"></div><div class="indicator"></div></ul>
<div class="tab-content">
<div class="col s12 active" id="home"><div class="check-availability">
<h6>Enter your postcode to check stock availability in your area.</h6>
<div class="post-input">
<input type="text" class="post-code form-control" name="mixBasketPostcode" id="postcodemob1" placeholder="Your postcode"><input id="basketid" type="hidden" value=""><span class="pcadown"></span><input type="hidden" name="eventPageType" value="Postcode - Basket Page"><span class="error" id="newpostcodeErr">Required</span>
</div>
<div class="col-sm-5 padding-desktop-reduce-right"><button type="button" class="btn btn-block btn-blue" onclick="window.Basket.Cnc.changeStoreMix('postcodemob1',2);">Find</button></div>
</div></div>
<div class="col s12" id="profile" style="display:none;">
<div class="check-availability">
<h6>Enter your postcode to see accurate delivery times.</h6>
<div class="post-input">
<input type="text" class="post-code form-control" name="mixBasketPostcode" id="postcodemob2" placeholder="Postcode"><input id="basketid" type="hidden" value=""><span class="pcadown"></span><input type="hidden" name="eventPageType" value="Postcode - Basket Page"><span class="error" id="newpostcodeErr">Required</span>
</div>
<div class="col-sm-5 padding-desktop-reduce-right"><button type="button" class="btn btn-block btn-blue" onclick="window.Basket.Cnc.changeStoreMix('postcodemob2',3);">Find</button></div>
</div>
<div class="international hwdalert1 hidden">
<span><img src="//media.carparts4less.co.uk/assets/cp4l/images/globe-black-new-basket-icon.png" class="Free UK Delivery"></span> Looking for&nbsp;<a href="javascript:void(0);" onclick="onCheckoutCncHwdClick('homedelivery',productCheckoutArray,'intbasket');"> international delivery?</a>
</div>
</div>
</div>
</div>
<div class="clearfix"></div>
<div class="basket-layout">
<div class="col-sm-5 col-xs-12 padding-desktop-reduce-right pm-0">
<div class="whitebox padding-20 discount-height hidden-xs textclass">
<span class="heading">Voucher/Promo Code</span><div class="promo-form form-inline">
<input class="promotionalCode" name="promotionalCode" type="text" placeholder="Enter promo code" value="" maxlength="25"><button name="promoUpdate" class="promoUpdate  waves-effect waves-block waves-light">Apply</button><input type="hidden" class="promoerror" data-type="Warning" value="Please enter a promocode">
</div>
</div>
<div class="whitebox margin-top-13 padding-14 shadow">
<div class="custom-height"><div class="row spacing-prod basket-row out-of-stock">
<div class="col-sm-3 mobile-left col-md-3"><figure><span><img src="//media.carparts4less.co.uk/images/products/200x200/529772710.jpg?v=20.10" alt="Top Tech Hand held rechargeable 5 Led Inspection Lamp and Torch" title="Top Tech Hand held rechargeable 5 Led Inspection Lamp and Torch"></span></figure></div>
<div class="col-sm-5 product-desc col-md-6 pl-sm-15">
<h5><a href="/p/top-tech-hand-held-rechargeable-5-led-inspection-lamp-and-torch-529772710" title="Top Tech Hand held rechargeable 5 Led Inspection Lamp and Torch">Top Tech Hand held rechargeable 5 Led Inspection L...
                        </a></h5>
<h6><span class="info">Product Code:
						529772710</span></h6>
<h6><span class="info"></span></h6>
<div class="col-sm-5 col-md-5 review-basket"><span class="rating-star no-rating"></span></div>
</div>
<div class="col-sm-4 text-right price-basket">£<span class="nocss">38.98</span><br><small class="mob-head">Unit price&nbsp;
					£<span class="nocss">19.49</span></small>
</div>
<div class="col-sm-5 pl-sm-15">
<span class="quantity-inner">
    <select id="qty_529772710_1" class="qty custom-select numeric prdQty" data-description="Top Tech Hand held rechargeable 5 Led Inspection Lamp and Torch" data-brand="TOP TECH" data-preqty="2" data-carhash="" data-prdunq="d412d5b5408cc1c5af3881a78d1d84bf24ce50a7f2eb0c1630f3e4c67e520892" data-hash="" data-isclone="" data-prdcode="529772710" data-isfree="false" onchange="javascript:window.Basket.updateBasket(); return false;" data-basketprdcode="529772710_1" data-amount="19.49" data-tamount="38.98" data-category="Home////" data-discount="0.00">
        <option value="1">1</option>
<option value="2" selected="">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>
<option value="18">18</option>
<option value="19">19</option>
<option value="20">20</option>
</select>

        <script>
								var basketCoupon = ''; 
                                var productsArray = {
                                    'id': '529772710',
                                    'name': 'Top Tech Hand held rechargeable 5 Led Inspection Lamp and Torch',
                                    'price': '38.98',
                                    'brand': 'TOP TECH',
                                    'category': 'Home////',
                                    'quantity': '2',
                                    'vspec': ''
                                }
                                productCheckoutArray.push(productsArray);
                            </script>
                            </span>
                            <a href="javascript:void(0);" title="Delete" id="delete-btn-529772710" class="remove-link" data-prdcode="529772710_1">
                                <span>Remove</span></a>
</div>
<div class="col s12 visible-xs left"><div class="grey-color-bg postcode-input">
<img src="//media.carparts4less.co.uk/assets/cp4l/images/cross-grey.png"><a href="javascript:void(0);" class="post-code-click">Enter your postcode to check availability</a>
</div></div>
</div></div>
<div class="row visible-xs mg-0"><div class="whitebox padding-20 discount-height">
<span class="heading"><strong>Discount code</strong></span><div class="promo-form form-inline">
<input class="promotionalCode" name="promotionalCode" type="text" value="" maxlength="25" placeholder="Enter promo code"><button name="promoUpdate" class="promoUpdate waves-effect waves-block waves-light">Apply</button><input type="hidden" class="promoerror" data-type="" value="">
</div>
</div></div>
<div class="clearfix"></div>
<div class="row mobile-colored-row"><div class="col-sm-12"><div class="billing-inner-col spacing-prod-new">
<div class="spacing-prod-sub"><span class="sub-total"><div class="heading-sub">Sub total: </div>
<span class="text-sub">£<span class="nocss">38.98</span></span></span></div>
<div class="spacing-prod-sub-last"><span class="total-val"><div class="heading-sub "><strong class="text-sub-total">Grand total (inc VAT):  </strong></div>
<span class="text-sub text-sub-blue">£<span class="nocss">38.98</span></span></span></div>
</div></div></div>
<div class="row visible-xs">
<div class="whitebox padding-20 discount-height">
<button class="btn btn-success cncbasket disable-btn active">Continue with collection</button><button class="btn btn-success hwdbasket hidden disable-btn">Continue with delivery</button><span class="text-danger cncalert2">Please <a class="enter-post-code" href="javascript:void(0)">enter your postcode</a> and choose a store for collection before continuing.</span>
</div>
<div class="cart-button"><a class="cont-btn" href="https://www.carparts4less.co.uk/" title="Continue Shopping"><img src="//media.carparts4less.co.uk/assets/cp4l/images/cart-arrow-icon-blue.png">Continue shopping</a></div>
</div>
<div class="checkout-bottom basket-bottom-col"><section class="basket-bottom-col"><div class="col s12 m12 mobile-section">
<a class="ctn-link" href="https://www.carparts4less.co.uk" title="Continue shopping">Continue shopping</a><div class="quick-info-outer">
<div class="row quick-info"><div class="col s12"><ul>
<li class="col s4">
<img src="//media.carparts4less.co.uk/assets/cp4l/images/best-price-icon.svg" alt="Best Price Guarantee" title="Best Price Guarantee"><a href="https://www.carparts4less.co.uk/low-price-guarantee" title="Best Price Guarantee">Best Price Guarantee<span><img src="//media.carparts4less.co.uk/assets/cp4l/images/right-arrow.svg" alt="img"></span></a>
</li>
<li class="col s4">
<img src="//media.carparts4less.co.uk/assets/cp4l/images/delivery-icon.png" alt="Free Standard UK Delivery" title="Free Standard UK Delivery"><a href="https://www.carparts4less.co.uk/delivery-information" title="Free Standard UK Delivery">Free Standard UK Delivery over £30*<span><img src="//media.carparts4less.co.uk/assets/cp4l/images/right-arrow.svg" alt="img"></span></a>
</li>
<li class="col s4">
<img src="//media.carparts4less.co.uk/assets/cp4l/images/CP4LCollectionPointBannerDesigns.png" alt="click_n_collect" title="250+ Collection Points"><a href="https://www.carparts4less.co.uk/delivery-information" title="250+ Collection Points">250+ Collection Points<span><img src="//media.carparts4less.co.uk/assets/cp4l/images/right-arrow.svg" alt="img"></span></a>
</li>
</ul></div></div>
<div class="modal emailStockpopup" id="emailNoti"><div class="modal-dialog"><div class="modal-content"></div></div></div>
</div>
</div></section></div>
<div class="row spacing-prod-bottom">
<div class="col-xs-12 col-sm-6"><ul class="list-unstyle">
<li>
<span><img src="//media.carparts4less.co.uk/assets/cp4l/images/truck-new-basket-icon.png"></span>
								Free UK Delivery for orders over £30*</li>
<li class="show-on-small">
<span><img src="//media.carparts4less.co.uk/assets/cp4l/images/basket-collect-icon.png"></span>Click &amp; Collect from 250+ Locations</li>
<li>
<span><img src="//media.carparts4less.co.uk/assets/cp4l/images/globe-new-basket-icon.png"></span>International Delivery from £3.95</li>
</ul></div>
<div class="col-xs-12 col-sm-6"><ul class="list-unstyle">
<li class="hide-on-small-only">
<span><img src="//media.carparts4less.co.uk/assets/cp4l/images/basket-collect-icon.png"></span>Click &amp; Collect from 250+ Locations</li>
<li>
<span><img src="//media.carparts4less.co.uk/assets/cp4l/images/arrow-new-basket-icon.png"></span>365 Day Money Back Guarantee</li>
</ul></div>
</div>
</div>
<section class="basket-bottom-col"><div class="checkout-bottom basket-bottom-col"><div class="col s12 m4 l4 way-pay-col">
<div class="way-to-pay-col">
<span class="heading">Ways to pay</span><p>We accept all major credit and debit cards.</p>
<ul>
<li><img src="//media.carparts4less.co.uk/assets/cp4l/images/visa_card.png" alt="VISA" title="VISA"></li>
<li><img src="//media.carparts4less.co.uk/assets/cp4l/images/master_card.png" alt="MasterCard" title="MasterCard"></li>
<li><img src="//media.carparts4less.co.uk/assets/cp4l/images/maestro_card.png" alt="Maestro" title="Maestro"></li>
<li><img src="//media.carparts4less.co.uk/assets/cp4l/images/pay_pal.png" alt="PayPal" title="PayPal"></li>
<li><img src="//media.carparts4less.co.uk/assets/cp4l/images/paypalcredit_card.png?v=99.34" alt="PayPalCredit" title="PayPalCredit"></li>
<li class="amercian_express"><img src="//media.carparts4less.co.uk/images/amex.png?v=99.34" height="32px" width="32px" alt="American Express" title="American Express"></li>
</ul>
</div>
<div class="secure-col">
<span class="heading">Car Parts 4 Less is secure</span><p><a href="javascript:void(0);" title=""></a></p>
<ul>
<li><img src="//media.carparts4less.co.uk/assets/cp4l/images/mastercard-secure.png" alt="" title=""></li>
<li><img src="//media.carparts4less.co.uk/assets/cp4l/images/visa-verified.png" alt="" title=""></li>
<li><img src="//media.carparts4less.co.uk/assets/cp4l/images/comodo-certified.png" alt="" title=""></li>
<li class="amercian_express"><img src="//media.carparts4less.co.uk/images/amexsafe.png?v=99.34" height="32" width="124" alt="American Express" title="American Express"></li>
</ul>
</div>
</div></div>
</section>
</div>
<div class="modal find-post" id="mix-change-store" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog"><div class="modal-content change-store"></div></div></div>
<div class="col-sm-7 col-xs-12 padding-desktop-reduce-left hidden-xs">
<div class="whitebox total-height-less">
<div class="blue-box">Checkout</div>
<div class="padding-46 check-availability">
<h6>Enter your postcode to check stock availability in your area.</h6>
<div class="post-input">
<input type="text" class="post-code" name="mixBasketPostcode" id="postcodedesk" placeholder="Postcode"><input id="basketid" type="hidden" value=""><span class="pcadown" style="position:absolute;"></span><input type="hidden" name="eventPageType" value="Postcode - Basket Page"><span class="error" id="newpostcodeErr">Required</span>
</div>
<span class="wait"></span><div class="row">
<div class="col-sm-5 padding-desktop-reduce-right"><button type="button" class="btn btn-block btn-green" onclick="window.Basket.Cnc.changeStoreMix('postcodedesk',2);">Collection</button></div>
<div class="col-sm-2 text-or">
								OR
							</div>
<div class="col-sm-5 padding-desktop-reduce-left"><button type="button" class="btn btn-block btn-green dd" onclick="window.Basket.Cnc.changeStoreMix('postcodedesk',3);">UK Delivery</button></div>
<div class="clearfix"></div>
<div class="col-sm-12"><div class="international">
<span><img src="//media.carparts4less.co.uk/assets/cp4l/images/globe-black-new-basket-icon.png" class="Free UK Delivery"></span> Looking for&nbsp;<a href="javascript:void(0);" onclick="onCheckoutCncHwdClick('homedelivery',productCheckoutArray,'intbasket');"> international delivery?</a>
</div></div>
</div>
</div>
</div>
<div class="whitebox hidden">
<div class="blue-box pt-0 hello"><div class="row ">
<div class="col s6 pd-10 border-right">
<img src="//media.carparts4less.co.uk/assets/cp4l/images/blue-bar-store-icon.png" class="blue-bar-store-margin"><span>Click &amp; Collect</span>
</div>
<div class="col s6 pd-10">
<img src="//media.carparts4less.co.uk/assets/cp4l/images/blue-bar-truck-icon.png" class="Free UK Delivery"><span>Delivery</span>
</div>
</div></div>
<div class="availability-check "><div class="row no-gutters">
<div class="withoutfifm col s6 border-rights pd-10">
<small style="color:#ff0000;">Click &amp; Collect not available for </small><input type="hidden" id="mixCncPostcode" value=""><a href="javascript:void(0)" onclick="window.Basket.Cnc.changeStoreMix('mixCncPostcode',7);">Change Collection Point</a>
</div>
<div class="withoutfifm col s6 pd-10 border-left-div">
<small class="diblock pl-sm-10">Deliver to</small><h5 class="changePostcodeMob"></h5>
<input id="mixHwdPostcode" name="mixHwdPostcode" type="text" value="" class="hide"><button class="blue-btn-post-code mixHwdPostcodeUdt hide" name="mixHwdPostcodeUdt" onclick="window.Basket.Cnc.changeStoreMix('mixHwdPostcode',5);">Find</button><span class="error" id="newpostcodeErr">Required</span><div class="mixHwdPostcodeUdt hide"><span class="clear-block international-look"><a href="javascript:void(0);" onclick="onCheckoutCncHwdClick('homedelivery',productCheckoutArray,'intbasket');"> Looking for international delivery?</a></span></div>
<a href="javascript:void(0)" class="diblock changepostcode" onclick="changePostcodeMob('mixHwdPostcode')">Change postcode</a>
</div>
</div></div>
<div class="availability-check-row">
<div class="withoutfifm col s6 border-right pd-10"><span><span class="click-collect-col"><img src="//media.carparts4less.co.uk/assets/cp4l/images/red-cross-popup.png" class="Not available for click and collect">
                                    Not available
                                </span></span></div>
<div class="withoutfifm col s6 border-right pd-10"><span><img src="//media.carparts4less.co.uk/assets/cp4l/images/red-cross-popup.png" class="Not available for click and collect"><span>Delivery not available <br> for this post code</span></span></div>
</div>
<div class="availability-check-row btn-row">
<div class="withoutfifm col s6 border-right pd-10"><button class="btn btn-success disable disable-btn">Collection</button></div>
<div class="withoutfifm col s6 border-right pd-10"><button class="btn btn-success disable disable-btn"><span class="hidden-sm">UK Delivery</span></button></div>
</div>
<div class="availability-check-rows br-r"><div class="col-sm-12 pd-20"><div class="alert alert-warning margin-top-20 alert-dismissible" role="alert">
<img src="//media.carparts4less.co.uk/assets/cp4l/images/yellow-bulb.png"><span>*Items that are unavailable for your chosen delivery method will remain in your basket for you to return to later.</span>
</div></div></div>
</div>
</div>
</div>
<div class="modal fade cart-button-popup" id="cart-button" tabindex="-1"><div class="modal-dialog"><div class="modal-content" id="modal-cotent">
<button type="button" class="close modal-close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button><div class="model-outer" style="height: 271.8px;">
<div class="modal-header"><h4 class="modal-title"></h4></div>
<div class="modal-body"><ul></ul></div>
</div>
</div></div></div>
<div class="modal fade cart-button-popup" id="outofstockmodal" tabindex="-1"><div class="modal-dialog"><div class="modal-content" id="modal-cotent">
<button type="button" class="close modal-close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button><div class="model-outer">
<div class="modal-header"><h4 class="modal-title">
									Error
								</h4></div>
<div class="modal-body"><div>Order cannot not be placed since basket contains out of stock orders.</div></div>
</div>
</div></div></div></section><div class="modal fade cart-button-popup" id="change-store" tabindex="-1"><div class="modal-dialog"><div class="modal-content" id="modal-cotent">
<button type="button" class="close modal-close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">×</span></button><div class="model-outer">
<div class="modal-header">
<h4 class="modal-title">Change Store</h4>
<div class="sub-text">Please enter your full postcode to check the stock of
					your items.
				</div>
</div>
<div class="modal-body"><form onsubmit="javascript:window.Basket.Cnc.changeStore('newpostcode');return false;" class="pswd-form">
<fieldset>
<label for="post">Post Code</label><input type="text" style="text-transform:uppercase;" value="" id="newpostcode"><input id="basketid" type="hidden" value=""><span class="error" id="newpostcodeErr">Required</span>
</fieldset>
<button type="button" class="btn btn-default" onclick="javascript:window.Basket.Cnc.changeStore('newpostcode');">Check Stock</button><span class="wait"></span>
</form></div>
</div>
</div></div></div>
</div>
</div>
</section>

@endsection