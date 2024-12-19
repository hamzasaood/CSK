// feedback form
	$('#feedbackform-btn-captchabtnv3').click(function(){
		$('.error').html('');
		$('.error').hide();
		var error 			= false;
		var option1 		= $('#feedbackForm input[name="option1"]:checked').length;
		var option2 		= $('#feedbackForm input[name="option2"]:checked').length;
		var msg 			= $('#feedbackForm textarea[name="msg"]').val();
		var name 			= $('#feedbackForm input[name="name"]').val();
		var email 			= $('#feedbackForm input[name="email"]').val();
		if(option1 < 1){
			$('.option1Err').html(window.messages.feedback.error.required);
			error 			= true;
		}
		if(option2 < 1){
			$('.option2Err').html(window.messages.feedback.error.required);
			error 			= true;
		}
		if(msg == ''){
			$('.msgErr').html(window.messages.feedback.error.required);
			error 			= true;
		}
		if(name == ''){
			$('.nameErr').html(window.messages.feedback.error.required);
			error 			= true;
		}
		if(email == ''){
			$('.emailErr').html(window.messages.feedback.error.required);
			error 			= true;
		} else if(!validateEmail(email)){
			$('.emailErr').html(window.messages.feedback.error.validEmail);
			error 			= true;
		}
		if(error){
			$('.error').show();
			return false;
		} else {
			validateScoreCaptcha('feedback');
		}
		return true;
    });
    
	// CI-5203
	//Checkout forgot password page!
	$('#forgot_password_popup .okay-btncaptchav3').click(function(){
		if($('#forgot_password_popup .btncaptchav3').hasClass( "disable" )){
		   return false;
	   }
	   if ($.trim($('#forgot_password_popup #email').val()) == '' 
		   || !new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
		   .test($('#forgot_password_popup #email').val())) {
		   $('#forgot_password_popup .error').text(messages.forgotpassword.invalidemail);
		   $('#forgot_password_popup .error').show();		 
		   return false;
	   }  else {

			//DCX-5114
			var authStatus = $("#auth_status").val();
			if(authStatus == 1){
				$(".okay-btncaptchav3").prop('disabled', true); 
				$(".forgt-pwd-loader").show();
			}
		   grecaptcha.ready(function() {
			   grecaptcha.execute($('#recaptchakey').val(), {action: 'register'}).then(function(token) {
				   $(this).parent('form').prepend('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
				   $.ajax({
					   type:"POST",
					   url:ECP.getBase()+"/app/index/fetchrecaptchascore",
					   data:{
						   'siteid' : $('#siteid').val(),
						   'token': token,
						   'form':'register'
					   },
					   success:function(response){
						   if(response.response.error == 1) {
								$('#forgot_password_popup .errorScoreSpammers').text('Ooops, looks like a bolt came loose under the hood. Please try again later.');
							   $('#forgot_password_popup .errorScoreSpammers').show();
							   $(".okay-btncaptchav3").prop("disabled","true");
							   return false;
						   } else {
							   if($(".okay-btncaptchav3").attr('disabled')!='undefined' ||$(".okay-btncaptchav3").attr('disabled')!=''){
								   //DCX-5114
									if(authStatus != 1){
										$(".okay-btncaptchav3").removeAttr("disabled") ;
									}
							   }
							   $('#forgot_password_popup .errorScoreSpammers').hide();
							   $('.modal-body .forgotflashMessages').hide();
							   $.ajax({
								   type: "POST",			     
								   url: ECP.getBase()+"/forgot-password", 
								   data: {
									   'email': $('#forgot_password_popup #email').val()}, 
								   beforeSend: function(){
									  $('#forgot_password_popup .okay-btn').addClass('disable');
								   },
								   complete: function(){
									   $('#forgot_password_popup .okay-btn').removeClass('disable');
								   },
								   success: function(data) {
										//DCX-5114
										if(authStatus == 1){
											$(".forgt-pwd-loader").hide();
										}

									   if (data.form.success && data.form.success.status==1) {
										   $('#forgot_password_popup .error').hide();
										   $('.modal-body #forgotflashMessages').show();
										   $('#forgot_password_popup #email').val('');
										   //S-DCX-5114
											if(authStatus == 1){
												setTimeout(() => {
													$('.modal-body #forgotflashMessages').hide();
												}, 3000);
											}
											//E-DCX-5114
									   }
											   
									   if (data.form.errors.error.email) {
										   if (data.form.errors.error.email == 'emptyfield') {
											   data.form.errors.error.email = 'invalidemail';
										   }
										   $('#forgot_password_popup .error').text(messages.forgotpassword[data.form.errors.error.email]);
										   $('#forgot_password_popup .error').show();
									   } 
									   //S-DCX-5114
										if(authStatus == 1){
											setTimeout(() => {
												$(".okay-btncaptchav3").prop('disabled', false);
											}, 3000);
										}
										//E-DCX-5114
								   }
							 });
							   return true;
						   }
					   }
				   });
			   });
		   });

			
			
		
		   
	   }
	   return true;		
   });
   // CI-5203
//contact us
$('#contactusform-btn-captchabtnv3').click(function(){
	var errorName = false;
	var errorEmail = false;
	var errorMsg = false;
	
	if ($("#contactname").val().trim() == '') {
		$("#contactname").siblings('.error').css({"display": "block"}).html(messages.contact.contactname.error);
		errorName = true;
	}else{
		$("#contactname").siblings('.error').css({"display": "none"}).html("");
		errorName = false
	}
	if($("#contactemail").val() == ''){
		$("#contactemail").siblings('.error').css({"display": "block"}).html(messages.contact.contactemail.error);
		errorEmail = true
	}else if(!validateEmail($("#contactemail").val())){
		$("#contactemail").siblings('.error').css({"display": "block"}).html(messages.contact.contactemail.invalidError);
		errorEmail = true
	}else{
		$("#contactemail").siblings('.error').css({"display": "none"}).html("");
		errorEmail = false
	}
	if($("#contactmsg").val().trim() == ''){
		$("#contactmsg").siblings('.error').css({"display": "block"}).html(messages.contact.contactmsg.error);
		errorMsg = true
	}else{
		$("#contactmsg").siblings('.error').css({"display": "none"}).html("");
		errorMsg = false
	}
	if(!errorName && !errorEmail && !errorMsg){
		validateScoreCaptcha('contactus');
	}
	return true;
});

//newsletter

$('#newsletterform-btn-captchabtnv3').click(function(){
	var errorName = false;
	var errorEmail = false;
	var errorMsg = false;
 
	if ($("#firstname").val().trim() == '') {
		$("#firstname").siblings('.error').css({"display": "block"}).html(window.messages.newsletter.error);
		errorName = true;
	}else{
		$("#firstname").siblings('.error').css({"display": "none"}).html("");
		errorName = false
	}
	if ($("#lastname").val().trim() == '') {
		$("#lastname").siblings('.error').css({"display": "block"}).html(window.messages.newsletter.error);
		errorName = true;
	}else{
		$("#lastname").siblings('.error').css({"display": "none"}).html("");
		errorName = false
	}
	if($("#email").val() == ''){
		$("#email").siblings('.error').css({"display": "block"}).html(window.messages.newsletter.error);
		errorEmail = true
	}else if(!validateEmail($("#email").val())){
		$("#email").siblings('.error').css({"display": "block"}).html(window.messages.newsletter.email.invalidError);
		errorEmail = true
	}else{
		$("#email").siblings('.error').css({"display": "none"}).html("");
		errorEmail = false
	}
	 
	if ($('#tos').is(":checked") ==false || $('#tos2').is(":checked") ==false ) { 
		//ECP.alert('Error',window.messages.newsletter.checkboxerror);
		$("#tos2Error").css({"display": "block"}).html(window.messages.newsletter.checkboxerror);
		errorName = true;
	}
	
	if(!errorName && !errorEmail && !errorMsg){		
		/* CI-5203 */
		validateScoreCaptcha('newsletter');
		/* CI-5203 */
	} 
	return true;
});


//Captcha initilaze
    function validateScoreCaptcha(formfrom){
        grecaptcha.ready(function() {
            grecaptcha.execute($('#recaptchakey').val(), {action: formfrom}).then(function(token) {
                $(this).parent('form').prepend('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
                $.ajax({
                    type:"POST",
                    url:ECP.getBase()+"/app/index/fetchrecaptchascore",
                    data:{
                        'siteid' : $('#siteid').val(),
						'token': token,
						'form':formfrom
                    },
                    success:function(response){
                        if(response.response.error == 1) {
							$('#spamRequest').css('display','block');
							$('#spamRequest').html("Ooops, looks like a bolt came loose under the hood. Please try again later.");
							$(".captchabtnv3").prop("disabled","true");
                        } else {
							$('#spamRequest').html("");
							$('#spamRequest').css('display','none');							
						 	if($('.captchabtnv3').attr('disabled')!='undefined' || $('.captchabtnv3').attr('disabled')!=''){
								$('.captchabtnv3').removeAttr("disabled") 
							}

							$('.'+formfrom+'Form').submit();
                        }
                    }
                });
            });
        });
	}
	
//CI-3776  
$('#trackOrderForm-btn-captchabtnv3').click(function(){
	$('.error').html('');
	$('.error').hide();
	var error 			= false;
	var orderid 			= $('#track-order input[name="orderid"]').val();
	var postcode 			= $('#track-order input[name="postcode"]').val();
	
	if(orderid == ''){
		$("#orderid").siblings('.error').css({"display": "block"}).html(messages.trackorder.orderid.error);
		error 			= true;
	}
	if(postcode == ''){
		$("#postcode").siblings('.error').css({"display": "block"}).html(messages.trackorder.postcode.error);
		error 			= true;
	} 
	
	if(error){
		$('.error').show();
		return false;
	} else {
		validateScoreCaptcha('trackorder');
	}
	return true;
});
//CI-3776

//CI-3777   
$('#js-sign-up-btn-captchabtnv3').click(function(event){
 
	
	
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
	  var userEmail = $("input#email").val(); /* DCX-4059 */

	  if(firstname == '') {
		  $('#FN').show().text("Please enter valid first name");
		  isError = isError + 1;	
	  }		
	  if (firstname!='' && firstname.length>40) {
		  $('#FN').show().text("Maximum length allowed 40 characters");
		  isError = isError + 1	;
	  } else if (firstname!='' && firstname.length <= 40 ) {			
		 $('#FN').hide().text("");
		  isError = isError + 0	;
	  }
	   
	  if(secondname == '') {
		  $('#LN').show().text("Please enter valid first name");
		  isError = isError + 1;	
	  }		
	  if (secondname!='' && secondname.length>40) {
		  $('#LN').show().text("Maximum length allowed 40 characters");
		  isError = isError + 1	;
	  } else if (secondname!='' && secondname.length <= 40 ) {			
		 $('#LN').hide().text("");
		  isError = isError + 0	;
	  }
	   
	/* DCX-4059 */
	 if (!validateEmail(userEmail)) {
		$("input#email").removeClass('valid').addClass('invalid');			
		$(".login-info-form .registerEmailError").show();
		$(".login-info-form .registerEmailError").text(messages.forgotpassword.invalidemail);
		isError = isError + 1;
	} else {
		$("input#email").removeClass('invalid').addClass('valid');
		$(".login-info-form .registerEmailError").hide();
		$(".login-info-form .registerEmailError").text("");
		isError = isError + 0;
	}
	/* DCX-4059 */

	  if($("input[name='address1']").is(':visible') && address1 == '') {
		  $('#AD1').show().text("Please enter valid address.");
		  isError = isError + 1;	
	  }
  
	  if(address1!='' && address1.length > 50 ){	
		  $('#AD1').show().text("Maximum length allowed 50 characters");		
		  isError = isError + 1;     
	  }	else if (address1!='' && address1.length <= 50 ) {			
		  $('#AD1').hide().text("");			
		  isError = isError + 0;
	  } 
	  

	  if($("input[name='address2']").is(':visible') && address2 == '') {
		  $('#AD2').hide().text("");
		  $('#AD2').remove();
	  }

	  
	  if(address2!='' && address2.length > 50 ){	
		  $('#AD2').remove();
		  $('<div id="AD2" class="error address2_error">Maximum length allowed 50 characters</div>').insertAfter("#address2");
		  $('#AD2').show();
		  isError = isError + 1;     
	  }	else if (address2!='' && address2.length <= 50 ) {			
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
		

	  
	if (isError > 0 ) {
		return false;
	}
	//BT validation	
	var passwordError = validatePassword('#password');
	var cPasswordError = validateCPassword('#cpassword', '#password'); 
	if (!passwordError && !cPasswordError) {
		/* CI-5203 */
		validateScoreCaptcha('register'); 
		/* CI-5203 */
		event.preventDefault();
	}

	return true;
});
//CI-3777
//OCRO-return-process 
$('#returnprocessform-btn-captchabtnv3').click(function(){
	$('.error').html('');
	$('.error').hide();
	var error 			= false;
	var orderid 			= $('#returnProcessForm input[name="orderid"]').val();
	var postcode 			= $('#returnProcessForm input[name="postcode"]').val();
	
	if($('#orderid').hasClass('err') || $('#postcode').hasClass('err')) {
		$('#orderid').removeClass("err");
		$('#postcode').removeClass("err");
	}

	if(orderid == ''){
		$("#orderid").siblings('.error').css({"display": "block"}).html(messages.returnProcess.orderid.error);
		error 			= true;
		$('#orderid').addClass('err');
	}
	if(postcode == ''){
		$("#postcode").siblings('.error').css({"display": "block"}).html(messages.returnProcess.postcode.error);
		error 			= true;
		$('#postcode').addClass('err');
	} 
	
	if(error){
		$('.error').show();
		return false;
	} else {
		validateScoreCaptcha('returnProcess');
	}
	return true;
});
//OCRO-return-process 
//OCRO-358 
$('#warrantyprocessform-btn-captchabtnv3').click(function(){
	$('.error').html('');
	$('.error').hide();
	var error 			= false;
	var orderid 			= $('#warrantyProcessForm input[name="orderid"]').val();
	var postcode 			= $('#warrantyProcessForm input[name="postcode"]').val();
	
	if($('#orderid').hasClass('err') || $('#postcode').hasClass('err')) {
		$('#orderid').removeClass("err");
		$('#postcode').removeClass("err");
	}

	if(orderid == ''){
		$("#orderid").siblings('.error').css({"display": "block"}).html(messages.warrantyProcess.orderid.error);
		error 			= true;
		$('#orderid').addClass('err');
	}
	if(postcode == ''){
		$("#postcode").siblings('.error').css({"display": "block"}).html(messages.warrantyProcess.postcode.error);
		error 			= true;
		$('#postcode').addClass('err');
	} 
	
	if(error){
		$('.error').show();
		return false;
	} else {
		validateScoreCaptcha('warrantyProcess');
	}
	return true;
});
//OCRO-358 