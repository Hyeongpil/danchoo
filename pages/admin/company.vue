<template>
  <div class="flex flex-col">
    <div class="flex flex-row items-center mb-5">
      <dc-text content="회사 등록" size="2xl" class="font-bold" />
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
      <dc-text content="개별 회사 등록" size="xl" class="font-bold" />
      <dc-form class="mt-5" @onSubmit="onSubmit">
        <dc-form-item name="회사 이름" rules="required">
          <label-input v-model="companyName" content="회사 이름" />
        </dc-form-item>
        <dc-form-item name="홈페이지 URL" rules="required">
          <label-input v-model="homepageUrl" content="홈페이지 URL" />
        </dc-form-item>

        <label-input v-model="partners" content="파트너" class="mb-2" />

        <label-input v-model="instagram" content="인스타그램" class="mb-2" />

        <label-input v-model="brunch" content="브런치" class="mb-2" />

        <label-input v-model="medium" content="MEDIUM" class="mb-2" />

        <label-input v-model="behance" content="BEHANCE" class="mb-2" />

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
import DcIcon from '~/components/atoms/icon/DcIcon.vue'
import DcText from '~/components/atoms/text/DcText.vue'
import AdminFileTab from '~/components/molecules/admin-file-tab/AdminFileTab.vue'
import DcButton from '~/components/atoms/button/DcButton.vue'
import DcFormItem from '~/components/atoms/form-item/DcFormItem.vue'
import DcForm from '~/components/atoms/form/DcForm.vue'
import LabelInput from '~/components/molecules/label-input/LabelInput.vue'
import { ICompany } from '~/types/company.interface'

@Component({
  name: 'AdminFile',
  layout: 'admin',
  components: {
    DcAgGrid,
    DcText,
    DcIcon,
    AdminFileTab,
    DcButton,
    DcFormItem,
    DcForm,
    LabelInput
  }
})
export default class AdminFile extends Vue {
  private companyName = ''
  private partners = []
  private brunch = ''
  private behance = ''
  private medium = ''
  private instagram = ''
  private homepageUrl = ''
  private snsLinks = []

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
    const company: ICompany = {
      companyName: this.companyName,
      homepageUrl: this.homepageUrl,
      partners: this.partners,
      snsLinks: this.snsLinks
    }

    this.$repositories.company
      .setCompany(company)
      .then((res) => {
        console.log('res :', res)
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
}
</script>

<style ${2|scoped,|} lang="scss"></style>
