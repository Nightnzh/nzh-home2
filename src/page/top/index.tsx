import styled from "@emotion/styled";
import { Box, Container, useMediaQuery } from "@mui/material";
import React from 'react'
import BannerL from "../../asset/img/banner-l.jpeg"
import BannerSm from "../../asset/img/banner-s.jpeg"
import Leaf1 from "../../asset/img/top/leaf_1.png"
import Leaf2 from "../../asset/img/top/leaf_2.png"
import Leaf3 from "../../asset/img/top/leaf_3.png"
import Our1 from "../../asset/img/our-1.jpeg"
import Our2 from "../../asset/img/our-2.jpeg"
import { Link } from "react-router-dom";
import TopSectionOurBrand from "./ourBrand";
import TopSectionRrcruit from "./recruit";
import TopSectionNews from "./news";





const Top = () => {
  return (
    <>
      <SectionKv/>
      <SectionAbout/>
      <TopSectionOurBrand/>
      <TopSectionRrcruit/>
      <TopSectionNews/>
    </>
  )
}

// ----
const SectionKv = () =>{

  const max500px = useMediaQuery('(max-width: 500px)')

  return(
    <SectionKvCom
        className="section-kv"
        sx={sectionKvStyle}
      >
        <SectionKvInnerCom
          className="section-kv-inner"
        >
          <SectionKvInnerText style={{ position: "absolute",   zIndex:"2" ,width: "100%",paddingTop:"1rem"}}>
            WE CONTRIBUTE<br />
            TO THE<br />
            RICH AND<br />
            BEAUTIFUL<br />
            LIFE<br />
            <Line><LineInnerSpan/></Line>
          </SectionKvInnerText>
          <SectionKvImgDiv style={{ zIndex: "1" }}>
            {
              max500px ? 
                <SectionKvImg  srcSet={BannerSm} style={{ zIndex: "1"}}/> : 
                <SectionKvImg srcSet={BannerL} style={{ zIndex: "1" }}/> 
            }
          </SectionKvImgDiv>
        </SectionKvInnerCom>
        <SectionKvScroll>
          <SectionKvP>scroll</SectionKvP>
          <BarWrap>
            <Bar></Bar>
          </BarWrap>
        </SectionKvScroll>
      </SectionKvCom>
  )
}
// ====

// ----
const SectionAbout = () => {
  // const theme = useTheme();
  const max770 = useMediaQuery('(max-width:770px)');
  const max500 = useMediaQuery('(max-width:500px)');
  const min501toMax770 = useMediaQuery('(min-width: 501px) and (max-width: 770px)');


  const fontStyle = {
    "fontFamily": "source-han-serif-japanese,serif",
    "fontWeight": "300",
    "fontSize": "4rem",
    // "letterSpacing": ".07em",
    "lineHeight": "1.75",
    "color": "#333",
    // borderBottom : "1px "
  } 

  return(
    <SectionAboutCom>
      <SectionAboutInner className="section-about-inner" sx={{
        "marginLeft": "10rem",
        "position": "relative",
        "zIndex": "2"
      }}>
        <h3 style={{
          fontStyle:"italic",
          color:"#881232"
        }}>WHO WE ARE -------</h3>
        {
          max770 ?  "" :
            (<Box component="h2" sx={fontStyle}>
              豊かで美しいライフスタイルを送ること<br></br>そのお手伝いをすることが、私たちのミッションです
            </Box>) 
        }
        {
          !min501toMax770 ? "" 
          : (
            (<Box component="h2" sx={fontStyle}>
              豊かで美しいライフスタイルを送ること<br></br>そのお手伝いをすることが、<br></br>私たちのミッションです
            </Box>)
          )
        }
        {
          !max500 ? "" : (
            (<Box component="h2" sx={fontStyle}>
              豊かで美しい<br></br>
              ライフスタイルを送ること<br></br>
              そのお手伝いをすることが、<br></br>
              私たちのミッションです<br></br>
            </Box>)
          )
        }
      <SectionAboutBlock>
        <Box sx={{
          "fontSize": "1.3rem",
          "fontFamily": "dnp-shuei-gothic-gin-std,sans-serif",
          "fontWeight": "400",
          "lineHeight": "2",
          "letterSpacing": ".04em",
          flex : "1"
        }}>
          <p>私たち株式会社アリエルトレーディングは、<br/>設立以来欧米やアジアを中心とした、<br/>海外の新しいライフスタイルをさまざまな<br/>ブランドや製品を通してご紹介してきました。<br/>特にナチュラル＆オーガニック製品に関しては、<br/>いち早く国内市場に展開し、<br/>数多くのお客様にその素晴らしさをお伝えしています。</p>
          <p>情報通信や物流の革命的進歩によって、近年は誰でも、<br/>瞬時に世界中のモノや情報に触れることができるようになりました。<br/>私たちは、そのような社会のなかでこそ、<br/>知識と経験というフィルターを通し、<br/>海外の様々な企業と理解を深めながら、<br/>お客様の毎日に貢献できるすぐれた製品をセレクトし、<br/>ご紹介する必要性を強く感じています。</p>
          <p>日々の生活のなかで感じる、<br/>ハーブや大地の香り。<br/>肌につけたときに感じる、植物の力強いみずみずしさ。<br/>慌ただしい日々の暮らしの中に、<br/>自然の心地よさを取り入れて、<br/>豊かで美しいライフスタイルを送ること。<br/>そのお手伝いをすることが、<br/>私たちのミッションです。</p>
          <Link to="/company" style={{"borderBottom":"1px solid black"}}>VIEW MORE</Link>
        </Box>
        <Box sx={{
          // "width":  { "md" : "calc(50% + 5rem)", "sm" : "100%"},
          "width":  "calc(50% + 5rem)",
          "height": "0",
          "paddingTop": "44.83051%",
          "flexShrink": "0",
          "position": "relative",
          "marginTop": "8px",
          // "marginBottom" : "150px",
          // overflowX: "hidden",
          '@media  (max-width:500px)' : {
            "width":  "100%",
            "marginBottom" : "150px",
            "> img":{
              "height" : "200%"
            }
          }
        }} >
          <Img1 srcSet={Our2} style={{
            // "width" : "100%",
            "height": "100%",
            "position": "absolute",
            "objectFit": "cover",
            "top": "0",
            right:"0",
          }}/>
          <Img2 srcSet={Our1} style={{
            // "width" : "100%",
            "height": "100%",
            "position": "absolute",
            "objectFit": "cover",
            "top": "100px",
            "right" : "100px"
          }}/>
          
        </Box>
      </SectionAboutBlock>
      </SectionAboutInner>
    </SectionAboutCom>
  )
}

