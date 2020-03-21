<script>
import SlideShow from '~/components/SlideShow'
import Slide from '~/components/Slide'

export default {
  components: {
    SlideShow,
    Slide
  },
  methods: {
    slideShowEnded() {
      console.log('The end')
    }
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

<style lang="scss" scoped>
h1 {
  font-weight: 800;
}
</style>
