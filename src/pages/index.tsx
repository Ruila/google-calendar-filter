import * as React from "react"
import { useEffect } from "react"
import { AppContext } from "../axios/ApiContext"
import { navigate } from "gatsby"

const IndexPage = () => {
  useEffect(() => {
    if (!AppContext.getAuthCode()) {
      navigate("/login")
    }
  }, [])
  return <></>
}

export default IndexPage
