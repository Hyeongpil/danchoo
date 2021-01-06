<template>
  <div class="flex flex-row">
    <!-- <dc-bullet :img-src="imgSrc"></dc-bullet> -->
    <dc-text
      class="m-text icon-margin"
      :content="bulletText"
      size="base"
      weight="medium"
    />
    <dc-text class="m-text icon-margin" content="100명이상" size="base" weight="medium" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import DcText from '../atoms/DcText.vue'

@Component({
  name: 'CompanyInfo',
  components: { DcText }
})
export default class CompanyInfo extends Vue {
  @Prop({ required: false, default: '' })
  bulletText!: string
}
</script>

<style ${2|scoped,|} lang="scss">
.icon-margin {
  margin-left: 10px;
}
</style>
