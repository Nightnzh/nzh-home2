import { Box } from "@mui/system";
import React from "react";
import img1 from "../../asset/img/recruit.jpeg"
import img2 from "../../asset/img/top/leaf_2.png"



const TopSectionRrcruit = () => {
  return (
    <Box 
      component="section" 
      className="section-recruit"
      sx={{
        backgroundColor: "#8698a8",
        padding: "12rem 0",
        position: "relative",
        
      }}
    >
      <Box 
        sx={{
          "position": "absolute",
          "top": "0",
          "right": "0",
          "width": "22.8rem",
          "height": "100%",
          "backgroundImage": `url(${img2})`,
          "backgroundRepeat": "no-repeat",
          "backgroundPosition": "top left",
          "backgroundSize": "22.8rem auto",
          "mixBlendMode": "multiply"
        }}
      >

      </Box>
      <Box
        className="sction-recruit-inner"
        sx={{
          display:"flex",
          justifyContent:"center",
          marginLeft:"10rem",
          // marginRight:"10rem",
          "@media (max-width:770px)": {
            display: "block",
            marginLeft:"5rem",
            // marginRight:"5rem",
          }
        }}
      >
        {/* Block 1 */}
        <Box
          sx={{
            marginRight:"5rem",
      
          }}
        >
          <div style={{
            width:"30px",
            height: "1px",
            background:"black"
          }}/>
          <Box
            sx={{
              fontFamily:"latino-urw,serif",
              fontWeight:"500",
              fontSize:"2.4rem",
              letterSpacing:".15em",
              fontFeatureSettings:"initial",
              whiteSpace:"pre",
              mt:"3.7rem"
            }}
          >RECRUIT</Box>
          <Box sx={{marginTop: "calc(60px - 0.8rem)"}}>
            <Box
              sx={{
                fontSize:"2rem",
                lineHeight:"1.85",
                letterSpacing:".04em",
                borderBottom:"1px solid black",
                fontWeight:"350",
                display:"inline"
              }}  
            >アリエルトレーディングでは、</Box>
            <br/>
            <Box
              sx={{
                fontSize:"2rem",
                lineHeight:"1.85",
                letterSpacing:".04em",
                borderBottom:"1px solid black",
                fontWeight:"350",
                marginTop:"1rem",
                display:"inline"
              }}
            >ともに働く仲間を募集しています</Box>
          </Box>
          <Box sx={{
            fontSize:"1.4rem",
            letterSpacing:".1em",
            fontWeight:"300",
            margin:"4rem 0",
            "@media (max-width:770px)":{
              "br":{
                display:"none"
              }
            }
            }}>
          事業のさらなる拡充を目指し、スタッフの募集を行います。<br/>常識にとらわれないビューティやライフスタイルのあり方を<br/>追求しながらスキルアップ・キャリアアップを楽しめる人へ。<br/>私たちは、あなたがジョインするのを待っています。
          </Box>

          <Box
            component="a"
            sx={{
              "fontFamily": "aktiv-grotesk,sans-serif",
              "fontWeight": "400",
              "letterSpacing": ".1em",
              "fontSize": "1.2rem",
              borderBottom: "1px solid black",
              display:"inline-block",
              cursor:"pointer"
            }}>
            VIEW MORE
          </Box>
        </Box>

        {/* Block 2 */}  
            
        <Box
          sx={{
            width:"54%",
            // flexShrink:"0",
            display:"flex",
            justifyContent:"end",
            alignItems:"end",
            position:"relative",
            marginRight:"10rem",
            "@media (max-width:770px)":{
              width:"84%",
              marginTop: "5rem",
              marginRight: "0px",
              marginLeft: "5rem",
              "img" : {
                right:"0"
              }
            }
          }}
        >
          <Box
            component="img"
            srcSet={img1}
            sx={{
              width:"100%",
              // verticalAlign:"baseline",
              alignSelf:"end"
            }}
          />
        </Box>      
      </Box>
    </Box>
  ) 
}

export default TopSectionRrcruit