$(function () {
  var link = $(".side-navbar a.dot");

  // Move to specific section when click on menu link
  link.on("click", function (e) {
    var target = $($(this).attr("href"));
    $("html, body").animate(
      {
        scrollTop: target.offset().top - 80,
      },
      600
    );
    $(this).addClass("activeㄈ");
    e.preventDefault();
  });
});
