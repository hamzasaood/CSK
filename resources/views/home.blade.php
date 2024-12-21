@extends('layout.default')

@section('content')
{{--
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ __('You are logged in!') }}
                </div>
            </div>
        </div>
    </div>
</div>
--}}



<section class="main-content">
    <div class="container">
<div class="row quick-info">
    <div class="col s12">
        <ul>
<li class="col s4">
<img src="{{asset('assets/media-sub/assets/cp4l/images/best-price-icon.svg')}}" alt="Best Price Guarantee" title="Best Price Guarantee"><a href="low-price-guarantee.html" title="Best Price Guarantee">Best Price Guarantee<span>
    <img src="{{asset('assets/media-sub/assets/cp4l/images/right-arrow.svg')}}" alt="img"></span></a>
</li>
<li class="col s4">
<img src="{{asset('assets/media-sub/assets/cp4l/images/delivery-icon.png')}}" alt="Free Standard UK Delivery" title="Free Standard UK Delivery"><a href="delivery-information.html" title="Free Standard UK Delivery">Free Standard UK Delivery over £30*<span>
    <img src="{{asset('assets/media-sub/assets/cp4l/images/right-arrow.svg')}}" alt="img"></span></a>
</li>
<li class="col s4">
<img src="{{asset('assets/media-sub/assets/cp4l/images/CP4LCollectionPointBannerDesigns.png')}}" alt="click_n_collect" title="250+ Collection Points"><a href="delivery-information.html" title="250+ Collection Points">250+ Collection Points<span>
    <img src="{{asset('assets/media-sub/assets/cp4l/images/right-arrow.svg')}}" alt="img"></span></a>
</li>
</ul>
</div>
</div>
<div class="modal emailStockpopup" id="emailNoti"><div class="modal-dialog"><div class="modal-content">

</div>
</div>
</div>
<section class="covid-19 alert alert-dismissible pull-left" role="alert" style="background-color:#000201; color:#ffffff;">
    <div class="container"><div class="row text-center">
<button id="covidUpdateAlert" type="button" class="close" data-dismiss="alert" aria-label="Close">
    <img height="13" width="13" src="{{asset('assets/media-sub/assets/cp4l/images/sitemessage.png')}}" alt="car-parts" title="car-parts"></button><p><small><b>WINTER SAVING 21% OFF CAR PARTS! Enter code WINTER21 at checkout. Ends 11:59pm on 19/12/2024. <a href="terms-and-conditions.html">T&Cs apply</a>.
<style>
.covid-19 a:hover {
    color: #f01a26 !important;
    text-decoration: dotted !important;
}
.covid-19 a{
    color:white !important;

}
    </style>

</b></small>
</p>
</div>
</div>
</section>

<section class="row home-slider"><div class="col s12 mobile-con">
<div class="car-parts-form loading-screen" style="display:none;"><div class="loading-col">
<span class="heading">Loading</span><p>Please wait a short moment whilst we retrieve your vehicle. <strong>Thank You!</strong></p>
<img class="loader" src="{{asset('assets/media-sub/assets/cp4l/images/yellow-loader-icon.svg')}}" alt="Loading" title="Loading"><span class="wait-text">Please Wait</span>
</div></div>
<div class="car-parts-form portrait">
<h2>
<span>FIND</span> CAR PARTS</h2>
<div class="number-col">
<span class="heading">ENTER YOUR NUMBER PLATE BELOW</span><form class="vrm-form portraitform" id="vrmForm" action="#" method="POST">
<input type="hidden" name="vrminput" value="reg">
<span class="vrm-input" style="background-color: #f01a26;
    color: #000201;">
    <input type="text" id="vrmReg" onfocus="if (this.value == 'YOUR REG') this.value='';" maxlength="8" onblur="if(this.value == '') this.value='YOUR REG' " name="reg" value="YOUR REG">
</span><button type="submit">GO</button>
</form>
</div>
<div class="separator"><span>or</span></div>
<div class="select-vehicle" style="">
<span class="heading">SELECT YOUR VEHICLE</span><form class="vehicle-form portraitform" method="POST">
<div class="field-con">
<input type="hidden" name="vrminput" value="makemodel"><span class="field"><select name="make"><option>-Make-</option></select></span><span class="field"><select name="model"><option>-Model-</option></select></span><span class="field"><select name="year"><option>-Year-</option></select></span><span class="field small"><select name="engine"><option>-Engine-</option></select></span><span class="field small right"><select name="fuel"><option value="">-Fuel-</option></select></span>
</div>
<div class="btn-con"><button class="go-btn waves-effect waves-block waves-light" type="submit">GO</button></div>
</form>
</div>
</div>


<div class="home-slider" style="visibility: visible;">
    <div class="bx-wrapper" style="max-width: 100%;">
    <div class="bx-viewport" style="width: 100%; overflow: hidden; position: relative; height:auto;">
        <ul class="bxslider" style="width: 415%; position: relative; transition-duration: 0s; transform: translate3d(-1980px, 0px, 0px);">
            <li style="float: left; list-style: none; position: relative; width: 990px;" class="bx-clone">
<a href="#" rel="noopener noreferrer">
    <img src="{{asset('assets/20s.png')}}" title="" alt="" class="mobile" data-position="position1"></a>
