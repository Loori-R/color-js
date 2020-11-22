<template>
  <div class="cj-color-name">
    <label class="cj-label cj-color-name__label">color name</label>
    <div class="cj-color-name-form">
      <div class="cj-input cj-color-name__input">{{ colorName }}</div>
      <color-block class="cj-color-name__color" :color="color"/>
      <div class="cj-input cj-color-name__save" @click="saveColor" v-if="!saved">
       <iconCheck/>
     </div>
    </div>
  </div>
</template>

<script>
import ColorBlock from '@/components/ColorBlock'
import iconCheck from '@/icons/iconCheck'
import localStorageActions from '@/mixins/localStorageActions'

export default {
  name: "ColorNameInput",
  components: {ColorBlock, iconCheck},
  props: ['color', 'colorName', 'saved'],
  mixins: [localStorageActions],
  methods: {
    saveColor () {
      this.pushColors({color: this.color, name: this.colorName})
      this.$emit('updateColors')
    },
  }
}
</script>

<style lang="scss" scoped>

.cj-color-name {

  &-form {
    display: grid;
    grid-gap: 0 5px;
    grid-template-columns: minmax(300px, 1fr) 44px 44px;
  }

  &__input {
    min-height: 44px;
    text-align: left;
    background: transparent;
    cursor: pointer;
    user-select: all;
    word-break: break-all
  }

  &__save {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s ease-out;

    svg {
      fill: rgba(0, 0, 0, 0.4);
      transition: 0.15s ease-out;
    }

    &:hover {
      border-color: #4DD599;
    }

    &:hover svg {
      fill: #4DD599
    }
  }
}

</style>
