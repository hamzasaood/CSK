@extends('layout.default')

@section('content')

{{--
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Login') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end">{{ __('Email Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

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
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Login') }}
                                </button>

                                @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>


--}}






































<section class="container">
    <section class="container content-section minPageHeight">
        <div class="row quick-info">
            <div class="col s12"><ul>
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
<li>
				Account Login
			</li>
</ul></div>
</section>
<section class="row account-container"><div class="col s12"><h2>
				Account Login
			</h2></div>
<div class="col s12 m6 l6 account-box first"><div class="inner-col">
<span class="heading">Returning Customers Login Here:</span>
<form action="{{ route('login') }}" method="POST" class="login-form" name="login-form">
    @csrf
<fieldset>
<label for="email">Email Address<em>*</em></label>
<input autocomplete="off" class="InputTxtBox required email @error('email') is-invalid @enderror" id="email" name="email" type="email" value="">
@error('email')
<br>                                    
<span class="class="error loginEmailError" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    <br>
                                @enderror
</fieldset>
<fieldset>
<label for="password">Password<em>*</em></label>
<input autocomplete="off" class="InputTxtBox required password @error('password') is-invalid @enderror" id="password" name="password"  type="password" maxlength="64" value="">
                               @error('password')
                                  <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror

</fieldset>
<button type="submit">Sign In</button>

                                
                                
                                @if (Route::has('password.request'))
<a href="{{ route('password.request') }}" class="pswd-link " title="Forgot your password?" >Forgot your password?</a>
@endif

</form>
</div></div>
<div class="col s12 m6 l6 account-box"><div class="inner-col">
<span class="heading">New Customers Register Here:</span><div class="register-col">
<span class="sub-heading">As a registered carparts4less.co.uk customer, you can:</span><ul>
<li>Check your order status.</li>
<li>View your order history.</li>
<li>Place future orders more easily.</li>
<li>Receive offers and updates from us.</li>
</ul>
<a class="register-link" title="Register Now!" href="{{url('/register')}}">Register Now!</a>
</div>
</div></div></section></section></section>















@endsection
