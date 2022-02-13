import styled from "@emotion/styled";
import { Modal } from "@mui/material";
import { Box, style } from "@mui/system";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import logo from "../asset/img/logo/logo.svg"
// import styled from "@material-ui/styles"
import React from 'react'

// Debug border for componment. 
const debugBorder = "1px solid black"



// App導覽列
const AppBar = () => {


  //路徑
  const [target, setTarget] = useState("/")
  //判斷路徑是否為targetPath => true : 加上 current class for css
  const isCurrent = (targetPath: string) => targetPath === target ? "current" : ""
  const setTargetAndCloseMenu = (target: string) => { setTarget(target); setIsMenuOpen(false);  }
  // menu open max-width(800px)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(()=>{
    
  })

  return (
    <Header>
      <Box sx={{
        // width:"100%",
        display: "flex",
        justifyContent: "space-between",
        margin: "2rem"
      }}>
        <Link to="/"> <img src={logo} alt="logo" srcSet={logo} style={{ width: "6vw", minWidth: "78px", }} /> </Link>
        <Box sx={{ display: "flex", flexWrap: "wrap", }} >
          <MyLink to="/top" className={isCurrent("/top")} onClick={() => setTargetAndCloseMenu("/top")}>Top <div className="dot" /> </MyLink>
          <MyLink to="/company" className={isCurrent("/company")} onClick={() => setTargetAndCloseMenu("/company")}> Company  <div className="dot"></div></MyLink>
          <MyLink to="/our_brand" className={isCurrent("/our_brand")} onClick={() => setTargetAndCloseMenu("/our_brand")}>Our Brand<div className="dot" /></MyLink>
          <MyLink to="/recruit" className={isCurrent("/recruit")} onClick={() => setTargetAndCloseMenu("/recruit")}>Recruit<div className="dot" /></MyLink>
          <MyLink to="/news" className={isCurrent("/news")} onClick={() => setTargetAndCloseMenu("/news")}>News<div className="dot" /></MyLink>
          <MyLink to="/contact" className={isCurrent("/contact")} onClick={() => setTargetAndCloseMenu("/contact")}>Contact<div className="dot" /></MyLink>
          <MyLink to="/fackbook" style={{ marginLeft: "40px" }}>Fackbook</MyLink>
          <MyLink to="/english" className={isCurrent("/english")} onClick={() => setTargetAndCloseMenu("/english")}>English<div className="dot" /></MyLink>
          <MenuButton
            className={isMenuOpen === true ? "close" : ""}
            onClick={() => { setIsMenuOpen(!isMenuOpen) }}
          >
            <span className="span1"></span>
            <span className="span2"></span>
          </MenuButton>
        </Box>
      </Box>
      <MenuModal open={isMenuOpen}>
        <Box sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent:"center",
          alignItems: "center",
          flexDirection: "column",
          // ml:"20px"
          position:"relative"
        }}>
          <MenuItemLink to="/top" className={isCurrent("/top")} onClick={() => setTargetAndCloseMenu("/top")}>top</MenuItemLink>
          <MenuItemLink to="/company" className={isCurrent("/company")} onClick={() => setTargetAndCloseMenu("/company")}>company</MenuItemLink>
          <MenuItemLink to="/our_brand" className={isCurrent("/our_brand")} onClick={() => setTargetAndCloseMenu("/our_brand")}>our_brand</MenuItemLink>
          <MenuItemLink to="/recruit" className={isCurrent("/recruit")} onClick={() => setTargetAndCloseMenu("/recruit")}>recruit</MenuItemLink>
          <MenuItemLink to="/news" className={isCurrent("/news")} onClick={() => setTargetAndCloseMenu("/news")}>news</MenuItemLink>
          <MenuItemLink to="/contact" className={isCurrent("/contact")} onClick={() => setTargetAndCloseMenu("/contact")}>contact</MenuItemLink>
          <Box sx={{margin:"8px 0"}}></Box>
          <MenuItemLink to="/fackbook">fackbook</MenuItemLink>
          <MenuItemLink to="/english" className={isCurrent("/english")} onClick={() => setTargetAndCloseMenu("/english")}>english</MenuItemLink>
          <SmallContent style={{ position:"absolute", bottom:"0", }}>WE CONTRIBUTE TO THE RICH AND BEAUTIFUL LIFE</SmallContent>
        </Box>
      </MenuModal>
    </Header>
  )
}


