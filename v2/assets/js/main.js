(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        /* $("a").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {
                    window.location.hash = hash;
                });
            }
        }); */

        

        $(window).on('scroll',function() {
            
			if ($(window).scrollTop() >= 56) {
				$('.header-area').addClass('header-absolute');
                $('.mobile-header-area').addClass('header-absolute');
                
			}
			else {
				$('.header-area').removeClass('header-absolute');
				$('.mobile-header-area').removeClass('header-absolute');
			}
		});

        /* $('.slider').slick({
            dots: false,
            vertical: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            verticalSwiping: true,
            infinite: true,
            autoplay: false,
            arrows: true,
            prevArrow: "<div class='slick-arrow slick-prev'><i class='thin-icon thin-up-icon'></i></div>",
            nextArrow: "<div class='slick-arrow slick-next'><i class='thin-icon thin-down-icon'></i></div>"
            
        }); */

        var titleMain = $("#animatedHeading");

        if (titleMain.length) {

            titleMain.slick({
                autoplay: false,
                arrows: false,
                dots: false,
                slidesToShow: 1,
                /* centerPadding: "10px", */
                draggable: true,
                infinite: true,
                pauseOnHover: false,
                swipe: true,
                touchMove: true,
                centerMode: true,
                vertical: true,
                verticalSwiping: true,
                /* speed: 1000,
                autoplaySpeed: 3000, */
                useTransform: true,
                cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                adaptiveHeight: false,
                initialSlide: 1
            });

            // On init
            $(".slick-dupe").each(function (index, el) {
                $("#animatedHeading").slick('slickAdd', "<div>" + el.innerHTML + "</div>");
            });

            $('#animatedHeading').on('click', '.slick-slide', function (e) {
                e.stopPropagation();
                var index = $(this).data("slick-index");
                var index2 = $('#animatedHeading').slick('slickCurrentSlide');
                //alert('index: ' + index + '  index2: ' + index2);
                if ($('#animatedHeading').slick('slickCurrentSlide') !== index) {
                    $('#animatedHeading').slick('slickGoTo', index);
                }
            });
        }


        var titleMainMobile = $("#animatedHeadingMobile");

        if (titleMainMobile.length) {

            titleMainMobile.on('init', function(event, slick){
                $('.hero__title-mobile .slick-active').prev().addClass('prev');
                $('.hero__title-mobile .slick-active').next().addClass('next');
            });

            titleMainMobile.on('beforeChange', function(event, slick, currentSlide, nextSlide){
                $('.hero__title-mobile .slick-slide').removeClass('prev next');
            });

            titleMainMobile.on('afterChange', function(event, slick, currentSlide, nextSlide){
                $('.hero__title-mobile .slick-active').prev().addClass('prev');
                $('.hero__title-mobile .slick-active').next().addClass('next');
            });

            titleMainMobile.slick({
                autoplay: false,
                arrows: false,
                dots: false,
                slidesToShow: 1,
                draggable: true,
                infinite: true,
                pauseOnHover: false,
                swipe: true,
                touchMove: true,
                centerMode: true,
                useTransform: true,
                cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                adaptiveHeight: false
            });

            $(".slick-dupe-mobile").each(function (index, el) {
                $("#animatedHeadingMobile").slick('slickAdd', "<div>" + el.innerHTML + "</div>");
            });

            $('#animatedHeadingMobile').on('click', '.slick-slide', function (e) {
                e.stopPropagation();
                var index = $(this).data("slick-index");
                if ($('#animatedHeadingMobile').slick('slickCurrentSlide') !== index) {
                    $('#animatedHeadingMobile').slick('slickGoTo', index);
                }
            });
        }

        $('.certificate-carousel').slick({
            centerMode: true,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            autoplay: false,
            arrows: true,
            prevArrow: "<div class='slick-prev-testimonial'><i class='thin-icon thin-left-icon'></i></div>",
            nextArrow: "<div class='slick-next-testimonial'><i class='thin-icon thin-right-icon'></i></div>",
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    arrows: true,
                    centerMode: true,
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: true,
                    centerMode: true,
                    slidesToShow: 1
                  }
                }
              ]
            
        });

        $(".boxer").boxer();

        //hide all tabs first
        $('.product-range-area.mobile-responsive .tab-pane').hide();
        //show the first tab content
        $('#mobile-product-tab-1').show();

        $(".cusDD_opt").on('click', function () {
            var dropdown = $(this).parent().find("[selected='selected']").attr("value");

            //first hide all tabs again when a new option is selected
            $('.product-range-area.mobile-responsive .tab-pane').hide();
            $('.product-range-area.mobile-responsive .tab-pane').removeClass("active");
            //then show the tab content of whatever option value was selected
            $('#' + "mobile-product-tab-" + dropdown).show();
            $('#' + "mobile-product-tab-" + dropdown).addClass("in active");

            $(".product-tab-details.mobile-product-tab-details").removeClass("wow zoomIn animated");
            $(".product-tab-details.mobile-product-tab-details").addClass("wow zoomIn animated");
            $(".product-tab-details.mobile-product-tab-details").attr("style","visibility: visible; animation-name: zoomIn;");
        });

        

        /* $('#select1').change(function () {
            dropdown_value = $('#select1').val();
            alert(dropdown_value);
            //first hide all tabs again when a new option is selected
            $('.product-range-area.mobile-responsive .tab-pane').hide();
            //then show the tab content of whatever option value was selected
            $('#' + "mobile-product-tab-" + dropdown_value).show();

            $(".product-tab-details.mobile-product-tab-details").removeClass("wow zoomIn animated");
            $(".product-tab-details.mobile-product-tab-details").addClass("wow zoomIn animated");
            $(".product-tab-details.mobile-product-tab-details").attr("style","visibility: visible; animation-name: zoomIn;");
        }); */

        /*owl carousel active*/
       

        /* $(".certificate-carousel").owlCarousel({
            loop: true,
            autoplay: false,
            lazyLoad: true,
            dots: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            center: true,
            nav: true,
            navText: ["<i class='thin-icon thin-left-icon'></i>", "<i class='thin-icon thin-right-icon'></i>"],
            responsiveClass: true,
            responsive: {
                0: {
                    center: false,
                    margin: 20,
                    items: 1
                },
                480: {
                    center: false,
                    margin: 40,
                    items: 1
                },
                600: {
                    center: false,
                    margin: 30,
                    items: 2
                },
                768: {

                    margin: 40,
                    items: 3
                },
                992: {

                    margin: 50,
                    items: 3
                },
                1200: {

                    margin: 60,
                    items: 3
                }
            }
        }); */





        


      

        $(".menu-trigger").on("click", function () {
            $(".off-canvas-menu,.off-canvas-overlay").removeClass("active");
            $(".off-canvas-menu,.off-canvas-overlay").addClass("active");
        });

        $(".menu-close").on("click", function () {
            $(".off-canvas-menu,.off-canvas-overlay").removeClass("active");
        });

        $(".off-canvas-overlay").on("click", function () {
            $(".off-canvas-menu,.off-canvas-overlay").removeClass("active");
        });
        

        

        
        
        

        


        //Map Intgration
        var latitude = parseFloat($("#googleMap3").attr("latitude"));
        var longitude = parseFloat($("#googleMap3").attr("longitude"));

        var centerPosition = {
            lat: latitude,
            lng: longitude
        };
        $('#googleMap3')
        .gmap3({
            address: 'Clermont-Ferrand, France',
            zoom: -1,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeId: "shadeOfBlue", // to select it directly
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfBlue"]
            }
        })
        .styledmaptype(
            "shadeOfBlue",
            [
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e9e9e9"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                
                
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#333333"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
               
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#cf2a30"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                
            ],
            {name: "Shades of Blue"}
         )
        .marker({
            position: centerPosition
        })
        // previous created one marker
        .then(function (marker) {
            marker.setIcon('http://maps.google.com/mapfiles/ms/micons/red-dot.png');
        })
        .marker([
            { position: [35.3263017, 79.9234792] },
            { position: [37.9238327, 37.1425907] },
            { position: [24.7882519,74.2316234] },
            { position: [39.2139716,76.7002006] },
            { position: [56.6584954,153.2098973] },
            { position: [44.67616,168.9713541] }
        ])
        // previous created multiple markers
        .then(function (markers) {
            markers.forEach(function (marker) {
                marker.setIcon('http://maps.google.com/mapfiles/ms/micons/blue.png');
            })
        })
        .fit();

        

        new WOW().init();


        $(".product-tab ul li a").on("click", function () {
            $(".corner-area.text-right .corner-area-text h4").removeClass("wow slideInLeft animated");
            $(".corner-area.text-right .corner-area-text h4").addClass("wow slideInLeft animated");
            $(".corner-area.text-right .corner-area-text h4").attr("style","visibility: visible; animation-name: slideInLeft;");

            $(".corner-area.text-right .corner-image.right").removeClass("wow slideInLeft animated");
            $(".corner-area.text-right .corner-image.right").addClass("wow slideInLeft animated");
            $(".corner-area.text-right .corner-image.right").attr("style","visibility: visible; animation-name: slideInLeft;");


            $(".corner-area.text-left .corner-area-text h4").removeClass("wow slideInRight animated");
            $(".corner-area.text-left .corner-area-text h4").addClass("wow slideInRight animated");
            $(".corner-area.text-left .corner-area-text h4").attr("style","visibility: visible; animation-name: slideInRight;");

            $(".corner-area.text-left .corner-image.left").removeClass("wow slideInRight animated");
            $(".corner-area.text-left .corner-image.left").addClass("wow slideInRight animated");
            $(".corner-area.text-left .corner-image.left").attr("style","visibility: visible; animation-name: slideInRight;");

            $(".center-image").removeClass("wow zoomIn animated");
            $(".center-image").addClass("wow zoomIn animated");
            $(".center-image").attr("style","visibility: visible; animation-name: zoomIn;");

            $(".product-tab-details.mobile-product-tab-details").removeClass("wow zoomIn animated");
            $(".product-tab-details.mobile-product-tab-details").addClass("wow zoomIn animated");
            $(".product-tab-details.mobile-product-tab-details").attr("style","visibility: visible; animation-name: zoomIn;");

        });





    });


    jQuery(window).load(function () {

    });


}(jQuery));