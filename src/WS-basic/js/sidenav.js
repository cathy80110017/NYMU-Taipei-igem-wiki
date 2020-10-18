$(function() {

    var link = $('#side-navbar a.dot');

    // Move to specific section when click on menu link
    link.on('click', function(e) {
      var target = $($(this).attr('href'));
      $('html, body').animate({
        scrollTop: target.offset().top - 80
      }, 600);
      $(this).addClass('active');
      e.preventDefault();
    });

});

function scrollActive(currentId) {
    $('section').removeClass('active');
    $(currentId).addClass('active');
}

$('.nav li').on('activate.bs.scrollspy', function(e) {
    console.log("activated");
    var targetId = $(e.target).find('a').attr('href');
    scrollActive(targetId);
})