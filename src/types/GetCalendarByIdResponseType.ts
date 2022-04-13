import { GetCalendarByIdEventItemType } from "./GetCalendarByIdEventItemType"

export type GetCalendarByIdResponseType = {
  nextSyncToken: string
  items: Array<GetCalendarByIdEventItemType>
}
