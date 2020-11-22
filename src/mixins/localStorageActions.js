import {uniqBy} from 'lodash'

export default {
  methods: {
    getColors () {
      return JSON.parse(localStorage.getItem('colors') || '[]')
    },
    pushColors (color) {
      const colors = this.getColors()
      colors.push(color)
      localStorage.setItem('colors',  JSON.stringify(uniqBy(colors, 'color')))
    }
  }
}
