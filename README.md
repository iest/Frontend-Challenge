# The BIZZBY Frontend Challenge

## TODO
- [ ] Properly implement `cleaningRoute`
- [ ] Add big-screen breakpoints
- [ ] Add sentance-size-limiting breakpoints: aka figure out how to make line-breaks graceful
- [ ] Add form validation
- [x] Remove 300ms delay on `bzSelector`s
- [x] Add sound (chose the first pop noise I found. Be cooler if there were multiple tones of the same sound á la Clear.app)
- [x] Add jest unit tests
- [x] Sex-up `bzSelector` so size-changes are fluid
- [x] Pretty transitions on clicking `bzSelector`s
- [x] Create non-interactable `bzSelector`
- [x] Create and style bzInput
- [x] Setup flux: store, dispatcher, actionCreators
- [x] Detail view `selector`
- [x] Detail view layout
- [x] Animation between views (`CSSTransitionGroup`?)
- [x] SVG Icons
- [x] Setup stylus middlware, create stylus file
- [x] Implement basic layout
- [x] Setup browserify
- [x] Setup shared `routes` module, so server knows what routes are available
- [x] Setup react + flux + server-side rendering
- [x] npm init, folder structure, setup basic build script

### View the demo
TBA - probably bizzby.iest.co

### Running locally
Bundle up the client, then serve on `localhost:8080`:

```bash
$ npm run build
$ npm start
```

### Developing locally
Uses nodemon (an awesome little util that restarts the server when js changes occur) to serve, then run watchify to bundle up changes when they occur.

```bash
$ npm run dev

# in another window/tab/session/whatever
$ npm run watch
```

## What's cool about this project
- [React](http://facebook.github.io/react/): super-declerative, super-fast views
- [Flux](http://facebook.github.io/flux/): uni-directional dataflow for UIs
- [Jest](http://facebook.github.io/jest/): automocking tests that work great with react
- [SVG icons](http://iestynwilliams.net/icons-for-the-web-in-2014): vectors with finer control than icon-fonts
- [@fat's fancy CSS coding guidelines](https://gist.github.com/fat/a47b882eb5f84293c4ed#is-stateOfComponent): my new favourite CSS naming convention

## If given time, some things I would research and implement to make this project feature-complete (or better) compared to the actual Bizzby app...
- Use a fluid-layout JS library like packery (I attempted this, but got caught up fighting with bower. I could get it to work with browserify, but not with server rendering. Isomorphic JS tech is still young!)
- Use a solid JS-based animation library (CSS doesn't cut it for anything remotely complex)

## Where are all your unit tests?
Test-driven-development is great if you have a spec your working towards. This project is still in the R&D phase for me. Typially, the next thing I would do after experimenting with different behaviours would be to spec out how particular modules should work, then write unit tests for that behaviour. Plus I'd rather make pretty stuff than write unit tests all day :)

## Tested on...
- Safari on iOS8, Apple iPhone 5
- Safari 8.0, OS X Yosemite
- Firefox 31, OS X Yosemite
- Chrome 37,  OS X Yosemite
- IE11, Windows 8.1

## Some other open-source stuff I've done that may interest you
- [Sliderrr](https://github.com/iest/sliderrr): a websocket-powered, collaberative dribbble viewer (runs great on a raspberry pi)
- [emRuler](https://github.com/iest/emRuler): shows the width or height of the viewport in ems
- [Chosem](https://github.com/iest/Chosem): an ember-port of the [Chosen](http://harvesthq.github.io/chosen/) library that I built in November 2013
