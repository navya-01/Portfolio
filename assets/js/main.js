jQuery(document).ready(function ($) {
  if ($(".ds-experiences-section").length) {
    $(".ds-experiences-slider").slick({
      infinite: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
      prevArrow:
        "<button type='button' class='slick-prev slick-arrow'><i class='ri-arrow-left-line'></i></button>",
      nextArrow:
        "<button type='button' class='slick-next slick-arrow'><i class='ri-arrow-right-line'></i></button>",
    });
  }
});
