<script>
export default {
  data() {
    return {
      currentSlideIndex: 0
    }
  },
  computed: {
    slides() {
      return this.$slots.default ? this.$slots.default.filter(
        (vNode) =>
          vNode.componentOptions && vNode.componentOptions.tag === 'Slide'
      ) : []
    },
    currentSlide() {
      return this.slides[this.currentSlideIndex].componentInstance
    }
  },
  mounted() {
    this.slides.forEach((slide) => {
      slide.componentInstance.$on('nextSlide', this.onNextSlide)
      slide.componentInstance.$on('prevSlide', this.onPrevSlide)
      slide.componentInstance.$on('left', this.showCurrentSlide)
    })
    setTimeout(this.showCurrentSlide, 100)
  },
  methods: {
    onNextSlide(e) {
      if (this.currentSlideIndex < this.slides.length - 1) {
        this.currentSlide.hide()
        this.currentSlideIndex += 1
      } else {
        this.$emit('end')
      }
    },
    prevSlide(e) {
      if (this.currentSlideIndex > 0) {
        this.currentSlide.hide()
        this.currentSlideIndex -= 1
      }
    },
    showCurrentSlide() {
      this.currentSlide.show()
    }
  }
}
</script>

<template>
  <div class="slideshow">
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>
