<template>
  <div id="app" class="cj-main">
    <color-hex-input @input="setColor"/>
    <color-name-input :colorName="colorName" :color="color" @updateColors="setSavedColors"/>
    <color-name-input v-for="savedColor of savedColors"
                      :saved="true"
                      :key="savedColor.color"
                      :color="savedColor.color"
                      :color-name="savedColor.name"
                      @updateColors="setSavedColors"/>
    <LicenseInfo/>
  </div>
</template>

<script>
import ntc from '@/ntc'
import {kebabCase, toUpper} from 'lodash'
import LicenseInfo from '@/components/LicenseInfo'
import ColorNameInput from '@/components/ColorNameInput'
import ColorHexInput from '@/components/ColorHexInput'
import localStorageActions from '@/mixins/localStorageActions'

export default {
  name: 'App',
  components: {ColorHexInput, ColorNameInput, LicenseInfo},
  mixins: [localStorageActions],
  data () {
    return {
      color: '',
      showLicense: false,
      savedColors: [],
    }
  },
  computed: {
    backgroundColor () {
      return this.color.includes('#') ? this.color : '#' + this.color
    },
    colorName () {
      const info = ntc.name(this.color)
      const name = `$color-${kebabCase(info[1])}: ${toUpper(this.backgroundColor)};`
      return info[1].includes('Invalid') ? '' : name
    }
  },
  methods: {
    setColor (hex) {
      this.color = hex
    },
    setSavedColors () {
      this.savedColors = this.getColors()
    }
  },
  beforeMount () {
    this.setSavedColors()
  }
}
</script>

<style lang="scss">
@import "./core";

.cj-main {
  display: grid;
  width: 450px;
  grid-gap: 10px;
  margin: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>
