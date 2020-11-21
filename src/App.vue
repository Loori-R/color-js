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
    <LicenseInfo/>
  </div>
</template>

<script>
import ntc from '@/ntc'
import {kebabCase, toUpper} from 'lodash'
import LicenseInfo from '@/components/LicenseInfo'

export default {
  name: 'App',
  components: {LicenseInfo},
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
      return info[1].includes('Invalid') ? '' : name
    }
  }
}
</script>

<style lang="scss">
@import "./core";

.cj-main {
  display: grid;
  justify-content: center;
  width: 450px;
  grid-gap: 10px;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(auto-fill, auto);
  margin: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &-form {
    min-width: 320px;

    &_name {
      grid-row: 2;
      grid-column: 1;
    }

    &__label {
      display: block;
      color: rgba(0, 0, 0, 0.4);
      text-align: left;
      font-size: 12px;
      padding: 5px;
    }

    &__input {
      width: 100%;
      padding: 12px 14px;
      border-radius: 4px;
      font-size: 16px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      outline: none;
      box-sizing: border-box;
      transition: 0.3s;

      &_name {
        min-height: 44px;
        text-align: left;
        background: transparent;
        cursor: pointer;
        user-select: all;
        word-break: break-all;
      }

      &:focus {
        border-color: #3275F7;
      }

      &::placeholder {
        color: rgba(0, 0, 0, 0.2)
      }
    }
  }

  &-color {
    width: 108px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    margin-top: 24px;
    grid-row: 1/3;
    transition: 0.5s ease-out;
  }
}


</style>
