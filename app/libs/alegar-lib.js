function bindAlegarElements() {
  $(".drop-down__item").click(function () {
    $(this).parents('.drop-down').find('.drop-down__text').html($(this).text());
    $(this).parents('.drop-down').find('.drop-down__input').html($(this).text());
    $(this).parents('.drop-down').find('.drop-down__controller').prop("checked", false);
  });
  if (!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch)) {
    $(".drop-down").hover(
      function() {
        $(this).find('.drop-down__controller').prop("checked", true);
      }, function() {
        $(this).find('.drop-down__controller').prop("checked", false);
      }
    );
  } else {
    $(".drop-down__text").click(function () {
      $(this).parents('.drop-down').find('.drop-down__controller').prop("checked", !($(this).parents('.drop-down').find('.drop-down__controller').attr("checked")));
    });
  }
}

bindAlegarElements();
