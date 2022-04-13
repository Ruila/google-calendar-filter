import React, { useEffect, useState } from "react"
import { ApiContext } from "../../axios/ApiContext"
import { useAsyncFn } from "react-use"
import Checkbox from "@mui/material/Checkbox"
import { GetCalendarListItemType } from "../../types/GetCalendarListItemType"

type CalendarFilterProps = {
  data: GetCalendarListItemType
  startTime: string
  endTime: string
}

export const CalendarFilter: React.FunctionComponent<CalendarFilterProps> = ({
  data,
  startTime,
  endTime,
}) => {
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
