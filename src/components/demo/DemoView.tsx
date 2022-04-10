import React, { useEffect } from "react"
import { ApiContext } from "../../axios/ApiContext"
import { useAsync } from "react-use"

export const DemoView: React.FunctionComponent = () => {
  useAsync(async () => {
    const res =
      await ApiContext.GoogleCalendarFilterExecutor.getGoogleAccessToken(
        ApiContext.getClientId(),
        ApiContext.getAuthCode(),
        ApiContext.getClientSecret()
      )
    ApiContext.setAccessToken(res.data.access_token)
    return res
  }, [])

  useEffect(() => {
    console.info("axa", ApiContext.getAuthCode())
  }, [])

  return <div>113</div>
}
