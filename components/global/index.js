import ImageResolverMixin from '~/mixins/dynamic-image-resolver'
import LoyalIcon from './Icon'

export default function(Vue) {
  Vue.mixin(ImageResolverMixin)
  Vue.component('loyal-icon', LoyalIcon)
}
