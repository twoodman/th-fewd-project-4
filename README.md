## Project 4 for Treehouse FEWD Course


[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


A responsive and interactive media gallery.
**June 3rd 2017 - Rewrote project to use pure JavaScript instead of jQuery**


**Full changes made on June 3rd-5th 2017:**

- Killed off jQuery and rewrote with vanilla JS (ES6) using standard convention
- Changed naming of module classes from 'woodbox' to 'boxx'
- Modified a few styles. Nothing drastic, things like changing opacity of overlay background to be slightly lighter, etc.
- Removed gallery item animation on search


To Run:
- Download or clone repo
- Open index.html in browser


Or:
- http://twoodman.github.io/th-fewd-project-4


*Un-minified files included in respective folders.*


##### Rewrite: - done
To Do:
- ~~Rewrite all jQuery to use vanilla JavaScript / ES6~~
- ~~Use [standardjs](http://standardjs.com/) convention~~


##### Class Naming Convention:
To Do:
- ~~define a clear naming convention~~ - done
```
- CSS:
  - main wrapper: class | main | body
    - header: class | main__header | header
      - input: class | search-bar | input
    - content: class | main__content | div
    - gallery: class | gallery | ul
    - gallery item: class | gallery__item | li
- JS ('boxx'):
  - gallery: class | main__gallery | ul
    - gallery items: class | gallery__item | li
      - gallery anchors: classes | gallery__anchor-image/gallery__anchor-video | a tags
```


The original checklist, kept for future reference.


- ~~rewrite to be more modular~~ done
- ~~implement videos (iframe?)~~ done
- ~~implement arrows and top right X, & css hover styles etc~~ done
- ~~implement using left/right keys to go through gallery~~ done
- ~~implement using Esc key to close overlay~~ done
- ~~implement search function~~ done
- ~~implement animation on search~~ done
- ~~make site responsive~~ done
- ~~make grid cleaner~~ done
- ~~give items some styles to make page sleek~~ done
- ~~add rest of items to HTML list~~ done
- ~~clean up code~~ done
- ~~run html through w3c validator~~ done | first validation: no errors
- ~~run css through w3c validator~~ done | first validation: no errors
- ~~put js in jshint~~ done | first validation: 2 missing semicolons
- ~~add mobile and tablet media breaks and styles~~ done
