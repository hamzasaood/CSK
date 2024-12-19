window.messages = {

	/*EPL-14576*/
	'failedpaymentstatus':{
		"warning":"Looking to place a new order? We are just processing your previous order, please allow a few minutes for it to complete before placing your next order."
	},
	/*EPL-14576*/
	'notificationalert':{
		'success':'Success',
		'error':'Error',
		'newsletterSuccess' : 'Success'
	},
	'forgotpassword':{
		'invalidemail':'Please enter a valid Email address.',
		'callback':'User with this email address doesn\'t exists.',
		'forgotrequest':'A verification link has been sent to your email address. Please click on the link reset your password.',
		'invalidUrlForgotPassword':'Password reset link has been expired or deleted. Please try requesting a new link.',
		'resetpassword':'Your password has been changed successfully. You can login with new password.'
	},
	'changepassword':{
		'emptyfield':'Please enter a valid password.',
		'minlength':'Password must contain a minimum of 8 characters.',
		'notsametofield':'Password and Confirm password must be identical.',
		/**EPl-14417*/
		'CureentPasswordInvalid':'Current password is invalid.'
		/**EPl-14417*/
	},
	'loginHeader':{
		'formerror':'Incorrect e-mail or password have been entered.',
		'emailerror':'User with this email address doesn\'t exists.',
		'invalidemailpassword':'Please enter valid email address and password.',
		'callback': 'User with this email address already exists.',
		'invalidpassword': 'This field is required',
		 /*** DCX-4366 ***/ 
		'auth0msg' : "For your security, we recommend updating your password regularly. If it's been a while since your last update, please consider setting a new password today." 
	},
	'referFriend':{
		'empty':'This field is required.',
		'invalidEmail':'Please enter valid email address.',
		'success':'Your mail has been sent successfully.'
	},
	'register':{
		'success':'Your account has been created successfully.',
		'invalidUrlRegistrationLink':'Registration confirmation link is invalid!',
		'alreadyRegisteredNot':'Your account is already active. You can login into your account.'
	},
	'newsletter':{
		'success':'Your have been successfully subscribed to our newsletter service.',
		'error' : 'This field is required.',	
			'checkboxerror' : 'Sorry, You need to tick both boxes before receiving our latest offers.',	
			'email':{
				'invalidError' : 'Please enter valid email address.',
			}
	},
	'editprofile':{
		'editsuccess':'Your profile has been updated successfully.',
		'emptyConfirmEmailField':'Please confirm email address.',
		'notMatchedConfirmEmailField':'Confirm email does not match',
		'changeEmail':'Please change the email address.',
		'editNewsletterSuccess':'Your profile has been updated successfully.',
		'emailLabel':'Email Address*',
		'editEmailLabel':'New Email Address*'
	},
	'payment':{
		'aborted':"Something went wrong please try later."
	},
	'login':{
		'failed':"Something went wrong please try later."
	},
	'selectstore':{
		'success': {
			'label': 'Success',
			'message': "Store selected successfully."
		},
		'error': {
			'label': 'Error',
			'message':"Something went wrong. Please try later"
		}
	},
	'cncpopup':{
		'error':{
			'required' : 'This field is required',
		}
	},
	'sddsearch':{
		'success': 'Good News! Same Day Delivery is available for this area. <a href="' + window.settings.vrm.redirecturl + '" title="Car Parts">Shop now</a> to get your parts delivered today.',
		'error': 'We are sorry, Same Day Delivery is not currently available in your area. We are adding new area\'s every week so please check back again soon.<br>You can still order your parts using Home Delivery or Click &amp; Collect via our 190+ branches. <a href="' + window.settings.vrm.redirecturl + '" title="Car Parts">Click here</a> to start shopping.'
	},
	'contact':{
		'success':'Your message has been sent successfully.',
		'contactname':{
			'error' : 'This field is required.'
		},
		'contactemail':{
			'error' : 'This field is required.',
			'invalidError' : 'Please enter valid email address.',
		},
		'contactmsg':{
			'error' : 'This field is required.'
		}
	},
	/*** EPL-12557 ***/
	'trackorder':{
		'success':'Successful.',
		'orderid':{
			'error' : 'This field is required.'
		},
		'postcode':{
			'error' : 'This field is required.'
		}
	},
	/*** EPL-12557 ***/    
	'pricematchpromise':{
		'success':'Your message has been sent successfully.'
	},
	'modules':{
		'error':{
			'vrm':'Sorry, we are currently experiencing issues with our registration lookup. Please use the Vehicle Selector.',
			'ads':'Sorry, we are currently experiencing issues with our Vehicle Selector. Please use the registration lookup.',
		}
	},
	'feedback':{
		'success':'Thank you for your valuable feedback.',
		'error':{
			'required': 'This field is required',
			'validEmail': 'Please enter a valid Email address.',
		}
	},
	'snowchains':{
		'success':'Your feedback has been submitted successfully.',
		'error':{
			'required': 'Please select all the required fields.'
		}
	},
	'checkout':{
		'deliveryerror':{
			'title':'Delivery Options  Error',
			'error': 'Please select a delivery option.'
		},
		'samedaydelivery':{
			'title' : 'Same day delivery  no longer available',
			'error' : 'Unfortunately our Same Day Delivery is no longer available as its passed 3pm. You can order by Click and collect and your order will be ready in 15 minutes at your local branch or you can try an alternative delivery method to place your order.',
		},
		'paymenterror':{
				'title':'Payment Methods  Error',
				'error': 'Please select a payment method.'
			},
		'billingerror':{
				'title':'Biiling Information  Error',
				'error': 'Please select if your billing address different to your delivery address.'
			},
		'cncerror':{
				'title':'Click and Collect Error',
				'error': 'Please enter postcode and select a branch.'
			},
		'adressfindererror':{
				'title':'Address Finder Error',
				'error': 'Please enter the postcode to use address finder.'
			},
		'registerpassword' :{
			'error':{
				'required': 'Please enter valid password.',
				'minimum' : 'Password must contain minimum 8 characters.',
				'samepwd' : 'Password and Confirm password must be same.'
			}
		},
		'mobileno' :{
			'error':{
				'required': 'Please enter valid mobile no.',
				'minimum' : 'Mobile no. must contain minimum 10 characters.'
			}
		},
		'phoneno' :{
			'error':{
				'required': 'Please enter valid phoneno.',
				'minimum' : 'Phoneno must contain minimum 10 characters.'
			}
		},
		'singinerror' :{
			'error':{
				'emailrequired': 'Please enter valid email address.',
				'pwdrequired': 'Please enter valid password.',
			}
		},			
		'privacyerror' :{
			'error':'To continue, please accept the terms & conditions and privacy policy.'
		},
	},
	'search' :{
		'error':{
			'required': 'Please enter a valid Keyword, Category, Brand or Part Number to proceed.',
		}
	},
	'refine' :{
		'error':{
			'noProducts': 'No Products found.',
		}
	},
	'bfpo':{
		'error':{
			'validproduct':{
					'heading': 'You have entered a BFPO location. ',
					'msg': 'Note: the delivery option available is to the first UK BFPO office only. We cannot confirm a specific delivery time-scale, BFPO location are determined by the forwarding carriers.',
				},			
			'invalidproduct':"You have entered a BFPO location. We are unable to deliver the items in the basket as they are prohibited for BFPO Service. We apologise for the inconvenience"
		}
	},
	'bsubscribe' :{
		'label': "Yes, I would like to receive product updates and other offers from LKQ Group (UK) Limited trading as Car Parts 4 Less and its affiliated companies by email, telephone, social media and other electronic means. I understand that I may revoke my consent / unsubscribe at any time by clicking the 'unsubscribe' link at the bottom of every marketing email." // DCX-1843 DCX-5093
	},
'pricerefine' :{
		'error':{
			'noProducts': 'No Products found. Please update the applied filters to see the available products.',
		}
	},
// CI-1651
    'wishListBeforeAddedText': {
        'label': 'Add to Wish List'
    },
    'wishListAfterAddedText': {
        'label': 'Added to Wish List'
	},
    // CI-1651
	//OCRO
	'returnProcess':{
		'success':'Successful.',
		'orderid':{
			'error' : 'This field is required'
		},
		'postcode':{
			'error' : 'This field is required'
		}
	},
	//OCRO
	//OCRO-358
	'warrantyProcess':{
		'success':'Successful.',
		'orderid':{
			'error' : 'This field is required'
		},
		'postcode':{
			'error' : 'This field is required'
		}
	}
	//OCRO-358
};