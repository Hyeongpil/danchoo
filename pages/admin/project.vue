<template>
  <div class="flex flex-col">
    <div class="flex flex-row items-center mb-5">
      <dc-text content="프로젝트 등록" size="2xl" class="font-bold" />
      <dc-icon
        icon="file-plus"
        class="cursor-pointer ml-3"
        @click.native="$refs.fileInput.click()"
      />
    </div>

    <admin-file-tab class="mb-5" @onTabChanged="handleTab" />

    <no-ssr>
      <dc-ag-grid />
    </no-ssr>

    <div class="mt-10">
      <dc-text content="개별 프로젝트 등록" size="xl" class="font-bold" />
      <dc-form @onSubmit="onSubmit">
        <dc-form-item name="프로젝트 이름" rules="required">
          <label-input v-model="project" content="프로젝트 이름" class="mt-5" />
        </dc-form-item>
        <label-slot content="카테고리 선택">
          <dc-select />
        </label-slot>
        <dc-button type="submit" text="등록" />
      </dc-form>
    </div>

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
import DcAgGrid from '~/components/atoms/ag-grid/DcAgGrid.vue'
import DcButton from '~/components/atoms/button/DcButton.vue'
import DcFormItem from '~/components/atoms/form-item/DcFormItem.vue'
import DcForm from '~/components/atoms/form/DcForm.vue'
import DcIcon from '~/components/atoms/icon/DcIcon.vue'
import DcSelect from '~/components/atoms/select/DcSelect.vue'
import DcText from '~/components/atoms/text/DcText.vue'
import AdminFileTab from '~/components/molecules/admin-file-tab/AdminFileTab.vue'
import LabelInput from '~/components/molecules/label-input/LabelInput.vue'
import LabelSlot from '~/components/molecules/label-slot/LabelSlot.vue'

@Component({
  name: 'AdminFile',
  layout: 'admin',
  components: {
    DcAgGrid,
    DcText,
    DcIcon,
    AdminFileTab,
    LabelInput,
    DcForm,
    DcFormItem,
    DcSelect,
    LabelSlot,
    DcButton
  }
})
export default class AdminFile extends Vue {
  private project = ''

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

  private handleTab(tab: any) {
    console.log('tab :', tab)
  }

  private onSubmit() {
    console.log('project :', this.project)
  }
}
</script>

<style ${2|scoped,|} lang="scss"></style>
