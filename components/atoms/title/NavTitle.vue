<template>
  <div class="nav-title cursor-pointer" :class="getColor()">{{ title }}</div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'NavTitle'
})
export default class NavTitle extends Vue {
  @Prop({ required: true, default: '' })
  title!: string

  @PropSync('selected', { default: false })
  syncSelected!: boolean

  private getColor() {
    return this.syncSelected ? 'text-grey-light font-bold' : 'text-grey'
  }
}
</script>

<style ${2|scoped,|} lang="scss">
.nav-title {
  size: 16px;
}
</style>
