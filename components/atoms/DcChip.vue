<template>
  <div>
    <span class="chip text-grey-chip-text text-xxs cursor-pointer" :class="getClass()">{{
      content
    }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'DcChip'
})
export default class DcChip extends Vue {
  @Prop({ required: true, default: '' })
  content!: string

  @Prop({ required: false, default: 'grey-chip' })
  color!: string

  private getClass() {
    return `bg-${this.color}`
  }
}
</script>

<style lang="scss" scoped>
.chip {
  border-radius: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 6px;
  padding-right: 6px;
}
.bg-grey-chip {
  background: #383a3e;
}
</style>
