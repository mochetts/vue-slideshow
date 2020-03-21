import Vue from 'vue'
import SlideShow from '../components/SlideShow'
import Slide from '../components/Slide'

const Components = {
  SlideShow,
  Slide
}

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name])
})

export default Components
