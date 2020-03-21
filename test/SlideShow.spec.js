import { mount } from '@vue/test-utils'
import SlideShow from '@/components/SlideShow.vue'

describe('SlideShow', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SlideShow)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
