import * as React from "react"
import { useEffect } from "react"
import { ApiContext } from "../axios/ApiContext"
import { navigate } from "gatsby"
import { useAsyncFn } from "react-use"

const IndexPage = () => {
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search)
    const getAuthCode = queryParams.get("code")
    if (!getAuthCode) {
      navigate("/login")
    } else {
      ApiContext.setAuthCode(getAuthCode)
      getToken().catch()
    }
  }, [])

  const [, getToken] = useAsyncFn(async () => {
    const res =
      await ApiContext.GoogleCalendarFilterExecutor.getGoogleAccessToken(
        ApiContext.getClientId(),
        ApiContext.getAuthCode(),
        ApiContext.getClientSecret()
      )
    await ApiContext.setAccessToken(res.data.access_token)
    await navigate("/demo")
    return res
  }, [])

  return <></>
}

export default IndexPage
