<template>
  <div class="cj-license">
    <div class="cj-license__button" @click="showLicense = !showLicense">
      Display License Information
    </div>
    <div class="cj-license__info" v-if="showLicense">
      <p>
        Script Created by Chirag Mehta -
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
export default {
  name: "LicenseInfo",
  data () {
    return {
      showLicense: false
    }
  }
}
</script>

<style lang="scss" scoped>

.cj-license {
  color: rgba(0, 0, 0, 0.3);
  font-size: 10px;

  &__button {
    grid-column: 1/3;
    color: rgba(0, 0, 0, 0.3);
    font-size: 10px;
    user-select: none;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
}

</style>
