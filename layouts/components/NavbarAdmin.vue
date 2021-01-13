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
    <nav-title
      v-if="isLogin"
      class="nav-margin"
      title="로그아웃"
      @click.native="onLogoutClicked()"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Toastify from 'toastify-js'
import NavTitle from '~/components/atoms/title/NavTitle.vue'
import { adminStore } from '~/store'
@Component({
  name: 'NavbarAdmin',
  components: {
    NavTitle
  }
})
export default class NavbarAdmin extends Vue {
  private selected: string = '관리자'
  private menuList: string[] = ['관리자', '프로젝트 등록', '회사 등록']

  created() {
    this.setSelected(this.$route.path)
  }

  private setSelected(path: string) {
    if (path === '/admin') this.selected = '관리자'
    if (path === '/admin/project') this.selected = '프로젝트 등록'
    if (path === '/admin/company') this.selected = '회사 등록'
  }

  private onNavClicked(title: string) {
    this.routerPush(title)
    this.selected = title
  }

  private routerPush(title: string) {
    if (title === '관리자') this.$router.push('/admin')
    if (title === '프로젝트 등록') this.$router.push('/admin/project')
    if (title === '회사 등록') this.$router.push('/admin/company')
  }

  private nowSelected(title: string) {
    return this.selected === title
  }

  private onLogoClicked() {
    this.selected = '전체'
    this.$router.push('/')
  }

  private onLogoutClicked() {
    Toastify({
      text: '로그아웃 되었습니다.',
      duration: 3000,
      gravity: 'top', // `top` or `bottom`
      position: 'right' // `left`, `center` or `right`
    }).showToast()
    adminStore.INIT()
    this.$router.push('/')
  }

  get isLogin() {
    return adminStore.accessToken !== ''
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
