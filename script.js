// navbar color change
jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop(),
      navbar = $(".navbar");

    if (scrollPos > 50) {
      navbar.removeClass("bg-transparent");
      navbar.addClass("bg-black");
    } else {
      navbar.addClass("bg-transparent");
      navbar.removeClass("bg-black");
    }
  });
});

submitBtn.onclick = () => {
  errorMsg.classList.remove("d-none");
};
