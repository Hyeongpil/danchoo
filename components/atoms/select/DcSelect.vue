<template>
  <select name="category">
    <option value="UI">UI</option>
  </select>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'DcSelect'
})
export default class DcSelect extends Vue {}
</script>

<style ${2|scoped,|} lang="scss"></style>
