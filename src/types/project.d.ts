type Repo = {
  name: string
  link: string
}

export interface Project {
  id: string
  title: string
  description: string
  link: string
  github: string
  image: string
  tags: any[]
  images: string[]
  multiple_repos: Repo[]
  full_description: string
  demo_video?: string
}
