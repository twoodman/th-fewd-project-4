// $.fn.woodbox = function() {
  (function() {

      /*****************************
      + create the three divs needed
      *****************************/
      // create overlay div element
      var $woodboxOverlay = $('<div id="woodbox__overlay"></div>');
      // create inner div element
      var $woodboxOverlayInner = $('<div class="woodbox__inner"></div>');
      // create media wrap element
      var $woodboxMediaWrap = $('<div class="woodbox__media-wrap"></div');

      /*****************************
      + put together media wrap
      *****************************/
      // create title p element
      var $woodboxMediaTitle = $('<h1 class="woodbox__media-title"></h1>');
      // append it to media wrap
      $woodboxMediaWrap.append($woodboxMediaTitle);

      // create media element
      var $woodboxMedia = $('<img class="woodbox__media">'); // change this to iframe !!!!!!!!!!!!!
      // append it to media wrap
      $woodboxMediaWrap.append($woodboxMedia);

      // create caption p element
      var $woodboxMediaCaption = $('<p class="woodbox__media-caption"></p>');
      // append it to media wrap
      $woodboxMediaWrap.append($woodboxMediaCaption);

      // make left/right buttons and append
      // left button
      var $woodboxMediaLeft = $('<')
      // get previous gallery item
      $('.woodbox__media-previous').click(function(event) {
        event.preventDefault();

      })
      // if no previous gallery item remove arrow


      /*****************************
      + append it all together
      *****************************/
      // append media wrap to overlay inner
      $woodboxOverlayInner.append($woodboxMediaWrap);
      // append overlay inner to master overlay
      $woodboxOverlay.append($woodboxOverlayInner);
      // append master overlay to body
      $("body").append($woodboxOverlay);

      /*****************************
      + click event
      *****************************/
      // capture the click event on an anchor with class .woodbox__anchor
      $('.woodbox__anchor').click(function(event) {
        event.preventDefault();
        var mediaLink = $(this).attr('href');
        // update overlay with src linked in anchor
        $woodboxMedia.attr('src', mediaLink);

        // show overlay
        $woodboxOverlay.show(); // make this fade in slow !!!!!!!!!!!!

        // get childs (thumbnail) title attr
        var title = $(this).children(".woodbox__media").attr('title');
        // set it
        $woodboxMediaTitle.text(title);
        // get childs (thumbnail) alt attr
        var caption = $(this).children(".woodbox__media").attr('alt');
        // set it
        $woodboxMediaCaption.text(caption);

      });


      // when overlay is clicked
      $woodboxOverlay.click(function() {
        // hide overlay
        $woodboxOverlay.hide(); // make this fade out slow !!!!!!!!!!!!!!!!!!!!
      });





  }());
// } // end of plugin function


