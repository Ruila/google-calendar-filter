import * as React from "react"
import { useEffect } from "react"
import { ApiContext } from "../axios/ApiContext"
import { navigate } from "gatsby"

const IndexPage = () => {
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search)
    const getAuthCode = queryParams.get("code")
    if (!getAuthCode) {
      navigate("/login")
    } else {
      console.info("aaa", getAuthCode)
      ApiContext.setAuthCode(getAuthCode)
      navigate("/demo")
    }
  }, [])
  return <></>
}

export default IndexPage