</li>
<li style="float: left; list-style: none; position: relative; width: 990px;">
<a href="#" rel="noopener noreferrer">
    <img src="{{asset('assets/media-sub/images/banners/home/c7335e19d474c58ed74510a101db6c622e482cc9e9be3df7ebe47194ec398e6f.png')}}" title="" alt="" class="desktop" data-position="position1"></a>
<a href="#" rel="noopener noreferrer">
    <img src="{{asset('assets/20s.png')}}" title="" alt="" class="mobile" data-position="position1">
</a>
</li>
<li style="float: left; list-style: none; position: relative; width: 990px;">
<a href="#" rel="noopener noreferrer">
    <img src="{{asset('assets/20s.png')}}" title="" alt="" class="desktop" data-position="position1"></a>
<a href="#" rel="noopener noreferrer">
    <img src="{{asset('assets/media-sub/images/banners/home/c7335e19d474c58ed74510a101db6c622e482cc9e9be3df7ebe47194ec398e6f.png')}}" title="" alt="" class="mobile" data-position="position1"></a>
</li>
<li style="float: left; list-style: none; position: relative; width: 990px;" class="bx-clone">
<a href="#" rel="noopener noreferrer">
    <img src="{{asset('assets/media-sub/images/banners/home/c7335e19d474c58ed74510a101db6c622e482cc9e9be3df7ebe47194ec398e6f.png')}}" title="" alt="" class="desktop" data-position="position1"></a>
<a href="#" rel="noopener noreferrer">
    <img src="{{asset('assets/media-sub/images/banners/home/c7335e19d474c58ed74510a101db6c622e482cc9e9be3df7ebe47194ec398e6f.png')}}" title="" alt="" class="mobile" data-position="position1"></a>
</li></ul></div>
<div class="bx-controls bx-has-pager">
    <div class="bx-pager bx-default-pager">
        <div class="bx-pager-item">
            <a href="" data-slide-index="0" class="bx-pager-link">1</a>
        </div>
        <div class="bx-pager-item">
            <a href="" data-slide-index="1" class="bx-pager-link active">2</a>
        </div>
    </div>
</div>


</div>
</div>




</div>

</section>

