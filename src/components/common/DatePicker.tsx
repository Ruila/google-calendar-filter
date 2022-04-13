import React from "react"
import TextField from "@mui/material/TextField"
import { TextFieldProps } from "@mui/material/TextField/TextField"

export const DatePicker: React.FunctionComponent<TextFieldProps> = props => {
  return (
    <TextField
      {...props}
      label={props.label}
      type="date"
      sx={{ width: 220, marginRight: "12px" }}
      InputLabelProps={{
        shrink: true,
      }}
    />
  )
}
