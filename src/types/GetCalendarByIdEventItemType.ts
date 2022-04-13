export type GetCalendarByIdEventItemType = {
  status: string
  start: TimeType
  end: TimeType
}

type TimeType = {
  dateTime: Date
  timeZone: string
}
