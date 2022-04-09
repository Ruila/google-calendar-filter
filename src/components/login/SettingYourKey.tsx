import React from "react"
import { CommonInput } from "../common/CommonInput"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Button from "@mui/material/Button"
import { ApiContext } from "../../axios/ApiContext"

type SettingYourKeyProps = {
  getClientId: (value: string) => void
}

const schema = yup.object().shape({
  clientId: yup.string().required(),
  clientSecret: yup.string().required(),
})

export const SettingYourKey: React.FunctionComponent<SettingYourKeyProps> = ({
  getClientId,
}) => {
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
          ApiContext.setClientId(formData[item])
          getClientId(formData[item])
        } else if (item === "clientSecret") {
          ApiContext.setClientSecret(formData[item])
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
      <Button variant="contained" onClick={handleSubmit(handleSettingKey)}>
        Check
      </Button>
    </div>
  )
}