const Img1 = styled.img`
  height: 100%;
  position: absolute;
  object-fit: cover;
  top: 0;
  right:0;
  @media  (max-width:500px){
    height: 150px;
  }
`
const Img2 = styled.img`
  height: 100%;
  position: absolute;
  object-fit: cover;
  top: 100px;
  right : 100px;
  @media  (max-width:500px)  {
    height: 150%;
  }
`

const SectionAboutBlock = styled(Box)`
  display: flex;
  margin-top: 5.2rem;
  @media (max-width: 500px){
    flex-flow: column-reverse;
    margin-top: 3.7rem;
  }
`


const SectionAboutCom = styled(Box)`
  content: "";
  padding-top: 10rem;
  padding-bottom: 12rem;
  background-color: #e5e7ea;
  position: relative;


  ::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 63.9rem;
    height: 100%;
    background-image: url(${Leaf1});
    background-repeat: no-repeat;
    background-position: top left;
    background-size: 63.9rem auto;
    mix-blend-mode: multiply;
  }

  @media screen and (max-width: 500px){
    padding-top: 8rem;
    padding-bottom: 8rem;

    ::before{
      width: 100%;
      background-size: 31.8rem auto;
    }
  }

`

const BottomLine = styled(Box)`
  border-bottom : 1px solid black ;
`

const SectionAboutInner = styled(Box)`
  margin-left: 10rem;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 770px){
    margin-left: 2rem;
  }
`

// ====


//--- SectionOurBand



//===
export default Top;

const sectionKvStyle = {
  "backgroundColor": "#bc9d93",
  "height": "100vh",
  "minHeight": "70rem",
  "maxHeight": "70vw",
  "paddingBottom": "1rem",
  "paddingTop": "9.1rem",
  "position": "relative",
  "overflow": "hidden",

}


const SectionKvCom = styled(Box)`
  background-color: #bc9d93;
  height: var(--h);
  min-height: 70rem;
  max-height: 70vw;
  padding-bottom: 1rem;
  padding-top: 9.1rem;
  position: relative;
  overflow: hidden;
  position: relative;



  @media screen and (max-width:500px) {
    padding-top: 8rem;
    min-height: inherit;
    max-height: inherit;
    height: calc(var(--h) - 3rem);
    padding-bottom: 0;
  }

  
`


const SectionKvInnerCom =  styled(Box)`
    margin-left: 8.4rem;
    height: calc(100% - 9.1rem);
    position: relative;
    @media screen and (max-width:500px) {
    margin-left: 2rem;
    height: calc(100% - 5rem);
  }
` 


const SectionKvInnerText = styled.div`
  white-space: pre;
  display: inline-block;
  color: #282828;
  font-size: 7rem;
  letter-spacing: .02em;
  /* font-family: latino-urw,serif; */
  font-family: 微軟正黑體,serif;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1.37143;
`


const SectionKvImgDiv = styled.div`
  position: absolute;
  right: 0;
  top: 4.7rem;
  width: 86.1204%;
  height: calc(100% - 4.7rem);
  @media (max-width: 500px){
    /* position: relative; */
    width: 100%;
    bottom: 0;
    height: calc(100% - 3.6rem * 1.37143 * 5 + 27px);
    top: auto;
    margin-top: calc(-46px - 3.6rem * 1.37143 * .5);
  }
  
`

const SectionKvImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`


const Line = styled.div`
  width: 147.7px;
  height: 1px;
  margin-left: 6.5rem;
  margin-top: 6rem;
  transform: rotate(-55deg);
  
`
const LineInnerSpan = styled.span`
    width: 100%;
    height: 100%;
    display: block;
    transform-origin: 0 0;
    /* transform: scaleX(0); */
    background-color: #282828;
`

const SectionKvScroll = styled.a`
    position: absolute;
    left: 0;
    bottom: 10.1rem;
    z-index: 3;
    margin-left: 2rem;
    width: 1rem;
    padding: 1rem 1rem 0;
    cursor: pointer;
`

const SectionKvP = styled.p`
  transform: rotate(-90deg);
    font-size: 1rem;
    color: #282828;
    letter-spacing: .05em;
    font-weight: 400;
    text-transform: uppercase;
`

const BarWrap = styled.div`
  width: 1px;
  height: 8rem;
  margin: 1rem auto 0;
  overflow: hidden;
`

const Bar = styled.div`
  width: 100%;
  height: 100%;
  background: #282828;
  /* transform: translateY(-100%); */

  animation: animatebar 2s infinite;
`