export default AppBar

const MyLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-family: aktiv-grotesk,sans-serif;
  font-size: 1.1rem;
  color: #000;
  margin: 1em;
  position: relative;
  letter-spacing: .08em;

  &:visited { color: #000; }

  /* 設置不同屬性顏色 */
  &.current { cursor: default; font-weight: bold; }
  &.current[ href='/top'] { color : #881232;  }
  &.current[ href='/company'] { color : #838; }
  &.current[ href='/our_brand'] { color : #838; }
  &.current[ href='/recruit'] { color : #3904cb; }

  /* 底部動畫 */ 
  &:after{
    display:block;
    content: '';
    border-bottom: solid 1px #000;  
    transform: scaleX(0);  
    transition: transform 200ms cubic-bezier(0,.73,.7,.61);
    transform-origin:  0% 50%;
  }
  &:not(.current):hover:after{ transform: scaleX(1);}

  >.dot{
    /* display: none */
    position: absolute;
    top: -0.3em;
    right: -0.8em;
  }

  &:not(.current) > .dot{
    display : none
  }

  /* for responsive hide */
  @media screen and (max-width:800px) {
    display: none;
  }

`

const MenuItemLink = styled(Link)`
  
  font-size : 18px;
  text-transform: uppercase;
  padding : 8px;
  letter-spacing: 0;
  font-family: latino-urw,serif;
  font-weight: 400;
  /* display : inline-block; */
  /* width: 200px; */

  &.current {
    color : white;
  }

  &:after{
    display:block;
    content: '';
    border-bottom: solid 1px #000;  
    transform: scaleX(0);  
    transition: transform 400ms cubic-bezier(0,.73,.7,.61);
    transform-origin:  0% 50%;
  }
  &:not(.current):hover:after{ transform: scaleX(1);}
`

const Header = styled.header`
  width : 100%;
  position : fixed;
  right: 0;
  top: 0;
  z-index: 2000;
`

const MenuButton = styled.button`

  display: none;
  /* align-items : center;
  justify-content : center; */
  /* flex-direction : column; */
  width: 40px;
  height: 40px;
  position : relative;
  background-color: rgba(0,0,0,0);
  border: none;
  cursor: pointer;
  > span {
    /* z-index : 999; */
    width: 20px;
    height: 1px;
    background: #282828;
    /* margin: 4px; */
    /* transform: scaleX(0); */
    transform-origin: 0 0;
    position : absolute;
    transform-origin: center;
  }

  .span1{
    top: 30%;
    left: 50%;
    transform: translate(-50%,-50%)
  }
  .span2{
    top:60%;
    left: 50%;
    transform: translate(-50%,-50%)
  }

  &.close  {
    .span1 { 
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%) rotate(45deg);
    }
    .span2 {
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%) rotate(-45deg);
    }
  }

  @media screen and (max-width: 800px ){
    display: block;
  }

`

const MenuModal = styled(Modal)`
  background-color : none ;
  background-color : rgba(188, 157, 147,1) !important ;
  background: #bc9d93 ;
  .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop {
    background-color : #bc9d93 ;
  }
`

const SmallContent = styled.p`
    font-size: 9px;
    margin-bottom: 2rem;
    letter-spacing: .08em;
    font-family: aktiv-grotesk,sans-serif;
    font-weight: 400;
    opacity: .4;
    color: #282828;
    position: absolute;
    bottom: 0;
    left: 2rem;
    text-transform: uppercase;
`