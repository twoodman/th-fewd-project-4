// wrap js in IIFE to protect global scope
(function() {

// to become javascript developer champion
'use strict';

/* get all elements with the class .media-item,
 put them in an array, and store that in a variable */
var arrGallery = document.querySelectorAll('.media-item');

// loop through the array and give each item (i) an event listener for clicks
for (var i = 0; i < arrGallery.length;i++) {
  arrGallery[i].addEventListener('click', openMedia, false);
}

// on media item click run this function
function openMedia(e) {

  // get the body element so i dont have to type out document.body
  var body = document.getElementsByTagName('body')[0];

  // prevent default action of navigating to src
  e.preventDefault();

  // get title, src, and alt attributes
  var title = this.getAttribute("title");
  var src = this.getAttribute("src");
  // store larger img src url in a variable
  var newSrc = src.replace('/images/thumbnails/', '/images/');
  var alt = this.getAttribute("alt");

  // create a lightbox div
  var lightbox = document.createElement('div');

  // give it the class 'lightbox'
  lightbox.className = 'lightbox';

  /* shove all this html in there, using the title,
  newSrc, and alt vars/attributes for content */
  lightbox.innerHTML = '<div class="lightbox-inner">' + '<h1>' + title + '</h1>' +
    '<img class="lightbox-media" src="' + newSrc + '"></img>' + '<p>' + alt + '</p>' + '</div>';

  // append the whole thing to body
  body.appendChild(lightbox);
  fadeIn(lightbox);
  lightbox.addEventListener('click', closeMedia, false);



}

/* on click of certain things, dismiss the lightbox
aka call this function. fades out lightbox */
function closeMedia() {
  // fade out
  var targetEl = event.target;
  if (targetEl.classList.contains('lightbox'))  {
    fadeOut(this);
  }
}

// fade in function
function fadeIn(element) {
  var fadeStep = 0;
  var timer = setInterval(function() {
    fadeStep++;
    element.style.opacity = 0.05 * fadeStep;
    if (fadeStep >= 20) {
      clearInterval(timer);
      timer = undefined;
    }
  }, 10);
}

// fade out function, also destroys element
function fadeOut(element) {
  var fadeStep = 20;
  var timer = setInterval(function() {
    fadeStep--;
    element.style.opacity = 0.05 * fadeStep;
    if (fadeStep <= 0.01) {
      clearInterval(timer);
      timer = undefined;
      element.remove();
    }
  }, 10);
}





}());