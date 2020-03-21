# vue-slideshow
A lightweight and unobtrusive component to build beautiful vue slideshows.

## Installation
```bash
# using npm
$ npm i @mochetts/vue-slideshow

# using yarn
$ yarn add @mochetts/vue-slideshow
```

## Usage
You can either import the components manually:
```javascript
import SlideShow from '@mochetts/vue-slideshow/components/SlideShow'
import Slide from '@mochetts/vue-slideshow/components/Slide'
...
```
Or you can import them globally in your App.vue:
```javascript
import '@mochetts/vue-slideshow'
...
```

### Slide.vue

#### Properties
| Name                      | Required      | Default  | Description |
| ------------------------- | ------------- | -------- | ----------- |
| enter-with / enterWith    | false         | null     | css class used to transition the slide into the slide show |
| leave-with / leaveWith    | false         | null     | css class used to transition the slide out from the slide show |
| duration                  | false         | null     | Duration of the slide in seconds. Time between the slide completely entered and before it starts to leave |

#### Events
| Name      |  Triggered when |
| --------  | --------------- |
| entered   | slide finished entering the slideshow (after enter animation executes) |
| left      | slide finished leaving the slideshow (after the leave animation executes) |

### SlideShow.vue

#### Properties
> None

#### Events
| Name      |  Triggered when |
| --------  | --------------- |
| end       | slideshow finishes showing all slides |

### Example using [animate.css](https://daneden.github.io/animate.css/) animated transitions

```vue
<script>
import SlideShow from '@mochetts/vue-slideshow/components/SlideShow'
import Slide from '@mochetts/vue-slideshow/components/Slide'

export default {
  components: {
    SlideShow,
    Slide
  },
  methods: {
    slideShowEnded() {
      console.log('The end')
    },
    slideEntered () {
      console.log('Slide entered')
    },
  }
}
</script>

<template>
  <SlideShow class="" @end="slideShowEnded">
    <Slide
      enter-with="animated fadeIn slow"
      leave-with="animated fadeOut"
      :duration="1"
    >
      <h1>Hey,</h1>
    </Slide>
    <Slide
      enter-with="animated fadeIn slow"
      leave-with="animated fadeOut"
      @entered="slideEntered"
      :duration="1"
    >
      <h1>I'm vue-slideshow!</h1>
    </Slide>
    <Slide
      enter-with="animated fadeIn slow"
      leave-with="animated fadeOut"
      :duration="2"
    >
      <h1>Let's build something awesome together.</h1>
    </Slide>
  </SlideShow>
</template>
```

## Contributing
This package was developed using `Nuxt.js`.
For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

### Git flow
1. Fork it
2. Create your feature or fix branch (git checkout -b feature-or-fix)
3. Commit your changes (git commit -am 'Fixing this and that')
4. Push to the branch (git push origin feature-or-fix)
5. Create new Pull Request

### Build Setup
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

### Testing
```bash
# Test components using jest
$ yarn test
```

## License
```
Copyright 2020 Martin Mochetti

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
