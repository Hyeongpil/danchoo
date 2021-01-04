import { NuxtAxiosInstance } from '@nuxtjs/axios'
export default class CompanyRepository {
  private $axios: NuxtAxiosInstance

  private resource: string = '/posts'

  constructor($axios: NuxtAxiosInstance) {
    this.$axios = $axios
  }

  public getCompany1() {
    return this.$axios.get('companies/1')
  }

  public getCompany2() {
    return this.$axios.get('companies/2')
  }
}
