<template>
  <div class="flex flex-row">
    <dc-text :content="content"></dc-text>

    <dc-input
      v-model="inputVal"
      class="ml-3"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    ></dc-input>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import DcInput from '~/components/atoms/input/DcInput.vue'
import DcText from '~/components/atoms/text/DcText.vue'

@Component({
  name: 'LabelInput',
  components: {
    DcInput,
    DcText
  }
})
export default class LabelInput extends Vue {
  @Prop({ required: true, default: '' })
  content!: string

  @Prop({ required: true })
  private value!: [Number, String]

  @Prop({ default: 'text' })
  private type!: string

  get inputVal() {
    return this.value
  }

  set inputVal(val: [Number, String]) {
    this.$emit('input', val)
  }

  private handleInput(value: string) {
    this.$emit('input', value)
  }

  private handleChange(value: string) {
    this.$emit('change', value)
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
