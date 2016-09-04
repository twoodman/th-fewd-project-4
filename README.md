#### Project 4 for Treehouse FEWD Course
----

A responsive and interactive media gallery.
Uses jQuery - will be rewriting later and making new repo for vanilla JS version


To Run:
- Download or clone repo
- Open index.html in browser


Or:
- http://twoodman.github.io/th-fewd-project-4


*very much WIP*


*Un-minified files included in respective folders.*


To Do:

- ~~define a clear naming convention (BEM?)~~ - done
```
- CSS:
  - main wrapper: main
  - header: main__header
    - content: main__content
    - gallery: gallery
    - gallery item: gallery__item
      - gallery image: item__image
- JS (lightbox):
  - gallery: woodbox
    - gallery items: woodbox__item
      - gallery anchors: woodbox__video-image/woodbox__anchor-video
```

- ~~rewrite to be more modular~~ done
- ~~implement videos (iframe?)~~ done
- ~~implement arrows and top right X, look & functionality~~ done
- implement using left/right keys to go through gallery
- implement using Esc key to close overlay
- implement search function
- implement animation on search
- clean up code