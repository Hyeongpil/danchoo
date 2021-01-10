<template>
  <select v-model="value" name="category" @change="onSelectChanged">
    <option value="NONE">미지정</option>
    <option v-for="(option, idx) in options" :key="idx" :value="option.key">{{
      option.value
    }}</option>
  </select>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { ISelectOption } from '~/types/type.interface'

@Component({
  name: 'DcSelect'
})
export default class DcSelect extends Vue {
  private value = 'NONE'

  @Prop()
  private options!: ISelectOption[]

  private onSelectChanged(event: any) {
    this.$emit('input', event.target.value)
  }
}
</script>

<style ${2|scoped,|} lang="scss"></style>
