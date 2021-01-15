<template>
  <div class="img">
    <div class="scale">
      <img :src="getImgSrc()" class="card-img" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'CardImg'
})
export default class CardImg extends Vue {
  @Prop({ required: false, default: '@/assets/images/default-card.png' })
  imgSrc!: string

  private getImgSrc() {
    return 'https://www.yankodesign.com/images/design_news/2020/12/293769/05_Gromeo_HabitatHorticulture_MiniLivingWallSystem.png'
  }
}
</script>

<style lang="scss" scoped>
.card-img {
  border: 1px solid #000000;
  box-sizing: border-box;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  width: 280px;
}

// TODO: 여기 높이 수정 필요!!
.img {
  width: 280px;
  height: 187.33px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  overflow: hidden;
} /* 부모를 벗어나지 않고 내부 이미지만 확대 */

.scale {
  transform: scale(1);
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transition: all 0.3s ease-in-out; /* 부드러운 모션을 위해 추가*/
}
.scale:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
}
</style>
