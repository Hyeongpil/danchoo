<template>
  <button class="bg-grey-light text-black px-2" :type="type">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'DcButton'
})
export default class DcButton extends Vue {
  @Prop({ required: true, default: '버튼' })
  private text!: string

  @Prop({ default: 'text' })
  private type!: string
}
</script>

<style ${2|scoped,|} lang="scss"></style>
