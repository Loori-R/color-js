<template>
  <div class="cj-color-block" :style="{backgroundColor}"/>
</template>

<script>
export default {
  name: "ColorBlock",
  props: ['color'],
  computed: {
    backgroundColor () {
      return this.color.includes('#') ? this.color : '#' + this.color
    }
  }
}
</script>

<style lang="scss" scoped>

.cj-color-block {
  width: 44px;
  height: 44px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
  transition: 0.5s ease-out;
}

</style>
