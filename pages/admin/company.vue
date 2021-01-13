<template>
  <div class="flex flex-col">
    <div v-if="loading">
      <dc-loading />
    </div>
    <div class="flex flex-row items-center mb-5">
      <dc-text content="회사 등록" size="2xl" class="font-bold" />
      <dc-icon
        icon="file-plus"
        class="cursor-pointer ml-3"
        @click.native="$refs.fileInput.click()"
      />
    </div>

    <admin-file-tab class="mb-5" @onTabChanged="handleTab" />

    <client-only>
      <dc-ag-grid :row-data.sync="getCompanyList" :column-defs.sync="nowColumnDef" />
    </client-only>

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
import { CellEvent, CellValueChangedEvent } from '@ag-grid-community/all-modules'
import DcAgGrid from '~/components/atoms/ag-grid/DcAgGrid.vue'
import DcIcon from '~/components/atoms/icon/DcIcon.vue'
import DcText from '~/components/atoms/text/DcText.vue'
import AdminFileTab from '~/components/molecules/admin-file-tab/AdminFileTab.vue'
import DcButton from '~/components/atoms/button/DcButton.vue'
import DcFormItem from '~/components/atoms/form-item/DcFormItem.vue'
import DcForm from '~/components/atoms/form/DcForm.vue'
import LabelInput from '~/components/molecules/label-input/LabelInput.vue'
import { ICompany, ISnsLink } from '~/types/company.interface'
import DcLoading from '~/components/atoms/loading/DcLoading.vue'

@Component({
  name: 'Company',
  layout: 'admin',
  components: {
    DcAgGrid,
    DcText,
    DcIcon,
    AdminFileTab,
    DcButton,
    DcFormItem,
    DcForm,
    LabelInput,
    DcLoading
  },
  middleware: 'isLogin'
})
export default class Company extends Vue {
  private companyName = ''
  private partners = ''
  private brunch = ''
  private behance = ''
  private medium = ''
  private instagram = ''
  private homepageUrl = ''
  private snsLinks: ISnsLink[] = []
  private companyList = []
  private loading = false

  private successColumnDefs: any[] = [
    { headerName: '회사명', field: 'companyName' },
    { headerName: '홈페이지', field: 'homepageUrl' },
    { headerName: '파트너', field: 'partners' },
    {
      headerName: '인스타그램',
      cellRenderer: (params: CellEvent) => {
        const sns = params.data.snsLinks.find((sns: ISnsLink) => {
          return sns.type === 'INSTAGRAM'
        })
        if (sns) return sns.endpoint
      }
    },
    {
      headerName: '브런치',
      cellRenderer: (params: CellEvent) => {
        const sns = params.data.snsLinks.find((sns: ISnsLink) => {
          return sns.type === 'BRUNCH'
        })
        if (sns) return sns.endpoint
      }
    },
    {
      headerName: '미디엄',
      cellRenderer: (params: CellEvent) => {
        const sns = params.data.snsLinks.find((sns: ISnsLink) => {
          return sns.type === 'MEDIUM'
        })
        if (sns) return sns.endpoint
      }
    },
    {
      headerName: 'BEHANCE',
      cellRenderer: (params: CellEvent) => {
        const sns = params.data.snsLinks.find((sns: ISnsLink) => {
          return sns.type === 'BEHANCE'
        })
        if (sns) return sns.endpoint
      }
    }
  ]

