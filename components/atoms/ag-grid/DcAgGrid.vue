<template>
  <no-ssr>
    <ag-grid-vue
      style="height: 500px;"
      class="ag-theme-balham-dark w-full"
      :column-defs="columnDefs"
      :row-data="rowData"
      :default-col-def="defaultColDef"
    ></ag-grid-vue>
  </no-ssr>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { AgGridVue } from 'ag-grid-vue'

@Component({
  name: 'DcAgGrid',
  components: {
    AgGridVue
  }
})
export default class DcAgGrid extends Vue {
  columnDefs: any = [
    { headerName: '회사명', field: 'company' },
    { headerName: '홈페이지', field: 'homepage' },
    { headerName: '파트너', field: 'partners' }
  ]

  rowData: any = [
    {
      company: '롯데정보통신',
      homepage: 'https://www.ldcc.co.kr',
      partners: `그린카,현대정보통신`
    },
    { company: '그린카', homepage: 'https://www.ldcc.co.kr', partners: '피리정보통신' },
    { company: '카카오', homepage: 'https://www.ldcc.co.kr', partners: '' }
  ]

  defaultColDef: {} = {
    editable: true
  }
}
</script>

<style lang="scss">
@import '~/node_modules/ag-grid-community/dist/styles/ag-grid.css';
@import '~/node_modules/ag-grid-community/dist/styles/ag-theme-balham-dark.css';
</style>
