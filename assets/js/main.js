jQuery(document).ready(function($) {

  $('.level-bar-inner').css('width', '0');
  $(window).on('load', function() {

    $('.level-bar-inner').each(function() {
      var itemWidth = $(this).data('level');
      $(this).animate({
        width: itemWidth
      }, 800);
    });
  });
  $('a[href="Youtube-Link"]').each(function() {
    $(this).replaceWith('<iframe width="560" height="315" src="' + 
      youtube_links +
      ' " frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
  });
});
