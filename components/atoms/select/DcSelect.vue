<template>
  <select v-model="value" name="category" @change="onSelectChanged">
    <option value="">카테고리 선택</option>
    <option>UI</option>
  </select>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'DcSelect'
})
export default class DcSelect extends Vue {
  private value = ''

  private onSelectChanged(event: any) {
    this.$emit('input', event.target.value)
  }
}
</script>

<style ${2|scoped,|} lang="scss"></style>
