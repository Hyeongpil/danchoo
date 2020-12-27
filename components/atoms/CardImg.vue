<template>
  <img :src="getImgSrc()" class="card-img"/>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"

@Component({
    name:'CardImg'
})
export default class CardImg extends Vue {
    
    @Prop({ required: false, default: '@/assets/images/default-card.png' })
    imgSrc!: string

    private getImgSrc(){
        return "https://www.yankodesign.com/images/design_news/2020/12/293769/05_Gromeo_HabitatHorticulture_MiniLivingWallSystem.png"
    }

}
</script>

<style lang="scss" scoped>
.card-img{
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 12px;
    width: 280px;
}
</style>
