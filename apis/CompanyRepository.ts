import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { ICompany } from '~/types/company.interface'
export default class CompanyRepository {
  private $axios: NuxtAxiosInstance

  constructor($axios: NuxtAxiosInstance) {
    this.$axios = $axios
  }

  public getCompanies() {
    return this.$axios.get('companies?page=0&size=10')
  }

  public setCompany(payload: ICompany): Promise<any> {
    return this.$axios.post('companies', payload)
  }
}
