import React, { useEffect, useState } from "react"
import { ApiContext } from "../../axios/ApiContext"
import { useAsyncFn } from "react-use"
import Checkbox from "@mui/material/Checkbox"
import { GetCalendarListItemType } from "../../types/GetCalendarListItemType"
import { getAvailableTimes } from "../../utils/getAvailableTimes"

type CalendarFilterProps = {
  data: GetCalendarListItemType
  startTime: string
  endTime: string
  currentDay: string
}

export const CalendarFilter: React.FunctionComponent<CalendarFilterProps> = ({
  data,
  startTime,
  endTime,
  currentDay
}) => {
  const [checkValue, setCheckValue] = useState<boolean>(false)
  const [, getCalendar] = useAsyncFn(async (start, end) => {
    const res = await ApiContext.GoogleCalendarFilterExecutor.getCalendarById(
      data.id,
      start,
      end
    )
    const filterTime = res.items.filter(item => {
      console.info("new Date(item.start.dateTime).getMonth()", item.start.dateTime, currentDay)
      console.info("asas", new Date(item.start.dateTime).getMonth(), new Date(item.start.dateTime).getDate())
      console.info("asas", new Date(currentDay).getMonth(), new Date(currentDay).getDate())
      return (new Date(item.start.dateTime).getMonth() === new Date(currentDay).getMonth()) && (new Date(item.start.dateTime).getDate() === new Date(currentDay).getDate())
    })
    getAvailableTimes(filterTime)
    return res
  }, [currentDay])

  const handleOnChane = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckValue(e.target.checked)
  }

  useEffect(() => {
    if (checkValue) {
      const endTimeResult = new Date(endTime).getTime() + 60 * 60 * 24 * 1000
      getCalendar(
        new Date(startTime).toISOString(),
        new Date(endTimeResult).toISOString()
      ).catch()
    }
  }, [checkValue])

  useEffect(()=> {
    console.info("currentDay in prop", currentDay)
  }, [currentDay])

  return (
    <div className="my-4">
      <div className="flex items-center">
        <Checkbox
          checked={checkValue}
          onChange={handleOnChane}
          className="mr-2"
        />
        <div className="mx-4">{data.summary}</div>
      </div>
    </div>
  )
}
