export interface Project {
  id: string
  category: string
  title: string
  description: string
  image: string
  github?: string
  demo?: string
  tags: string[]
}

export interface Skill {
  name: string
  icon: any
  color: string
}

export interface SocialLink {
  name: string
  url: string
  icon: any
}
