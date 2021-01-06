<template>
  <div>
    <dc-text content="관리자 메인" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import DcText from '~/components/atoms/text/DcText.vue'

@Component({
  name: 'Admin',
  layout: 'admin',
  components: { DcText }
})
export default class Admin extends Vue {
  private onClicked1() {
    this.$repositories.company
      .getCompany1()
      .then((res) => {
        console.log('res :', res)
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }

  private onClicked2() {
    this.$repositories.company
      .getCompany2()
      .then((res) => {
        console.log('res :', res)
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }

  private fileUploaded(event: any) {
    const formFile = new FormData()
    formFile.append('file', event.target.files[0], event.target.files[0].name)
    this.$repositories.file
      .companyFiles(formFile)
      .then((res) => {
        console.log('res :', res)
      })
      .catch((err) => {
        console.log('err :', err)
      })
  }
  // private columnDefs:any = []
  // private rowData:any = []

  // fetch(){
  //     this.columnDefs = [
  //     {headerName: '회사명', field: 'make'},
  //     {headerName: '협력사', field: 'model'},
  //     {headerName: '홈페이지', field: 'price'},
  //     {headerName: '미디움링크', field: 'medium'},
  //     {headerName: '인스타그램링크', field: 'insta'},
  //     {headerName: '브런치링크', field: 'branch'}
  // ]
  //     this.rowData = []
  // }
}
</script>

<style lang="scss" scoped>
//   @import "~/node_modules/ag-grid-community/dist/styles/ag-grid.css";
//   @import "~/node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
</style>
