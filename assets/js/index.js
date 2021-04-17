$(".banner").css({ height: $(window).height() - 250 + "px" });

$(window).on("resize", function () {
  $(".banner").css({ height: $(window).height() + "px" });
});

const youTubeHeight = $("#youtubedesc").height()
console.log(youTubeHeight)

$("#ytFrame").css("height", youTubeHeight)