<template>
  <div class="nav flex flex-row bg-background-light dan-container items-center">
    <img src="@/assets/images/logo.png" class="logo-img" />
      <nav-title class="nav-margin" title="전체" :selected="nowSelected('전체')" @click.native="onNavClicked('전체')"/>
      <nav-title class="nav-margin" title="UX" :selected="nowSelected('UX')" @click.native="onNavClicked('UX')"/>
      <nav-title class="nav-margin" title="UI" :selected="nowSelected('UI')" @click.native="onNavClicked('UI')"/>
      <nav-title class="nav-margin" title="브랜드" :selected="nowSelected('브랜드')" @click.native="onNavClicked('브랜드')"/>
      <nav-title class="nav-margin" title="그래픽" :selected="nowSelected('그래픽')" @click.native="onNavClicked('그래픽')"/>
      <nav-title class="nav-margin" title="마케팅" :selected="nowSelected('마케팅')" @click.native="onNavClicked('마케팅')"/>
      <nav-title class="nav-margin" title="영상" :selected="nowSelected('영상')" @click.native="onNavClicked('영상')"/>
      <nav-title class="nav-margin" title="3D" :selected="nowSelected('3D')" @click.native="onNavClicked('3D')"/>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import NavTitle from "~/components/atoms/NavTitle.vue"
@Component({
  name:'NavbarDefault',
  components:{
    NavTitle
  }
})
export default class NavbarDefault extends Vue {
  private selected: string = '전체'

  private onNavClicked(title:string){
    this.selected = title
  }

  private nowSelected(title: string){
    return this.selected === title
  }
}
</script>

<style lang="scss" scoped>
.nav{
  height: 66px;
}
.logo-img {
  width: 30px;
  height: 30px;
}
.nav-margin{
  margin-left: 28px;
}
</style>
