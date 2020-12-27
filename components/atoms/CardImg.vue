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
        return require('@/assets/images/default-card.png')
    }

}
</script>

<style lang="scss" scoped>
.card-img{
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 12px;
    width: 280px;
    height: 210px;
}
</style>
