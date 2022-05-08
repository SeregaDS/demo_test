$(function() {
  $('.block').each(function(index, el) {
    setTimeout(function() {
      if ($('#load:visible').length > 0) {
        $('#load:visible').hide();
      }
      $(el).css('display', 'inline-block');
    }, 2000 + 500 * index);
  });
});