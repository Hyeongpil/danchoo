export interface ICompany {
  companyName: string
  homepageUrl: string
  partners: string[]
  snsLinks: ISnsLink[]
}

export interface ISnsLink {
  type: string
  endpoint: string
}
