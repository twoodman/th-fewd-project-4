(function() {
  'use strict';
  /*****************************
  + create the three divs needed
  *****************************/
  // create overlay div element
  var $woodboxOverlay = $('<div id="woodbox__overlay"></div>');
  // create inner div element
  var $woodboxOverlayInner = $('<div id="woodbox__inner"></div>');
  // create media wrap element
  var $woodboxMediaWrap = $('<div class="woodbox__media-wrap"></div');

  /*****************************
  + creating arrows/close
  *****************************/
  // left button
  var $woodboxMediaPrev = $('<i id="woodbox__media-previous" class="fa fa-arrow-left" aria-hidden="true"></i>');
  // right button
  var $woodboxMediaNext = $('<i id="woodbox__media-next" class="fa fa-arrow-right" aria-hidden="true"></i>');
  // create close button
  var $woodboxMediaClose = $('<i id="woodbox__media-close" class="fa fa-times" aria-hidden="true"></i>');

  /*****************************
  + put together media wrap
  *****************************/
  // create title h1 element
  var $woodboxMediaTitle = $('<h1 class="woodbox__media-title"></h1>');
  // append it to media wrap
  $woodboxMediaWrap.append($woodboxMediaTitle);

  // append close to media wrap (easier to position)
  $woodboxMediaWrap.append($woodboxMediaClose);

  // create media elements
  // iframe element
  var $woodboxMediaIframe = $('<iframe scrolling="no" class="woodbox__media-video" seamless allowfullscreen frameborder="0">');
  // append it to media wrap
  $woodboxMediaWrap.append($woodboxMediaIframe);

  // img element
  var $woodboxMediaImage = $('<img class="woodbox__media-image">')
  // append it to media wrap
  $woodboxMediaWrap.append($woodboxMediaImage);

  // create caption p element
  var $woodboxMediaCaption = $('<p class="woodbox__media-caption"></p>');
  // append it to media wrap
  $woodboxMediaWrap.append($woodboxMediaCaption);

  /*****************************
  + append it all together
  *****************************/
  // append arrows to overlay inner
  // prev arrow
  $woodboxOverlayInner.append($woodboxMediaPrev);

  // next arrow
  $woodboxOverlayInner.append($woodboxMediaNext);

  // append media wrap to overlay inner
  $woodboxOverlayInner.append($woodboxMediaWrap);

  // append overlay inner to master overlay
  $woodboxOverlay.append($woodboxOverlayInner);

  // append master overlay to body
  $("body").append($woodboxOverlay);

  /*****************************
  + click gallery item event
  *****************************/
  // check for visibility of overlay
  var isVisible = $('.woodbox__overlay').is(':visible');
  // capture the click event on a list item with the class woodbox__item
  $('li.woodbox__item').click(function(event) {
    event.preventDefault();
    // get media link
    var $mediaLink = $(this).find('a').attr('href');
    // get title
    var $mediaTitle = $(this).find('img').attr('title');
    // set title text
    $woodboxMediaTitle.text($mediaTitle);
    // get caption
    var $mediaCaption = $(this).find('img').attr('alt');
    // set caption text
    $woodboxMediaCaption.text($mediaCaption);
    // get media type
    var $mediaType = $(this).find('a').attr('class');
    console.log($mediaType);
    // clear active class from any li's
    $('li.active').removeClass('active');
    // add active class
    $(this).addClass('active');

    // checking for media type
    // hide the other type
    if ($mediaType === "woodbox__anchor-image") {
      $woodboxMediaIframe.hide();
      $woodboxMediaImage.attr('src', $mediaLink);
      $woodboxMediaImage.show();
    } else if ($mediaType === "woodbox__anchor-video") {
      $woodboxMediaImage.hide();
      $woodboxMediaIframe.attr('src', $mediaLink);
      $woodboxMediaIframe.show();
    }

    // if overlay is hidden
    if (!isVisible) {
      // fade in overlay
      $woodboxOverlay.fadeIn('slow'); // make this fade in slow !!!!!!!!!!!!
    }
  });

  /*****************************
  + arrow click functions
  *****************************/
  // get previous gallery item
  $woodboxMediaPrev.on('click', function() {
    moveItems(-1);
  });
  // if no previous gallery item remove arrow

  // get next gallery item
  $woodboxMediaNext.on('click', function() {
    moveItems(1);
  });

  // moving between previous and next items
  function moveItems(dir) {
    // if dir is left
    if (dir == -1) {
      $('li.active').prev('.woodbox__item').find('a').trigger('click');
    // else if dir is right
    } else if (dir == 1) {
      $('li.active').next('.woodbox__item').find('a').trigger('click');
    }
  }

  /*****************************
  + click overlay (close) events
  *****************************/
  // when overlay is clicked
  $woodboxOverlay.on('click', function(e) {
    if (e.target.id === 'woodbox__overlay' ||
        e.target.id === 'woodbox__inner' ||
        e.target.id === 'woodbox__media-close') {
      // remove active class
      $('li.active').removeClass('active');
      // fade out overlay
      $(this).fadeOut('slow');
    }
  });

// end function
}());