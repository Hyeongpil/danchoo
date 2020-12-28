<template>
  <span :class="getTextClass()">
    {{ content }}
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'DcText'
})
export default class DcText extends Vue {
  @Prop({ required: true, default: '' })
  content!: string

  @Prop({ required: false, default: 'base' })
  size!: string

  @Prop({ required: false, default: 'white' })
  color!: string

  @Prop({ required: false, default: '400' })
  weight!: string

  private getTextClass() {
    return `text-${this.size} text-${this.color} font-${this.weight}`
  }
}
</script>

<style lang="scss" scoped>
.text-white {
  color: white;
}
.text-grey-text {
  color: #bec0c4;
}
.font-400 {
  font-weight: 400;
}
.text-xs {
  font-size: 11px;
}
.text-lg {
  font-size: 16px;
}
</style>
