<template>
  <div class="flex flex-col m-body">
      <card-img class="cursor-pointer"/>
      <dc-text class="m-content cursor-pointer" content="플러스 엑스" size="xs" color="grey-text" @click.native="onCompanyClicked()"/>
      <dc-text class="m-text cursor-pointer" content="카카오페이지 브랜드 리뉴얼 프로젝트" size="lg" weight="medium"/>
      <dc-chip class="m-chip" content="#대기업"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import CardImg from "../atoms/CardImg.vue"
import DcChip from "../atoms/DcChip.vue"
import DcText from "../atoms/DcText.vue"

@Component({
    name: 'Card',
    components: {DcText, DcChip, CardImg}
})
export default class Card extends Vue {

    private onCompanyClicked(){
        console.log('회사클릭');
    }
}
</script>

<style lang="scss">
.m-content{
    margin-top: 16px;
}
.m-body{
    margin-top: 28px;
}
.m-text{
    margin-top: 4px;
}
.m-chip{
    margin-top: 10px;
}
</style>
