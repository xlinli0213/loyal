import ImageResolverMixin from '~/mixins/dynamic-image-resolver'
import LoyalIcon from './Icon'
import LoyalChart from './Chart'

export default function(Vue) {
  Vue.mixin(ImageResolverMixin)
  Vue.component('loyal-icon', LoyalIcon)
  Vue.component('loyal-chart', LoyalChart)
}
