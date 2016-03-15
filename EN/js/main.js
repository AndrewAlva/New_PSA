$(document).ready(function() {
	// INSERT VIMEO VIDEO
		//DESKTOP
		$('#play-button-desktop').click(function(){
			$('#vimeoBox').append('<div id="vimeoVideo"><iframe src="https://player.vimeo.com/video/157360045?autoplay=1&color=0b6c81&title=0&byline=0&portrait=0" width="800" height="450" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>');
			$('#closeVimeoDesktop').removeClass('hidden');
		});
		$('#closeVimeoDesktop').click(function(){
			$('#vimeoVideo').remove();
			$('#closeVimeoDesktop').addClass('hidden');

		});

		//MOBILE
		$('#play-button-mobile').click(function(){
			$('#vimeoBox').append('<div id="vimeoVideo"><iframe src="https://player.vimeo.com/video/157360045?autoplay=1&color=0b6c81&title=0&byline=0&portrait=0" width="320" height="180" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>');
			$('#closeVimeoMobile').removeClass('hidden');
			$('#pagewrapper').removeClass('noLandscape');
		});
		$('#closeVimeoMobile').click(function(){
			$('#vimeoVideo').remove();
			$('#closeVimeoMobile').addClass('hidden');
			$('#pagewrapper').addClass('noLandscape');

		});
	// END INSERT VIMEO VIDEO






	// MENU INTERACTION

		// OPEN / CLOSE MENU ON TABLET AND MOBILE

			$('#close-menu').click(function(event) {
				$('#menuwrapper').toggleClass('device-hide-menu');
			});		
		// END OPEN / CLOSE MENU ON TABLET AND MOBILE



		// CALIDAD DROPDOWN
			$('#calidad-box').mouseover(function(){

				$('#menu-calidad').removeClass('hidden');
				
				$('#menu-calidad').mouseleave(function(){
	
					$('#menu-calidad').addClass('hidden');
				});

				$('#produccion-box').mouseenter(function(){
	
					$('#menu-calidad').addClass('hidden');
				});

			});

			$('#pagewrapper').mouseenter(function(event){
				$('#menu-calidad').addClass('hidden');
			});
		// END CALIDAD DROPDOWN




		// PRODUCCION DROPDOWN
			$('#produccion-box').mouseover(function(){

				$('#menu-produccion').removeClass('hidden');
				
				$('#menu-produccion').mouseleave(function(){
	
					$('#menu-produccion').addClass('hidden');
				});
				
				$('#calidad-box').mouseenter(function(){
	
					$('#menu-produccion').addClass('hidden');
				});

			});

			$('#pagewrapper').mouseenter(function(event){
				$('#menu-produccion').addClass('hidden');
			});
		// END PRODUCCION DROPDOWN

		//SMOOTH SCROLLING MENU
			$('#calidad-box').click(function() {
				$('html, body').animate({
				    scrollTop: $("#viewsection1").offset().top
				}, 1000);
			});

			$('#goTech').click(function() {
				$('html, body').animate({
				    scrollTop: $("#viewsection2").offset().top
				}, 1000);
			});

			$('#goCerts').click(function() {
				$('html, body').animate({
				    scrollTop: $("#viewsection3").offset().top
				}, 1000);
			});

			$('#goCap').click(function() {
				$('html, body').animate({
				    scrollTop: $("#viewsection4").offset().top
				}, 1000);
			});





			$('#produccion-box').click(function() {
				$('html, body').animate({
				    scrollTop: $("#viewsection1").offset().top
				}, 1000);
			});

			$('#goCamp').click(function() {
				$('html, body').animate({
				    scrollTop: $("#viewsection2").offset().top
				}, 1000);
			});

			$('#goPro').click(function() {
				$('html, body').animate({
				    scrollTop: $("#viewsection3").offset().top
				}, 1000);
			});

		//END SMOOTH SCROLLING MENU
	// END MENU INTERACTION





	// CHANGE TECH FOTO
		var TechCount = 1;

		$('#next-tech').click(function(event) {
			if (TechCount == 1) {
				$('.sections:nth-child(2)').addClass('tech-bg-2');

				$('#tech-text1').addClass('hidden');
				$('#tech-text2').removeClass('hidden');
				TechCount = 2;
			}else

			if (TechCount == 2) {
				$('.sections:nth-child(2)').addClass('tech-bg-3');
				$('.sections:nth-child(2)').removeClass('tech-bg-2');

				$('#tech-text2').addClass('hidden');
				$('#tech-text3').removeClass('hidden');
				TechCount = 3;
			}else

			if (TechCount == 3) {
				$('.sections:nth-child(2)').addClass('tech-bg-4');
				$('.sections:nth-child(2)').removeClass('tech-bg-3');

				$('#tech-text3').addClass('hidden');
				$('#tech-text4').removeClass('hidden');
				TechCount = 4;
			}else

			if (TechCount == 4) {
				$('.sections:nth-child(2)').addClass('tech-bg-5');
				$('.sections:nth-child(2)').removeClass('tech-bg-4');

				$('#tech-text4').addClass('hidden');
				$('#tech-text5').removeClass('hidden');
				TechCount = 5;
			}else

			if (TechCount == 5) {
				$('.sections:nth-child(2)').addClass('tech-bg-6');
				$('.sections:nth-child(2)').removeClass('tech-bg-5');

				$('#tech-text5').addClass('hidden');
				$('#tech-text6').removeClass('hidden');
				TechCount = 6;
			}else

			if (TechCount == 6) {
				$('.sections:nth-child(2)').removeClass('tech-bg-6');

				$('#tech-text6').addClass('hidden');
				$('#tech-text1').removeClass('hidden');
				TechCount = 1;
			};
		});




		$('#back-tech').click(function(event) {
			if (TechCount == 1) {
				$('.sections:nth-child(2)').addClass('tech-bg-6');

				$('#tech-text1').addClass('hidden');
				$('#tech-text6').removeClass('hidden');
				TechCount = 6;
			}else

			if (TechCount == 2) {
				$('.sections:nth-child(2)').addClass('tech-bg-1');
				$('.sections:nth-child(2)').removeClass('tech-bg-2');

				$('#tech-text2').addClass('hidden');
				$('#tech-text1').removeClass('hidden');
				TechCount = 1;
			}else

			if (TechCount == 3) {
				$('.sections:nth-child(2)').addClass('tech-bg-2');
				$('.sections:nth-child(2)').removeClass('tech-bg-3');

				$('#tech-text3').addClass('hidden');
				$('#tech-text2').removeClass('hidden');
				TechCount = 2;
			}else

			if (TechCount == 4) {
				$('.sections:nth-child(2)').addClass('tech-bg-3');
				$('.sections:nth-child(2)').removeClass('tech-bg-4');

				$('#tech-text4').addClass('hidden');
				$('#tech-text3').removeClass('hidden');
				TechCount = 3;
			}else

			if (TechCount == 5) {
				$('.sections:nth-child(2)').addClass('tech-bg-4');
				$('.sections:nth-child(2)').removeClass('tech-bg-5');

				$('#tech-text5').addClass('hidden');
				$('#tech-text4').removeClass('hidden');
				TechCount = 4;
			}else

			if (TechCount == 6) {
				$('.sections:nth-child(2)').addClass('tech-bg-5');
				$('.sections:nth-child(2)').removeClass('tech-bg-6');

				$('#tech-text6').addClass('hidden');
				$('#tech-text5').removeClass('hidden');
				TechCount = 5;
			};
		});
	// END CHANGE TECH FOTO





	// CHANGE CAMPOS FOTO
		$('#change-campos').click(function(event) {
			
			$('.sections:nth-child(2)').addClass('campo-bg-2');

			$('#campos-intro').addClass('hidden');
			$('#campos-info').removeClass('hidden');
				
			
		});

		$('#return-campos').click(function(event) {
			
			$('.sections:nth-child(2)').removeClass('campo-bg-2');

			$('#campos-intro').removeClass('hidden');
			$('#campos-info').addClass('hidden');
				
			
		});
	// END CHANGE CAMPOS FOTO

	
	// CHANGE CAMPOS DATA

		$('#dot-1').click(function(event) {
			$('#map-1').removeClass('hidden');
			$('#map-2').addClass('hidden');
			$('#map-3').addClass('hidden');

			$('#name-1').removeClass('hidden');
			$('#name-2').addClass('hidden');
			$('#name-3').addClass('hidden');

			$('#data-1').removeClass('hidden');
			$('#data-2').addClass('hidden');
			$('#data-3').addClass('hidden');

		});

		$('#dot-2').click(function(event) {
			$('#map-2').removeClass('hidden');
			$('#map-1').addClass('hidden');
			$('#map-3').addClass('hidden');

			$('#name-2').removeClass('hidden');
			$('#name-1').addClass('hidden');
			$('#name-3').addClass('hidden');

			$('#data-2').removeClass('hidden');
			$('#data-1').addClass('hidden');
			$('#data-3').addClass('hidden');

		});

		$('#dot-3').click(function(event) {
			$('#map-3').removeClass('hidden');
			$('#map-2').addClass('hidden');
			$('#map-1').addClass('hidden');

			$('#name-3').removeClass('hidden');
			$('#name-2').addClass('hidden');
			$('#name-1').addClass('hidden');

			$('#data-3').removeClass('hidden');
			$('#data-2').addClass('hidden');
			$('#data-1').addClass('hidden');

		});
	// END CHANGE CAMPOS DATA


	//CHANGE CAMPOS MOBILE DATA

		var currentCampo = 1;

		$('#go-back-state').click(function(){
			if (currentCampo == 1) {
				$('#name-1').addClass('hidden');
				$('#name-3').removeClass('hidden');

				$('#data-1').addClass('hidden');
				$('#data-3').removeClass('hidden');

				$('#section2').addClass('campo-bg-4');
				$('#section2').removeClass('campo-bg-2');
				currentCampo = 3;

			} else if (currentCampo == 2) {
				$('#name-2').addClass('hidden');
				$('#name-1').removeClass('hidden');

				$('#data-2').addClass('hidden');
				$('#data-1').removeClass('hidden');

				$('#section2').addClass('campo-bg-2');
				$('#section2').removeClass('campo-bg-3');
				currentCampo = 1;

			} else if (currentCampo == 3) {
				$('#name-3').addClass('hidden');
				$('#name-2').removeClass('hidden');

				$('#data-3').addClass('hidden');
				$('#data-2').removeClass('hidden');

				$('#section2').addClass('campo-bg-3');
				$('#section2').removeClass('campo-bg-4');
				currentCampo = 2;

			};
		});

		$('#go-next-state').click(function(){
			if (currentCampo == 1) {
				$('#name-1').addClass('hidden');
				$('#name-2').removeClass('hidden');

				$('#data-1').addClass('hidden');
				$('#data-2').removeClass('hidden');

				$('#section2').addClass('campo-bg-3');
				$('#section2').removeClass('campo-bg-2');
				currentCampo = 2;

			} else if (currentCampo == 2) {
				$('#name-2').addClass('hidden');
				$('#name-3').removeClass('hidden');

				$('#data-2').addClass('hidden');
				$('#data-3').removeClass('hidden');

				$('#section2').addClass('campo-bg-4');
				$('#section2').removeClass('campo-bg-3');
				currentCampo = 3;

			} else if (currentCampo == 3) {
				$('#name-3').addClass('hidden');
				$('#name-1').removeClass('hidden');

				$('#data-3').addClass('hidden');
				$('#data-1').removeClass('hidden');

				$('#section2').addClass('campo-bg-2');
				$('#section2').removeClass('campo-bg-4');
				currentCampo = 1;

			};
		});

		$('#return-campos').click(function(event){
			$('#section2').removeClass('campo-bg-2');
			$('#section2').removeClass('campo-bg-3');
			$('#section2').removeClass('campo-bg-4');
		});
	// END CHANGE CAMPOS MOBILE DATA







	// CHANGE PRODUCTS
		var ProductCount = 1;

		$('#next-product').click(function(event) {
			if (ProductCount == 1) {

				$('#product-1').addClass('hidden');
				$('#product-2').removeClass('hidden');

				$('#product-1-photo').addClass('hidden');
				$('#product-2-photo').removeClass('hidden');
				
				ProductCount = 2;
			}else

			if (ProductCount == 2) {

				$('#product-2').addClass('hidden');
				$('#product-3').removeClass('hidden');

				$('#product-2-photo').addClass('hidden');
				$('#product-3-photo').removeClass('hidden');

				$('#pagewrapper').addClass('showTequilas');
				$('#shortcuts').addClass('showTequilas');
				$('#section3').removeClass('onlyTequila')

				ProductCount = 3;
			}else

			if (ProductCount == 3) {

				$('#product-3').addClass('hidden');
				$('#product-1').removeClass('hidden');

				$('#product-3-photo').addClass('hidden');
				$('#product-1-photo').removeClass('hidden');

				$('#pagewrapper').removeClass('showTequilas');
				$('#shortcuts').removeClass('showTequilas');
				$('#section3').addClass('onlyTequila')

				ProductCount = 1;
			}
		});




		$('#back-product').click(function(event) {
			if (ProductCount == 1) {

				$('#product-1').addClass('hidden');
				$('#product-3').removeClass('hidden');

				$('#product-1-photo').addClass('hidden');
				$('#product-3-photo').removeClass('hidden');

				$('#pagewrapper').addClass('showTequilas');
				$('#shortcuts').addClass('showTequilas');
				$('#section3').removeClass('onlyTequila')
				
				ProductCount = 3;
			}else

			if (ProductCount == 2) {

				$('#product-2').addClass('hidden');
				$('#product-1').removeClass('hidden');

				$('#product-2-photo').addClass('hidden');
				$('#product-1-photo').removeClass('hidden');

				ProductCount = 1;
			}else

			if (ProductCount == 3) {

				$('#product-3').addClass('hidden');
				$('#product-2').removeClass('hidden');

				$('#product-3-photo').addClass('hidden');
				$('#product-2-photo').removeClass('hidden');

				$('#pagewrapper').removeClass('showTequilas');
				$('#shortcuts').removeClass('showTequilas');
				$('#section3').addClass('onlyTequila')

				ProductCount = 2;
			}
		});
	// END CHANGE PRODUCTS


	// CHANGE BRANDS
		var BrandCount = 1;

		$('#next-brand').click(function(event) {
			if (BrandCount == 1) {

				$('#brand-1').addClass('hidden');
				$('#brand-2').removeClass('hidden');

				$('#brand-1-photo').addClass('hidden');
				$('#brand-2-photo').removeClass('hidden');
				
				BrandCount = 2;
			}else

			if (BrandCount == 2) {

				$('#brand-2').addClass('hidden');
				$('#brand-3').removeClass('hidden');

				$('#brand-2-photo').addClass('hidden');
				$('#brand-3-photo').removeClass('hidden');

				BrandCount = 3;
			}else

			if (BrandCount == 3) {

				$('#brand-3').addClass('hidden');
				$('#brand-4').removeClass('hidden');

				$('#brand-3-photo').addClass('hidden');
				$('#brand-4-photo').removeClass('hidden');

				BrandCount = 4;
			} else

			if (BrandCount == 4) {

				$('#brand-4').addClass('hidden');
				$('#brand-1').removeClass('hidden');

				$('#brand-4-photo').addClass('hidden');
				$('#brand-1-photo').removeClass('hidden');

				BrandCount = 1;
			}
		});




		$('#back-brand').click(function(event) {
			if (BrandCount == 1) {

				$('#brand-1').addClass('hidden');
				$('#brand-4').removeClass('hidden');

				$('#brand-1-photo').addClass('hidden');
				$('#brand-4-photo').removeClass('hidden');
				
				BrandCount = 4;
			}else

			if (BrandCount == 2) {

				$('#brand-2').addClass('hidden');
				$('#brand-1').removeClass('hidden');

				$('#brand-2-photo').addClass('hidden');
				$('#brand-1-photo').removeClass('hidden');

				BrandCount = 1;
			}else

			if (BrandCount == 3) {

				$('#brand-3').addClass('hidden');
				$('#brand-2').removeClass('hidden');

				$('#brand-3-photo').addClass('hidden');
				$('#brand-2-photo').removeClass('hidden');
				
				BrandCount = 2;
			}else

			if (BrandCount == 4) {

				$('#brand-4').addClass('hidden');
				$('#brand-3').removeClass('hidden');

				$('#brand-4-photo').addClass('hidden');
				$('#brand-3-photo').removeClass('hidden');

				BrandCount = 3;
			}
		});
	// END CHANGE BRANDS







	// CERTIFICATION LIGHTBOXES
		$('#open-certification1').click(function(event) {
			$('#lightboxes').removeClass('hidden');
			$('#certification1').removeClass('hidden');
		});

		$('#close-certification1').click(function(event) {
			$('#certification1').addClass('hidden');
			$('#lightboxes').addClass('hidden');
		});


		$('#open-certification2').click(function(event) {
			$('#lightboxes').removeClass('hidden');
			$('#certification2').removeClass('hidden');
		});

		$('#close-certification2').click(function(event) {
			$('#certification2').addClass('hidden');
			$('#lightboxes').addClass('hidden');
		});


		$('#open-certification3').click(function(event) {
			$('#lightboxes').removeClass('hidden');
			$('#certification3').removeClass('hidden');
		});

		$('#close-certification3').click(function(event) {
			$('#certification3').addClass('hidden');
			$('#lightboxes').addClass('hidden');
		});


		$('#open-certification4').click(function(event) {
			$('#lightboxes').removeClass('hidden');
			$('#certification4').removeClass('hidden');
		});

		$('#close-certification4').click(function(event) {
			$('#certification4').addClass('hidden');
			$('#lightboxes').addClass('hidden');
		});


		$('#open-certification5').click(function(event) {
			$('#lightboxes').removeClass('hidden');
			$('#certification5').removeClass('hidden');
		});

		$('#close-certification5').click(function(event) {
			$('#certification5').addClass('hidden');
			$('#lightboxes').addClass('hidden');
		});


		$('#open-certification6').click(function(event) {
			$('#lightboxes').removeClass('hidden');
			$('#certification6').removeClass('hidden');
		});

		$('#close-certification6').click(function(event) {
			$('#certification6').addClass('hidden');
			$('#lightboxes').addClass('hidden');
		});


		$('#open-certification7').click(function(event) {
			$('#lightboxes').removeClass('hidden');
			$('#certification7').removeClass('hidden');
		});

		$('#close-certification7').click(function(event) {
			$('#certification7').addClass('hidden');
			$('#lightboxes').addClass('hidden');
		});
	// END CERTIFICATION LIGHTBOXES









	// CLICK PSEUDO LINKS INTERACTIONS

		$('#psa-head').click(function(event){
			window.location.href="home.html"
		});

		$('#vermas-calidad').click(function(event){
			window.location.href="calidad.html"
		});

		$('#vermas-produccion').click(function(event){
			window.location.href="produccion.html"
		});


		$('#vermas-product1').click(function(event){
			window.location.href="productos.html"
		});

		$('#vermas-product2').click(function(event){
			window.location.href="productos.html"
		});

		$('#vermas-product3').click(function(event){
			window.location.href="productos.html"
		});


		$('#map-link').click(function(event){
			window.open('https://www.google.com.mx/maps/place/Av+Ruben+Dar%C3%ADo+811,+Prados+Providencia,+44670+Guadalajara,+Jal./@20.6889652,-103.3852524,17z/data=!3m1!4b1!4m2!3m1!1s0x8428ae41a9cda1bb:0x51dfd954810fadaa', '_blank')
		});
	// END CLICK INTERACTIONS









	// MAIN BACKGROUND VIDEO SETUP WIDTH
		var min_w = 300; // minimum video width allowed
		var vid_w_orig;  // original video dimensions
		var vid_h_orig;

		jQuery(function() { // runs after DOM has loaded
		    
		    vid_w_orig = parseInt(jQuery('video').attr('width'));
		    vid_h_orig = parseInt(jQuery('video').attr('height'));
		    $('#debug').append("<p>DOM loaded</p>");
		    
		    jQuery(window).resize(function () { resizeToCover(); });
		    jQuery(window).trigger('resize');
		});

		function resizeToCover() {
		    
		    // set the video viewport to the window size
		    jQuery('#video-viewport').width(jQuery(window).width());
		    jQuery('#video-viewport').height(jQuery(window).height());

		    // use largest scale factor of horizontal/vertical
		    var scale_h = jQuery(window).width() / vid_w_orig;
		    var scale_v = jQuery(window).height() / vid_h_orig;
		    var scale = scale_h > scale_v ? scale_h : scale_v;

		    // don't allow scaled width < minimum video width
		    if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;};

		    // now scale the video
		    jQuery('video').width(scale * vid_w_orig);
		    jQuery('video').height(scale * vid_h_orig);
		    // and center it by scrolling the video viewport
		    jQuery('#video-viewport').scrollLeft((jQuery('video').width() - jQuery(window).width()) / 2);
		    jQuery('#video-viewport').scrollTop((jQuery('video').height() - jQuery(window).height()) / 2);
		};



		$(window).click(function() {
			setTimeout(function(){
				$("#ndrw-video").get(0).play();
			}, 1000);
		});
	// END MAIN BACKGROUND VIDEO SETUP WIDTH









	// UI ANIMATIONS
		$('body').ready(function(){
			$('#welcomeLogo').velocity({ opacity: 0}, {delay:1900});
			$('#welcomePSA').velocity({ opacity: 0}, {delay:2200});
				

			$('.preLoad').velocity({ opacity: 1}, {delay:2300});


				
		});

		setTimeout(function(){ 
			$('#welcomePSA').hide('fast');
		}, 2500);
	// END UI ANIMATIONS


});









