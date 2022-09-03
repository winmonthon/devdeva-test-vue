import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#2e97ff',
        secondary: '#333333',
        accent: '#8c9eff',
        error: '#DC5151',
        info: '#2196F3',
        success: '#1cd67c',
        warning: '#FFEE58',
        danger: '#dc2727',
      },
    },
  },
})
