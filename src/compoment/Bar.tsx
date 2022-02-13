import styled from "@emotion/styled";


type ColorProps = {
  barColor : string | null
}

const Bar = (colorProps : ColorProps = {barColor:"#acb486"}) =>{

  return(
    <span style={{
      width: "30px",
      transformOrigin: "left",
      backgroundColor : `${colorProps.barColor}`
    }}>
    </span>
  )
}

export default Bar