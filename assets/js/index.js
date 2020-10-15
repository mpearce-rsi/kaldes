$(".banner").css({ height: $(window).height() - 150 + "px" });

$(window).on("resize", function () {
  $(".banner").css({ height: $(window).height() + "px" });
});

