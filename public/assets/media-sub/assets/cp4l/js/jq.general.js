var spinnerstyle = 'position:absolute; top:50%; left:50%; margin-left:-50px; margin-top:-50px; text-align:center; z-index:1234; overflow:auto; width:100px;  height:102px;';	
var overlay ='display:block; position:fixed ;left:0; top:0; bottom:0; right:0; background:#233f92; opacity:0.8; height:100%; filter:alpha(opacity=80); z-index:9999999; margin-left:0px; text-align:center;';
var spinnerhtml = '<div id="spinner" class="spinner" style="'+overlay+'"></div>';
var alertbox = '<div class="row" style="margin-top:300px;height:50%"><div class="col-md-4"></div><div class="col-md-4 content" style="background:white"></div><div class="col-md-4"></div></div>';

//var model = '<div class="modal" id="myModal1"><div class="modal-dialog">\
//      		<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" //aria-hidden="true"><span aria-hidden="true">×</span></button><h4 class="modal-title">Modal title</h4></div>\
//        	<div class="modal-body"></div><div class="modal-footer"><button type="button" class="btn btn-primary save_btn">Save //changes</button><button type="button" class="btn btn-default close_btn" data-dismiss="modal">Close</button>\
//	</div></div></div></div>';

(function( $, window, document, undefined){
	var defaults = {
		loadmakers:1,
	};
	window.ECP = {
			__loadervisible : false,
		setConfig:function(options){
			defaults = $.extend({}, defaults, options);
			return this;
		},
		getBase:function(){
			if($('body').data('url')== settings.docroot && settings.docroot!=''){
				return $('body').data('url');
			}
			return '';
		},
		getStatic:function(){
			return $('body').data('statichost');
		},
		alert:function(title,message,options){
			alertconfig = {autoclose:false,timeinterval:100000};
			if(typeof options!=undefined){
				alertconfig = $.extend({}, alertconfig, options);
			}
			alertmodel = $('#myModal1');
            /* CI-4785 EPL-15618 New  */
            var modalcontainer = document.querySelector('#myModal1');
            modalcontainer.querySelector('.modal-title').innerHTML = DOMPurify.sanitize(title);
            /* EPL-15618 New  */
            /* CI-4825 */
            modalcontainer.querySelector('.modal-body').innerHTML = DOMPurify.sanitize(message);
            /* CI-4825 */
            /* CI-4785 */
			alertmodel.find('.save_btn').remove();
			//$('body').append(alertmodel);
			$('#myModal1').openModal({complete:function(){ $('.lean-overlay').remove();}});
			var getWidth = $(window).width();
			if(getWidth <= 767){
				$("html, body").animate({ scrollTop: 0 }, 600);
			}
			if('header' in alertconfig && alertconfig['header'] == false){
				alertmodel.find('.modal-header .modal-title').remove();
			}
			if('footer' in alertconfig && alertconfig['footer'] == false){
				alertmodel.find('.modal-footer').remove();
			}
            /*** EPL-12392 ***/ 
            if('class' in alertconfig){
				alertmodel.addClass(alertconfig['class']);
			} 
            /*** EPL-12392 ***/             
			/*** EPL-14567 ***/ 
			if('closebuttontext' in alertconfig){
				alertmodel.find('.close_btn').text(alertconfig['closebuttontext']);
			} 
			/*** EPL-14567 ***/
		},
		confirm : function (title,confirmmsg,successcallback,failurecallback){
			confirmmodel = $('#myModal1');
            /* CI-4785 */
			var modalcontainer = document.querySelector('#myModal1');
            modalcontainer.querySelector('.modal-title').innerHTML = title;
            modalcontainer.querySelector('.modal-body').innerHTML = confirmmsg;
			confirmmodel.find('.save_btn').text('Ok');
            /* CI-4785 */
			confirmmodel.find('.close_btn').removeAttr('data-dismiss');
			confirmmodel.openModal({backdrop:'static',keyboard:false,show:true});
			var getWidth = $(window).width();
			if(getWidth <= 767){
				$("html, body").animate({ scrollTop: 0 }, 600);
			}
			$(document).off('click','.save_btn');
			$(document).on('click','.save_btn',function(){
				if(successcallback){
					successcallback.call(this);
				}
				confirmmodel.remove();
			});
			$(document).off('click','.close_btn');
			$(document).on('click','.close_btn',function(){
				if(failurecallback){
					failurecallback.call(this);
				}
				confirmmodel.remove();
			})
		},
		showloader:function(){
			if(window.ECP.__loadervisible){
				return false;
			}else{
				window.ECP.__loadervisible = true;
				$('.spinner').fadeOut().remove();
				//$('body').append($(spinnerhtml));			
				$('.spinner').append($('<span class="loader-img">loading...</span>')).fadeIn();
			}
			
		},
		loaderClose:function(){
			window.ECP.__loadervisible = false;
			$('.spinner').fadeOut().remove();
		},
		Carriages:{
			getCountryCarriages:function(url,data,callback){				
				$.post(url,this.__data,function(response){
					callback.call(this,response);
				},'html');
			}
		},
		AdsLookup : {
			__data : {},
			loadMakers:function(callback){				
				/* 898 :- EMDM-235 */
				 /**ci2-253 adsv2 */
				var loadmakerajax = $('.loadmakerajax').length;
				if(defaults.ads.required==1 || defaults.emdm.required == 1 || loadmakerajax == 1){
				 /**ci2-253 adsv2 */
				/* 898 :- EMDM-235 */
					$.ajax({
						url: defaults.ads.maker,
						type: 'POST',
						data: this.__data,
						dataType: 'json',
						success: function(data){
							callback.call(this,data);
						},
						global: false
					});
					return this;
				}
			},
			loadModel:function(maker,callback){
				ECP.AdsLookup.__data.make = maker;
				$.ajax({
					url: defaults.ads.model,
					type: 'POST',
					data: {make:maker},
					dataType: 'json',
					success: function(data){
						callback.call(this,data);
					},
					global: false
				});
				return this;
			},
			loadYear:function(model,callback){
				this.__data.model = model;
				$.ajax({
					url: defaults.ads.year,
					type: 'POST',
					data: this.__data,
					dataType: 'json',
					success: function(data){
						callback.call(this,data);
					},
					global: false
				});
				return this;
			},
			loadEngine:function(year,callback){
				this.__data.year = year;
				$.ajax({
					url: defaults.ads.engine,
					type: 'POST',
					data: this.__data,
					dataType: 'json',
					success: function(data){
						callback.call(this,data);
					},
					global: false
				});
				return this;
			},
			loadFuel:function(engine,callback){
				this.__data.engine = engine;
				$.ajax({
					url: defaults.ads.fuel,
					type: 'POST',
					data: this.__data,
					dataType: 'json',
					success: function(data){
						callback.call(this,data);
					},
					global: false
				});
				return this;
			},
			getCompoents:function(callback, global){
				global = (global === undefined) ? true : global;
				$.ajax({
					url: defaults.ads.componentmannual,
					type: 'POST',
					data: this.__data,
					dataType: 'json',
					success: function(data){
						callback.call(this,data);
					},
					global:global
				});
				return this;
			}
		},
		VrmLookup:{
			__data : {},
			getDetailByReg:function(reg,callback,global){
				global = (global === undefined) ? true : global;
				$.ajax({
					url: defaults.vrm.detailurl,
					type: 'POST', 
					data: {reg:reg},
					dataType: 'json',
					success: function(data){
						callback.call(this,data);
					},
					global:global
				});
				return this;
			}
			
		}
	}
})( jQuery, window , document );