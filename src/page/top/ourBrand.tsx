import styled from "@emotion/styled"
import { Box, Button, keyframes, Slide, Slider, SxProps, Theme, useMediaQuery } from "@mui/material"
import Bar from "../../compoment/Bar"

import img1 from "../../asset/img/background.jpeg"
import product1 from "../../asset/img/product-1.jpeg"
import product2 from "../../asset/img/product-2.jpeg"
import product3 from "../../asset/img/product-3.jpeg"
import product4 from "../../asset/img/product-4.jpeg"
import product5 from "../../asset/img/product-5.jpeg"
import product6 from "../../asset/img/product-6.jpeg"
import React, { createRef, useRef, useState } from "react"
import { useDraggable } from "react-use-draggable-scroll"
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { pink } from '@mui/material/colors';
import SvgIcon, { SvgIconClasses } from '@mui/material/SvgIcon';
import { CommonProps } from "@mui/material/OverridableComponent"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { Avatar } from '@mui/material';


const TopSectionOurBrand = () => {
  return (
    <SectionOurBand className="top-section-ourBand" >
      <Box sx={{
        "position": "absolute",
        "width": "27.34375%",
        "height": "100%",
        "top": "0",
        "left": "0",
        // "opacity": "0",
        // "fontSize": "0",
        "overflow": "hidden"
      }}>
        <img srcSet={img1} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </Box>

      <Inner>
        <Box sx={{
          width: "100%",
          // border:"1px solid white",
          position: "relative"
        }}>
          <Box sx={{ width: "100%", position: "relative" }}>
            <Box className="bg" sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              fontSize: "10rem",
              top: "-2rem",
              color: "rgba(155,155,155,0)",
              margin: "0",
              padding: "0",
              // letterSpacing:"1rem",
              WebkitTextStroke: "#AAA 0.8px",
              whiteSpace: "nowrap",
              animation: `${lightRun} linear infinite 10s`
            }}>
              OUR BRAND    OUR BRAND    OUR BRAND
            </Box>
            <Box component="h2" sx={{
              fontSize: "2.4rem",
              color: "white",
              fontFamily: "latino-urw,serif",
              paddingLeft: "10rem",
              paddingTop: "2rem",
              paddingBottom: "2rem",
              position: "relative",
              "@media (max-width:500px)": {
                paddingLeft: "5rem"
              }
            }}>OUR BRAND</Box>
          </Box>
        </Box>
        <MyOurBandItems />

      </Inner>
    </SectionOurBand>
  )
}




const MyOurBandItems = () => {

  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>

  const { events } = useDraggable(ref);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        className=""
        {...events}
        ref={ref}
        sx={{
          // width: "100%",
          paddingLeft: "10rem",
          display: "flex",
          "@media (max-width:500px)": {
            paddingLeft: "5rem",
          },
          overflowX: "hidden",
        }}
      >
        {carouseldata.map((value) => {
          return (
            <MyCarouselItem key={value.title} imgUrl={value.imgUrl} title={value.title} des={value.des} />
          )
        })}

      </Box>
      <Box sx={{
        // width: "80%",
        marginLeft: "10rem",
        marginRight: "10rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // border: "1px solid white",
        boxSizing:"border-box",
        marginTop:"5rem",
      }}>
        <Box sx={{
          height: "1px",
          width: "80%",
          // flexGrow: "1",
          backgroundColor: "white",
        }} />
        <Box sx={{ display: "flex" }}>
          <Avatar
            component="button"
            sx={{
              padding: "2rem",
              background: "rgba(0,0,0,0)",
              border: "1px solid white",
              cursor: "pointer"
            }}
            onClick={() => { ref.current.scrollLeft -= 300 }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </Avatar>
          <Avatar
            component="button"
            sx={{
              padding: "2rem",
              background: "rgba(0,0,0,0)",
              border: "1px solid white",
              cursor: "pointer"
            }}
            onClick={() => { ref.current.scrollLeft += 300 }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </Avatar>
        </Box>

      </Box>
    </Box>
  )
}




export default TopSectionOurBrand

const SectionOurBand = styled.div`
    position: relative;
    background: #6d7463;
    padding-top: 10rem;
    padding-bottom: 12rem;
    overflow: hidden;
    @media (max-width: 500px) {
      padding-top: 6rem;
      padding-bottom: 8rem;
    }
`

const Inner = styled.div`
  position: relative;
  z-index: 1;
  user-select: none;
`

const lightRun = keyframes`
  0%{
    left: 100%;
		transform: translateX(0%);
  }
  100%{
    left: 0;
		transform: translateX(-150%);
  }
`


// ----
type CarouselItemProps = {
  imgUrl: string,
  title: string,
  des: string
}

const MyCarouselItem = (carouselItemProps: CarouselItemProps) => {
  return (
    <Box sx={{
      width: "300px",
      marginRight: "30px"
    }}>
      <Box sx={{
        width: "300px"
      }} >
        <Box
          component="img"
          srcSet={carouselItemProps.imgUrl}
          sx={{
            width: "300px",
            height: "300px",
            overflow: "hidden",
            objectFit: "cover",
            userSelect: "none"
          }}
        />
      </Box>
      <Box sx={{
        marginTop: "14px",
        fontWeight: "400",
        fontSize: "1.5rem",
        letterSpacing: ".05em",
        color: "white",
        // width: "100%"
      }}>{carouselItemProps.title}</Box>
      <Box sx={{
        mt: "10.75px",
        fontSize: "13px",
        fontFamily: "dnp-shuei-gothic-gin-std,sans-serif",
        fontWeight: "400",
        lineHeight: "1.5",
        color: "white",
        // width: "100%"
      }}>{carouselItemProps.des}</Box>
    </Box>
  )
}


const carouseldata = [
  {
    imgUrl: `${product1}`,
    title: "FEMMUE",
    des: "花たちが持つ美しさのエッセンスを凝縮し、原料、効果、世界観、そのすべてにこだわった、モダンボタニカルスキンケアブランド。"
  },
  {
    imgUrl: `${product2}`,
    title: "Sun Superfoods",
    des: "カリフォルニア州サンディエゴ発米国のウェルネスブームを牽引するスーパーフードのパイオニアブランド。"
  },
  {
    imgUrl: `${product3}`,
    title: "LAGOM",
    des: "肌が持つ「うるおう機能」を引き出し、健康な肌を正しく稼働させていくことを目的としたサイエンスウェルネススキンケアブランド。"
  },
  {
    imgUrl: `${product4}`,
    title: "All Good",
    des: "海洋生態系の豊かさを守り、自然と調和したライフスタイルを提案するエコロジカル・ボディケアブランド。"
  },
  {
    imgUrl: `${product5}`,
    title: "HERBAN ESSENTIALS",
    des: "エッセンシャルオイルのピュアな香りで手軽にリフレッシュ。目的で選べる、アロマテラピー発想のお手ふき。"
  },
  {
    imgUrl: `${product6}`,
    title: "I`m from",
    des: "韓国の自然から美しさのエッセンスを引き出し、肌荒れしやすい敏感肌にも寄り添うスキンケアブランド。"
  },
]


// ====