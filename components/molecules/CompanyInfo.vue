<template>
  <div class="flex flex-row">
    <!-- <dc-bullet :img-src="imgSrc"></dc-bullet> -->
    <div class="w-5">
      <dc-text class="m-text" :content="bulletText" size="lg" weight="medium" />
    </div>

    <dc-text class="m-text icon-margin" :content="content" size="base" weight="medium" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import DcText from '~/components/atoms/text/DcText.vue'

@Component({
  name: 'CompanyInfo',
  components: { DcText }
})
export default class CompanyInfo extends Vue {
  @Prop({ required: true, default: '' })
  bulletText!: string

  @Prop({ required: true, default: '' })
  content!: string
}
</script>

<style ${2|scoped,|} lang="scss">
.icon-margin {
  margin-left: 10px;
}
</style>
