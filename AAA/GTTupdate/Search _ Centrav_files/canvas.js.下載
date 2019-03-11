var $ = jQuery.noConflict();

var SEMICOLON = SEMICOLON || {};

var isStickyMenu = false;

(function($){
	// USE STRICT
	"use strict";

	SEMICOLON.initialize = {

		init: function(){
			SEMICOLON.initialize.imagePreload( '.portfolio-item:not(:has(.fslider)) img' );
			SEMICOLON.initialize.goToTop();
			SEMICOLON.initialize.verticalMiddle();
			SEMICOLON.initialize.pageTransition();
			$('.fslider').addClass('preloader2');
		},

		imagePreload: function(selector, parameters){
			var params = {
				delay: 250,
				transition: 400,
				easing: 'linear'
			};
			$.extend(params, parameters);

			$(selector).each(function() {
				var image = $(this);
				image.css({visibility:'hidden', opacity: 0, display:'block'});
				image.wrap('<span class="preloader" />');
				image.one("load", function(evt) {
					$(this).delay(params.delay).css({visibility:'visible'}).animate({opacity: 1}, params.transition, params.easing, function() {
						$(this).unwrap('<span class="preloader" />');
					});
				}).each(function() {
					if(this.complete) $(this).trigger("load");
				});
			});
		},

		verticalMiddle: function(){
			if( $verticalMiddleEl.length > 0 ) {
				$verticalMiddleEl.each( function(){
					var element = $(this),
						verticalMiddleH = element.outerHeight(),
						headerHeight = $header.outerHeight();

					if( element.parents('#slider').length > 0 && !element.hasClass('ignore-header') ) {
						if( $header.hasClass('transparent-header') && ( $body.hasClass('device-lg') || $body.hasClass('device-md') ) ) {
							verticalMiddleH = verticalMiddleH - 70;
							if( $slider.next('#header').length > 0 ) { verticalMiddleH = verticalMiddleH + headerHeight; }
						}
					}

					if( $body.hasClass('device-xs') || $body.hasClass('device-xxs') ) {
						if( element.parents('.full-screen').length && !element.parents('.force-full-screen').length ){
							if( element.children('.col-padding').length > 0 ) {
								element.css({ position: 'relative', top: '0', width: 'auto', marginTop: '0' }).addClass('clearfix');
							} else {
								element.css({ position: 'relative', top: '0', width: 'auto', marginTop: '0', paddingTop: '60px', paddingBottom: '60px' }).addClass('clearfix');
							}
						} else {
							element.css({ position: 'absolute', top: '50%', width: '100%', paddingTop: '0', paddingBottom: '0', marginTop: -(verticalMiddleH/2)+'px' });
						}
					} else {
						element.css({ position: 'absolute', top: '50%', width: '100%', paddingTop: '0', paddingBottom: '0', marginTop: -(verticalMiddleH/2)+'px' });
					}
				});
			}
		},

		goToTop: function(){
			var elementScrollSpeed = $goToTopEl.attr('data-speed'),
				elementScrollEasing = $goToTopEl.attr('data-easing');

			if( !elementScrollSpeed ) { elementScrollSpeed = 700; }
			if( !elementScrollEasing ) { elementScrollEasing = 'easeOutQuad'; }

			$goToTopEl.click(function() {
				$('body,html').stop(true).animate({
					'scrollTop': 0
				}, Number( elementScrollSpeed ), elementScrollEasing );
				return false;
			});
		},

		goToTopScroll: function(){
			var elementMobile = $goToTopEl.attr('data-mobile'),
				elementOffset = $goToTopEl.attr('data-offset');

			if( !elementOffset ) { elementOffset = 450; }

			if( elementMobile != 'true' && ( $body.hasClass('device-xs') || $body.hasClass('device-xxs') ) ) { return true; }

			if( $window.scrollTop() > Number(elementOffset) ) {
				$goToTopEl.fadeIn();
			} else {
				$goToTopEl.fadeOut();
			}
		},

		maxHeight: function(){
			if( $commonHeightEl.length > 0 ) {
				if( $commonHeightEl.hasClass('customjs') ) { return true; }
				$commonHeightEl.each( function(){
					var element = $(this);
					if( element.find('.common-height').length > 0 ) {
						SEMICOLON.initialize.commonHeight( element.find('.common-height:not(.customjs)') );
					}

					SEMICOLON.initialize.commonHeight( element );
				});
			}
		},

		commonHeight: function( element ){
			var maxHeight = 0;
			element.children('[class*=col-]').each(function() {
				var element = $(this).children();
				if( element.hasClass('max-height') ){
					maxHeight = element.outerHeight();
				} else {
					if (element.outerHeight() > maxHeight)
					maxHeight = element.outerHeight();
				}
			});

			element.children('[class*=col-]').each(function() {
				$(this).height(maxHeight);
			});
		},

		pageTransition: function(){
			if( $body.hasClass('no-transition') ) { return true; }

			if( !$().animsition ) {
				$body.addClass('no-transition');
				console.log('pageTransition: Animsition not Defined.');
				return true;
			}

			window.onpageshow = function(event) {
				if(event.persisted) {
					window.location.reload();
				}
			};

			var animationIn = $body.attr('data-animation-in'),
				animationOut = $body.attr('data-animation-out'),
				durationIn = $body.attr('data-speed-in'),
				durationOut = $body.attr('data-speed-out'),
				loaderTimeOut = $body.attr('data-loader-timeout'),
				loaderStyle = $body.attr('data-loader'),
				loaderColor = $body.attr('data-loader-color'),
				loaderStyleHtml = $body.attr('data-loader-html'),
				loaderBgStyle = '',
				loaderBorderStyle = '',
				loaderBgClass = '',
				loaderBorderClass = '',
				loaderBgClass2 = '',
				loaderBorderClass2 = '';

			if( !animationIn ) { animationIn = 'fadeIn'; }
			if( !animationOut ) { animationOut = 'fadeOut'; }
			if( !durationIn ) { durationIn = 1500; }
			if( !durationOut ) { durationOut = 800; }
			if( !loaderStyleHtml ) { loaderStyleHtml = '<div class="css3-spinner-bounce1"></div><div class="css3-spinner-bounce2"></div><div class="css3-spinner-bounce3"></div>'; }

			if( !loaderTimeOut ) {
				loaderTimeOut = false;
			} else {
				loaderTimeOut = Number(loaderTimeOut);
			}

			if( loaderColor ) {
				if( loaderColor == 'theme' ) {
					loaderBgClass = ' bgcolor';
					loaderBorderClass = ' border-color';
					loaderBgClass2 = ' class="bgcolor"';
					loaderBorderClass2 = ' class="border-color"';
				} else {
					loaderBgStyle = ' style="background-color:'+ loaderColor +';"';
					loaderBorderStyle = ' style="border-color:'+ loaderColor +';"';
				}
				loaderStyleHtml = '<div class="css3-spinner-bounce1'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-bounce2'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-bounce3'+ loaderBgClass +'"'+ loaderBgStyle +'></div>'
			}

			if( loaderStyle == '2' ) {
				loaderStyleHtml = '<div class="css3-spinner-flipper'+ loaderBgClass +'"'+ loaderBgStyle +'></div>';
			} else if( loaderStyle == '3' ) {
				loaderStyleHtml = '<div class="css3-spinner-double-bounce1'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-double-bounce2'+ loaderBgClass +'"'+ loaderBgStyle +'></div>';
			} else if( loaderStyle == '4' ) {
				loaderStyleHtml = '<div class="css3-spinner-rect1'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-rect2'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-rect3'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-rect4'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-rect5'+ loaderBgClass +'"'+ loaderBgStyle +'></div>';
			} else if( loaderStyle == '5' ) {
				loaderStyleHtml = '<div class="css3-spinner-cube1'+ loaderBgClass +'"'+ loaderBgStyle +'></div><div class="css3-spinner-cube2'+ loaderBgClass +'"'+ loaderBgStyle +'></div>';
			} else if( loaderStyle == '6' ) {
				loaderStyleHtml = '<div class="css3-spinner-scaler'+ loaderBgClass +'"'+ loaderBgStyle +'></div>';
			} else if( loaderStyle == '7' ) {
				loaderStyleHtml = '<div class="css3-spinner-grid-pulse"><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div></div>';
			} else if( loaderStyle == '8' ) {
				loaderStyleHtml = '<div class="css3-spinner-clip-rotate"><div'+ loaderBorderClass2 + loaderBorderStyle +'></div></div>';
			} else if( loaderStyle == '9' ) {
				loaderStyleHtml = '<div class="css3-spinner-ball-rotate"><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div></div>';
			} else if( loaderStyle == '10' ) {
				loaderStyleHtml = '<div class="css3-spinner-zig-zag"><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div></div>';
			} else if( loaderStyle == '11' ) {
				loaderStyleHtml = '<div class="css3-spinner-triangle-path"><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div></div>';
			} else if( loaderStyle == '12' ) {
				loaderStyleHtml = '<div class="css3-spinner-ball-scale-multiple"><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div></div>';
			} else if( loaderStyle == '13' ) {
				loaderStyleHtml = '<div class="css3-spinner-ball-pulse-sync"><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div><div'+ loaderBgClass2 + loaderBgStyle +'></div></div>';
			} else if( loaderStyle == '14' ) {
				loaderStyleHtml = '<div class="css3-spinner-scale-ripple"><div'+ loaderBorderClass2 + loaderBorderStyle +'></div><div'+ loaderBorderClass2 + loaderBorderStyle +'></div><div'+ loaderBorderClass2 + loaderBorderStyle +'></div></div>';
			}

			$wrapper.animsition({
				inClass : animationIn,
				outClass : animationOut,
				inDuration : Number(durationIn),
				outDuration : Number(durationOut),
				linkElement : '#primary-menu ul li a:not([target="_blank"]):not([href*=#]):not([data-lightbox])',
				loading : true,
				loadingParentElement : 'body',
				loadingClass : 'css3-spinner',
				loadingHtml : loaderStyleHtml,
				unSupportCss : [
								 'animation-duration',
								 '-webkit-animation-duration',
								 '-o-animation-duration'
							   ],
				overlay : false,
				overlayClass : 'animsition-overlay-slide',
				overlayParentElement : 'body',
				timeOut: loaderTimeOut
			});
		}
	};

    SEMICOLON.header = {

        init: function(){

            SEMICOLON.header.superfish();
            SEMICOLON.header.menufunctions();
            SEMICOLON.header.fullWidthMenu();
            SEMICOLON.header.overlayMenu();
            SEMICOLON.header.stickyMenu();
            SEMICOLON.header.stickyPageMenu();
            SEMICOLON.header.sideHeader();
            SEMICOLON.header.sidePanel();
            SEMICOLON.header.logo();

        },

        superfish: function(){

            if( $body.hasClass('device-lg') || $body.hasClass('device-md') ) {
                $('#primary-menu ul ul, #primary-menu ul .mega-menu-content').css('display', 'block');
                SEMICOLON.header.menuInvert();
                $('#primary-menu ul ul, #primary-menu ul .mega-menu-content').css('display', '');
            }

            if( !$().superfish ) {
                $body.addClass('no-superfish');
                console.log('superfish: Superfish not Defined.');
                return true;
            }

            $('body:not(.side-header) #primary-menu > ul, body:not(.side-header) #primary-menu > div > ul, .top-links > ul').superfish({
                popUpSelector: 'ul,.mega-menu-content,.top-link-section',
                delay: 250,
                speed: 350,
                animation: {opacity:'show'},
                animationOut:  {opacity:'hide'},
                cssArrows: false,
                onShow: function(){
                    var megaMenuContent = $(this);
                    if( megaMenuContent.find('.owl-carousel.customjs').length > 0 ) {
                        megaMenuContent.find('.owl-carousel').removeClass('customjs');
                        SEMICOLON.widget.carousel();
                    }

                    if( megaMenuContent.hasClass('mega-menu-content') && megaMenuContent.find('.widget').length > 0 ) {
                        if( $body.hasClass('device-lg') || $body.hasClass('device-md') ) {
                            setTimeout( function(){ SEMICOLON.initialize.commonHeight( megaMenuContent ); }, 200);
                        } else {
                            megaMenuContent.children().height('');
                        }
                    }
                }
            });

            $('body.side-header #primary-menu > ul').superfish({
                popUpSelector: 'ul',
                delay: 250,
                speed: 350,
                animation: {opacity:'show',height:'show'},
                animationOut:  {opacity:'hide',height:'hide'},
                cssArrows: false
            });

        },

        menuInvert: function() {

            $('#primary-menu .mega-menu-content, #primary-menu ul ul').each( function( index, element ){
                var $menuChildElement = $(element),
                    menuChildOffset = $menuChildElement.offset(),
                    menuChildWidth = $menuChildElement.width(),
                    menuChildLeft = menuChildOffset.left;

                if(windowWidth - (menuChildWidth + menuChildLeft) < 0) {
                    $menuChildElement.addClass('menu-pos-invert');
                }
            });

        },

        menufunctions: function(){

            $( '#primary-menu ul li:has(ul)' ).addClass('sub-menu');
            $( '.top-links ul li:has(ul) > a, #primary-menu.with-arrows > ul > li:has(ul) > a > div, #primary-menu.with-arrows > div > ul > li:has(ul) > a > div, #page-menu nav ul li:has(ul) > a > div' ).append( '<i class="icon-angle-down"></i>' );
            $( '.top-links > ul' ).addClass( 'clearfix' );

            if( $body.hasClass('device-lg') || $body.hasClass('device-md') ) {
                $('#primary-menu.sub-title > ul > li').hover(function() {
                    $(this).prev().css({ backgroundImage : 'none' });
                }, function() {
                    $(this).prev().css({ backgroundImage : 'url("img/icons/menu-divider.png")' });
                });

                $('#primary-menu.sub-title').children('ul').children('.current').prev().css({ backgroundImage : 'none' });
            }

        },

        fullWidthMenu: function(){
            if( $body.hasClass('stretched') ) {
                if( $header.find('.container-fullwidth').length > 0 ) { $('.mega-menu .mega-menu-content').css({ 'width': $wrapper.width() - 120 }); }
                if( $header.hasClass('full-header') ) { $('.mega-menu .mega-menu-content').css({ 'width': $wrapper.width() - 60 }); }
            } else {
                if( $header.find('.container-fullwidth').length > 0 ) { $('.mega-menu .mega-menu-content').css({ 'width': $wrapper.width() - 120 }); }
                if( $header.hasClass('full-header') ) { $('.mega-menu .mega-menu-content').css({ 'width': $wrapper.width() - 80 }); }
            }
        },

        overlayMenu: function(){
            if( $body.hasClass('overlay-menu') ) {
                var overlayMenuItem = $('#primary-menu').children('ul').children('li'),
                    overlayMenuItemHeight = overlayMenuItem.outerHeight(),
                    overlayMenuItemTHeight = overlayMenuItem.length * overlayMenuItemHeight,
                    firstItemOffset = ( $window.height() - overlayMenuItemTHeight ) / 2;

                $('#primary-menu').children('ul').children('li:first-child').css({ 'margin-top': firstItemOffset+'px' });
            }
        },

        stickyMenu: function( headerOffset ){
            if ($window.scrollTop() > headerOffset && !isStickyMenu) {
                if( $body.hasClass('device-lg') || $body.hasClass('device-md') ) {
                    $('body:not(.side-header) #header:not(.no-sticky)').addClass('sticky-header');
                    if( !$headerWrap.hasClass('force-not-dark') ) { $headerWrap.removeClass('not-dark'); }
                    SEMICOLON.header.stickyMenuClass();
                } else if( $body.hasClass('device-xs') || $body.hasClass('device-xxs') || $body.hasClass('device-sm') ) {
                    if( $body.hasClass('sticky-responsive-menu') ) {
                        $('#header:not(.no-sticky)').addClass('responsive-sticky-header');
                        SEMICOLON.header.stickyMenuClass();
                    }
                }
                if(document.getElementById('HeaderSmallLogo') !== null) {
                	var $headerLogo = $('#HeaderLogo');
                	var $headerSmallLogo = $('#HeaderSmallLogo');
                    $headerLogo.animate({
                        opacity: 0
                    }, 300, function() {
                        $headerLogo.addClass('hidden');
                        $headerSmallLogo.removeClass('hidden');
                        $headerSmallLogo.animate({
                            opacity: 1
                        }, 300);
                    });
				}
                isStickyMenu = true;
            } else if($window.scrollTop() <= headerOffset && isStickyMenu) {
                if(document.getElementById('HeaderSmallLogo') !== null) {
                    var $headerLogo = $('#HeaderLogo');
                    var $headerSmallLogo = $('#HeaderSmallLogo');

                    $headerSmallLogo.addClass('hidden');
                    $headerLogo.removeClass('hidden');
                    $headerLogo.animate({
                        opacity: 1
                    }, 400);
                }
                SEMICOLON.header.removeStickyness();
                isStickyMenu = false;
            }
        },

        stickyPageMenu: function( pageMenuOffset ){
            if ($window.scrollTop() > pageMenuOffset) {
                if( $body.hasClass('device-lg') || $body.hasClass('device-md') ) {
                    $('#page-menu:not(.dots-menu,.no-sticky)').addClass('sticky-page-menu');
                } else if( $body.hasClass('device-xs') || $body.hasClass('device-xxs') || $body.hasClass('device-sm') ) {
                    if( $body.hasClass('sticky-responsive-pagemenu') ) {
                        $('#page-menu:not(.dots-menu,.no-sticky)').addClass('sticky-page-menu');
                    }
                }
            } else {
                $('#page-menu:not(.dots-menu,.no-sticky)').removeClass('sticky-page-menu');
            }
        },

        removeStickyness: function(){
            if( $header.hasClass('sticky-header') ){
                $('body:not(.side-header) #header:not(.no-sticky)').removeClass('sticky-header');
                $header.removeClass().addClass(oldHeaderClasses);
                $headerWrap.removeClass().addClass(oldHeaderWrapClasses);
                if( !$headerWrap.hasClass('force-not-dark') ) { $headerWrap.removeClass('not-dark'); }
            }
            if( $header.hasClass('responsive-sticky-header') ){
                $('body.sticky-responsive-menu #header').removeClass('responsive-sticky-header');
            }
            if( ( $body.hasClass('device-xs') || $body.hasClass('device-xxs') || $body.hasClass('device-sm') ) && ( typeof responsiveMenuClasses === 'undefined' ) ) {
                $header.removeClass().addClass(oldHeaderClasses);
                $headerWrap.removeClass().addClass(oldHeaderWrapClasses);
                if( !$headerWrap.hasClass('force-not-dark') ) { $headerWrap.removeClass('not-dark'); }
            }
        },

        sideHeader: function(){
            $("#header-trigger").click(function(){
                $('body.open-header').toggleClass("side-header-open");
                return false;
            });
        },

        sidePanel: function(){
            $(".side-panel-trigger").click(function(){
                $body.toggleClass("side-panel-open");
                if( $body.hasClass('device-touch') ) {
                    $body.toggleClass("ohidden");
                }
                return false;
            });
        },

        logo: function(){
            if( ( $header.hasClass('dark') || $body.hasClass('dark') ) && !$headerWrap.hasClass('not-dark') ) {
                if( defaultDarkLogo ){ defaultLogo.find('img').attr('src', defaultDarkLogo); }
                if( retinaDarkLogo ){ retinaLogo.find('img').attr('src', retinaDarkLogo); }
            } else {
                if( defaultLogoImg ){ defaultLogo.find('img').attr('src', defaultLogoImg); }
                if( retinaLogoImg ){ retinaLogo.find('img').attr('src', retinaLogoImg); }
            }
            if( $header.hasClass('sticky-header') ) {
                if( defaultStickyLogo ){ defaultLogo.find('img').attr('src', defaultStickyLogo); }
                if( retinaStickyLogo ){ retinaLogo.find('img').attr('src', retinaStickyLogo); }
            }
            if( $body.hasClass('device-xs') || $body.hasClass('device-xxs') ) {
                if( defaultMobileLogo ){ defaultLogo.find('img').attr('src', defaultMobileLogo); }
                if( retinaMobileLogo ){ retinaLogo.find('img').attr('src', retinaMobileLogo); }
            }
        },

        stickyMenuClass: function(){
            if( stickyMenuClasses ) { var newClassesArray = stickyMenuClasses.split(/ +/); } else { var newClassesArray = ''; }
            var noOfNewClasses = newClassesArray.length;

            if( noOfNewClasses > 0 ) {
                var i = 0;
                for( i=0; i<noOfNewClasses; i++ ) {
                    if( newClassesArray[i] == 'not-dark' ) {
                        $header.removeClass('dark');
                        $headerWrap.addClass('not-dark');
                    } else if( newClassesArray[i] == 'dark' ) {
                        $headerWrap.removeClass('not-dark force-not-dark');
                        if( !$header.hasClass( newClassesArray[i] ) ) {
                            $header.addClass( newClassesArray[i] );
                        }
                    } else if( !$header.hasClass( newClassesArray[i] ) ) {
                        $header.addClass( newClassesArray[i] );
                    }
                }
            }
        },

        responsiveMenuClass: function(){
            if( $body.hasClass('device-xs') || $body.hasClass('device-xxs') || $body.hasClass('device-sm') ){
                if( responsiveMenuClasses ) { var newClassesArray = responsiveMenuClasses.split(/ +/); } else { var newClassesArray = ''; }
                var noOfNewClasses = newClassesArray.length;

                if( noOfNewClasses > 0 ) {
                    var i = 0;
                    for( i=0; i<noOfNewClasses; i++ ) {
                        if( newClassesArray[i] == 'not-dark' ) {
                            $header.removeClass('dark');
                            $headerWrap.addClass('not-dark');
                        } else if( newClassesArray[i] == 'dark' ) {
                            $headerWrap.removeClass('not-dark force-not-dark');
                            if( !$header.hasClass( newClassesArray[i] ) ) {
                                $header.addClass( newClassesArray[i] );
                            }
                        } else if( !$header.hasClass( newClassesArray[i] ) ) {
                            $header.addClass( newClassesArray[i] );
                        }
                    }
                }
                SEMICOLON.header.logo();
            }
        }

    };

	SEMICOLON.widget = {

		init: function() {
			SEMICOLON.widget.tabs();
			SEMICOLON.widget.extras();
		},

		animations: function(){

			if( !$().appear ) {
				console.log('animations: Appear not Defined.');
				return true;
			}

			var $dataAnimateEl = $('[data-animate]');
			if( $dataAnimateEl.length > 0 ){
				if( $body.hasClass('device-lg') || $body.hasClass('device-md') || $body.hasClass('device-sm') ){
					$dataAnimateEl.each(function(){
						var element = $(this),
							animationOut = element.attr('data-animate-out'),
							animationDelay = element.attr('data-delay'),
							animationDelayOut = element.attr('data-delay-out'),
							animationDelayTime = 0,
							animationDelayOutTime = 3000;

						if( element.parents('.fslider.no-thumbs-animate').length > 0 ) { return true; }

						if( animationDelay ) { animationDelayTime = Number( animationDelay ) + 500; } else { animationDelayTime = 500; }
						if( animationOut && animationDelayOut ) { animationDelayOutTime = Number( animationDelayOut ) + animationDelayTime; }

						if( !element.hasClass('animated') ) {
							element.addClass('not-animated');
							var elementAnimation = element.attr('data-animate');
							element.appear(function () {
								setTimeout(function() {
									element.removeClass('not-animated').addClass( elementAnimation + ' animated');
								}, animationDelayTime);

								if( animationOut ) {
									setTimeout( function() {
										element.removeClass( elementAnimation ).addClass( animationOut );
									}, animationDelayOutTime );
								}
							},{accX: 0, accY: -120},'easeInCubic');
						}
					});
				}
			}
		},

		loadFlexSlider: function(){

			if( !$().flexslider ) {
				console.log('loadFlexSlider: FlexSlider not Defined.');
				return true;
			}

			var $flexSliderEl = $('.fslider:not(.customjs)').find('.flexslider');
			if( $flexSliderEl.length > 0 ){
				$flexSliderEl.each(function() {
					var $flexsSlider = $(this),
						flexsAnimation = $flexsSlider.parent('.fslider').attr('data-animation'),
						flexsEasing = $flexsSlider.parent('.fslider').attr('data-easing'),
						flexsDirection = $flexsSlider.parent('.fslider').attr('data-direction'),
						flexsSlideshow = $flexsSlider.parent('.fslider').attr('data-slideshow'),
						flexsPause = $flexsSlider.parent('.fslider').attr('data-pause'),
						flexsSpeed = $flexsSlider.parent('.fslider').attr('data-speed'),
						flexsVideo = $flexsSlider.parent('.fslider').attr('data-video'),
						flexsPagi = $flexsSlider.parent('.fslider').attr('data-pagi'),
						flexsArrows = $flexsSlider.parent('.fslider').attr('data-arrows'),
						flexsThumbs = $flexsSlider.parent('.fslider').attr('data-thumbs'),
						flexsHover = $flexsSlider.parent('.fslider').attr('data-hover'),
						flexsSheight = $flexsSlider.parent('.fslider').attr('data-smooth-height'),
						flexsUseCSS = false;

					if( !flexsAnimation ) { flexsAnimation = 'slide'; }
					if( !flexsEasing || flexsEasing == 'swing' ) {
						flexsEasing = 'swing';
						flexsUseCSS = true;
					}
					if( !flexsDirection ) { flexsDirection = 'horizontal'; }
					if( !flexsSlideshow ) { flexsSlideshow = true; } else { flexsSlideshow = false; }
					if( !flexsPause ) { flexsPause = 5000; }
					if( !flexsSpeed ) { flexsSpeed = 600; }
					if( !flexsVideo ) { flexsVideo = false; }
					if( flexsSheight == 'false' ) { flexsSheight = false; } else { flexsSheight = true; }
					if( flexsDirection == 'vertical' ) { flexsSheight = false; }
					if( flexsPagi == 'false' ) { flexsPagi = false; } else { flexsPagi = true; }
					if( flexsThumbs == 'true' ) { flexsPagi = 'thumbnails'; } else { flexsPagi = flexsPagi; }
					if( flexsArrows == 'false' ) { flexsArrows = false; } else { flexsArrows = true; }
					if( flexsHover == 'false' ) { flexsHover = false; } else { flexsHover = true; }

					$flexsSlider.flexslider({
						selector: ".slider-wrap > .slide",
						animation: flexsAnimation,
						easing: flexsEasing,
						direction: flexsDirection,
						slideshow: flexsSlideshow,
						slideshowSpeed: Number(flexsPause),
						animationSpeed: Number(flexsSpeed),
						pauseOnHover: flexsHover,
						video: flexsVideo,
						controlNav: flexsPagi,
						directionNav: flexsArrows,
						smoothHeight: flexsSheight,
						useCSS: flexsUseCSS,
						start: function(slider){
							SEMICOLON.widget.animations();
							SEMICOLON.initialize.verticalMiddle();
							slider.parent().removeClass('preloader2');
							var t = setTimeout( function(){ $('.grid-container').isotope('layout'); }, 1200 );
							$('.flex-prev').html('<i class="icon-angle-left"></i>');
							$('.flex-next').html('<i class="icon-angle-right"></i>');
						},
						after: function(){
							if( $('.grid-container').hasClass('portfolio-full') ) {
								$('.grid-container.portfolio-full').isotope('layout');
							}
						}
					});
				});
			}
		},

		tabs: function(){

			if( !$().tabs ) {
				// console.log('tabs: Tabs not Defined.');
				return true;
			}

			var $tabs = $('.tabs:not(.customjs)');
			if( $tabs.length > 0 ) {
				$tabs.each( function(){
					var element = $(this),
						elementSpeed = element.attr('data-speed'),
						tabActive = element.attr('data-active');

					if( !elementSpeed ) { elementSpeed = 400; }
					if( !tabActive ) { tabActive = 0; } else { tabActive = tabActive - 1; }

					element.tabs({
						active: Number(tabActive),
						show: {
							effect: "fade",
							duration: Number(elementSpeed)
						}
					});
				});
			}
		},

		extras: function(){

			if( $().tooltip ) {
				$('[data-toggle="tooltip"]').tooltip({container: 'body'});
			} else {
				console.log('extras: Bootstrap Tooltip not defined.');
			}

			if( $().popover ) {
				$('[data-toggle=popover]').popover();
			} else {
				console.log('extras: Bootstrap Popover not defined.');
			}

			$('#primary-menu-trigger,#overlay-menu-close').click(function() {
				if( $('#primary-menu').find('ul.mobile-primary-menu').length > 0 ) {
					$( '#primary-menu > ul.mobile-primary-menu, #primary-menu > div > ul.mobile-primary-menu' ).toggleClass("show");
				} else {
					$( '#primary-menu > ul, #primary-menu > div > ul' ).toggleClass("show");
				}
				return false;
			});
			$('#page-submenu-trigger').click(function() {
				$body.toggleClass('top-search-open', false);
				$pagemenu.toggleClass("pagemenu-active");
				return false;
			});
			$pagemenu.find('nav').click(function(e){
				$body.toggleClass('top-search-open', false);
				$topCart.toggleClass('top-cart-open', false);
			});
		}

	};

	SEMICOLON.documentOnResize = {

		init: function() {
			var t = setTimeout( function(){
				SEMICOLON.initialize.verticalMiddle();
			}, 0 );

			windowWidth = $window.width();

		}

	};

	SEMICOLON.documentOnReady = {

		init: function(){
			SEMICOLON.initialize.init();
			SEMICOLON.header.init();
			SEMICOLON.widget.init();
			SEMICOLON.documentOnReady.windowscroll();
		},

		windowscroll: function(){

			var headerOffset = 0,
				headerWrapOffset = 0,
				pageMenuOffset = 0;

			if( $header.length > 0 ) { headerOffset = $header.offset().top; }
			if( $header.length > 0 ) { headerWrapOffset = $headerWrap.offset().top; }
			if( $pagemenu.length > 0 ) {
				if( $header.length > 0 && !$header.hasClass('no-sticky') ) {
					if( $header.hasClass('sticky-style-2') || $header.hasClass('sticky-style-3') ) {
						pageMenuOffset = $pagemenu.offset().top - $headerWrap.outerHeight();
					} else {
						pageMenuOffset = $pagemenu.offset().top - $header.outerHeight();
					}
				} else {
					pageMenuOffset = $pagemenu.offset().top;
				}
			}

			var headerDefinedOffset = $header.attr('data-sticky-offset');
			if( typeof headerDefinedOffset !== 'undefined' ) {
				if( headerDefinedOffset == 'full' ) {
					headerWrapOffset = $window.height();
					var headerOffsetNegative = $header.attr('data-sticky-offset-negative');
					if( typeof headerOffsetNegative !== 'undefined' ) { headerWrapOffset = headerWrapOffset - headerOffsetNegative - 1; }
				} else {
					headerWrapOffset = Number(headerDefinedOffset);
				}
			}

			SEMICOLON.header.stickyMenu( headerWrapOffset );
			SEMICOLON.header.stickyPageMenu( pageMenuOffset );

			$window.on( 'scroll', function(){

				SEMICOLON.initialize.goToTopScroll();
				$('body.open-header.close-header-on-scroll').removeClass("side-header-open");
				SEMICOLON.header.stickyMenu( headerWrapOffset );
				SEMICOLON.header.stickyPageMenu( pageMenuOffset );
				SEMICOLON.header.logo();

			});
		}

	};

	SEMICOLON.documentOnLoad = {
		init: function() {
			SEMICOLON.initialize.verticalMiddle();
			SEMICOLON.widget.loadFlexSlider();
		}
	};

	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$headerWrap = $('#header-wrap'),
		windowWidth = $window.width(),
		oldHeaderClasses = $header.attr('class'),
		oldHeaderWrapClasses = $headerWrap.attr('class'),
		stickyMenuClasses = $header.attr('data-sticky-class'),
		responsiveMenuClasses = $header.attr('data-responsive-class'),
		defaultLogo = $('#logo').find('.standard-logo'),
		retinaLogo = $('#logo').find('.retina-logo'),
		defaultLogoImg = defaultLogo.find('img').attr('src'),
		retinaLogoImg = retinaLogo.find('img').attr('src'),
		defaultDarkLogo = defaultLogo.attr('data-dark-logo'),
		retinaDarkLogo = retinaLogo.attr('data-dark-logo'),
		defaultStickyLogo = defaultLogo.attr('data-sticky-logo'),
		retinaStickyLogo = retinaLogo.attr('data-sticky-logo'),
		defaultMobileLogo = defaultLogo.attr('data-mobile-logo'),
		retinaMobileLogo = retinaLogo.attr('data-mobile-logo'),
		$pagemenu = $('#page-menu'),
		$slider = $('#slider'),
		$topCart = $('#top-cart'),
		$verticalMiddleEl = $('.vertical-middle'),
		$goToTopEl = $('#gotoTop'),
		$commonHeightEl = $('.common-height');

	$(document).ready( SEMICOLON.documentOnReady.init );
	$window.load( SEMICOLON.documentOnLoad.init );
	$window.on( 'resize', SEMICOLON.documentOnResize.init );

})(jQuery);