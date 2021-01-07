<template>
  <div class="flex flex-col">
    <div class="flex flex-row">
      <div class="flex flex-row items-center">
        <img
          src="https://img1.daumcdn.net/thumb/C500x500.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/5oek/image/lBnVAh6Jk5lBUEYXH75yeOClS2c.jpg"
          class="logo-img"
        />
        <dc-text
          class="m-text logo-margin"
          content="플러스엑스"
          size="2xl"
          weight="medium"
        />
      </div>
      <div class="flex items-baseline">
        <dc-text
          class="m-text web-style cursor-pointer mb-1"
          content="www.plus-ex.com"
          size="xxs"
          weight="500"
          color="darkgrey"
        />
      </div>

      <sns-group class="sns-group"></sns-group>
    </div>

    <div class="flex flex-row">
      <dc-chip class="m-chip chip-margin" content="대기업" />
    </div>
    <div class="top-margin">
      <company-info bullet-text="🏢" content="100명 이상"></company-info>
      <company-info bullet-text="💸" content="평균 연봉 3200만원"></company-info>
      <company-info bullet-text="👋" content="퇴사율 10%, 입사율 20%"></company-info>
      <company-info bullet-text="📍" content="서울특별시 강남구"></company-info>
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
import DcText from '~/components/atoms/text/DcText.vue'
import CompanyInfo from '~/components/molecules/CompanyInfo.vue'
import SnsGroup from '~/components/molecules/SnsGroup.vue'
import Card from '~/components/organisms/card/Card.vue'
import DcChip from '~/components/atoms/chip/DcChip.vue'

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
  border-radius: 50%;
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
  margin-left: 12px;
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
