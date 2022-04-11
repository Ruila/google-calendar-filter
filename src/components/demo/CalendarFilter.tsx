import React, { useEffect, useState } from "react"
import { ApiContext } from "../../axios/ApiContext"
import { useAsyncFn } from "react-use"
import Checkbox from "@mui/material/Checkbox"
import { GetCalendarListItemType } from "../../types/GetCalendarListItemType"

type CalendarFilterProps = {
  data: GetCalendarListItemType
}

export const CalendarFilter: React.FunctionComponent<CalendarFilterProps> = ({
  data,
}) => {
  const [checkValue, setCheckValue] = useState<boolean>(false)
  const [, getCalendar] = useAsyncFn(async () => {
    const res = await ApiContext.GoogleCalendarFilterExecutor.getCalendarById(
      data.id,
      "2022-03-25T08:00:00Z",
      "2022-03-31T11:00:00Z"
    )
    return res
  }, [])

  const handleOnChane = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckValue(e.target.checked)
  }

  useEffect(() => {
    if (checkValue) {
      getCalendar().catch()
    }
  }, [checkValue])

  return (
    <div>
      <div className="flex items-center">
        <Checkbox
          checked={checkValue}
          onChange={handleOnChane}
          className="mr-2"
        />
        <div>{data.summary}</div>
      </div>
    </div>
  )
}
