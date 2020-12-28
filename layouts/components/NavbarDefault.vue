<template>
  <div class="nav flex flex-row bg-background-light items-center justify-between">
    <div class="flex items-center">
      <img
        src="~/assets/images/logo.png"
        class="logo-img cursor-pointer"
        @click="onLogoClicked()"
      />
      <nav-title
        class="nav-margin"
        title="전체"
        :selected="nowSelected('전체')"
        @click.native="onNavClicked('전체')"
      />
      <nav-title
        class="nav-margin"
        title="UX"
        :selected="nowSelected('UX')"
        @click.native="onNavClicked('UX')"
      />
      <nav-title
        class="nav-margin"
        title="UI"
        :selected="nowSelected('UI')"
        @click.native="onNavClicked('UI')"
      />
      <nav-title
        class="nav-margin"
        title="브랜드"
        :selected="nowSelected('브랜드')"
        @click.native="onNavClicked('브랜드')"
      />
      <nav-title
        class="nav-margin"
        title="그래픽"
        :selected="nowSelected('그래픽')"
        @click.native="onNavClicked('그래픽')"
      />
      <nav-title
        class="nav-margin"
        title="마케팅"
        :selected="nowSelected('마케팅')"
        @click.native="onNavClicked('마케팅')"
      />
      <nav-title
        class="nav-margin"
        title="영상"
        :selected="nowSelected('영상')"
        @click.native="onNavClicked('영상')"
      />
      <nav-title
        class="nav-margin"
        title="3D"
        :selected="nowSelected('3D')"
        @click.native="onNavClicked('3D')"
      />
    </div>
    <nav-title
      title="관리자"
      :selected="nowSelected('관리자')"
      @click.native="onAdminClicked()"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import NavTitle from '~/components/atoms/NavTitle.vue'
@Component({
  name: 'NavbarDefault',
  components: {
    NavTitle
  }
})
export default class NavbarDefault extends Vue {
  private selected: string = '전체'

  created() {
    this.setSelected(this.$route.path)
  }

  private setSelected(path: string) {
    if (path === '/') this.selected = '전체'
    if (path === '/ux') this.selected = 'UX'
    if (path === '/ui') this.selected = 'UI'
    if (path === '/brand') this.selected = '브랜드'
    if (path === '/graphic') this.selected = '그래픽'
    if (path === '/marketing') this.selected = '마케팅'
    if (path === '/media') this.selected = '영상'
    if (path === '/3d') this.selected = '3D'
  }

  private onNavClicked(title: string) {
    this.routerPush(title)
    this.selected = title
  }

  private onAdminClicked() {
    this.$router.push('/admin')
  }

  private routerPush(title: string) {
    if (title === '전체') this.$router.push('/')
    if (title === 'UX') this.$router.push('/ux')
    if (title === 'UI') this.$router.push('/ui')
    if (title === '브랜드') this.$router.push('/brand')
    if (title === '그래픽') this.$router.push('/graphic')
    if (title === '마케팅') this.$router.push('/marketing')
    if (title === '영상') this.$router.push('/media')
    if (title === '3D') this.$router.push('/3d')
  }

  private nowSelected(title: string) {
    return this.selected === title
  }

  private onLogoClicked() {
    this.selected = '전체'
    this.$router.push('/')
  }
}
</script>

<style lang="scss" scoped>
.nav {
  height: 66px;
}
.logo-img {
  width: 30px;
  height: 30px;
}
.nav-margin {
  margin-left: 28px;
}
</style>
