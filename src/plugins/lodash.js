import random from 'lodash/random'
import range from 'lodash/range'
import toUpper from 'lodash/toUpper'

export default {
  install(Vue) {
    Vue.prototype.$lodash = {
      random,
      range,
      toUpper
    }
  }
}