<section class="row latest-product-offers"><h2><span>Latest Offers</span></h2>
<div class="col s12 product-list"><ul class="bxslider home-latest-offer">
<li>
<div class="thumb-box"><figure><img width="144" height="144" alt="" title="" src="{{asset('assets/media-sub/images/products/200x200/529772730.jpg')}}" class="lazy-loaded"></figure></div>
<div class="content-box">
<h3 class="heading">Top Tech USB Rechargeable High Brightness Flood Light 10W COB 1000LM 175mm</h3>
<div class="amount-outer"><div class="amount">
<span class="old-price">&#163;<span class="nocss">20.50</span></span><span class="amount-price">&#163;<span class="nocss">12.99</span></span>
</div></div>
<a class="shop-now" href="search/529772730.html">Shop now <img class="" src="{{asset('assets/media-sub/assets/cp4l/images/shopnow_arrow.svg')}}" alt="shopnow_arrow.svg"></a>
</div>
<input type="hidden" data-prdcode="529772730" data-list="Latest Offers"><input type="hidden" id="PQ_529772730" data-hash="" data-friendlyUrl="https://www.carparts4less.co.uk/search/529772730" value="1" data-prdcode="529772730" data-description="Top Tech USB Rechargeable High Brightness Flood Light 10W COB 1000LM 175mm" data-amount="12.99" data-brand="TOP TECH " data-category="Home////" data-discount="7.51"><a class="shop-overlay" href="search/529772730.html" onclick="productClick('529772730','Latest Offers')"></a>
</li>
<li>
<div class="thumb-box"><figure><img width="144" height="144" alt="" title="" src="{{asset('assets/media-sub/images/products/200x200/529772710.jpg')}}" class="lazy-loaded"></figure></div>
<div class="content-box">
<h3 class="heading">Top Tech Hand held rechargeable 5 Led Inspection Lamp and Torch</h3>
<div class="amount-outer"><div class="amount">
<span class="old-price"></span><span class="amount-price">&#163;<span class="nocss">19.49</span></span>
</div></div>
<a class="shop-now" href="search/529772710.html">Shop now <img class="" src="{{asset('assets/media-sub/assets/cp4l/images/shopnow_arrow.svg')}}" alt="shopnow_arrow.svg"></a>
</div>
<input type="hidden" data-prdcode="529772710" data-list="Latest Offers"><input type="hidden" id="PQ_529772710" data-hash="" data-friendlyUrl="https://www.carparts4less.co.uk/search/529772710" value="1" data-prdcode="529772710" data-description="Top Tech Hand held rechargeable 5 Led Inspection Lamp and Torch" data-amount="19.49" data-brand="TOP TECH " data-category="Home////" data-discount="0.300000000000001"><a class="shop-overlay" href="search/529772710.html" onclick="productClick('529772710','Latest Offers')"></a>
</li>
<li>
<div class="thumb-box"><figure><img width="144" height="144" alt="" title="" src="{{asset('assets/media-sub/images/products/200x200/LAS8897-a.jpg')}}" class="lazy-loaded"></figure></div>
<div class="content-box">
<h3 class="heading">Laser 8897 Mechanics Tool Kit 104pc</h3>
<div class="amount-outer"><div class="amount">
<span class="old-price"></span><span class="amount-price">&#163;<span class="nocss">59.99</span></span>
</div></div>
<a class="shop-now" href="search/LAS8897.html">Shop now <img class="" src="{{asset('assets/media-sub/assets/cp4l/images/shopnow_arrow.svg')}}" alt="shopnow_arrow.svg"></a>
</div>
<input type="hidden" data-prdcode="LAS8897" data-list="Latest Offers"><input type="hidden" id="PQ_LAS8897" data-hash="" data-friendlyUrl="https://www.carparts4less.co.uk/search/LAS8897" value="1" data-prdcode="LAS8897" data-description="Laser 8897 Mechanics Tool Kit 104pc" data-amount="59.99" data-brand="LASER " data-category="Home////" data-discount="0"><a class="shop-overlay" href="search/LAS8897.html" onclick="productClick('LAS8897','Latest Offers')"></a>
</li>
<li>
<div class="thumb-box"><figure><img width="144" height="144" alt="" title="" src="{{asset('assets/media-sub/images/products/200x200/SEAJTK1-a.jpg')}}" class="lazy-loaded"></figure></div>
<div class="content-box">
<h3 class="heading">Sealey JTK1 Toy Tool Kit 19 Piece</h3>
<div class="amount-outer"><div class="amount">
<span class="old-price">&#163;<span class="nocss">29.99</span></span><span class="amount-price">&#163;<span class="nocss">24.99</span></span>
</div></div>
<a class="shop-now" href="search/SEAJTK1.html">Shop now <img class="" src="{{asset('assets/media-sub/assets/cp4l/images/shopnow_arrow.svg')}}" alt="shopnow_arrow.svg"></a>
</div>
<input type="hidden" data-prdcode="SEAJTK1" data-list="Latest Offers"><input type="hidden" id="PQ_SEAJTK1" data-hash="" data-friendlyUrl="https://www.carparts4less.co.uk/search/SEAJTK1" value="1" data-prdcode="SEAJTK1" data-description="Sealey JTK1 Toy Tool Kit 19 Piece" data-amount="24.99" data-brand="SEALEY " data-category="Home/Accessories/Accessories/Baby &amp; Child/Children's Car Accessories" data-discount="5"><a class="shop-overlay" href="search/SEAJTK1.html" onclick="productClick('SEAJTK1','Latest Offers')"></a>
</li>
<li>
<div class="thumb-box"><figure><img width="144" height="144" alt="" title="" src="{{asset('assets/media-sub/images/products/200x200/SEADG109-a.jpg')}}" class="lazy-loaded"></figure></div>
<div class="content-box">
<h3 class="heading">Sealey Dellonda Outdoor Chiminear - Black Steel</h3>
<div class="amount-outer"><div class="amount">
<span class="old-price">&#163;<span class="nocss">131.99</span></span><span class="amount-price">&#163;<span class="nocss">74.99</span></span>
</div></div>
<a class="shop-now" href="search/SEADG109.html">Shop now <img class="" src="{{asset('assets/media-sub/assets/cp4l/images/shopnow_arrow.svg')}}" alt="shopnow_arrow.svg"></a>
</div>
<input type="hidden" data-prdcode="SEADG109" data-list="Latest Offers"><input type="hidden" id="PQ_SEADG109" data-hash="" data-friendlyUrl="https://www.carparts4less.co.uk/search/SEADG109" value="1" data-prdcode="SEADG109" data-description="Sealey Dellonda Outdoor Chiminear - Black Steel" data-amount="74.99" data-brand="SEALEY " data-category="Home////" data-discount="57"><a class="shop-overlay" href="search/SEADG109.html" onclick="productClick('SEADG109','Latest Offers')"></a>
</li>
<li>
<div class="thumb-box"><figure><img width="144" height="144" alt="" title="" src="{{asset('assets/media-sub/images/products/200x200/546777890-a.jpg')}}" class="lazy-loaded"></figure></div>
<div class="content-box">
<h3 class="heading">Karcher Karcher Kids Pressure Washer</h3>
<div class="amount-outer"><div class="amount">
<span class="old-price">&#163;<span class="nocss">59.99</span></span><span class="amount-price">&#163;<span class="nocss">49.99</span></span>
</div></div>
<a class="shop-now" href="search/546777890.html">Shop now <img class="" src="{{asset('assets/media-sub/assets/cp4l/images/shopnow_arrow.svg')}}" alt="shopnow_arrow.svg"></a>
</div>
<input type="hidden" data-prdcode="546777890" data-list="Latest Offers"><input type="hidden" id="PQ_546777890" data-hash="" data-friendlyUrl="https://www.carparts4less.co.uk/search/546777890" value="1" data-prdcode="546777890" data-description="Karcher Karcher Kids Pressure Washer" data-amount="49.99" data-brand="KARCHER " data-category="Home/Accessories/Car Cleaning/Pressure Washers/Pressure Washers" data-discount="10"><a class="shop-overlay" href="search/546777890.html" onclick="productClick('546777890','Latest Offers')"></a>
</li>
<li>
<div class="thumb-box"><figure><img width="144" height="144" alt="" title="" src="{{asset('assets/media-sub/images/products/200x200/549771542.jpg')}}" class="lazy-loaded"></figure></div>
<div class="content-box">
<h3 class="heading">AlcoSense Breathalyser Twin Pack (French/NF approved)</h3>
<div class="amount-outer"><div class="amount">
<span class="old-price"></span><span class="amount-price">&#163;<span class="nocss">6.19</span></span>
</div></div>
<a class="shop-now" href="search/549771542.html">Shop now <img class="" src="{{asset('assets/media-sub/assets/cp4l/images/shopnow_arrow.svg')}}" alt="shopnow_arrow.svg"></a>
</div>
<input type="hidden" data-prdcode="549771542" data-list="Latest Offers"><input type="hidden" id="PQ_549771542" data-hash="" data-friendlyUrl="https://www.carparts4less.co.uk/search/549771542" value="1" data-prdcode="549771542" data-description="AlcoSense Breathalyser Twin Pack (French/NF approved)" data-amount="6.19" data-brand="ALCOSENSE " data-category="Home/Accessories/Summer Essentials/Traveling Abroad Accessories/Breathalyser" data-discount="0"><a class="shop-overlay" href="search/549771542.html" onclick="productClick('549771542','Latest Offers')"></a>
</li>
<li>
<div class="thumb-box"><figure><img width="144" height="144" alt="" title="" src="{{asset('assets/media-sub/images/products/200x200/542779000 - XECP0001A_Triple QX Brake Cleaner 600ml - 1.jpg')}}" class="lazy-loaded"><span class="item-tag tag1">Best Seller</span></figure></div>
<div class="content-box">
<h3 class="heading">TRIPLE QX Brake and Clutch Cleaner 600ml - New Formula</h3>
<div class="amount-outer"><div class="amount">
<span class="old-price"></span><span class="amount-price">&#163;<span class="nocss">2.89</span></span>
</div></div>
<a class="shop-now" href="search/542779000.html">Shop now <img class="" src="{{asset('assets/media-sub/assets/cp4l/images/shopnow_arrow.svg')}}" alt="shopnow_arrow.svg"></a>
</div>
<input type="hidden" data-prdcode="542779000" data-list="Latest Offers"><input type="hidden" id="PQ_542779000" data-hash="" data-friendlyUrl="https://www.carparts4less.co.uk/search/542779000" value="1" data-prdcode="542779000" data-description="TRIPLE QX Brake and Clutch Cleaner 600ml - New Formula" data-amount="2.89" data-brand="TRIPLE QX " data-category="Home/Accessories/Car Maintenance/Maintenance Fluids &amp; Greases/Maintenance Fluids - Brake &amp; Clutch Cleaner" data-discount="0"><a class="shop-overlay" href="search/542779000.html" onclick="productClick('542779000','Latest Offers')"></a>
</li>
<li>
<div class="thumb-box"><figure><img width="144" height="144" alt="" title="" src="{{asset('assets/media-sub/images/products/200x200/542770546.jpg')}}" class="lazy-loaded"><span class="item-tag tag1">Best Seller</span></figure></div>
<div class="content-box">
<h3 class="heading">TRIPLE QX AdBlue 10L</h3>
<div class="amount-outer"><div class="amount">
<span class="old-price"></span><span class="amount-price">&#163;<span class="nocss">15.49</span></span>
</div></div>
<a class="shop-now" href="search/542770546.html">Shop now <img class="" src="{{asset('assets/media-sub/assets/cp4l/images/shopnow_arrow.svg')}}" alt="shopnow_arrow.svg"></a>
</div>
<input type="hidden" data-prdcode="542770546" data-list="Latest Offers"><input type="hidden" id="PQ_542770546" data-hash="" data-friendlyUrl="https://www.carparts4less.co.uk/search/542770546" value="1" data-prdcode="542770546" data-description="TRIPLE QX AdBlue 10L" data-amount="15.49" data-brand="TRIPLE QX " data-category="Home/Accessories/Lubricants &amp; Fluids/Additives/Diesel System Additives" data-discount="0"><a class="shop-overlay" href="search/542770546.html" onclick="productClick('542770546','Latest Offers')"></a>
</li>
<li>
<div class="thumb-box"><figure><img width="144" height="144" alt="" title="" src="{{asset('assets/media-sub/images/products/200x200/523770511.jpg')}}" class="lazy-loaded"><span class="item-tag tag1">Best Seller</span></figure></div>
<div class="content-box">
<h3 class="heading">TRIPLE QX Red Ready Mixed Antifreeze/Coolant 5Ltr</h3>
<div class="amount-outer"><div class="amount">
<span class="old-price"></span><span class="amount-price">&#163;<span class="nocss">22.49</span></span>
</div></div>
<a class="shop-now" href="search/523770511.html">Shop now <img class="" src="{{asset('assets/media-sub/assets/cp4l/images/shopnow_arrow.svg')}}" alt="shopnow_arrow.svg"></a>
</div>
<input type="hidden" data-prdcode="523770511" data-list="Latest Offers"><input type="hidden" id="PQ_523770511" data-hash="" data-friendlyUrl="https://www.carparts4less.co.uk/search/523770511" value="1" data-prdcode="523770511" data-description="TRIPLE QX Red Ready Mixed Antifreeze/Coolant 5Ltr" data-amount="22.49" data-brand="TRIPLE QX " data-category="Home/Accessories/Lubricants &amp; Fluids/Antifreeze &amp; Screenwash/Red Antifreeze" data-discount="0"><a class="shop-overlay" href="search/523770511.html" onclick="productClick('523770511','Latest Offers')"></a>
</li>
<li>
<div class="thumb-box"><figure><img width="144" height="144" alt="" title="" src="{{asset('assets/media-sub/images/products/200x200/549771822.jpg')}}" class="lazy-loaded"></figure></div>
<div class="content-box">
<h3 class="heading">Pingi Reusable Car Dehumidifier</h3>
<div class="amount-outer"><div class="amount">
<span class="old-price">&#163;<span class="nocss">7.79</span></span><span class="amount-price">&#163;<span class="nocss">6.79</span></span>
</div></div>
<a class="shop-now" href="search/549771822.html">Shop now <img class="" src="{{asset('assets/media-sub/assets/cp4l/images/shopnow_arrow.svg')}}" alt="shopnow_arrow.svg"></a>
</div>
<input type="hidden" data-prdcode="549771822" data-list="Latest Offers"><input type="hidden" id="PQ_549771822" data-hash="" data-friendlyUrl="https://www.carparts4less.co.uk/search/549771822" value="1" data-prdcode="549771822" data-description="Pingi Reusable Car Dehumidifier" data-amount="6.79" data-brand="PINGI " data-category="Home/Accessories/Winter Essentials/Screenwash &amp; Frost Protection/Scrapers &amp; Squeegees" data-discount="1"><a class="shop-overlay" href="search/549771822.html" onclick="productClick('549771822','Latest Offers')"></a>
</li>
<li>
<div class="thumb-box"><figure><img width="144" height="144" alt="" title="" src="{{asset('assets/media-sub/images/products/200x200/553997350.jpg')}}" class="lazy-loaded"></figure></div>
<div class="content-box">
<h3 class="heading">Streetwize OBDII Fault Code Reader</h3>
<div class="amount-outer"><div class="amount">
<span class="old-price"></span><span class="amount-price">&#163;<span class="nocss">19.99</span></span>
</div></div>
<a class="shop-now" href="search/553997350.html">Shop now <img class="" src="{{asset('assets/media-sub/assets/cp4l/images/shopnow_arrow.svg')}}" alt="shopnow_arrow.svg"></a>
</div>
<input type="hidden" data-prdcode="553997350" data-list="Latest Offers"><input type="hidden" id="PQ_553997350" data-hash="" data-friendlyUrl="https://www.carparts4less.co.uk/search/553997350" value="1" data-prdcode="553997350" data-description="Streetwize OBDII Fault Code Reader" data-amount="19.99" data-brand="STREETWIZE " data-category="Home////" data-discount="0"><a class="shop-overlay" href="search/553997350.html" onclick="productClick('553997350','Latest Offers')"></a>
</li>
</ul></div></section><div class="row all-product">
<div class="col s12"><div class="heading-outer"><div class="sxn-heading">
<span>All Products</span><p>Our Entire Product Range</p>
</div></div></div>
<ul class="bxslider">
<li class="col s6 l4 m6"><div class="product-con">
<figure><a class="heading" href="car-service-parts.html"><img class="desktop activator" src="{{asset('assets/media-sub/images/catalogimages/categories/102x136/75_cp2_07.png')}}" alt="Car Service Parts" title="Car Service Parts"><img class="mobile" src="{{asset('assets/media-sub/images/catalogimages/categories/102x136/m_75_cp2_07.png')}}" alt="Car Service Parts" title="Car Service Parts"></a></figure><ul class="option-list">
<li><a class="heading" href="car-service-parts.html">Car Service Parts</a></li>
<li><a href="air-filter.html" title="Air Filters">Air Filters</a></li>
<li><a href="fuel-filter.html" title="Fuel Filters">Fuel Filters</a></li>
<li><a href="oil-filter.html" title="Oil Filters">Oil Filters</a></li>
<li><a href="spark-plugs.html" title="Spark Plugs">Spark Plugs</a></li>
</ul>
<div class="show-all"><a href="car-service-parts.html" title="View All">View All</a></div>
</div></li>
<li class="col s6 l4 m6"><div class="product-con">
<figure><a class="heading" href="car-brakes.html"><img class="desktop activator" src="{{asset('assets/media-sub/images/catalogimages/categories/102x136/75_cp2_03.png')}}" alt="Car Brakes" title="Car Brakes">
<img class="mobile" src="{{asset('assets/media-sub/images/catalogimages/categories/102x136/m_75_cp2_03.png')}}" alt="Car Brakes" title="Car Brakes"></a></figure><ul class="option-list">
<li><a class="heading" href="car-brakes.html">Car Brakes</a></li>
<li><a href="brake-discs.html" title="Brake Discs">Brake Discs</a></li>
<li><a href="brake-pads.html" title="Brake Pads">Brake Pads</a></li>
<li><a href="handbrake-drum.html" title="Brake Drums">Brake Drums</a></li>
<li><a href="brake-shoes.html" title="Brake Shoes">Brake Shoes</a></li>
</ul>
<div class="show-all"><a href="car-brakes.html" title="View All">View All</a></div>
</div></li>
<li class="col s6 l4 m6"><div class="product-con">
<figure><a class="heading" href="engine-parts.html">
    <img class="desktop activator" src="{{asset('assets/media-sub/images/catalogimages/categories/102x136/75_cp2_06.png')}}" alt="Engine Parts" title="Engine Parts">
    <img class="mobile" src="{{asset('assets/media-sub/images/catalogimages/categories/102x136/m_75_cp2_06.png')}}" alt="Engine Parts" title="Engine Parts"></a></figure><ul class="option-list">
