(function($){
/*	var width = $(window).width();
	$(window).resize(function() {
		if (width > 767 && $(window).width() < 767) {
			location.reload();
		}
		else if (width < 767 && $(window).width() > 767) {
			location.reload();
	}
});​*/

	
	$(function(){
		var windowWidth = $(window).width();
		var messageAlertCount=0;
		//messageAlert Slide-Down
		$('.messageAlert,.seenbyMe,.messageAlert-mb').on('click',function(){
			$('.messageAlert_Area,.bodyOpacity').slideToggle();			
			//if($('.messageAlert').is(':visible'))
			if(messageAlertCount <=0){
				$('.messageAlert,.messageAlert-mb').addClass('text-left').html('Not So Fast. <i class="icon-arrowClosed pull-right">Arrow</i>');
				//console.log(messageAlertCount);
				messageAlertCount=1;
				//console.log(messageAlertCount + "After Assine");
			}
			else{
				//console.log(messageAlertCount + "Else");
				messageAlertCount=0;
				$('.messageAlert,.messageAlert-mb').removeClass('text-left').html('3 alerts need your attention <i class="icon-arrowDown pull-right">Arrow</i>');
			}
		})
        
		
		//Home page Alert Slider
		if($('.messageSlider').length){
			if(windowWidth > 767){
				var messageSlider = $('.messageSlider-DS').bxSlider({
					  		adaptiveHeight: true,
							controls:true,
							pager: false,
							touchEnabled: true
						});
				$('.messageAlert').click(function(e){
				  e.preventDefault();
				  messageSlider.reloadSlider();
				});
			}
			else{
				//$('body').css({'width':windowWidth});
				var messageSliderMB = $('.messageSlider-mb').bxSlider({
					  		adaptiveHeight: true,
							controls:true,
							pager: false,
							touchEnabled: true
						});
				$('.messageAlert-mb').click(function(e){
				  e.preventDefault();
				  //console.log('DM')
				  messageSliderMB.reloadSlider();
				});
				
				$('.eventSliderMb').bxSlider({
					controls:false,
					pager: false,
					touchEnabled: true
				});
			}
		}
		
		//Home page Alert Slider End http://www.globaldialoguereview.com/
		
		//Aggregate Carousel
		if($('.aggregateCarousel').length){
			$('.aggregateCarousel').bxSlider({
				slideWidth: 212,
				minSlides: 2,
				maxSlides: 5,
				moveSlides: 1,
				slideMargin: 3,
				pager:false,
			  });
		}
		
		
		//Event Slider
		if($('#eventSlider').length){
			$("#eventSlider").FlowSlider({	
				animation: "Transition",
				animationOptions: {
					transition: function(t) {
						if(t <= 0.5) return 1.5 * t;
						return 0.5 * t + 0.5;
					},
					minTime: 400,
					maxTime: 400
				}
			});
		}
		
        
        //Mob letsTalk
        $('.letsTalk').click(function(){
            $(this).next('.letsTale-Content').slideToggle();
        });
		//let_talk
		$('.let_talk, .letpopup .blueBtn').click(function(e) {
            e.stopPropagation();
			$(this).next('.letpopup').stop(true).fadeToggle('slow');
			$(this).parent('.letpopup').stop(true).fadeToggle('slow');
			$(this).parent('li').toggleClass('active');	
						
		});	
		$('.wrapper').click(function() {				
			$('.letpopup').hide();	
			$('.letpopup').click(function(event) {
				event.stopPropagation();
			});
							
		});	
		
		//Coming Soon	
		$('.c_soon').click(function(){
			alert('Coming Soon');
		})
		
		//Order Message Toggle 
		$('.veiwLink').hover(function(){		
			$(this).find('ul').show();
		},function(){
			$(this).find('ul').hide();
		})
		
		$('.veiwLink ul a').on('click',function(){			
			var text= $(this).text();
			//$('.veiwLink a.current').text(text);
			if($(this).parent('li').hasClass('oview')){
				$('.veiwLink ul li').show();
				$(this).parent('li').hide();
				$('.messageVeiw').hide();
				$('.orderView').show();
			}
			else {	
					
				$('.veiwLink ul li').show();
				$(this).parent('li').hide();	
				$('.messageVeiw').show();
				$('.orderView').hide();
				}
			return false
		})
		
		//body Change bg
		$('.uploadBg').on('click',function(){		
			if($('.body').hasClass('nightBg')){
				$('.body').removeClass('nightBg');
				$('.body').addClass('dayBg');
			}
			else
				{
				$('.body').removeClass('dayBg');
				$('.body').addClass('nightBg');
				}
				return false
		})
		
		//Colorbox
			if($('.ajax100').length){
				$(".ajax100").colorbox({width:"100%"});
			}
			if($('.ajax').length){
				$(".ajax").colorbox({width:"100%"});
			}
            if($('.datapickerajax').length){
				$(".datapickerajax").colorbox({width:"700"});
			}
            if($('.orderSubmitted').length){
				$(".orderSubmitted").colorbox({width:"100%", height:"270px"});
			}
            if($('.ajaxFixed').length){
				$(".ajaxFixed").colorbox({maxWidth:"1152px", width:"100%"});
			}
			$('.ajax,.orderSubmitted').click(function(){
				$('body').css({'overflow' :'hidden'});
			});
			if($('.group3').length){
				$(".group3").colorbox({rel:'group3', transition:"none", width:"85%"});
			}
		//Custom Scroll Pane
		//Homepage Order View Custom Scroll Start Here
		if($('.scroll-pane').length){
			$('.scroll-pane').each(
				function()
				{
				
					$(this).jScrollPane(
						{
							showArrows: $(this).is('.arrow'),
							autoReinitialise:true
							
				
						}
					);
				
				}
			)
		
		/*var pane = $('.scroll-pane');
			var api = pane.data('jsp');
				$(window).resize(function(){
				api.scrollTo(0, 0);
				return false;
		})*/
		
		}
		//Homepage Order View Custom Scroll End Here
        if(windowWidth < 1025){
			if($('.scroll-panes').length){
                $('.scroll-panes').each(
                    function()
                    {
                        $(this).jScrollPane(
                            {
                                showArrows: $(this).is('.arrow'),
                                autoReinitialise:true
                            }
                        );
                    }
                )
            }
		}

		//$('.scroll-pane').jScrollPane({showArrows: true});
		
		//Order Carousel
		if($('.latesetOrderCarousel').length){
			$('.latesetOrderCarousel').bxSlider({
				slideWidth: 125,
				minSlides: 2,
				maxSlides: 8,
				moveSlides: 1,
				slideMargin: 0
			  });
		}
	  
		//Search Box
		$('.search-icon input').focus(function(){
                if($(this).hasClass('open')){
					//alert('Not Open')
					$(this).removeClass('open').animate({width: '0'}, 300);
					$('.search-icon').animate({width: '32px'}, 300);
				}
				else{
					$(this).addClass('open').animate({width: '220px'}, 300);
					$('.search-icon').animate({width: '250px'}, 300);
				}
          });
		  
		//Order Right Section
		$(document).on('click','.flag_ancor',function() {
				$(this).next(".flag-container").fadeIn('200').animate({'right': '0px'}, 500);
				$(this).addClass("openflag").removeClass("closeflag");
			});
			+
		$(document).on('click','.openflag',function() {
			$(this).next(".flag-container").animate({'right': '-451px'}, 500).fadeOut();
			$(this).addClass("closeflag").removeClass("openflag");
		});
		
		$('.btnSubmit,.close-icon').click(function() {
			$(this).parent(".flag-container").animate({'right': '-451px'}, 500).fadeOut();
			$(this).parent(".flag-container").prev('a').addClass("closeflag").removeClass("openflag");
		});
		
		//Crder Popup
		if(windowWidth > 1024){
	 		$('.orderTable table tr').click(function(e){
	  			e.stopPropagation();
	  			$('.orderTable table tr').removeClass('Clicked');
	  			$(this).addClass('Clicked');
	  			 var relativeX = (e.pageX);	
	  		 	 var relativeY = (e.pageY);
	  			$('.tablepopUp').css({
	  					'top':relativeY,
	  					'left':relativeX 
	  				});
	  			$('.tablepopUp').fadeIn(200);
	  			$('.bodyOpacityData').fadeIn(200);
	  		});
		}
        else if(windowWidth > 450 && windowWidth < 768){
            $('.orderTableMob li').click(function(e){
	  			if(!$(this).is(':first-child')){
                    e.stopPropagation();
                    $('.orderTableMob li').removeClass('Clicked');
                    $(this).addClass('Clicked');
                     var relativeX = (e.pageX);	
                     var relativeY = (e.pageY)-30;
                    $('.tablepopUp').css({
                            'top':relativeY,
                            'left':'10%' 
                        });
                    $('.tablepopUp').fadeIn(200);
                    $('.bodyOpacityData').fadeIn(200);
                }
	  		});
            
        }
        else if(windowWidth < 450){
            $('.orderTableMob li').click(function(e){
	  			if(!$(this).is(':first-child')){
                    e.stopPropagation();
                    $('.orderTableMob li').removeClass('Clicked');
                    $(this).addClass('Clicked');
                     var relativeX = (e.pageX);	
                     var relativeY = (e.pageY)-30;
                    $('.tablepopUp').css({
                            'top':relativeY,
                            'left':0 
                        });
                    $('.tablepopUp').fadeIn(200);
                    $('.bodyOpacityData').fadeIn(200);
                }
	  		});
            
        }
		else
		{
			$('.orderTable table tr').click(function(e){
				e.stopPropagation();
				$('.orderTable table tr').removeClass('Clicked');
				$(this).addClass('Clicked');
				 var relativeX = (e.pageX);	
				 var relativeY = (e.pageY);
				$('.tablepopUp').css({
						'top':relativeY,
						'left':'35%' 
					});
				$('.tablepopUp').fadeIn(200);
				$('.bodyOpacityData').fadeIn(200);
		  	});
		}
		
        
		$('.btn-cancel,.btn-submit').on('click', function(){

			var visible = $('.tablepopUp');
			if(visible.is(':visible')){
				$('.tablepopUp').fadeOut();
				$('.orderTable table tr').removeClass('Clicked');
				$('.bodyOpacityData').fadeOut();
			}
		})
        
       	
        
        //Out Side Contaner click hide contaner
		$(document).mouseup(function (e)
		{
            
            var containerLetpopup = $(".letpopup");
		
		    if (!containerLetpopup.is(e.target) // if the target of the click isn't the containerLetpopup...
		        && containerLetpopup.has(e.target).length === 0) // ... nor a descendant of the containerLetpopup
		    {
				$('.letpopup').parent().removeClass('active');
				$('.letpopup').fadeOut();
		        containerLetpopup.hide();
		    }
            
		    var container = $(".tablepopUp");
		
		    if (!container.is(e.target) // if the target of the click isn't the container...
		        && container.has(e.target).length === 0) // ... nor a descendant of the container
		    {
				$('.orderTable table tr').removeClass('Clicked');
				$('.bodyOpacityData').fadeOut();
		        container.hide();
		    }
			
			var packagingC = $(".packaging-box");
			
			if (!packagingC.is(e.target) // if the target of the click isn't the container...
		        && packagingC.has(e.target).length === 0) // ... nor a descendant of the container
		    {
				$('.packaging-box').fadeOut();
		        packagingC.hide();
		    }
			
			var productC = $(".product-box");
			
			if (!productC.is(e.target) // if the target of the click isn't the container...
		        && productC.has(e.target).length === 0) // ... nor a descendant of the container
		    {
				$('.product-box').fadeOut();
		        productC.hide();
		    }
            
            
		});
		
		
		//btn-viewCart
		$('.btn-viewCart').click(function(){
			$('.view-cart-box').slideDown();
		});
		
		$('.btn-closeCart,.btn-submitOpsSupply').click(function(){
			$('.view-cart-box').slideUp();
		});
		$('.icon-cart-close').click(function(){
			$(this).closest('.carlist-calculation').parent('li').slideUp();
		});
		$('.btn-cart-clear').click(function(){
			$('.cartlist').remove();
			$('.cart-item p').html('You hvae <span class="semiBold fnt-15">0</span> items<br>in your cart:');
			$('.cartValue .cart-items').html('Cart: <span class="fnt-13 semiBold">0</span>');
			$('.cart-calculation-total').text('£0');
			$('.cartValue h4').text('£0');
			$('.cartValue p span').text('0');
		})
		

		/*Homepage Header start*/
			
			
		
		/*Homepage Header End*/
        
        /*Financial Detail Tab Starts*/
        $('div.fd-tab a.tab').click(function(){

                $('div.fd-tab li a').removeClass('active');
                $(this).addClass('active');
                var thisClass = this.className.slice(0,2);
                $('div#fdcontent div.box').hide();
                $('div.' + thisClass).fadeIn();

            });

        /*Financial Detail Tab End*/	
		
		
		//Window Scroll function
		$(window).scroll(function() {
			var windScrollTop=$(window).scrollTop();
	        //console.log(windScrollTop);
			if (windScrollTop < 1112) {
	            $('.parallaxNav li').removeClass('selected');
	        }
			
			if (windScrollTop >= 80) {
						$('.fixed-header').fadeIn(200);
						$('.parallaxNav-Fixed').css('top','177px');
						$('.static-header').css("display", "none");
						$('.parallaxNav li').eq(0).addClass('selected');
				   }
				   else {
						
						$('.fixed-header').css("display", "none");
						$('.parallaxNav-Fixed').css('top','475px');
						$('.static-header').css("display", "block");
						$('.parallaxNav li').removeClass('selected');
					}
	
			
			
			if (windScrollTop >= 1025) {
	            $('.parallaxNav li').removeClass('selected');
	            $('.parallaxNav li').eq(1).addClass('selected');
	        }
			
	        if (windScrollTop >= 1510) {
	            $('.parallaxNav li').removeClass('selected');
	            $('.parallaxNav li').eq(2).addClass('selected');
	        }
	        if (windScrollTop >= 2140) {
	            $('.parallaxNav li').removeClass('selected');
	            $('.parallaxNav li').eq(3).addClass('selected');
	        }
	        if (windScrollTop >= 3450 ) {
	            $('.parallaxNav li').removeClass('selected');
	            $('.parallaxNav li').eq(4).addClass('selected');
	        }
	        if (windScrollTop >= 4600) {
	            $('.parallaxNav li').removeClass('selected');
	            $('.parallaxNav li').eq(5).addClass('selected');
	        }
	
	    });
		//Window Scroll function End
		//	parallax effect
		var parallax = document.querySelectorAll(".parallax"),
	      speed = 0.5;
	
		  window.onscroll = function(){
		    [].slice.call(parallax).forEach(function(el,i){
		
		      var windowYOffset = window.pageYOffset,
		          elBackgrounPos = "0 " + (windowYOffset * speed) + "px";
		      
		      el.style.backgroundPosition = elBackgrounPos;
		
		    });
		  };
	  	//	parallax effect End
		
		/*Calendar Page Start*/
		if($('.calendar').length)
		{
			var slider1 = $('.calendarslider').bxSlider({
	            pager:false,
	            auto:false,
	        });
	
			var slider2 = $('.calendarslider2').bxSlider({
				pager:false,
				auto:false,
			});
		}
		
	 	$('div.calendar-tab a.tab').click(function(){
			$('div.calendar-tab li a').removeClass('active');
			$(this).addClass('active');
			var thisClass = this.className.slice(0,2);
			$('div#calendarcontent div.box').hide();
			$('div.' + thisClass).fadeIn();
						
		});
		
		$('div.calendar-tab a.tab').on('click',function() {
            slider1.reloadSlider();
            slider2.reloadSlider();
		});
		
	  	/*Calendar Page End*/
        
        //* Non Conformace Mobile Tab
        $('.nonConformance-issueType li a').click(function(){
            var dataTarget='#'+$(this).data('target');
            $('.boxIssueType').hide();
            $('.nonConformance-issueType li a').removeClass('active');
            $(this).addClass('active');
            $(dataTarget).show();
            dataTarget=='#service-box-mobile' ? $('#wrinProdNumber').hide() : $('#wrinProdNumber').show();

        });
        //* Non Conformace Mobile Tab End
		
		 /* Custom Select Start*/
		
			// Iterate over each select element
			$('select').each(function () {
						
				// Cache the number of options
				var $this = $(this),				
					numberOfOptions = $(this).children('option').length;
			
				// Hides the select element
				$this.addClass('s-hidden');
			
				// Wrap the select element in a div
				$this.wrap('<div class="select"></div>');
			
				// Insert a styled div to sit over the top of the hidden select element
				$this.after('<div class="styledSelect"></div>');
			
				// Cache the styled div
				var $styledSelect = $this.next('div.styledSelect');
			
				// Show the first select option in the styled div
				$styledSelect.text($this.children('option').eq(0).text());
			
				// Insert an unordered list after the styled div and also cache the list
				var $list = $('<ul />', {
					'class': 'options'
				}).insertAfter($styledSelect);
			
				// Insert a list item into the unordered list for each select option
				if ($this.hasClass('addorderItem')){
					$list.addClass('addorderitem-select');
					for (var i = 0; i < numberOfOptions; i++) {
						$('<li />', {
							html: $this.children('option').eq(i).text()+ '<small>'+$this.children('option').eq(i).attr(('data-order')) +'</small><span>'+$this.children('option').eq(i).attr(('data-price')) +'</span>',
							rel: $this.children('option').eq(i).val()
					
						}).appendTo($list);
					}
				}else
				{
					for (var i = 0; i < numberOfOptions; i++) {
						$('<li />', {
							
							text:$this.children('option').eq(i).text(),
							rel: $this.children('option').eq(i).val(),
							//<span>'+$this.children('option').eq(i).attr(('data-price')) +'
							
							//price: $this.children('option').eq(i).attr(('data-price')),
						}).appendTo($list);
					}
				}
			
				// Cache the list items
				var $listItems = $list.children('li');
			
				// Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
				$styledSelect.click(function (e) {
					e.stopPropagation();
					$('div.styledSelect.active').each(function () {
						$(this).removeClass('active').next('ul.options').hide();
					});
					$(this).toggleClass('active').next('ul.options').toggle();
				});
			
				// Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
				// Updates the select element to have the value of the equivalent option
				$listItems.click(function (e) {
					e.stopPropagation();
					//$styledSelect.text($(this).text()).removeClass('active');
                    $styledSelect.text($(this).attr('rel')==null || $(this).attr('rel')==''  ? $(this).text() : $(this).attr('rel')).removeClass('active');
                    
                    $this.val($(this).attr('rel'));
					$list.hide();
					/* alert($this.val()); Uncomment this for demonstration! */
                    
                    /**** Custom Code for Non Conformance Issue Type Change event*/
					if($('.selectIssueType .options').length){
					if($(this).text()=='Product'){
						 $('#service-box').hide()
						 $('#product-box').show();
					 }
					 else if($(this).text()=='Service'){
						 $('#product-box').hide();
						 $('#service-box').show();
					 }
					}
                    
                    /**** Custom Code for Collection Type Change event*/
					if($('.collectionType .options').length){
						if($(this).text()=='Packaging Collection'){
						 $('.packagingCollection').fadeIn();
						 $('.productCollection').fadeOut();
					 }
					 
                     else if($(this).text()=='Product Collection'){
                         $('.packagingCollection').fadeOut();
						 $('.productCollection').fadeIn();
					 }
                     else{
                         $('.collectionType-Details').fadeOut();
                     }
					}
				});
                
			
				// Hides the unordered list when clicking outside of it
				$(document).click(function () {
					$styledSelect.removeClass('active');
					$list.hide();
				});
				// Setting Custom Select Dropdown Height 
				if($('.options>li').length>2){
					$('.options').css('height','100px')
				}
				
				});
		/* Custom Select End*/

        
         //Custom Checkbox and Radio Button Start
			if($('.request-credit').length){
				   $('input').iCheck({
					checkboxClass: 'icheckbox_square-blue',
					radioClass: 'iradio_square-blue ',
					increaseArea: '20%'
				  });
			}
		//Custom Checkbox and Radio Button End
		
		
		//Request Activity Product and Packaging Request Fucntion Start
			if($('.packaging-request-on').length){
				 $('.packaging-request-on').click(function() {				
					$('.packaging-box').fadeIn();	
												
				});	
			}
			if($('.product-request-on').length){
				 $('.product-request-on').click(function() {				
					$('.product-box').fadeIn();	
												
				});	
			}
		//Request Activity Product and Packaging Request Fucntion End
        
        //AutoSuggestion Non Conformance Start
        var product = [
        {
        value: "012345",
        label: "012345",
        desc: "Chicken Patty - White Legend",
        },
        {
        value: "012345",
        label: "012345",
        desc: "Chicken Nuggent - White Legend",
        },
        {
        value: "012345",
        label: "012345",
        desc: "Chicken Patty - White Legend",
        }
        ];
        //Top Section Non Conformance
        if($('.product').length){
            $( ".product" ).autocomplete({
            minLength: 0,
            source: product,
            appendTo: ".mwrin",
            focus: function( event, ui ) {
            $( ".product" ).val( ui.item.label );
            return false;
            },
            select: function( event, ui ) {
            $( ".product" ).val( ui.item.label );
            $( ".product-id" ).val( ui.item.value );
            $( ".product-description" ).html( ui.item.desc );
            return false;
            }
            })
            .autocomplete( "instance" )._renderItem = function( ul, item ) {
            return $( "<li>" )
            .append( "<a> <span>" + item.label + "</span>" + item.desc + "</a>" )
            .appendTo( ul );
            };
        }
        //Bottom Section Footer
        if($('.product-bottom').length){
            $( ".product-bottom" ).autocomplete({
            minLength: 0,
            source: product,
            appendTo: ".wrin",
            focus: function( event, ui ) {
            $( ".product-bottom" ).val( ui.item.label );
            return false;
            },
            select: function( event, ui ) {
            $( ".product-bottom" ).val( ui.item.label );
            $( ".product-id-bottom" ).val( ui.item.value );
            $( ".product-description-bottom" ).html( ui.item.desc );
            return false;
            }
            }) 
            .autocomplete( "instance" )._renderItem = function( ul, item ) {
            return $( "<li>" )
            .append( "<a> <span>" + item.label + "</span>" + item.desc + "</a>" )
            .appendTo( ul );
            };
        }
		
		if($('.packaging-bottom').length){
            $( ".packaging-bottom" ).autocomplete({
            minLength: 0,
            source: product,
            appendTo: ".pwrin",
            focus: function( event, ui ) {
            $( ".packaging-bottom" ).val( ui.item.label );
            return false;
            },
            select: function( event, ui ) {
            $( ".packaging-bottom" ).val( ui.item.label );
            $( ".packaging-id-bottom" ).val( ui.item.value );
            $( ".packaging-description-bottom" ).html( ui.item.desc );
            return false;
            }
            }) 
            .autocomplete( "instance" )._renderItem = function( ul, item ) {
            return $( "<li>" )
            .append( "<a> <span>" + item.label + "</span>" + item.desc + "</a>" )
            .appendTo( ul );
            };
        }
		
		
        //Mobile Top Section Non Conformace
        if($('.product-mob').length){
            $( ".product-mob" ).autocomplete({
            minLength: 0,
            source: product,
            appendTo: ".mwrin-mob",
            focus: function( event, ui ) {
            $( ".product-mob" ).val( ui.item.label );
            return false;
            },
            select: function( event, ui ) {
            $( ".product-mob" ).val( ui.item.label );
            $( ".product-id-mob" ).val( ui.item.value );
            $( ".product-description-mob" ).html( ui.item.desc );
            return false;
            }
            })
            .autocomplete( "instance" )._renderItem = function( ul, item ) {
            return $( "<li>" )
            .append( "<a> <span>" + item.label + "</span>" + item.desc + "</a>" )
            .appendTo( ul );
            };
        }
		//AutoSuggestion End
        
        
        /****** Image Uploader Custom Input file***/
        $('.custom-upload input[type=file]').change(function(){
    		$(this).next().text($(this).val());
		});
        /****** Image Uploader Custom Input file End***/
		
		/************** Mobile Navigation **********/
		var bHeight= $('.mobBodyWrapper').height()
			
		$(".mMenu").click(function(){
			$(".mob-Body").toggleClass('mobilemenu');
			$(".mobNavigation").toggleClass('active-mobile-nav');
			if ($(".mob-Body").hasClass('mobilemenu')){
				    
				jQuery(".mob-Body.mobilemenu").removeAttr('style');
				jQuery(".mobNavigation").animate({left:'0'},300);
				
			}
			if (!($(".mob-Body").hasClass('mobilemenu'))){
				 jQuery(".mobNavigation").animate({left:'-290px'},300);
				
			}
		});
		$(".menuClose,.mobBodyOpacity").click(function(e){
			e.stopPropagation();
			if ($(".mob-Body").hasClass('mobilemenu')){
				jQuery(".mobNavigation").animate({left:'-290px'},300);
				
			}
		});
		
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
			$('.order-proposal video').css('height','300px');
		}
        
        
	// Check Parameters for Message Center Visibility Start here	 
		var visibility = '';
			visibility = getUrlParameter('visible');
			if(visibility){
				$('#message-center-wrapper').addClass('visible');
			}
			//Open Message Cneter Box Start Here
				$(".letTalk").click(function(e){
					$('#message-center-wrapper').addClass('visible');
				});
			//Open Message Cneter Box Close Here
			
			//Close Message Cneter Box Start Here
			$('#close-message-center').click(function(){
				$('#message-center-wrapper').removeClass('visible');
			})
			//Close Message Cneter Box End Here
			
			//Date and Category Toggle Switch Start here
			if($('#active-messages .slider').length){
			$('#active-messages .slider').switchButton({
				on_label: 'Category',
				off_label: 'Date',
				width: 28,
				height: 17,
				button_width: 17
			}).change(function(){
				if($(this).prop("checked") == true){
					$('#category-filtered-messages').show();
					$('#date-filtered-messages').hide();
				} else {
					$('#category-filtered-messages').hide();
					$('#date-filtered-messages').show();
				}
			});
			}
			//Date and Category Toggle Switch End here
			
			//Archive and Active tabs Start here		
			$('.message-center-tabs a').click(function(e){
				e.preventDefault();
				var id = $(this).attr('href');
				if(id !='#')
				{
					$('#active-message-wrapper, #archive-message-wrapper').hide();
					$(id).show();
					$('.message-center-tabs .active').removeClass('active');
					$(this).parent().addClass('active');
				}
			})		
			//Archive and Active tabs End here	
			
			//Message Reply Block Start here			
			$('.reply-message').click(function(e){
				e.preventDefault();
				$('#detail-message-wrapper, #tab-navigation').hide();
				$('#message-reply-wrapper').show();
			})	
			//Message Reply Block End here
			
			//Message Reply Cancel Start here		
			$('.cancel-message-reply').click(function(e){
				e.preventDefault();
				$('#detail-message-wrapper, #tab-navigation').show();
				$('#message-reply-wrapper').hide();
			})
			//Message Reply Cancel End here
			
			//Setting Height of Message Center to document height
			$('#message-center-wrapper').css('min-height', $(document).height());
			
			//Message Category Accordion Start here
			$('.accordion-header').click(function(){
				var elem = $(this);
				elem.toggleClass('open');
			})
			//Message Category Accordion End here
			
			//Customization Input type file start here
			$('.custom-file-upload input').change(function(){
				var elem = $(this);
				elem.siblings('.file-name').text(elem.val());
			})
			//Customization Input type file End here
			
			//Message Search Start here
			if($('.search-form input[type=text]').val() != '')
			{
				$('.search-form').addClass('show-input');
			}
	
			$('.search-form').hover(function(){
				$(this).addClass('show-input');
			},function(){
				if(!$(this).find('input[type=text]').is(':focus')){
					if($(this).find('input[type=text]').val() == '')
					{
						$(this).removeClass('show-input');
					}
				}
				$(this).find('input[type=text]').blur(function(){
					if($(this).val() == '')
					{
						$('.search-form').removeClass('show-input');
					}
				})
			})
			//Message Search End here
		});
		
		$(window).resize(function(){
			$('#message-center-wrapper').css('min-height', $(document).height());
		})
})(jQuery);

$(window).load(function(){
	//Custom Select Scroll Function Start Here
	$('.select .options').jScrollPane({autoReinitialise:true});
	//Custom Select Scroll Function End Here
});

//Getting URL Parameters 
function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}  