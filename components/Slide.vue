<script>
export default {
  components: {},
  props: {
    // Animation performed when the slide is shown.
    enterWith: { type: String, required: false, default: null },

    // Animation performed when the slide is dismissed.
    leaveWith: { type: String, required: false, default: null },

    // Duration of the slide in seconds.
    // Time between the slide completely entered and before it starts to leave.
    duration: { type: Number, default: null }
  },
  data() {
    return {
      // Either the slide is currently shown.
      entering: false,
      leaving: false,
      shown: false
    }
  },
  watch: {
    shown(newVal) {
      if (newVal && this.duration) {
        setTimeout(() => {
          this.nextSlide()
        }, this.duration * 1000)
      }
    }
  },
  methods: {
    show() {
      if (!this.shown) {
        this.entering = true
      }
    },
    hide() {
      if (this.shown) {
        this.leaving = true
      }
    },
    entered() {
      this.$emit('entered')
      this.shown = true
    },
    left() {
      this.$emit('left')
      this.shown = false
      this.leaving = false
      this.entering = false
    },
    nextSlide() {
      this.$emit('nextSlide')
    },
    prevSlide() {
      this.$emit('prevSlide')
    }
  }
}
</script>

<template>
  <div class="slide">
    <transition
      :enter-active-class="enterWith"
      :leave-active-class="leaveWith"
      @after-enter="entered"
      @after-leave="left"
    >
      <div v-show="entering && !leaving" class="content">
        <slot />
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped></style>
