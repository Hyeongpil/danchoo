<template>
  <span :class="getTextClass()">
      {{ content }}
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"

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

    private getTextClass(){
        return `text-${this.size} text-${this.color} font-${this.weight}`
    }
}
</script>

<style ${2|scoped,|} lang="scss">
</style>
