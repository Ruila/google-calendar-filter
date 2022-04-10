import { GetCalendarListItemType } from "./GetCalendarListItemType"

export type GetCalendarListResponseType = {
  kind: string
  etag: number
  nextSyncToken: string
  items: Array<GetCalendarListItemType>
}
