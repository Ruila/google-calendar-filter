import React, { useEffect, useState } from "react"
import { ApiContext } from "../../axios/ApiContext"
import { useAsync } from "react-use"

export const DemoView: React.FunctionComponent = () => {
  const [calendarList, setCalendarList] = useState<Array<string>>([])

  useAsync(async () => {
    const res = await ApiContext.GoogleCalendarFilterExecutor.getCalendarList()
    const getIdList = res.items.map(item => item.id)
    setCalendarList(getIdList)
    return res
  }, [])

  useEffect(() => {
    console.info("axa", calendarList)
  }, [calendarList])

  return <div>113</div>
}
