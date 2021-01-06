<template>
  <div class="flex flex-row">
    <dc-text :content="content" class="mr-3"></dc-text>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import DcText from '~/components/atoms/text/DcText.vue'

@Component({
  name: 'LabelSlot',
  components: {
    DcText
  }
})
export default class LabelSlot extends Vue {
  @Prop({ required: true, default: '' })
  content!: string
}
</script>

<style ${2|scoped,|} lang="scss"></style>