<li><a class="heading" href="engine-parts.html">Engine Parts</a></li>
<li><a href="timing-belt.html" title="Timing Belts">Timing Belts</a></li>
<li><a href="car-drive-belt.html" title="Drive Belts">Drive Belts</a></li>
<li><a href="fuel-injectors.html" title="Fuel Injectors">Fuel Injectors</a></li>
<li><a href="turbocharger.html" title="Turbo Chargers">Turbo Chargers</a></li>
</ul>
<div class="show-all"><a href="engine-parts.html" title="View All">View All</a></div>
</div></li>
<li class="col s6 l4 m6"><div class="product-con">
<figure><a class="heading" href="suspension-and-steering.html">
    <img class="desktop activator" src="{{asset('assets/media-sub/images/catalogimages/categories/102x136/75_cp2_08.png')}}" alt="Suspension &amp; Steering" title="Suspension &amp; Steering">
    <img class="mobile" src="{{asset('assets/media-sub/images/catalogimages/categories/102x136/m_75_cp2_08.png')}}" alt="Suspension &amp; Steering" title="Suspension &amp; Steering"></a></figure><ul class="option-list">
<li><a class="heading" href="suspension-and-steering.html">Suspension & Steering</a></li>
<li><a href="shock-absorber.html" title="Shock Absorbers">Shock Absorbers</a></li>
<li><a href="suspension-bushes.html" title="Bushes">Bushes</a></li>
<li><a href="car-springs.html" title="Springs">Springs</a></li>
<li><a href="power-steering-pump.html" title="PAS Pumps">PAS Pumps</a></li>
</ul>
<div class="show-all"><a href="suspension-and-steering.html" title="View All">View All</a></div>
</div></li>
<li class="col s6 l4 m6"><div class="product-con">
<figure><a class="heading" href="car-transmission.html">
    <img class="desktop activator" src="{{asset('assets/media-sub/images/catalogimages/categories/102x136/75_cp2_09.png')}}" alt="Transmission" title="Transmission">
    <img class="mobile" src="{{asset('assets/media-sub/images/catalogimages/categories/102x136/m_75_cp2_09.png')}}" alt="Transmission" title="Transmission"></a></figure><ul class="option-list">
