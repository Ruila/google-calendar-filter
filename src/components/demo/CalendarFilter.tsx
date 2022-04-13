import React, { useEffect, useState } from "react"
import { ApiContext } from "../../axios/ApiContext"
import { useAsyncFn } from "react-use"
import Checkbox from "@mui/material/Checkbox"
import { GetCalendarListItemType } from "../../types/GetCalendarListItemType"
import { DatePicker } from "../common/DatePicker"

type CalendarFilterProps = {
  data: GetCalendarListItemType
}

export const CalendarFilter: React.FunctionComponent<CalendarFilterProps> = ({
  data,
}) => {
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [checkValue, setCheckValue] = useState<boolean>(false)
  const [, getCalendar] = useAsyncFn(async (start, end) => {
    const res = await ApiContext.GoogleCalendarFilterExecutor.getCalendarById(
      data.id,
      start,
      end
    )
    return res
  }, [])

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

  const handleChangeStartTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartTime(e.target.value)
  }

  const handleChangeEndTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndTime(e.target.value)
  }

  return (
    <div className="my-4">
      <div className="flex items-center">
        <Checkbox
          checked={checkValue}
          onChange={handleOnChane}
          className="mr-2"
        />
        <div className="mx-4">{data.summary}</div>
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
    </div>
  )
}
