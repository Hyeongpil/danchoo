<template>
  <div class="flex flex-col card">
    <card-img class="cursor-pointer" @click.native="onProjectClicked()" />
    <div class="flex flex-col card-info">
      <div class="flex flex-row cursor-pointer company-name items-center">
        <dc-text
          class="cursor-pointer"
          content="플러스엑스"
          size="xs"
          color="grey-text"
          @click.native="onCompanyClicked()"
        />
        <img src="@/assets/images/icons/btn-arrow.png" class="arrow" />
      </div>

      <dc-text
        class="m-text cursor-pointer"
        content="카카오페이지 브랜드 리뉴얼 프로젝트"
        size="lg"
        weight="medium"
        @click.native="onProjectClicked()"
      />
      <dc-chip class="m-chip" content="#대기업" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import DcChip from '~/components/atoms/chip/DcChip.vue'
import DcText from '~/components/atoms/text/DcText.vue'
import CardImg from '~/components/atoms/card-img/CardImg.vue'

@Component({
  name: 'Card',
  components: { DcText, DcChip, CardImg }
})
export default class Card extends Vue {
  private onCompanyClicked() {
    this.$router.push('/company/1')
  }

  private onProjectClicked() {
    this.$router.push('/project/1')
  }
}
</script>

<style lang="scss">
.m-content {
  margin-top: 16px;
}
.m-body {
  margin-top: 28px;
}
.m-text {
  margin-top: 4px;
}
.m-chip {
  margin-top: 10px;
}
.card {
  background-color: #2d2f33;
  border-radius: 12px;
}
.card-info {
  padding: 16px 20px 20px;
}
.arrow {
  width: 16px;
  height: 16px;
}
</style>
