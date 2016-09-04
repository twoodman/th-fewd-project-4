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
    - gallery anchor: woodbox__anchor
      - gallery image: woodbox__media
```

- rewrite to be more modular
- implement videos (iframe?)
- implement arrows(go through gallery) and top right X(close) and Esc(close)
- implement using left/right keys to go through gallery
