<template>
  <!-- <img :src="getImgSrc()" class="icon-img m-text" /> -->
  <img :src="require(`@/assets/images/` + imgSrc)" class="icon-img m-text" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'DcBullet'
})
export default class DcBullet extends Vue {
  @Prop({ required: false, default: '' })
  imgSrc!: string
}
</script>

<style ${2|scoped,|} lang="scss">
.icon-img {
  width: 21px;
  height: 21px;
}
</style>
