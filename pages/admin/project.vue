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

    <client-only>
      <dc-ag-grid :row-data.sync="getProjectList" :column-defs="nowColumnDef" />
    </client-only>

    <div class="mt-10">
      <dc-text content="개별 프로젝트 등록" size="xl" class="font-bold" />
      <dc-form class="mt-5" @onSubmit="onSubmit">
        <dc-form-item name="프로젝트 이름" rules="required">
          <label-input v-model="project" content="프로젝트 이름" />
        </dc-form-item>
        <dc-form-item name="카테고리" rules="required">
          <label-slot content="카테고리">
            <dc-select v-model="categoryType" :options="categoryOptions" />
          </label-slot>
        </dc-form-item>
        <dc-form-item name="회사 규모" rules="required">
          <label-slot content="회사 규모">
            <dc-select v-model="clientScaleType" :options="clientScaleTypeOptions" />
          </label-slot>
        </dc-form-item>
        <dc-form-item name="회사 유형" rules="required">
          <label-slot content="회사 유형">
            <dc-select v-model="industryType" :options="industryTypeOptions" />
          </label-slot>
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
import { CellEvent } from '@ag-grid-community/all-modules'
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
import { ISelectOption } from '~/types/type.interface'

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
  },
  middleware: 'isLogin'
})
export default class AdminFile extends Vue {
  private project = ''
  private categoryType = ''
  private clientScaleType = ''
  private companyName = ''
  private industryType = ''
  private thumbnailImageUrl = ''
  private imageUrls = ''
  private projectList = []
  private nowFilter = 'success'

  private successColumnDefs: any[] = [
    { headerName: '프로젝트 이름', field: 'projectName' },
    { headerName: '회사명', field: 'company.companyName' },
    {
      headerName: '카테고리',
      cellRenderer: (params: CellEvent) => {
        return this.categoryOptions.filter(
          (category) => category.key === params.data.categoryType
        )[0].value
      }
    },
    {
      headerName: '회사 규모',
      cellRenderer: (params: CellEvent) => {
        return this.clientScaleTypeOptions.filter(
          (clientScale) => clientScale.key === params.data.clientScaleType
        )[0].value
      }
    },
    {
      headerName: '회사 유형',
      cellRenderer: (params: CellEvent) => {
        return this.industryTypeOptions.filter(
          (industryType) => industryType.key === params.data.industryType
        )[0].value
      }
    },
    { headerName: '썸네일 이미지 URL', field: 'thumbnailImageUrl' },
    { headerName: '이미지 URL', field: 'imageUrls' }
  ]

  private failColumnDefs: any[] = [
    {
      headerName: '재요청',
      cellRenderer: (params: CellEvent) => {
        const buttonElem = document.createElement('BUTTON')
        buttonElem.innerHTML = '다시 등록하기'
        buttonElem.addEventListener('click', () => {
          this.setProject(params.data, params.data.id)
        })

        return buttonElem
      }
    },
    { headerName: '프로젝트 이름', field: 'projectName', editable: true },
    { headerName: '회사명', field: 'companyName', editable: true },
    {
      headerName: '카테고리',
      cellRenderer: (params: CellEvent) => {
        return this.categoryOptions.filter(
          (category) => category.key === params.data.categoryType
        )[0].value
      },
      editable: true
    },
    {
      headerName: '회사 규모',
      cellRenderer: (params: CellEvent) => {
        return this.clientScaleTypeOptions.filter(
          (clientScale) => clientScale.key === params.data.clientScaleType
        )[0].value
      },
      editable: true
    },
    {
      headerName: '회사 유형',
      cellRenderer: (params: CellEvent) => {
        return this.industryTypeOptions.filter(
          (industryType) => industryType.key === params.data.industryType
        )[0].value
      },
      editable: true
    },
    { headerName: '썸네일 이미지 URL', field: 'thumbnailImageUrl', editable: true },
    { headerName: '이미지 URL', field: 'imageUrls', editable: true }
  ]

  private nowColumnDef: any[] = this.successColumnDefs

  private categoryOptions: ISelectOption[] = [
    { key: 'UI_UX', value: 'UI_UX' },
    { key: 'UX_RESEARCH', value: 'UX리서치' },
    { key: 'BRANDING', value: '브랜딩' },
    { key: 'VIDEO', value: '영상' },
    { key: 'THREE_D', value: '3D' },
    { key: 'MARKETING', value: '마케팅' },
    { key: 'GRAPHIC', value: '그래픽' }
  ]

  private clientScaleTypeOptions: ISelectOption[] = [
    { key: 'MAJOR_COMPANY', value: '대기업' },
    { key: 'MIDDLE_COMPANY', value: '중견기업' },
    { key: 'SMALL_COMPANY', value: '중소기업' },
    { key: 'START_UP', value: '스타트업' }
  ]

  private industryTypeOptions: ISelectOption[] = [
    { key: 'BLOCK_CHAIN', value: '블록체인' },
    { key: 'COSMETIC', value: '화장품' }
  ]

  get getProjectList() {
    return this.projectList
  }

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
          text: err.response.data.message,
          duration: 3000,
          gravity: 'top', // `top` or `bottom`
          position: 'right' // `left`, `center` or `right`
        }).showToast()
      })
  }

  private fetchFailProject() {
    this.$repositories.project
      .getFailProjects()
      .then((res) => {
        console.log('res :', res)
        this.projectList = res.data.content
      })
      .catch((err) => {
        Toastify({
          text: err.response.data.message,
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

  private handleTab(tab: string) {
    if (tab === 'success') {
      this.fetchProject()
      this.nowColumnDef = this.successColumnDefs
    } else {
      this.fetchFailProject()
      this.nowColumnDef = this.failColumnDefs
    }
  }

  private onSubmit() {
    const project: IProject = {
      projectName: this.project,
      categoryType: this.categoryType,
      clientScaleType: this.clientScaleType,
      companyName: this.companyName,
      industryType: this.industryType,
      thumbnailImageUrl: this.thumbnailImageUrl,
      imageUrls: this.imageUrls.split(',')
    }
    this.setProject(project, '')
  }

  private setProject(project: IProject, id: string) {
    this.$repositories.project
      .setProject(project)
      .then(async () => {
        this.fetchProject()
        Toastify({
          text: '프로젝트가 등록되었습니다.',
          duration: 3000,
          gravity: 'top', // `top` or `bottom`
          position: 'right' // `left`, `center` or `right`
        }).showToast()
        // 아이디가 있으면 실패요청 등록
        if (id) {
          await this.$repositories.project.delFailRegisterProjects(id)
          this.fetchFailProject()
        } else {
          this.fetchProject()
        }
      })
      .catch((err) => {
        console.log('err :', err)
        Toastify({
          text: err.response.data.message,
          duration: 3000,
          gravity: 'top', // `top` or `bottom`
          position: 'right' // `left`, `center` or `right`
        }).showToast()
      })
  }
}
</script>

<style ${2|scoped,|} lang="scss"></style>
