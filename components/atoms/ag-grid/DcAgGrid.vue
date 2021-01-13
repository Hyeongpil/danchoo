<template>
  <client-only>
    <ag-grid-vue
      style="height: 500px;"
      class="ag-theme-balham-dark w-full"
      :grid-options="gridOptions"
      :column-defs="columnDefs"
      :row-data="rowData"
    ></ag-grid-vue>
  </client-only>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { AgGridVue } from 'ag-grid-vue'
import { ICompany } from '~/types/company.interface'

@Component({
  name: 'DcAgGrid',
  components: {
    AgGridVue
  }
})
export default class DcAgGrid extends Vue {
  @Prop({ required: true })
  private rowData: ICompany[] = []

  @Prop({ required: true })
  private columnDefs: any[] = []

  private gridOptions: any = {
    headerHeight: 40,
    getRowStyle: () => ({
      // 'text-align': 'center'
    }),
    components: {},
    onGridReady(event: any) {
      event.api.sizeColumnsToFit()
    },
    resizable: true,
    onSelectionChanged: (event: any) => this.onSelectionChanged(event),
    overlayLoadingTemplate: '<span class="ag-overlay-loading-center">불러오는 중</span>',
    overlayNoRowsTemplate:
      '<span class="ag-overlay-loading-center">데이터가 없습니다.</span>'
  }

  @Watch('columnDefs')
  private onColumnChanged() {
    this.gridOptions.api.refreshCells({ force: true })
  }

  private onSelectionChanged(event: any) {
    this.$emit('onSelectionChanged', event)
  }
}
</script>

<style lang="scss">
@import '~/node_modules/ag-grid-community/dist/styles/ag-grid.css';
@import '~/node_modules/ag-grid-community/dist/styles/ag-theme-balham-dark.css';
</style>
