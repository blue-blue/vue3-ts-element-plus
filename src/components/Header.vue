<template>
  <div class="header">
    <LangSelect :isWhite="true" class="set-language" />
  </div>
</template>

<script>
import LangSelect from './LangSelect/Index.vue'
export default {
  name: 'Header',
  components: {
    LangSelect
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: #ccc;
  .set-language {
  color: #000;
  top: 3px;
  font-size: 18px;
  right: 0px;
  cursor: pointer;
}
}
</style>
