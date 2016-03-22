'use strict';

jQuery(document).ready(function () {


    $(window).bind("load", function () {
        // Preloader
        $('#loading').delay(1000).fadeOut(200);

        // Smooth Page Scroll Start
        // ---------------------------------------------------------------------------------------
        $('.primary-navbar a[href^=#]').click(function (event) {
            event.preventDefault();
            var header_height = $('.header-wrap').outerHeight();
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top - header_height}, 1000);
        });

        $('.goto-register[href^=#]').click(function (event) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top - 20}, 1000);
        });
        // Smooth Page Scroll End
        // ---------------------------------------------------------------------------------------
    });

    // Smooth Page Scroll Start
    // ---------------------------------------------------------------------------------------
    $('.primary-navbar a[href^=#]').click(function (event) {
        event.preventDefault();
        var header_height = $('.header-wrap').outerHeight();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - header_height}, 1000);
    });
    // Smooth Page Scroll End
    // ---------------------------------------------------------------------------------------

    // Sticky Header
    $(window).scroll(function () {
        if (jQuery(window).scrollTop()) {
            jQuery(".header-wrap").addClass("slideDownScaleReversedIn fix").removeClass("slideDownScaleReversedOut");
        }
        else {
            jQuery(".header-wrap").addClass("slideDownScaleReversedOut").removeClass("slideDownScaleReversedIn");
            if (!(jQuery('body > section > div').hasClass('banner-wrap')))
            {
                var header_height = $('.header-wrap').outerHeight();
                jQuery('.header-wrap').offset().top - header_height;
            }
        }
    });

    if (window.matchMedia('(min-width: 768px)').matches) {
        $(".dropdown").hover(
                function () {
                    $('.dropdown-menu', this).stop(true, true).slideDown("fast");
                },
                function () {
                    $('.dropdown-menu', this).stop(true, true).slideUp("fast");
                }
        );
    }
    // ---------------------------------------------------------------------------------------
    // Scroll To Top Start

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.to-top').fadeIn();
        } else {
            $('.to-top').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    //Scroll To Top End
    // ---------------------------------------------------------------------------------------


    // Brands Slider Start
    jQuery("#brands-carousel-slider").owlCarousel({
        autoPlay: true, //Set AutoPlay to 3 seconds
        items: 5,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [1024, 5],
        itemsTablet: [991, 5],
        itemsTabletSmall: [767, 5],
        itemsMobile: [480, 5]
    });
    jQuery(".brands-slider .next").click(function () {
        jQuery("#brands-carousel-slider").trigger('owl.next');
    });
    jQuery(".brands-slider .prev").click(function () {
        jQuery("#brands-carousel-slider").trigger('owl.prev');
    });
    // Brands Slider End
    // ---------------------------------------------------------------------------------------

    // Expo Participants Slider Start
    jQuery("#participants-carousel-slider").owlCarousel({
        autoPlay: true, //Set AutoPlay to 3 seconds
        items: 6,
        itemsDesktop: [1199, 6],
        itemsDesktopSmall: [1024, 6],
        itemsTablet: [991, 4],
        itemsTabletSmall: [767, 3],
        itemsMobile: [480, 2]
    });
    jQuery(".participants-slider .next").click(function () {
        jQuery("#participants-carousel-slider").trigger('owl.next');
    });
    jQuery(".participants-slider .prev").click(function () {
        jQuery("#participants-carousel-slider").trigger('owl.prev');
    });
    // Brands Slider End
    // ---------------------------------------------------------------------------------------


    // ---------------------------------------------------------------------------------------
    // Testimonials Slider Start
    jQuery(".testimonials-slider").owlCarousel({
        autoPlay: true, //Set AutoPlay to 3 seconds
        items: 1,
        itemsDesktop: [1199, 1],
        itemsTablet: [1024, 1],
        itemsMobile: [768, 1]
    });
    jQuery(".testimonials-wrap .next").click(function () {
        jQuery(".testimonials-slider").trigger('owl.next');
    });
    jQuery(".testimonials-wrap .prev").click(function () {
        jQuery(".testimonials-slider").trigger('owl.prev');
    });
    // Testimonials Slider End
    // ---------------------------------------------------------------------------------------


    // ---------------------------------------------------------------------------------------
    // Testimonials Slider Start
    jQuery(".owl-slider").owlCarousel({
        autoPlay: true, //Set AutoPlay to 3 seconds
        items: 1,
        itemsDesktop: [1199, 1],
        itemsTablet: [1024, 1],
        itemsMobile: [768, 1]
    });
    jQuery(".slider-links .next").click(function () {
        jQuery(".owl-slider").trigger('owl.next');
    });
    jQuery(".slider-links .prev").click(function () {
        jQuery(".owl-slider").trigger('owl.prev');
    });
    // Testimonials Slider End
    // ---------------------------------------------------------------------------------------

    // schedule-list Tabination
    $('.schedule-list').find('.jevent-title-1.toggle').click(function (e) {
        e.preventDefault();
        $(this).next().slideToggle('fast');
        $(".schedule-details").not($(this).next()).slideUp('fast');
    });


    // ---------------------------------------------------------------------------------------
    // Countdown Start
    if ($().countdown) {
        var austDay = new Date();
        austDay = new Date(2016, 3, 4);
        $('#dealCountdown1').countdown({until: austDay});
        $('#dealCountdown2').countdown({until: austDay});
        $('#dealCountdown3').countdown({until: austDay});
        $('#dealCountdown4').countdown({until: austDay});
        $('#dealCountdown5').countdown({until: austDay});
    }
    // Countdown End
    // ---------------------------------------------------------------------------------------


    // ------------------------------------------
    // FAQ Start (Carrie addition)


  //FAQ End
  // --------------------------------------------

    new WOW().init();



});


//... GOOGLE API ...
// var myMarkers = {"markers": [
//         {"latitude": "25.8404931", "longitude": "-80.2202774", "icon": "assets/img/map-locator.png", "baloon_text": 'Miami Dade College Wolfson Campus<br>300 NE 2nd Ave, Miami, FL 33132, United States'}
//     ]};
//
// $("#map").mapmarker({
//     zoom: 12,
//     center: '300 NE 2nd Ave, Miami, FL 33132, United States',
//     markers: myMarkers
// });


// --------------------- Carrie --------
