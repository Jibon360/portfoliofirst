$(document).ready(function(){



    var scroll = new SmoothScroll('a[href*="#"]', {
		speed: 800,
		speedAsDuration: true
	});

    // LOADER
    $(window).on("load",function(){
        $(".loader").fadeOut(1000);

    });

        // collapse
    $(document).on("click", ".navbar-collapse.show", function (e) {
        $(e.target).is("a") && $(this).collapse("hide")
    }),    // 


    
    $(window).on('scroll', function(){
        var scroll=$(window).scrollTop();
        if(scroll>=50){
            $("nav").addClass("stickyadd")

        }
        else{
            $("nav").removeClass("stickyadd")


        }

    });

    var typed = new Typed('.element', {
        // Waits 1000ms after typing "First"
        strings: ['Mehedi Hassan Jibon', 'A Web Designer.','A Web Developer'],

        typeSpeed: 30,
        loop:true,


      });



      $(".owl-carousel").owlCarousel({
          loop:true,
          autoplay:true,
          autoplayTimeout:4000,
          items:1,
        
      });

      var mixer = mixitup(".filter-pic");

      $(document).ready(function() {
 
        // Fakes the loading setting a timeout
          setTimeout(function() {
              $('body').addClass('loaded');
          }, 3500);
       
      });



    //   SCROLLUP JS
    // $.scrollUp({
    //     scrollName: 'scrollUp', // Element ID
    //     topDistance: '300', // Distance from top before showing element (px)
    //     topSpeed: 300, // Speed back to top (ms)
    //     animation: 'fade', // Fade, slide, none
    //     animationInSpeed: 200, // Animation in speed (ms)
    //     animationOutSpeed: 200, // Animation out speed (ms)
    //     scrollText: '<i class="fas fa-chevron-up"></i>', // Text for element
    //     activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    //   });

    // $(window).scroll(function(){

    //     var ourwindow =$(window).scrollTop();

    //     if(ourwindow<100){
    //         $("#scrollUp").hide();

    //     }
    //     else{

    //         $("#scrollUp").show();

    //     }

    // });

    $(window).on("scroll",function(){
        var top=$(window).scrollTop();
        if(top>100){
            $('#scrollUp').fadeIn();

        }
        else{
            $('#scrollUp').fadeOut();


        }

    });

});