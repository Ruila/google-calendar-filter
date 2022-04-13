import React, { useEffect, useState } from "react"
import { ApiContext } from "../../axios/ApiContext"
import { useAsync } from "react-use"
import { CalendarFilter } from "./CalendarFilter"
import { GetCalendarListItemType } from "../../types/GetCalendarListItemType"
import { DatePicker } from "../common/DatePicker"
import { getDateList } from "../../utils/getDateList"

export const DemoView: React.FunctionComponent = () => {
  const [currentDay, setCurrentDay] = useState<string>("")
  const [dayList, setDayList] = useState<Array<string>>([])
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

  useEffect(() => {
    if (startTime.length > 0 && endTime.length > 0) {
      const days = getDateList(new Date(startTime), new Date(endTime)).map(v =>
        v.toISOString().slice(0, 10)
      )
      setDayList([...days])
      setCurrentDay(days[0])
    }
  }, [startTime, endTime])

  const handleChangeCurrentDay = (value: string) => {
    setCurrentDay(value)
  }

  const renderCalendarFilterList = calendarList.map((item, index) => (
    <CalendarFilter
      data={item}
      startTime={startTime}
      endTime={endTime}
      key={index}
    />
  ))

  const renderDaysList = dayList.map(item => (
    <div
      className={`h-[60px] w-[120px] flex items-center justify-center rounded-2xl cursor-pointer shadow-lg m-4 ${
        currentDay === item ? "bg-[#cbe0f2]" : ""
      }`}
      onClick={() => handleChangeCurrentDay(item)}
    >
      {item}
    </div>
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
      <div className="flex">
        <div>{renderCalendarFilterList}</div>
        <div className="flex">{renderDaysList}</div>
      </div>
    </div>
  )
}
