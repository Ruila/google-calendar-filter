import React, { useEffect } from "react"
import { ApiContext } from "../../axios/ApiContext"

export const DemoView: React.FunctionComponent = () => {
  useEffect(() => {
    console.info("axa", ApiContext.getAuthCode())
  }, [])
  return <div>113</div>
}