<li><a class="heading" href="car-transmission.html">Transmission</a></li>
<li><a href="clutch-kit.html" title="Clutch kits">Clutch kits</a></li>
<li><a href="flywheel.html" title="Flywheels">Flywheels</a></li>
<li><a href="cv-boot-kits.html" title="CV Boot Kits">CV Boot Kits</a></li>
<li><a href="driveshaft.html" title="Driveshafts">Driveshafts</a></li>
</ul>
<div class="show-all"><a href="car-transmission.html" title="View All">View All</a></div>
</div></li>
<li class="col s6 l4 m6"><div class="product-con">
<figure><a class="heading" href="car-cooling-parts-and-car-heating.html">
    <img class="desktop activator" src="{{asset('assets/media-sub/images/catalogimages/categories/102x136/75_cp2_04.png')}}" alt="Cooling &amp; Heating" title="Cooling &amp; Heating">
    <img class="mobile" src="{{asset('assets/media-sub/images/catalogimages/categories/102x136/m_75_cp2_04.png')}}" alt="Cooling &amp; Heating" title="Cooling &amp; Heating"></a></figure><ul class="option-list">
<li><a class="heading" href="car-cooling-parts-and-car-heating.html">Cooling & Heating</a></li>
<li><a href="car-radiator.html" title="Radiators">Radiators</a></li>
<li><a href="car-thermostat.html" title="Thermostats">Thermostats</a></li>
<li><a href="car-compressor.html" title="Compressors">Compressors</a></li>
<li><a href="heater-matrix.html" title="Heater Matrix">Heater Matrix</a></li>
</ul>
<div class="show-all"><a href="car-cooling-parts-and-car-heating.html" title="View All">View All</a></div>
</div></li>
<li class="col s6 l4 m6"><div class="product-con">
<figure><a class="heading" href="car-electrics-and-car-lighting.html">
    <img class="desktop activator" src="{{asset('assets/media-sub/images/catalogimages/categories/102x136/75_cp2_05.png')}}" alt="Electrical &amp; Lighting" title="Electrical &amp; Lighting">
    <img class="mobile" src="{{asset('assets/media-sub/images/catalogimages/categories/102x136/m_75_cp2_05.png')}}" alt="Electrical &amp; Lighting" title="Electrical &amp; Lighting"></a></figure><ul class="option-list">
