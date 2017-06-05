(function () {
  'use strict'
  /*****************************
  + keycode vars
  *****************************/
  const escKey = 27
  const leftKey = 37
  const rightKey = 39
  /*****************************
  + set attr function for multiple attributes
  *****************************/
  const SetAttributes = (elem, attr) => {
    for (let key in attr) {
      elem.setAttribute(key, attr[key])
    }
  }
  /*****************************
  + create the three divs needed
  *****************************/
  // create overlay div element
  const boxxOverlay = document.createElement('div')
  boxxOverlay.setAttribute('id', 'boxx__overlay')
  // create inner div element
  const boxxOverlayInner = document.createElement('div')
  boxxOverlayInner.setAttribute('id', 'boxx__inner')
  // create media wrap element
  const boxxMediaWrap = document.createElement('div')
  boxxMediaWrap.setAttribute('class', 'boxx__media-wrap')

  /*****************************
  + creating arrows/close
  *****************************/
  // left button
  const boxxMediaPrev = document.createElement('i')
  SetAttributes(boxxMediaPrev, {'id': 'boxx__media-previous', 'class': 'fa fa-arrow-left', 'aria-hidden': 'true'})
  // right button
  const boxxMediaNext = document.createElement('i')
  SetAttributes(boxxMediaNext, {'id': 'boxx__media-next', 'class': 'fa fa-arrow-right', 'aria-hidden': 'true'})
  // create close button
  const boxxMediaClose = document.createElement('i')
  SetAttributes(boxxMediaClose, {'id': 'boxx__media-close', 'class': 'fa fa-times', 'aria-hidden': 'true'})

  /*****************************
  + put together media wrap
  *****************************/
  // create title h1 element
  let boxxMediaTitle = document.createElement('h1')
  boxxMediaTitle.setAttribute('class', 'boxx__media-title')
  // append it to media wrap
  boxxMediaWrap.appendChild(boxxMediaTitle)
  // append close to media wrap (easier to position)
  boxxMediaWrap.appendChild(boxxMediaClose)

  // create media elements
  // iframe wrap
  let boxxIFrameWrap = document.createElement('div')
  boxxIFrameWrap.setAttribute('class', 'boxx__iframe-wrap')
  // iframe element
  let boxxMediaIFrame = document.createElement('iframe')
  SetAttributes(boxxMediaIFrame, {'scrolling': 'no', 'class': 'boxx__media-video', 'seamless': '', 'allowfullscreen': ''})
  // append it to iframe wrap
  boxxIFrameWrap.appendChild(boxxMediaIFrame)
  // append iframe wrap to media wrap
  boxxMediaWrap.appendChild(boxxIFrameWrap)

  // img element
  let boxxMediaImage = document.createElement('img')
  boxxMediaImage.setAttribute('class', 'boxx__media-image')
  // append it to media wrap
  boxxMediaWrap.appendChild(boxxMediaImage)

  // create caption p element
  const boxxMediaCaption = document.createElement('p')
  boxxMediaCaption.setAttribute('class', 'boxx__media-caption')
  // append it to media wrap
  boxxMediaWrap.appendChild(boxxMediaCaption)

  /*****************************
  + append it all together
  *****************************/
  // append arrows to master overlay
  // prev arrow
  boxxOverlayInner.appendChild(boxxMediaPrev)

  // next arrow
  boxxOverlayInner.appendChild(boxxMediaNext)

  // append media wrap to overlay inner
  boxxOverlayInner.appendChild(boxxMediaWrap)

  // append overlay inner to master overlay
  boxxOverlay.appendChild(boxxOverlayInner)

  // append master overlay to body
  document.body.appendChild(boxxOverlay)

  /*****************************
  + get and store all gallery list items
  *****************************/
  // get boxx
  const boxx = document.getElementById('boxx')
  // get all li inside boxx
  const boxxItems = boxx.querySelectorAll('li.boxx__item')

  /*****************************
  + FadeIn function
  *****************************/
  const FadeIn = (elem) => {
    boxxOverlay.style.display = 'block'
    elem.style.opacity = 0

    let tick = () => {
      elem.style.opacity = +elem.style.opacity + 0.05

      if (+elem.style.opacity < 1) {
        setTimeout(tick, 16)
      }
    }
    tick()
  }
  /*****************************
  + FadeOut function
  *****************************/
  const FadeOut = (elem) => {
    elem.style.opacity = 1

    let tick = () => {
      elem.style.opacity = +elem.style.opacity - 0.05

      if (elem.style.opacity >= 0) {
        setTimeout(tick, 16)
      }
      if (elem.style.opacity <= 0) {
        boxxOverlay.style.display = 'none'
      }
    }
    tick()
  }

  /*****************************
  + click gallery item event
  *****************************/

  // capture the click event on a list item with the class boxx__item
  const addClickEvents = () => {
    for (let i = 0; i < boxxItems.length; i++) {
      boxxItems[i].addEventListener('click', (event) => {
        event.preventDefault()
        // get media link
        let mediaLink = boxxItems[i].querySelectorAll('a')[0].getAttribute('href').toString()
        // get title
        let mediaTitle = boxxItems[i].querySelectorAll('img')[0].getAttribute('title').toString()
        // set title text
        boxxMediaTitle.textContent = mediaTitle
        // get caption
        let mediaCaption = boxxItems[i].querySelectorAll('img')[0].getAttribute('alt').toString()
        // set caption text
        boxxMediaCaption.textContent = mediaCaption
        // get media type
        let mediaType = boxxItems[i].querySelectorAll('a')[0].getAttribute('class').toString()
        // clear active class from current active li
        const listItemActive = document.querySelector('li.boxx__item.active')
        if (listItemActive != null) {
          listItemActive.classList.remove('active')
        }
        // add active class
        boxxItems[i].classList.add('active')

        // checking for media type
        // hide the other type
        if (mediaType === 'boxx__anchor-image') {
          boxxIFrameWrap.style.display = 'none'
          boxxMediaIFrame.style.display = 'none'
          boxxMediaImage.setAttribute('src', mediaLink)
          boxxMediaImage.style.display = 'block'
        } else if (mediaType === 'boxx__anchor-video') {
          boxxMediaImage.style.display = 'none'
          boxxIFrameWrap.style.display = 'block'
          boxxMediaIFrame.setAttribute('src', mediaLink)
          boxxMediaIFrame.style.display = 'block'
        }
        // fade in overlay

        FadeIn(boxxOverlay)
      })
    }
  }
  addClickEvents()

  /*****************************
  + arrow click functions
  *****************************/
  // prev item func
  const PreviousItem = () => {
    MoveItems(-1)
  }
  // next item func
  const NextItem = () => {
    MoveItems(1)
  }
  // get previous gallery item
  // click movement
  boxxMediaPrev.addEventListener('click', () => {
    PreviousItem()
  })
  // get next gallery item
  // click movement
  boxxMediaNext.addEventListener('click', () => {
    NextItem()
  })
  // key movement
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === leftKey) {
      PreviousItem()
    } else if (e.keyCode === rightKey) {
      NextItem()
    }
  })

  // // moving between previous and next items
  // let moveItems = (dir) => {
  //   // let currentListItem = document.querySelector('.active')
  //   let index = boxxLiItems.indexOf
  //
  //   switch (dir) {
  //     case 1:
  //       index++
  //       break
  //     case -1:
  //       index--
  //       break
  //     default:
  //       break
  //   }
  // }

  // add indexes to gallery items
  let IndexGallery = () => {
    for (let i = 0; i < boxxItems.length; i++) {
      boxxItems[i].setAttribute('data-index', i)
    }
  }
  IndexGallery()

  let MoveItems = (dir) => {
    let currentListItem = document.querySelector('.active')
    let currentListItemIndex = currentListItem.getAttribute('data-index')
    console.log(currentListItem)
    console.log(currentListItemIndex)

    if (dir === 1) {
      currentListItemIndex++
      currentListItem = document.querySelector(`[data-index="${currentListItemIndex}"]`)
      currentListItem.querySelector('a').click()
    } else if (dir === -1) {
      currentListItemIndex--
      currentListItem = document.querySelector(`[data-index="${currentListItemIndex}"]`)
      currentListItem.querySelector('a').click()
    }
  }

  /*****************************
  + overlay close events
  *****************************/
  // when overlay is clicked
  boxxOverlay.addEventListener('click', (e) => {
    if (e.target.id === 'boxx__overlay' ||
        e.target.id === 'boxx__inner' ||
        e.target.id === 'boxx__media-close') {
      // remove active class
      const listItemActive = document.querySelector('li.boxx__item.active')
      if (listItemActive !== null) {
        listItemActive.classList.remove('active')
      }

      // fade out overlay
      FadeOut(boxxOverlay)
    }
  })
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === escKey) {
      const listItemActive = document.querySelector('li.boxx__item.active')
      if (listItemActive !== null) {
        listItemActive.classList.remove('active')
        FadeOut(boxxOverlay)
      }
    }
  })

  // /*****************************
  // + search functionality
  // *****************************/
  // search function
  let SearchFunction = () => {
    // get value entered into search bar
    const searchBar = document.getElementById('search-bar')

    // on keyup, filter
    searchBar.addEventListener('input', () => {
      // filter = the inputted value
      let filter = searchBar.value.toLowerCase()

      // loop trough all the gallery items and check for matches
      for (let i = 0; i < boxxItems.length; i++) {
        let title = boxxItems[i].querySelector('img').getAttribute('title').toLowerCase()
        let alt = boxxItems[i].querySelector('img').getAttribute('alt').toLowerCase()
        // display all results where indexof does not return -1
        if (title.indexOf(filter) !== -1 || alt.indexOf(filter) !== -1) {
          boxxItems[i].style.display = ''
        } else {
          boxxItems[i].style.display = 'none'
        }

        // if there's no value inputted
        if (searchBar.value === '') {
          // make every item visible
          boxxItems[i].style.display = ''
        }
      }
    })
  }
  SearchFunction()
}())
