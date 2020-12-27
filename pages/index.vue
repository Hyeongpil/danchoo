<template>
  <div>
    <div class="title">{{title}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator"
import { Route } from 'vue-router'
@Component({
  name:'Main'
})
export default class Main extends Vue {
  private title: string = '전체'

  private titleChange(path: string){
    if(path === '/') this.title = '전체'
    if(path === '/ux') this.title = 'UX'
    if(path === '/ui') this.title = 'UI'
    if(path === '/brand') this.title = '브랜드'
    if(path === '/graphic') this.title = '그래픽'
    if(path === '/marketing') this.title = '마케팅'
    if(path === '/media') this.title = '영상'
    if(path === '/3d') this.title = '3D'
  }

  created() {
    this.titleChange(this.$route.path)
  }
}
</script>

<style lang="scss" scoped>
.title{
  font-weight: 700;
  font-size: 36px;
  color: white;
}
</style>