<li><a class="heading" href="car-electrics-and-car-lighting.html">Electrical & Lighting</a></li>
<li><a href="car-battery.html" title="Car Battery">Car Battery</a></li>
<li><a href="motorcycle-battery.html" title="Motorcycle Battery">Motorcycle Battery</a></li>
<li><a href="starter-motor.html" title="Starter Motors">Starter Motors</a></li>
<li><a href="alternator.html" title="Alternators">Alternators</a></li>
</ul>
<div class="show-all"><a href="car-electrics-and-car-lighting.html" title="View All">View All</a></div>
</div></li>
<li class="col s6 l4 m6"><div class="product-con">
<figure><a class="heading" href="car-body-parts-and-car-exhaust.html">
    <img class="desktop activator" src="{{asset('assets/media-sub/images/catalogimages/categories/102x136/75_cp2_02.png')}}" alt="Body &amp; Exhaust" title="Body &amp; Exhaust">
    <img class="mobile" src="{{asset('assets/media-sub/images/catalogimages/categories/102x136/m_75_cp2_02.png')}}" alt="Body &amp; Exhaust" title="Body &amp; Exhaust"></a></figure><ul class="option-list">
<li><a class="heading" href="car-body-parts-and-car-exhaust.html">Body & Exhaust</a></li>
<li><a href="car-mirror.html" title="Wing Mirrors">Wing Mirrors</a></li>
<li><a href="exhaust-parts.html" title="Exhaust Parts">Exhaust Parts</a></li>
<li><a href="catalytic-converter.html" title="Catalytic Converters">Catalytic Converters</a></li>
<li><a href="car-grilles.html" title="Grilles">Grilles</a></li>
</ul>
<div class="show-all"><a href="car-body-parts-and-car-exhaust.html" title="View All">View All</a></div>
</div></li>
<li class="col s6 l4 m6"><div class="product-con">
<figure><a class="heading" href="car-lubricants-and-car-fluids.html">
    <img class="desktop activator" src="{{asset('assets/media-sub/images/catalogimages/categories/102x136/75_cp2_01.png')}}" alt="Lubricants &amp; Fluids" title="Lubricants &amp; Fluids">
    <img class="mobile" src="{{asset('assets/media-sub/images/catalogimages/categories/102x136/m_75_cp2_01.png')}}" alt="Lubricants &amp; Fluids" title="Lubricants &amp; Fluids"></a></figure><ul class="option-list">
