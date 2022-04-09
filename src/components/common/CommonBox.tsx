import React from "react"
import Box from "@mui/material/Box"

type CommonBoxProps = {
  children: JSX.Element
}

export const CommonBox: React.FunctionComponent<CommonBoxProps> = ({
  children,
}) => {
  return (
    <Box
      sx={{
        background: "white",
        width: 434,
        height: 520,
        boxShadow:
          "0px 25.078px 17.5986px rgba(28, 29, 65, 0.0342537), 0px 2px 6px rgba(0, 0, 0, 0.03), 0px 3px 10px rgba(0, 0, 0, 0.03), 0px 6px 17px rgba(0, 0, 0, 0.03)",
        borderRadius: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  )
}
