$(".banner").css({ height: $(window).height() - 200 + "px" });

$(window).on("resize", function () {
  $(".banner").css({ height: $(window).height() + "px" });
});

