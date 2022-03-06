import styled from "@emotion/styled";
import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../asset/img/logo/logo_white.svg"


const MyFooter = () => {
  return(
    <footer>
      <Box
        sx={{
          backgroundColor:"#333",
          pt: "11.7rem",
          pb: "11.7rem",
          color : "#DDD",
          overflow: "hidden"
          // margin: "0 auto"
        }}
      >
        <Box sx={{
          // margin:"0 auto",
          border : "1px solid #777",
          width: "20rem",
          height: "20rem",
          display: "flex",
          justifyContent:"center",
          alignItems : "center",
          borderRadius : "100%",
          margin:"0 auto"
        }}>
          <Box 
          component="span"
          sx={{
            borderBottom: "0.1px solid #DDD",
            fontFamily: "latino-urw,serif",
            fontSize:"20px"
          }}>
            Contact
          </Box>
        </Box>
        <Box sx={{ textAlign: "center", mt:"2rem"}}>
          アリエルトレーディングへお問い合わせは<br/>こちらよりお送りください
        </Box>
        <Box sx={{height:"0.5px",backgroundColor:"#777",margin:"5rem 10rem",mt:"10rem"}}/>
        <Box className="footer-links"
          sx={{
            display: "flex",
            margin : "0 10rem",
            justifyContent: "space-between",
      
          }}
        > 
        <Box component={Link} to="/" sx={{
          width : "9.45rem",
          minWidth : "80px"
        }} >
          <Box component="img" srcSet={logo} sx={{width:"100%"}}/>
        </Box>          
        <Box 
          sx={{
            // border : "1px solid white",
            display:"flex",
            justifyContent:"space-between",
            flex : 1,
            flexWrap : "wrap",
            "@media (max-width:770px)" : {
              // marginRight: "2rem",
              flex : "none",  
              display:"block"
            }
          }}>
          
            <Box 
            sx={{
              display:"flex",
              flexWrap:"wrap",
              "@media (max-width:770px)" :{
                flexDirection : "column",
                flexWrap:"nowrap",
              }
             
              }}>
              {/* <MyLink to="/top" >TOP</MyLink> */}
              <MyLink to="/company" >COMPANY</MyLink>
              <MyLink to="/our_brand" >OUR BRAND</MyLink>
              <MyLink to="/recruit" >recruit</MyLink>
              <MyLink to="/news" >news</MyLink>
              <MyLink to="/contact" >contact</MyLink>
              <MyLink to="/" >fackbook</MyLink>
              <MyLink to="/english">english</MyLink>
            </Box>
            <Box 
            sx={{
              display:"flex",
              // "flexWrap":"wrap",
              "@media (max-width:770px)" : {
              // width : "30%",
              marginRight: "5rem",
              display: "flex",
              flexDirection : "column",
              mt: "2rem"
             }}}>
              <MyLink to="/site" >site policy</MyLink>
              <MyLink to="/private">private policy</MyLink>
            </Box>
          </Box>
        </Box>
        <Box sx={{
          textAlign : "end",
          margin : "0 10rem",
          mt:"36px",
          color: "#999",
          "@media (max-width:770px)" : {
            textAlign : "start",
            margin : "0",
            ml : "10rem"
          }
        }}>© 2021 ArielTrading co.</Box>
      </Box>
    </footer>
  )
}

export default MyFooter;



const MyLink = styled(Link)`
  color : white;
  text-transform : uppercase ; 
  font-family: aktiv-grotesk,sans-serif;
  letter-spacing: .08em;
  font-weight: 400;
  font-size: 1.1rem;
  padding : 2px 8px ;
  /* max-lines : 1; */
  white-space: nowrap;
  &:visited {
    color: white
  }
`