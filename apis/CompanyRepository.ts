import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { ICompany } from '~/types/company.interface'
export default class CompanyRepository {
  private $axios: NuxtAxiosInstance

  constructor($axios: NuxtAxiosInstance) {
    this.$axios = $axios
  }

  public getCompany1() {
    return this.$axios.get('companies/1')
  }

  public getCompany2() {
    return this.$axios.get('companies/2')
  }

  public setCompany(payload: ICompany): Promise<any> {
    return this.$axios.post('companies', payload)
  }
}
