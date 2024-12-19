
@extends('layout.default')

@section('content')


<section class="container-fluid"><section class="container content-section"><div class="row quick-info"><div class="col s12"><ul>
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
<section class="row"><div class="col s12 breadcrumbs-col"><ul>
<li><a title="Home" href="{{url('/')}}">Home</a></li>
<li>My Account</li>
</ul></div></section><section class="row my-account-container">
    <div class="col s12">
<a class="signout-btn" title="Sign Out" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();" >Sign Out</a>

<form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>

<h2>My Account</h2>
<p>Welcome back to your 'My Account' where you can manage your account preferences. Under 'Personal Details' you can update your contact and default address details, amend your email address and update your default vehicle.</p>
<p>Don't forget to make sure your subscribed to our e-newsletters on the 'Personal Details' area to ensure you receive up to date information on new special offers, promotions competitions etc... ure your subscribed to our e-newsletters on the 'Personal Details' area to ensure you receive up to date information on new special offers, promotions competitions etc.</p>
<ul class="account-edit">
<li class="col s12 m4 l4"><div class="inner">
<span class="heading">My Orders</span><figure><img title="My Orders" alt="My Orders" src="//media.carparts4less.co.uk/assets/cp4l/images/account-order-icon.jpg"></figure><a title="View My Orders" href="https://www.carparts4less.co.uk/my-account/my-orders"><span>View My Orders</span></a>
</div></li>
<li class="col s12 m4 l4"><div class="inner">
<span class="heading">Personal Details</span><figure><img title="Personal Details" alt="Personal Details" src="//media.carparts4less.co.uk/assets/cp4l/images/account-detail-icon.jpg"></figure><a title="Edit My Personal Details" href="https://www.carparts4less.co.uk/my-account/edit-profile"><span>Edit My Personal Details</span></a>
</div></li>
<li class="col s12 m4 l4"><div class="inner">
<span class="heading">Change Your Password</span><figure><img title="Change Your Password" alt="Change Your Password" src="//media.carparts4less.co.uk/assets/cp4l/images/account-pswd-icon.jpg"></figure><a href="#pswd-change" title="Change Password" class="modal-trigger"><span>Change Password</span></a>
</div></li>
</ul>
</div>
</section>
</section>
</section>


@endsection