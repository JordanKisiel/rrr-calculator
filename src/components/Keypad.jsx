import { Button, Grid } from "@mui/material"
import React from "react"
import keypadData from "../data/keypadConfig.json"

const Keypad = () => {
  const keypadButtons = keypadData.keypadRows.map((row, index) => {
    return row.map((key) => {
      return (
        <Grid item xs={3} key={`${key.value}`}>
          <Button
            variant="contained"
            fullWidth={true}
            sx={{
              paddingY: "15px",
              fontSize: "20px",
              backgroundColor: key.color,
            }}
          >
            {key.value}
          </Button>
        </Grid>
      )
    })
  })

  return (
    <Grid container rowSpacing={3} columnSpacing={3} marginTop="30px">
      {keypadButtons}
    </Grid>
  )
}

export default Keypad
