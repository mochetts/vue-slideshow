import { mount } from '@vue/test-utils'
import Slide from '@/components/Slide.vue'

describe('Slide', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Slide)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