  private failColumnDefs: any[] = [
    {
      headerName: '재요청',
      cellRenderer: (params: CellEvent) => {
        const buttonElem = document.createElement('BUTTON')
        buttonElem.innerHTML = '다시 등록하기'
        buttonElem.addEventListener('click', () => {
          this.setCompany(params.data, params.data.id)
        })

        return buttonElem
      }
    },
    { headerName: '회사명', field: 'companyName', editable: true },
    { headerName: '홈페이지', field: 'homepageUrl', editable: true },
    { headerName: '파트너', field: 'partners', editable: true },
    {
      headerName: '인스타그램',
      editable: true,
      cellRenderer: (params: CellEvent) => {
        const sns = params.data.snsLinks.find((sns: ISnsLink) => {
          return sns.type === 'INSTAGRAM'
        })
        if (sns) return sns.endpoint
      },
      valueSetter: (event: CellValueChangedEvent) => {
        const sns = event.data.snsLinks.find((sns: ISnsLink) => {
          return sns.type === 'INSTAGRAM'
        })
        sns.endpoint = event.newValue
      }
    },
    {
      headerName: '브런치',
      editable: true,
      cellRenderer: (params: CellEvent) => {
        const sns = params.data.snsLinks.find((sns: ISnsLink) => {
          return sns.type === 'BRUNCH'
        })
        if (sns) return sns.endpoint
      },
      valueSetter: (event: CellValueChangedEvent) => {
        const sns = event.data.snsLinks.find((sns: ISnsLink) => {
          return sns.type === 'BRUNCH'
        })
        sns.endpoint = event.newValue
      }
    },
    {
      headerName: '미디엄',
      editable: true,
      cellRenderer: (params: CellEvent) => {
        const sns = params.data.snsLinks.find((sns: ISnsLink) => {
          return sns.type === 'MEDIUM'
        })
        if (sns) return sns.endpoint
      },
      valueSetter: (event: CellValueChangedEvent) => {
        const sns = event.data.snsLinks.find((sns: ISnsLink) => {
          return sns.type === 'MEDIUM'
        })
        sns.endpoint = event.newValue
      }
    },
    {
      headerName: 'BEHANCE',
      editable: true,
      cellRenderer: (params: CellEvent) => {
        const sns = params.data.snsLinks.find((sns: ISnsLink) => {
          return sns.type === 'BEHANCE'
        })
        if (sns) return sns.endpoint
      },
      valueSetter: (event: CellValueChangedEvent) => {
        const sns = event.data.snsLinks.find((sns: ISnsLink) => {
          return sns.type === 'BEHANCE'
        })
        sns.endpoint = event.newValue
      }
    }
  ]

  private nowColumnDef: any[] = this.successColumnDefs

  get getCompanyList() {
    return this.companyList
  }

  created() {
    this.fetchCompany()
  }

  private fetchCompany() {
    this.$repositories.company
      .getCompanies()
      .then((res) => {
        console.log('fetchCompany res :', res)
        this.companyList = res.data.content
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

  private fetchFailCompany() {
    this.$repositories.company
      .getFailCompanies()
      .then((res) => {
        console.log('fetchFailCompany res :', res)
        this.companyList = res.data.content
      })
      .catch((err) => {
        Toastify({
          text: err.response.data.message,
          duration: 3000,
          gravity: 'top',
          position: 'right'
        }).showToast()
      })
  }

  private fileUploaded(event: any) {
    const formFile = new FormData()
    formFile.append('file', event.target.files[0], event.target.files[0].name)
    this.$repositories.file
      .companyFiles(formFile)
      .then(() => {
        Toastify({
          text: '파일이 업로드 되었습니다.',
          duration: 3000,
          gravity: 'top',
          position: 'right'
        }).showToast()
      })
      .catch((err) => {
        Toastify({
          text: err.response.data.message,
          duration: 3000,
          gravity: 'top',
          position: 'right'
        }).showToast()
      })
  }

  private handleTab(tab: string) {
    if (tab === 'success') {
      this.fetchCompany()
      this.nowColumnDef = this.successColumnDefs
    } else {
      this.fetchFailCompany()
      this.nowColumnDef = this.failColumnDefs
    }
  }

  private onSubmit() {
    this.snsLinks.push({
      type: 'INSTAGRAM',
      endpoint: this.instagram
    })
    this.snsLinks.push({
      type: 'BRUNCH',
      endpoint: this.brunch
    })
    this.snsLinks.push({
      type: 'MEDIUM',
      endpoint: this.medium
    })
    this.snsLinks.push({
      type: 'BEHANCE',
      endpoint: this.behance
    })
    const company: ICompany = {
      companyName: this.companyName,
      homepageUrl: this.homepageUrl,
      partners: this.partners.split(','),
      snsLinks: this.snsLinks
    }
    this.setCompany(company, '')
  }

  private setCompany(company: ICompany, id: string) {
    this.loading = true
    this.$repositories.company
      .setCompany(company)
      .then(async () => {
        this.loading = false
        Toastify({
          text: '등록되었습니다.',
          duration: 3000,
          gravity: 'top',
          position: 'right'
        }).showToast()
        // 아이디가 있으면 실패요청 등록
        if (id) {
          await this.$repositories.company.delFailRegisterCompanies(id)
          this.fetchFailCompany()
        } else {
          this.fetchCompany()
        }
      })
      .catch((err) => {
        this.loading = false
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
