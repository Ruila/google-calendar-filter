import React, { useEffect } from "react"
import { navigate } from "gatsby"
import { ApiContext } from "../axios/ApiContext"
import { useAsyncFn } from "react-use"

export const HomeView: React.FunctionComponent = () => {
  const [, getToken] = useAsyncFn(async () => {
    const res =
      await ApiContext.GoogleCalendarFilterExecutor.getGoogleAccessToken(
        ApiContext.getClientId(),
        ApiContext.getAuthCode(),
        ApiContext.getClientSecret()
      )
    ApiContext.setAccessToken(res.access_token)
    return res
  }, [])

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search)
    const getAuthCode = queryParams.get("code")
    if (!getAuthCode) {
      navigate("/login")
    } else {
      ApiContext.setAuthCode(getAuthCode)
      getToken().catch()
      navigate("/demo")
    }
  }, [])

  return <></>
}
