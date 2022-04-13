import React, { useState } from "react"
import { ApiContext } from "../../axios/ApiContext"
import { useAsync } from "react-use"
import { CalendarFilter } from "./CalendarFilter"
import { GetCalendarListItemType } from "../../types/GetCalendarListItemType"
import { DatePicker } from "../common/DatePicker"

export const DemoView: React.FunctionComponent = () => {
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [calendarList, setCalendarList] = useState<
    Array<GetCalendarListItemType>
  >([])

  useAsync(async () => {
    const res = await ApiContext.GoogleCalendarFilterExecutor.getCalendarList()
    setCalendarList(res.items)
    return res
  }, [])

  const handleChangeStartTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartTime(e.target.value)
  }

  const handleChangeEndTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndTime(e.target.value)
  }
  const renderCalendarFilterList = calendarList.map((item, index) => (
    <CalendarFilter
      data={item}
      startTime={startTime}
      endTime={endTime}
      key={index}
    />
  ))

  return (
    <div className="p-4">
      <div className="flex">
        <DatePicker
          value={startTime}
          onChange={handleChangeStartTime}
          label="start"
        />
        <DatePicker
          value={endTime}
          onChange={handleChangeEndTime}
          label="end"
        />
      </div>
      <div>{renderCalendarFilterList}</div>
    </div>
  )
}
