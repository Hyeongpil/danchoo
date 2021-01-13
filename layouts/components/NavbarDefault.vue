<template>
  <div class="nav flex flex-row bg-background-light items-center justify-between">
    <div class="flex items-center">
      <img
        src="~/assets/images/logo.png"
        class="logo-img cursor-pointer"
        @click="onLogoClicked()"
      />
      <nav-title
        v-for="(menu, idx) in menuList"
        :key="idx"
        class="nav-margin"
        :title="menu"
        :selected="nowSelected(menu)"
        @click.native="onNavClicked(menu)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import NavTitle from '~/components/atoms/title/NavTitle.vue'
@Component({
  name: 'NavbarDefault',
  components: {
    NavTitle
  }
})
export default class NavbarDefault extends Vue {
  private selected: string = '전체'
  private menuList: string[] = [
    '전체',
    'UX',
    'UI',
    '브랜드',
    '그래픽',
    '마케팅',
    '영상',
    '3D'
  ]

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
