import React, { useState } from "react"
import { ApiContext } from "../../axios/ApiContext"
import { useAsync } from "react-use"
import { CalendarFilter } from "./CalendarFilter"
import { GetCalendarListItemType } from "../../types/GetCalendarListItemType"

export const DemoView: React.FunctionComponent = () => {
  const [calendarList, setCalendarList] = useState<
    Array<GetCalendarListItemType>
  >([])

  useAsync(async () => {
    const res = await ApiContext.GoogleCalendarFilterExecutor.getCalendarList()
    setCalendarList(res.items)
    return res
  }, [])

  const renderCalendarFilterList = calendarList.map(item => (
    <CalendarFilter data={item} />
  ))

  return <div>{renderCalendarFilterList}</div>
}
