(function() {
  'use strict';
  /*****************************
  + keycode vars
  *****************************/
  var $escKey = 27;
  var $leftKey = 37;
  var $rightKey = 39;
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
    // fade in overlay
    $woodboxOverlay.fadeIn('slow');
  });

  /*****************************
  + arrow click functions
  *****************************/
  // prev item func
  function previousItem() {
    moveItems(-1);
  }
  // next item func
  function nextItem() {
    moveItems(1);
  }
  // get previous gallery item
  // click movement
  $woodboxMediaPrev.on('click', function() {
    previousItem();
  });
  // key movement
  $(document).keydown(function(e) {
    if (e.keyCode === $leftKey) {
      previousItem();
    }
  });
  // get next gallery item
  // click movement
  $woodboxMediaNext.on('click', function() {
    moveItems(1);
  });
  // key movement
  $(document).keydown(function(e) {
    if (e.keyCode === $rightKey) {
      nextItem();
    }
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
  + overlay close events
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
  $(document).keydown(function(e) {
    if (e.keyCode === $escKey) {
      $('li.active').removeClass('active');
      $woodboxOverlay.fadeOut('slow');
    }
  });


  /*****************************
  + search functionality
  *****************************/
  // for each li inside #woodbox
  $('#woodbox li').each(function() {
    // get the child img's alt attr
    var $altGet = $(this).find('img').attr('alt');
    // and set it in li as a lowercase data-attr
    $(this).attr('data-search', $altGet.toLowerCase());
  });

  // on keyup
  $('#search-bar').on('keyup', function() {
    // store search input in variable in lowercase
    var query = $(this).val().toLowerCase();
    $('#woodbox li').each(function() {
      // store 'this' in var for settimeout
      var $item = $(this);
      // if the query matches any data-search string or the search(query var) value is empty
      if ($(this).filter('[data-search *= ' + query + ']').length > 0 || query.length < 1) {
        // show item and remove nonresult class
        $item.show().removeClass('nonresult');
      } else {
        // else add nonresult class (scales to 0)
        $(this).addClass('nonresult');
        // and after 300ms (time of transition) -
        // hide this(item = this, earlier in function)
        setTimeout(function() {
          // hide item
          $item.hide();
        }, 300);
      }
    });
  });

// end function
}());
