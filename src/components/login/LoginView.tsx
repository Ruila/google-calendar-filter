import React, { useState } from "react"
import { Layout } from "../Layout"
import { CommonBox } from "../common/CommonBox"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { SettingYourKey } from "./SettingYourKey"

const schema = yup.object().shape({
  clientId: yup.string().required(),
  clientSecret: yup.string().required(),
  authCode: yup.string().required(),
})

export const LoginView: React.FunctionComponent = () => {
  const [clientId, setClientId] = useState("")
  const [clientSecret, setClientSecret] = useState("")
  const [authCode, setAuthCode] = useState("")

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const access_type = "offline"
  const prompt = "consent"
  const scopes = "https://www.googleapis.com/auth/calendar"
  const redirect_uri = "https://ruila.github.io/google-calendar-filter/"
  const handleChangeClientId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientId(e.target.value)
  }
  const handleChangeClientSecret = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientSecret(e.target.value)
  }
  const handleChangeAuthCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthCode(e.target.value)
  }
  const handleSettingCode = async (form: { [x: string]: any }) => {
    try {
      console.info("check form", form)
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }

  return (
    <Layout>
      <CommonBox>
        <div>
          <SettingYourKey />
          <div>
            <a
              href={`https://accounts.google.com/o/oauth2/auth?response_type=code&&client_id=${clientId}&&redirect_uri=${redirect_uri}&&scope=${scopes}&&access_type=${access_type}&&prompt=${prompt}`}
            >
              login
            </a>
          </div>
        </div>
      </CommonBox>
    </Layout>
  )
}
