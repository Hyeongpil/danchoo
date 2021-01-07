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
export default class Admin extends Vue {}
</script>

<style lang="scss" scoped>
//   @import "~/node_modules/ag-grid-community/dist/styles/ag-grid.css";
//   @import "~/node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
</style>
