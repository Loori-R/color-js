<template>
  <div id="app" class="cj-main">
    <div class="cj-main-form">
      <label class="cj-main-form__label" for="color">color hex</label>
      <input class="cj-main-form__input"
             autocomplete="off"
             id="color"
             v-model="color"
             type="text"
             placeholder="#FFFFFF">
    </div>
    <div class="cj-main-form cj-main-form_name">
      <label class="cj-main-form__label">color name</label>
      <div class="cj-main-form__input cj-main-form__input_name">{{ colorName }}</div>
    </div>
    <div class="cj-main-color" :style="{background: backgroundColor}"/>
    <div class="cj-main-license__button" @click="showLicense = !showLicense">
      Display License Information
    </div>
    <div class="cj-main-license" v-if="showLicense">
      <p>Script Created by Chirag Mehta -
        <a href="http://chir.ag/projects/ntc">
        http://chir.ag/projects/ntc
      </a>
      </p>
      <p>
        This script is released under the: Creative Commons License:
        <br/>
        Attribution 2.5
        <a href="http://creativecommons.org/licenses/by/2.5/">
          http://creativecommons.org/licenses/by/2.5/
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import ntc from '@/ntc'
import {kebabCase, toUpper} from 'lodash'

export default {
  name: 'App',
  data () {
    return {
      color: '',
      showLicense: false
    }
  },
  computed: {
    backgroundColor () {
      return this.color.includes('#') ? this.color : '#' + this.color
    },
    colorName () {
      const info = ntc.name(this.color)
      const name = `$color-${kebabCase(info[1])}: ${toUpper(this.backgroundColor)};`
      return info[1] ? name : ''
    }
  }
}
</script>

<style>
@import url('./style.css');
</style>
