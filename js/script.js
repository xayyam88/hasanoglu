$(function () {
  $("#button").click(function () {
    $(".modal").addClass("open");

    if ($(".modal").hasClass("open")) {
      $(".cont").addClass("blur");
    }
  });

  $(".close").click(function () {
    $(".modal").removeClass("open");
    $(".cont").removeClass("blur");
  });

  $(".menu-button").click(function () {
    $(".header-page__nav").toggleClass("active");
  });
});
