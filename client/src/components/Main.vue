<template>
  <div>
    <Gift />
  </div>
</template>

<script>
import Gift from './gift/Gift.vue'

export default {
  name: 'Main',
  components: {
    Gift
  },
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
