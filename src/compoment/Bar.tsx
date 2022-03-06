import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";


type ColorProps = {
  barColor : string | null
}

const Bar = (colorProps : ColorProps = {barColor:"#acb486"}) =>{

  return(
    <Box style={{
      width: "30px",
      transformOrigin: "left",
      backgroundColor : `${colorProps.barColor}`
    }}>
    </Box>
  )
}

export default Bar