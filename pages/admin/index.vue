<template>
  <div>
    어드민

    <input
      id="input-info-image"
      ref="fileInput"
      type="file"
      @change="fileUploaded($event)"
    />
    <!-- <client-only>
        <ag-grid-vue style="width: 500px; height: 500px;"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="rowData">
    </ag-grid-vue>
    </client-only> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
// import { AgGridVue } from 'ag-grid-vue'

@Component({
  name: 'Admin'
  // components:{ AgGridVue }
})
export default class Admin extends Vue {
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
