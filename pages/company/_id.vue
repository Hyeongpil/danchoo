<template>
  <div class="flex flex-col">
    <div class="flex flex-row">
      <img src="~/assets/images/logo.png" class="logo-img" />
      <dc-text
        class="m-text logo-margin"
        content="플러스엑스"
        size="2xl"
        weight="medium"
      />
      <dc-text
        class="m-text web-style cursor-pointer"
        content="www."
        size="2xs"
        weight="light"
        color="darkgrey"
      />
      <sns-group class="sns-group"></sns-group>
    </div>
    <div class="flex flex-row">
      <dc-chip class="m-chip chip-margin" content="대기업" />
    </div>
    <div class="top-margin">
      <company-info bullet-text="🏢"></company-info>
      <company-info bullet-text="💸"></company-info>
      <company-info bullet-text="👋"></company-info>
      <company-info bullet-text="📍"></company-info>
    </div>
    <div class="grid grid-container">
      <div v-for="(card, idx) in test" :key="idx">
        <card />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import DcText from '~/components/atoms/DcText.vue'
import CompanyInfo from '~/components/molecules/CompanyInfo.vue'
import SnsGroup from '~/components/molecules/SnsGroup.vue'
import Card from '~/components/organisms/Card.vue'
import DcChip from '~/components/atoms/DcChip.vue'

@Component({
  name: 'Company',
  components: { DcText, CompanyInfo, SnsGroup, DcChip, Card }
})
export default class Company extends Vue {
  private title: string = '전체'

  private test: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
}
</script>

<style ${2|scoped,|} lang="scss">
.logo-img {
  width: 44px;
  height: 44px;
}
.logo-margin {
  margin-left: 12px;
}
.grid-container {
  grid-template-columns: repeat(auto-fill, minmax(280px, 280px));
  row-gap: 28px;
  column-gap: 64px;
  margin-top: 75px;
}
.web-style {
  margin-left: 27px;
  align-self: flex-end;
}
.chip-margin {
  margin-top: 20px;
}
.top-margin {
  margin-top: 28px;
}
.sns-group {
  flex: auto;
  justify-content: flex-end;
  align-items: center;
}
</style>
