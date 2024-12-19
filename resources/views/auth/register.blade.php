@extends('layout.default')

@section('content')
{{-- 
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Register') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="row mb-3">
                            <label for="name" class="col-md-4 col-form-label text-md-end">{{ __('Name') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end">{{ __('Email Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-end">{{ __('Confirm Password') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
--}}











<section class="container content-section"><div class="row quick-info"><div class="col s12"><ul>
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
<section class="covid-19 alert alert-dismissible pull-left" role="alert" style="background-color: rgb(231, 19, 18); color: rgb(255, 255, 255); display: none;"><div class="container"><div class="row text-center">
<button id="covidUpdateAlert" type="button" class="close" data-dismiss="alert" aria-label="Close"><img height="13" width="13" src="//media.carparts4less.co.uk/assets/cp4l/images/sitemessage.png?v=99.33" alt="car-parts" title="car-parts"></button><p><small><b>WINTER SAVINGS&nbsp;21% OFF CAR PARTS! Enter code WINTER21 at checkout. Ends 11:59pm on 19/12/2024. <a href="https://www.carparts4less.co.uk/terms-and-conditions">T&amp;Cs apply</a>.</b></small></p>
</div></div></section><div class="row"><div class="col s12 breadcrumbs-col"><ul>
<li><a title="Home" href="{{url('/')}}">Home</a></li>
<li>New Customer Registration</li>
</ul></div></div>
<section class="row registration-col"><div class="col s12">
    <form action="{{ route('register') }}" method="POST" name="register-form" id="register-form" class="registerForm">
        @csrf
<h2>New Customer Registration</h2>
<div class="inner-block">
<div class="col s12 m6 l6">
<h3>Customer Login Information</h3>
<span class="sub-text">You will need this email and password to login to our Website</span><div class="login-info-form">
<fieldset>
<label for="email">Email Address*</label>
<input rel="E" class="InputTxtBox required email @error('email') is-invalid @enderror" type="email" name="email" id="email" maxlength="100" autocomplete="off" value="">
@error('email')
<div id="E" class="error registerEmailError">{{ $message }}</div>
@enderror
</fieldset>
<fieldset>
<label for="pswd">Password*</label>
<input class="InputTxtBox required password @error('password') is-invalid @enderror" type="password" name="password" id="password" maxlength="64" autocomplete="off" value=""><div id="PW" class="error">Please enter valid password.</div>
@error('password')
<span class="label-text">{{ $message }}</span>
@enderror
</fieldset>
<fieldset>
<label for="cpswd">Confirm Password*</label>
<input class="InputTxtBox required cpassword" type="password" name="password_confirmation" id="cpassword" autocomplete="new-password" maxlength="64" value=""><div id="CPW" class="error">Password and Confirm password must be same.</div>
<span class="label-text">(minimum 8 characters)</span>
</fieldset>
<fieldset>
<label for="title">Title</label><span class="select-outer small">
    <select name="title" id="salutation" class="SelectTxtBox selectBox">
        <option disabled value="">Select Title</option>
<option value="Mr">Mr</option>
<option value="Mrs">Mrs</option>
<option value="Ms">Ms</option>
<option value="Miss">Miss</option>
<option value="Dr">Dr</option>
<option value="Prof">Prof</option>
</select></span>

<div id="SL" class="error">Please select name title.</div>
</fieldset>
<fieldset>
<label for="fname">First Name*</label>
<input class="InputTxtBox required name @error('name') is-invalid @enderror"  type="text" name="name" id="firstname" maxlength="40" autocomplete="off" value="">
@error('name')
<div id="FN" class="error">{{ $message }}</div>
@enderror
</fieldset>
<fieldset>
<label for="sname"> Surname*</label>
<input class="InputTxtBox required lname @error('surname') is-invalid @enderror" type="text" name="surname" id="secondname" maxlength="40" autocomplete="off" value="">
@error('surname')
<div id="LN" class="error">{{ $message }}</div>
@enderror
</fieldset>
</div>
</div>
<div class="col s12 m6 l6">
<h3>Customer Contact Information</h3>
<span class="sub-text">This will be treated as your billing address</span><div class="login-info-form">
<fieldset>
<label for="mobnum">Mobile No.*</label>
<input class="InputTxtBox required @error('mobile_no') is-invalid @enderror" type="tel" name="mobile_no" id="mobileno" autocomplete="off" maxlength="15" value="">
@error('mobile_no')
<div id="PH" class="error">{{ $message }}</div>
@enderror
</fieldset>
<fieldset>
<label for="tele"> Home Telephone No.*</label>
<input class="InputTxtBox required phone @error('home_tel') is-invalid @enderror" type="tel" name="home_tel" autocomplete="off" maxlength="20" id="phoneno" value="">
@error('home_tel')
<div id="PH" class="error">{{ $message }}</div>
@enderror

</fieldset>
<fieldset>
<label for="country">Country*</label><span class="select-outer">
    <select name="country" id="country" class="SelectTxtBox selectBox required empty" onchange="javascript:changeCountry(this);">
        <option value="">Please select a country.</option>
<option value="777" id="country_777" international="0">GB Mainland</option>
<option value="778" id="country_778" international="0">Isle Of Man</option>
<option value="779" id="country_779" international="0">Northern Ireland</option>
<option value="781" id="country_781" international="0">Isles of Scilly</option>
<option value="782" id="country_782" international="1">Channel Islands</option>
<option value="911" id="country_911" international="1">Guernsey</option>
<option value="915" id="country_915" international="1">Jersey</option>
<option value="783" id="country_783" international="0">Scottish Islands</option>
<option value="784" id="country_784" international="0">Scottish Highlands</option>
<option value="785" id="country_785" international="0">Isle of Wight</option>
<option value="787" id="country_787" international="1">Albania</option>
<option value="788" id="country_788" international="1">Algeria</option>
<option value="790" id="country_790" international="1">Argentina</option>
<option value="892" id="country_892" international="1">Armenia</option>
<option value="902" id="country_902" international="1">Ascension Island</option>
<option value="899" id="country_899" international="1">Anguilla</option>
<option value="791" id="country_791" international="1">Australia</option>
<option value="900" id="country_900" international="1">Azerbaijan</option>
<option value="793" id="country_793" international="1">Azores &amp; Balearics</option>
<option value="794" id="country_794" international="1">Bahamas</option>
<option value="795" id="country_795" international="1">Bahrain</option>
<option value="909" id="country_909" international="1">Bangladesh</option>
<option value="796" id="country_796" international="1">Barbados</option>
<option value="888" id="country_888" international="1">Bermuda</option>
<option value="887" id="country_887" international="1">Botswana</option>
<option value="798" id="country_798" international="1">Bosnia and Herzegovina</option>
<option value="799" id="country_799" international="1">Brazil</option>
<option value="884" id="country_884" international="1">Brunei</option>
<option value="908" id="country_908" international="1">Burundi</option>
<option value="801" id="country_801" international="1">Canada</option>
<option value="906" id="country_906" international="1">Cambodia</option>
<option value="1006" id="country_1006" international="1">Cameroon</option>
<option value="802" id="country_802" international="1">Chile</option>
<option value="803" id="country_803" international="1">China</option>
<option value="804" id="country_804" international="1">Colombia</option>
<option value="805" id="country_805" international="1">Costa Rica</option>
<option value="807" id="country_807" international="1">Cuba</option>
<option value="894" id="country_894" international="1">Dominica</option>
<option value="811" id="country_811" international="1">Dominican Republic</option>
<option value="812" id="country_812" international="1">Ecuador</option>
<option value="813" id="country_813" international="1">Egypt</option>
<option value="921" id="country_921" international="1">Ethiopia</option>
<option value="905" id="country_905" international="1">Falkland Islands</option>
<option value="815" id="country_815" international="1">Fiji</option>
<option value="886" id="country_886" international="1">Georgia</option>
<option value="895" id="country_895" international="1">Ghana</option>
<option value="918" id="country_918" international="1">Guyana</option>
<option value="821" id="country_821" international="1">Hong Kong</option>
<option value="891" id="country_891" international="1">Honduras</option>
<option value="823" id="country_823" international="1">Iceland</option>
<option value="824" id="country_824" international="1">India</option>
<option value="825" id="country_825" international="1">Indonesia</option>
<option value="826" id="country_826" international="1">Iran</option>
<option value="827" id="country_827" international="1">Iraq</option>
<option value="828" id="country_828" international="1">Israel</option>
<option value="896" id="country_896" international="1">Ivory Coast</option>
<option value="830" id="country_830" international="1">Jamaica</option>
<option value="831" id="country_831" international="1">Japan</option>
<option value="832" id="country_832" international="1">Jordan</option>
<option value="890" id="country_890" international="1">Kazakhstan</option>
<option value="833" id="country_833" international="1">Kenya</option>
<option value="834" id="country_834" international="1">Kuwait</option>
<option value="904" id="country_904" international="1">Libya</option>
<option value="893" id="country_893" international="1">Lebanon</option>
<option value="883" id="country_883" international="1">Malawi</option>
<option value="839" id="country_839" international="1">Malaysia</option>
<option value="881" id="country_881" international="1">Mauritius</option>
<option value="841" id="country_841" international="1">Mexico</option>
<option value="885" id="country_885" international="1">Morocco</option>
<option value="903" id="country_903" international="1">Namibia</option>
<option value="842" id="country_842" international="1">Nepal</option>
<option value="844" id="country_844" international="1">New Zealand</option>
<option value="845" id="country_845" international="1">Nigeria</option>
<option value="926" id="country_926" international="1">Oman</option>
<option value="847" id="country_847" international="1">Pakistan</option>
<option value="848" id="country_848" international="1">Peru</option>
<option value="849" id="country_849" international="1">Philippines</option>
<option value="898" id="country_898" international="1">Rwanda</option>
<option value="854" id="country_854" international="1">Sardinia &amp; Sicily</option>
<option value="855" id="country_855" international="1">Saudi Arabia</option>
<option value="856" id="country_856" international="1">Senegal</option>
<option value="857" id="country_857" international="1">Serbia</option>
<option value="858" id="country_858" international="1">Singapore</option>
<option value="861" id="country_861" international="1">South Africa</option>
<option value="862" id="country_862" international="1">South Korea</option>
<option value="864" id="country_864" international="1">Sri Lanka</option>
<option value="1011" id="country_1011" international="1">St. Vincent</option>
<option value="867" id="country_867" international="1">Taiwan</option>
<option value="910" id="country_910" international="1">Tanzania</option>
<option value="868" id="country_868" international="1">Thailand</option>
<option value="869" id="country_869" international="1">Trinidad &amp; Tobago</option>
<option value="870" id="country_870" international="1">Tunisia</option>
<option value="871" id="country_871" international="1">Turkey</option>
<option value="872" id="country_872" international="1">Uganda</option>
<option value="874" id="country_874" international="1">United Arab Emirates</option>
<option value="889" id="country_889" international="1">United Republic Of Tanzania</option>
<option value="875" id="country_875" international="1">United States</option>
<option value="876" id="country_876" international="1">Vietnam</option>
<option value="877" id="country_877" international="1">Virgin Islands, British</option>
<option value="878" id="country_878" international="1">Virgin Islands, U.S.</option>
<option value="879" id="country_879" international="1">Zambia</option>
<option value="880" id="country_880" international="1">Zimbabwe</option>
</select></span>
<div id="C" class="error">Please select a country.</div>
</fieldset>
<fieldset style="display:none;">
<label for="postcode">Enter Your Postcode</label>
<input class="small" maxlength="10" type="text" id="findPostcode" name="findPostcode" autocomplete="off"><button class="post-find-btn">Find</button>
</fieldset>
<div class="address-finder" id="registrationAfdDiv">
<fieldset id="billingAddress">
<label for="select">Select your address from those listed below:</label><span class="outer-select"><select id="select"><option>Please select a country</option></select></span>
</fieldset>
<span class="manual-text">My address does not appear as an option? <a href="javascript:void(0);" onclick="javascript:clearAddress('');" title="Enter your address manually">Enter your address manually.</a></span>
</div>
<fieldset>
<label for="address1">Address 1*</label><input class="InputTxtBox required empty" type="text" name="address_1" id="address1" maxlength="250" autocomplete="off" value=""><div id="AD1" class="error">Please enter valid address.</div>
</fieldset>
<fieldset>
<label for="address2">Address 2</label><input class="InputTxtBox" type="text" name="address_2" id="address2" maxlength="250" autocomplete="off" value="">
</fieldset>
<fieldset>
<label for="town"> Town/City*</label><input class="InputTxtBox required empty" type="text" name="town" id="town" maxlength="100" autocomplete="off" value=""><div id="TW" class="error">Please enter your town/city.</div>
</fieldset>

<fieldset>
<label for="postcode">Postcode</label><input class="InputTxtBox" type="text" name="postcode" id="postcode" autocomplete="off" maxlength="10" value="">
</fieldset>
</div>
</div>
</div>
<div class="terms-col">
<p class="custom-checkbox">
    <input name="tos" type="checkbox" id="tos" class="chkBox required" value="on"><label for="tos">I have read and accept the <a target="_blank" href="https://www.carparts4less.co.uk/terms-and-conditions" title="terms of service">terms of service</a> of this website*</label></p>
<div id="tosError" class="error">Please accept Terms of Service.</div>
<p id="main-bsubscribe" class="custom-checkbox"><input name="bsubscribe" type="checkbox" id="bsubscribe" class="chkBox" value="1"><label for="bsubscribe">Yes, I would like to receive product updates and other offers from LKQ Group (UK) Limited trading as Car Parts 4 Less and its affiliated companies by email, telephone, social media and other electronic means. I understand that I may revoke my consent / unsubscribe at any time by clicking the 'unsubscribe' link at the bottom of every marketing email.</label></p>
<fieldset><div class="errorScoreSpammers">
<input type="hidden" class="form-control" name="recaptchakey" id="recaptchakey" value="6LcRxwAaAAAAALBHPkXhvMZrF0GCXXXQKg0exWok">
<input type="hidden" class="form-control" name="siteid" id="siteid" value="4"><p class="text-danger" style="display:none;" id="spamRequest"></p>
</div>
</fieldset>
<fieldset><div class="recaptchav3-txtmsg"><span>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" class="" title="Privacy Notice" target="_blank">Privacy Notice</a> and
				<a href="https://policies.google.com/terms" class="" title="Terms of Service" target="_blank"> Terms of Service</a> apply.
			</span></div>
        </fieldset>
<button id="js-sign-up-btn-captchabtnv3"  type="submit" class="reg-btn ">Complete Your Registration</button>
</div>
</form>
</div>
</section>
</section>






@endsection
