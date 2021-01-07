import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { IProject } from '~/types/project.interface'

export default class ProjectRepository {
  private $axios: NuxtAxiosInstance

  constructor($axios: NuxtAxiosInstance) {
    this.$axios = $axios
  }

  public setProject(payload: IProject): Promise<any> {
    return this.$axios.post('projects', payload)
  }
}
