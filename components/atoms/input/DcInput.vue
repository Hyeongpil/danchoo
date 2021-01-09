<template>
  <input
    v-model="inputVal"
    :type="type"
    :readonly="readonly"
    :placeholder="placeHolder"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'DcInput'
})
export default class DcInput extends Vue {
  @Prop()
  private value!: [Number, String]

  @Prop({ default: 'text' })
  private type!: string

  @Prop()
  private placeHolder!: string

  @Prop({ default: false })
  private readonly!: boolean

  get inputVal() {
    return this.value
  }

  set inputVal(val: [Number, String]) {
    this.$emit('input', val)
  }

  private handleInput(event: any) {
    this.$emit('input', event.target.value)
  }

  private handleChange(event: any) {
    this.$emit('change', event.target.value)
  }

  private handleFocus(event: any) {
    this.$emit('focus', event)
  }

  private handleBlur(event: any) {
    this.$emit('blur', event)
  }
}
</script>

<style ${2|scoped,|} lang="scss"></style>
