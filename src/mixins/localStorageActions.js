import {uniqBy, findIndex} from 'lodash'

export default {
  methods: {
    getColors () {
      return JSON.parse(localStorage.getItem('colors') || '[]')
    },
    pushColors (color) {
      const colors = this.getColors()
      colors.push(color)
      localStorage.setItem('colors',  JSON.stringify(uniqBy(colors, 'color')))
    },
    removeColor (color) {
      const colors = this.getColors()
      const index = findIndex(colors, color)
      if (index === -1) return
      colors.splice(index, 1)
      localStorage.setItem('colors',  JSON.stringify(uniqBy(colors, 'color')))
    }
  }
}
