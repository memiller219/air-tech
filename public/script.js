$(document).ready(function() {
  /** Sticky Navigation */
  $(".js--section-services").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "2%"
    }
  );

  /* Navigation Scroll */
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  /* Animations on scroll */

  $(".js--wp-1").waypoint(
    function(direction) {
      $(".js--wp-1").addClass("animated fadeInDown ");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-2").waypoint(
    function(direction) {
      $(".js--wp-2").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-3").waypoint(
    function(direction) {
      $(".js--wp-3").addClass("animated fadeIn");
    },
    {
      offset: "70%"
    }
  );

  $(".js--wp-4").waypoint(
    function(direction) {
      $(".js--wp-4").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-5").waypoint(
    function(direction) {
      $(".js--wp-5").addClass("animated fadeInLeft");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-6").waypoint(
    function(direction) {
      $(".js--wp-6").addClass("animated fadeInUp");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-7").waypoint(
    function(direction) {
      $(".js--wp-7").addClass("animated fadeInUp");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-8").waypoint(
    function(direction) {
      $(".js--wp-8").addClass("animated fadeInUp");
    },
    {
      offset: "50%"
    }
  );
  /** Mobile Navigation  */

  $(".js--nav-icon").click(function() {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");
    nav.slideToggle(200);

    if (icon.hasClass("fas fa-bars fa-2x")) {
      icon.removeClass("fas fa-bars fa-2x");
      icon.addClass("fas fa-times fa-2x");
    } else {
      icon.removeClass("fas fa-times fa-2x");
      icon.addClass("fas fa-bars fa-2x");
    }
  });
});




