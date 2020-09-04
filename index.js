$(document).ready(function () {
  var t;

  var start = $("#demo").find(".active").attr("data-interval");
  t = setTimeout("$('#demo').carousel({interval: 1000});", start - 1000);

  $("#demo").on("slid.bs.carousel", function () {
    clearTimeout(t);
    var duration = $(this).find(".active").attr("data-interval");

    $("#demo").carousel("pause");
    t = setTimeout("$('#demo').carousel();", duration - 1000);
  });
});
