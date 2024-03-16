import { mount } from '@vue/test-utils'
import BaseHeader from '../components/BaseAnimation.vue'
test('displays message', () => {
  const wrapper =  mount(BaseHeader)
  expect(wrapper.find('h1').exists()).toBeTruthy()
})