<li><a class="heading" href="car-lubricants-and-car-fluids.html">Lubricants & Fluids</a></li>
<li><a href="engine-oil.html" title="Engine Oil">Engine Oil</a></li>
<li><a href="transmission-oils.html" title="Transmission Oil">Transmission Oil</a></li>
<li><a href="steering-fluid.html" title="Steering Fluid">Steering Fluid</a></li>
<li><a href="suspension-fluids.html" title="Suspension Fluid">Suspension Fluid</a></li>
</ul>
<div class="show-all"><a href="car-lubricants-and-car-fluids.html" title="View All">View All</a></div>
</div></li>
</ul>
</div>
<script src="{{asset('assets/rich-snippet-reviews-widgets/dist.js')}}" type="text/javascript"></script>
<div class="reviews-widget">
<h2><span>What our customers think</span></h2>
<div id="carousel-widget" class="widget-col"></div>
</div>
<script>
        richSnippetReviewsWidgets("carousel-widget", {
            store: "car-parts-4-less-limited",
            primaryClr: "#f47e27",
            neutralClr: "#f4f4f4",
            reviewTextClr: "#333333",
            widgetName: "carousel",
            layout: "fullWidth",
            numReviews: 40,
            contentMode: "company",
            hideDates: false
		});
		</script>
        <div class="basket-bottom-col home-footer-content">
<div class="col s12 mobile-section">
<div class="row quick-info"><div class="col s12"><ul>
<li class="col s4">
<img src="{{asset('assets/media-sub/assets/cp4l/images/best-price-icon.svg')}}" alt="Best Price Guarantee" title="Best Price Guarantee"><a href="low-price-guarantee.html" title="Best Price Guarantee">Best Price Guarantee<span><img src="media-sub/assets/cp4l/images/right-arrow.svg" alt="img"></span></a>
</li>
<li class="col s4">
<img src="{{asset('assets/media-sub/assets/cp4l/images/delivery-icon.png')}}" alt="Free Standard UK Delivery" title="Free Standard UK Delivery"><a href="delivery-information.html" title="Free Standard UK Delivery">Free Standard UK Delivery over £30*<span><img src="media-sub/assets/cp4l/images/right-arrow.svg" alt="img"></span></a>
</li>
<li class="col s4">
<img src="{{asset('assets/media-sub/assets/cp4l/images/CP4LCollectionPointBannerDesigns.png')}}" alt="click_n_collect" title="250+ Collection Points"><a href="delivery-information.html" title="250+ Collection Points">250+ Collection Points<span><img src="media-sub/assets/cp4l/images/right-arrow.svg" alt="img"></span></a>
</li>
</ul></div></div>
<div class="modal emailStockpopup" id="emailNoti"><div class="modal-dialog"><div class="modal-content"></div></div></div>
<section class="covid-19 alert alert-dismissible pull-left" role="alert" style="background-color:#e71312; color:#ffffff;"><div class="container"><div class="row text-center">
<button id="covidUpdateAlert" type="button" class="close" data-dismiss="alert" aria-label="Close">
    <img height="13" width="13" src="{{asset('assets/media-sub/assets/cp4l/images/sitemessage.png')}}" alt="car-parts" title="car-parts"></button><p><small><b>WINTER SAVING 21% OFF CAR PARTS! Enter code WINTER21 at checkout. Ends 11:59pm on 19/12/2024. <a href="terms-and-conditions.html">T&Cs apply</a>.</b></small></p>
</div></div></section>
</div>
<div class="tierwebcontent seo-content">
<h3>CSK</h3>
<span><p> is one of the largest online car and van parts store in the UK.
     We have a complete selection of high quality car parts for a wide range of makes and models - offered at the lowest prices. 
     We at CSK have a stock of more than one hundred thousand car spares, and cheap car parts for different vehicles. 
     Buy any of the car parts online to get them delivered straight to your door, so you won't have to wait long after you place your order. 
     Our prices are among the lowest online, so much so that we're confident enough to offer a low price guarantee on all our products. 
     Euro Car Parts Limited, trading as Car Parts 4 Less, registered in England and Wales with company number 02680212, 
      at T2, Birch Coppice Business Park Danny Morson Way, Dordon, Tamworth, England, B78 1SE
      <a class="show-less" href="javascript:void(0);">Show Less</a>
    </p></span><a class="show-more" href="javascript:void(0);">... See More</a>
