export interface ProjectDetails {
  title: string
  subtitle: string
  image: string
  paragraphs: (string | { text: string, link?: { text: string, url: string } })[]
  techStack: string
  url: string
  slug: string
  githubUrl?: string
}
