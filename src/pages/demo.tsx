import * as React from "react"
import { DemoView } from "../components/demo/DemoView"
import { Layout } from "../components/Layout"
import { ApiContext } from "../axios/ApiContext"
import { useAsync } from "react-use"
const DemoPage = () => {
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
  return (
    <Layout>
      <DemoView />
    </Layout>
  )
}

export default DemoPage
