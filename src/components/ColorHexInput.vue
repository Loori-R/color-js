<template>
  <div>
    <label class="cj-label" for="color">color hex</label>
    <input class="cj-input"
           autocomplete="off"
           id="color"
           v-model="color"
           type="text"
           placeholder="#FFFFFF">
  </div>
</template>

<script>
export default {
  name: "ColorHexInput",
  data () {
    return {
      color: ''
    }
  },
  watch: {
    color () {
      this.$emit('input', this.color)
    }
  }
}
</script>
