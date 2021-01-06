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
        title="관리자"
        :selected="nowSelected('관리자')"
        @click.native="onNavClicked('관리자')"
      />
      <nav-title
        class="nav-margin"
        title="프로젝트 등록"
        :selected="nowSelected('프로젝트등록')"
        @click.native="onNavClicked('프로젝트등록')"
      />
      <nav-title
        class="nav-margin"
        title="회사 등록"
        :selected="nowSelected('회사등록')"
        @click.native="onNavClicked('회사등록')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import NavTitle from '~/components/atoms/title/NavTitle.vue'
@Component({
  name: 'NavbarAdmin',
  components: {
    NavTitle
  }
})
export default class NavbarAdmin extends Vue {
  private selected: string = '관리자'

  created() {
    this.setSelected(this.$route.path)
  }

  private setSelected(path: string) {
    if (path === '/admin') this.selected = '관리자'
    if (path === '/admin/project') this.selected = '프로젝트등록'
    if (path === '/admin/company') this.selected = '회사등록'
  }

  private onNavClicked(title: string) {
    this.routerPush(title)
    this.selected = title
  }

  private routerPush(title: string) {
    if (title === '관리자') this.$router.push('/admin')
    if (title === '프로젝트등록') this.$router.push('/admin/project')
    if (title === '회사등록') this.$router.push('/admin/company')
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
