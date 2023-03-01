import { Paper, Typography } from "@mui/material"
import React from "react"

const Display = () => {
  return (
    <Paper elevation={6} sx={{ paddingRight: "10px" }}>
      <Typography variant="h3" align="right">
        1337
      </Typography>
    </Paper>
  )
}

export default Display
