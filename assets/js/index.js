$(".banner").css({ height: $(window).height() - 100 + "px" });

$(window).on("resize", function () {
  $(".banner").css({ height: $(window).height() + "px" });
});
