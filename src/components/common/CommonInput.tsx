import React, { useState } from "react"
import TextField from "@mui/material/TextField"
import IconButton from "@mui/material/IconButton"
import InputAdornment from "@mui/material/InputAdornment"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { Control, Controller } from "react-hook-form"
import { makeStyles } from "@mui/styles"

type CommonInputProps = {
  errors: { [x: string]: any }
  control: Control<any, any>
  name: string
  enableVisible: boolean
  placeholder: string
}

const useStyles = makeStyles({
  textField: {
    "&.MuiTextField-root": {
      width: "327px",
      margin: "8px 0",
    },
    "& .MuiInputBase-root.MuiOutlinedInput-root": {
      backgroundColor: "#E8EBF2",
      borderRadius: "6px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none !important",
    },
  },
})

export const CommonInput: React.FunctionComponent<CommonInputProps> = ({
  errors,
  control,
  name,
  enableVisible,
  placeholder,
}) => {
  const classes = useStyles()
  const [visible, setVisible] = useState(true)
  const handleClickShowPassword = () => {
    setVisible(!visible)
  }
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  return (
    <Controller
      render={({ field }) => (
        <TextField
          type={visible ? "text" : "password"}
          onChange={field.onChange}
          error={!!errors[name]}
          helperText={errors[name] && errors[name].message}
          classes={{ root: classes.textField }}
          placeholder={placeholder}
          InputProps={
            enableVisible
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {visible ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
              : {}
          }
        />
      )}
      control={control}
      name={name}
    />
  )
}
