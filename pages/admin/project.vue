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
      <dc-ag-grid :row-data.sync="getProjectList" :column-defs="columnDefs" />
    </no-ssr>

    <div class="mt-10">
      <dc-text content="개별 프로젝트 등록" size="xl" class="font-bold" />
      <dc-form class="mt-5" @onSubmit="onSubmit">
        <dc-form-item name="프로젝트 이름" rules="required">
          <label-input v-model="project" content="프로젝트 이름" />
        </dc-form-item>
        <dc-form-item name="카테고리" rules="required">
          <label-slot content="카테고리">
            <dc-select v-model="categoryType" />
          </label-slot>
        </dc-form-item>
        <dc-form-item name="클라이언트 스케일 타입" rules="required">
          <label-input v-model="clientScaleType" content="클라이언트 스케일 타입" />
        </dc-form-item>
        <dc-form-item name="회사 유형" rules="required">
          <label-input v-model="industryType" content="회사 유형" />
        </dc-form-item>

        <dc-form-item name="회사 이름" rules="required">
          <label-input v-model="companyName" content="회사 이름" />
        </dc-form-item>

        <label-input
          v-model="thumbnailImageUrl"
          content="썸네일 이미지 URL"
          class="mb-2"
        />

        <label-input v-model="imageUrls" content="이미지 URL" class="mb-2" />

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
import Toastify from 'toastify-js'
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
import { IProject } from '~/types/project.interface'

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
  private categoryType = ''
  private clientScaleType = ''
  private companyName = ''
  private industryType = ''
  private thumbnailImageUrl = ''
  private imageUrls = []

  private projectList = []

  get getProjectList() {
    return this.projectList
  }

  private columnDefs: any = [
    { headerName: '프로젝트 이름', field: 'projectName' },
    { headerName: '회사명', field: 'companyName' },
    { headerName: '카테고리', field: 'categoryType' },
    { headerName: '회사 유형', field: 'industryType' }
  ]

  created() {
    this.fetchProject()
  }

  private fetchProject() {
    this.$repositories.project
      .getProjects()
      .then((res) => {
        console.log('res :', res)
        this.projectList = res.data.content
      })
      .catch((err) => {
        Toastify({
          text: err.message,
          duration: 3000,
          gravity: 'top', // `top` or `bottom`
          position: 'right' // `left`, `center` or `right`
        }).showToast()
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

  private handleTab(tab: any) {
    console.log('tab :', tab)
  }

  private onSubmit() {
    const project: IProject = {
      projectName: this.project,
      categoryType: this.categoryType,
      clientScaleType: this.clientScaleType,
      companyName: this.companyName,
      industryType: this.industryType,
      thumbnailImageUrl: this.thumbnailImageUrl,
      imageUrls: this.imageUrls
    }

    this.$repositories.project
      .setProject(project)
      .then((res) => {
        this.fetchProject()
        Toastify({
          text: '프로젝트가 등록되었습니다.',
          duration: 3000,
          gravity: 'top', // `top` or `bottom`
          position: 'right' // `left`, `center` or `right`
        }).showToast()
      })
      .catch((err) => {
        console.log('err :', err)
        Toastify({
          text: err.message,
          duration: 3000,
          gravity: 'top', // `top` or `bottom`
          position: 'right' // `left`, `center` or `right`
        }).showToast()
      })
  }
}
</script>

<style ${2|scoped,|} lang="scss"></style>
