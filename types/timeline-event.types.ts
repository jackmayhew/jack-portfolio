export interface TimelineEvent {
  displayDate: string
  formateDate: string
  desc: string
  link?: {
    url: string
    text: string
  }
}
