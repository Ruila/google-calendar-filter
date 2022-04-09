import React from "react"
import { CommonInput } from "../common/CommonInput"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Button from "@mui/material/Button"
import { AppContext } from "../../axios/ApiContext"

const schema = yup.object().shape({
  clientId: yup.string().required(),
  clientSecret: yup.string().required(),
  authCode: yup.string().required(),
})

export const SettingYourKey: React.FunctionComponent = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const handleSettingKey = async (formData: { [x: string]: any }) => {
    try {
      Object.keys(formData).forEach(item => {
        if (item === "clientId") {
          AppContext.setClientId(formData[item])
        } else if (item === "clientSecret") {
          AppContext.setClientSecret(formData[item])
        } else {
          AppContext.setAuthCode(formData[item])
        }
      })
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }

  return (
    <div className="flex flex-col items-center">
      <CommonInput
        enableVisible={false}
        control={control}
        name="clientId"
        errors={errors}
        placeholder="clientId"
      />
      <CommonInput
        enableVisible={false}
        control={control}
        name="clientSecret"
        errors={errors}
        placeholder="clientSecret"
      />
      <CommonInput
        enableVisible={false}
        control={control}
        name="authCode"
        errors={errors}
        placeholder="authCode"
      />
      <Button variant="contained" onClick={handleSubmit(handleSettingKey)}>
        Check
      </Button>
    </div>
  )
}
