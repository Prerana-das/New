(function ($) {
	"use strict";

$(document).ready(function() {

	//testimonials slider
	$('.testimonials').owlCarousel({
	items:2,
	loop:true,
	dots:true,
	responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:2
			}
		}
	});


	$('.blog_post_slider').owlCarousel({
	items:1,
	loop:true,
	autoplay:true,
	autoplayTimeout:4000
	
	});

	  	// Reservation subscription Modal
      $('.join_us_btn').click(function() {
              $(".subscription_area").addClass("subscription_modal_show");
              $(".subscription_area_overlay").addClass("subscription_modal_fadeIn");
              $(".header-area").css("display","none");

          });
          $(".subscription_toggle").click(function(e) {
              e.preventDefault();
              $(".subscription_area").removeClass("subscription_modal_show");
              $(".subscription_area_overlay").removeClass("subscription_modal_fadeIn");
               $(".header-area").css("display","block");
          });


	//mobile menu
	$('.toggle-menu').on('click', function(e){
	if($("#nav").hasClass("activeNav")){
		$("#nav").removeClass("activeNav");
	}
	else{
		$("#nav").addClass("activeNav");
	}
	});

	/* DropDown */
	 $(".main-menu-list-mobile li").click(function() {
        $(this).find("ul").toggleClass("main-dropdown");
        $(".main-menu-list-mobile ul").addClass("mobile-menu");
    });


	//home 2
	// $(".profile-nav").on("click", function() {
 //        $(".profile-nav-drop").toggleClass("auth-active-show");
 //    });

 //    $(".auth-click-1").on("click", function() {
 //        $(".drp1").toggleClass("auth-active-show");
 //    });

 //    $(".auth-click-2").on("click", function() {
 //        $(".drp2").toggleClass("auth-active-show");
 //    });





    //Home 3 dropdown
 // dropdown menu
        $(".nav_list li span, .menu_list_type li p, .login-reg-list li .profile-nav").click(function(e) {
            e.preventDefault();
            var thisItem = $(this);

            $(this).toggleClass('collapsed');

            if(thisItem.parent().hasClass("sel")) {
                thisItem.parent().find(".sub-menu, .sub_menu_list, .profile-nav-drop");
                thisItem.parent(".nav_list li.sel, .menu_list_type li.sel, .login-reg-list li.sel").removeClass("sel");
            }

            else {
                thisItem.parent().find(".sub-menu, .sub_menu_list, .profile-nav-drop").css({"pointer-events": "none"});
                thisItem.parent(".nav_list li.sel, .menu_list_type li.sel, .login-reg-list li.sel").removeClass("sel");

                if(thisItem.next(".sub-menu, .sub_menu_list, .profile-nav-drop").length) {
                    thisItem.parent().addClass("sel");
                    thisItem.next(".sub-menu, .sub_menu_list, .profile-nav-drop").css({"transform": "scale(1)", "display": "block", "pointer-events": "all"});
                }
            }
        });
        $(document).mouseup(function(e){
            var body = $(".sub-menu, .sub_menu_list, .profile-nav-drop");
            if(!body.is(e.body) && body.has(e.target).length === 0){
                body.css({"transform": "scale(0.8)", "display": "none", "transition": "all 0.3s ease-in-out"});
            }
        });
        $(document).mouseup(function(e){
            var selbody = $(".nav_list li.sel ,.sub_menu_list li.sel, .login-reg-list li.sel");
            if(!selbody.is(e.selbody) && selbody.has(e.target).length === 0){
                selbody.removeClass("sel");
            }
        });





	//testimonials slider
	$('.property_images').owlCarousel({
	items:6,
	loop:true,
	dots:true,
	nav:true, 
	navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"]
	
	});

	//Dashboard tav
	  $(".tabs-select.tabs-select-2").addClass("dash-active");
      $(".dashboard-default").show().siblings().hide();
      $(".acc").on("click", function() {
          var self = $(this);
          self.addClass("dash-active").siblings().removeClass("dash-active");
          var select = self.attr("data-tabs");
          $(".tabs-det-1[data-tabs-details="+select+"]").show().siblings().hide();
      });


	//Blog comment 
	$(".leave-review-reply").hide(); 
		$(".reply_btn").on("click", function() {
		$(this).siblings(".leave-review-reply").show();
	 }); 
	 $(".cancel_btn").on("click", function()
	  { $(this).parent().parent(".leave-review-reply").hide(); 
	  return false;
	});


	 //dashboard img
	  $(".change-img").on("click", function() {
	  	$(this).siblings().click();
	  	return false;
	  });	

	});


   $(document).on('scroll', function() {
        var scrollPos = $(this).scrollTop();

        if( scrollPos > 10 ) {
            $('.header-area').addClass('navbar-home');
        }

        else {
            $('.header-area').removeClass('navbar-home');
        }
    });

   

}(jQuery));