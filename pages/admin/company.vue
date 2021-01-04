co<template>
  <div class="flex flex-col">
    <div class="flex flex-row items-center mb-5">
      <dc-text content="회사 등록" size="2xl" class="font-bold" />
      <dc-icon
        icon="file-plus"
        class="cursor-pointer ml-3"
        @click.native="$refs.fileInput.click()"
      />
    </div>

    <dc-text content="등록 성공" size="xl" class="font-bold mb-2" />
    <no-ssr>
      <dc-ag-grid />
    </no-ssr>

    <input
      id="input-info-image"
      ref="fileInput"
      type="file"
      style="display:none"
      @change="fileUploaded($event)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import DcAgGrid from '~/components/atoms/DcAgGrid.vue'
import DcIcon from '~/components/atoms/DcIcon.vue'
import DcText from '~/components/atoms/DcText.vue'
@Component({
  name: 'AdminFile',
  layout: 'admin',
  components: {
    DcAgGrid,
    DcText,
    DcIcon
  }
})
export default class AdminFile extends Vue {
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
}
</script>

<style ${2|scoped,|} lang="scss"></style>
