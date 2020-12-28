import { NuxtAxiosInstance } from '@nuxtjs/axios'
import PostRepository from '~/apis/PostRepository'
import FileRepository from '~/apis/FileRepository'
import CompanyRepository from './CompanyRepository'

export default ($axios: NuxtAxiosInstance) => ({
  post: new PostRepository($axios),
  file: new FileRepository($axios),
  company: new CompanyRepository($axios)
})

export interface IRepositorys {
  post: PostRepository
  file: FileRepository
  company: CompanyRepository
}
