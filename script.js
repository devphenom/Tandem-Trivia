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

// Cache selectors
var lastId,
  topMenu = $("#top-menu"),
  topMenuHeight = topMenu.outerHeight() + 15,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function (e) {
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
  $("html, body").stop().animate(
    {
      scrollTop: offsetTop,
    },
    300
  );
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function () {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop) return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent()
      .removeClass("active")
      .removeClass("border-rad")
      .end()
      .filter("[href='#" + id + "']")
      .parent()
      .addClass("active")
      .addClass("border-rad");
  }
});

var wait = (id, time) => {
  setTimeout(function () {
    var tellBtn = document.getElementById(id);
    tellBtn.classList.remove("d-none");
  }, parseInt(time));
};

wait("hello", 1000);
wait("display", 2000);
wait("tell-me-more", 2000);