</div>
</div>
<div class="top-arrow"><a class="mobile scrollToTop" id="scrollToTop" href="javascript:void(0);">Back To Top</a></div>
</div></section><section class="footer-detail"><div class="container"><p><a title="CSK" href="javascript:void(0);">CSK</a> is one of the largest online car and van parts store in the UK. We have a complete selection of high quality car parts for a wide range of makes and models - offered at the lowest prices. We at CSK have a stock of more than one hundred thousand car spares, and cheap car parts for different vehicles. Buy any of the car parts online to get them delivered straight to your door, so you won't have to wait long after you place your order. Our prices are among the lowest online, so much so that we're confident enough to offer a low price guarantee on all our products. Euro Car Parts Limited, trading as Car Parts 4 Less, registered in England and Wales with company number 02680212,  at T2, Birch Coppice Business Park Danny Morson Way, Dordon, Tamworth, England, B78 1SE</p></div></section><div class="signup_strip_bg"><div class="container signup_strip"><div class="row">
<div class="col s12 m6"><h4>Sign up now to receive exclusive <a href="javascript:void()" class="chngcolor">offers</a> & <a href="javascript:void()" class="chngcolor">discounts</a>
</h4></div>
<div class="col s12 m6 relative">
<form class="signupform" method="post" id="sbuscribedToNewsLetter">
<div class="form-group signup_field" id="formField">
<input type="text" placeholder="Please enter your email address" id="email" name="email"><button type="button" class="signup_btns" id="subscribeToEmailBtn">Sign up</button>
</div>
<span class="error" id="sbuscribedToNewsLetterError">This field is required</span><div class="successmsg">
<span class="successthankslbl" id="thankstextmessage">Thank You</span><span class="success" id="sbuscribedToNewsLetterSuccess"></span>
</div>
</form>
<div class="exclusiveSignUpPrivacy"><p>By Signing up, you agree to our <a href="privacy-notice.html" target="_blank">Privacy Notice</a> and <a href="terms-and-conditions.html" target="_blank">Terms & Conditions</a></p></div>
</div>
</div></div></div>
<a class="helptag" href="help.html">Help</a><div class="modal fade" id="wishlistmaxCount" tabindex="-1" role="dialog" aria-labelledby="wishlistmaxCountLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content">
<div class="modal-header">
<button type="button" class="close modal-close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title"></h4>
</div>
<div class="modal-body"><div class="modal-inner-content"><div class="listing-info-box-wishlist"><div class="info-box-inner"><p></p></div></div></div></div>
<div class="modal-footer"><button type="button" class="btn btn-default close_btn modal-close" data-dismiss="modal">Close</button></div>
</div></div></div>





<script type="text/javascript">
            /* CI-6486 */
            $(document).ready(function(){                 
                var i=0;
                if ($('.latest-product-offers').length){
                    $(window).scroll(function() {
                        if ($('.latest-product-offers.leftOffSection:not(.active)').length){
                            var hT = $('.latest-product-offers.leftOffSection').offset().top,
                                hH = $('.latest-product-offers.leftOffSection').outerHeight(),
                                wH = $(window).height(),
                                wS = $(this).scrollTop();
                            if (wS > (hT+hH-wH)){							
                                viewItemList($('.latest-product-offers.leftOffSection').find("h2").text(), 1);
                            }
                        }
                        if ($('.latest-product-offers:not(.leftOffSection):not(.active)').length){
                            var hT = $('.latest-product-offers:not(.leftOffSection)').offset().top,
                                hH = $('.latest-product-offers:not(.leftOffSection)').outerHeight(),
                                wH = $(window).height(),
                                wS = $(this).scrollTop();
                            if (wS > (hT+hH-wH)){							
                                viewItemList($('.latest-product-offers:not(.leftOffSection)').find("h2").text(), 2);
                            }
                        }                        
                    });
                }
                if ($('.recent-items').length){
                    $(window).scroll(function() {
                        if ($('.recent-items:not(.active)').length){
                            var hT1 = $('.recent-items').offset().top,
                                hH1 = $('.recent-items').outerHeight(),
                                wH1 = $(window).height(),
                                wS1 = $(this).scrollTop();
                            if (wS1 > (hT1+hH1-wH1)){							
                                viewItemList($('.recent-items').find("h2").text(), 3);
                            }
                        }
                    });
                }
                if ($('.recommend-items').length){
                    if($(window).width() >= 768) {
                        $('.recommend-items').addClass("basket_liked_view");
                        $('.mobile-section .recommend-items').removeClass("basket_liked_view");
                    } else {
                        $('.mobile-section .recommend-items').addClass("basket_liked_view");
                    }
                    $(window).scroll(function() {
                        if ($('.recommend-items.basket_liked_view:not(.active)').length){
                            var hT2 = $('.recommend-items.basket_liked_view').offset().top,
                                hH2 = $('.recommend-items.basket_liked_view').outerHeight(),
                                wH2 = $(window).height(),
                                wS2 = $(this).scrollTop();
                            if (wS2 > (hT2+hH2-wH2)){
                                viewItemList($('.mobile-section .recommend-items').find("h2").text(), 4);
                            }
                        }
                    });
                }
                if($('.product-section').length){
                    viewItemList($(".breadcrumbs-col ul li:last a").text());
                }
            })
            /* CI-6486 */
		</script>

@endsection
