
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const News = () => {
  return(
    <Box
      className="section-news"
      sx={{p:"16rem 0",bgcolor:"#c59167"}}
    >
      <Inner
        className="section-new-inner"
        
      > 
        <div style={{flex:"3",paddingBottom:"5rem"}}>
          <div style={{display:"inline-block",width:"30px",height:"1px",backgroundColor:"#b14617" }}/>
          <Tit>NEWS</Tit>
        </div>
        <Box sx={{flex:"7",":last-child" : {
            borderBottom:"1px solid #555",
          }}}>
          {linkData.map( (value,index) => <NewsLink key={index} to={value.to} creatTime={value.createTime} des={value.des}/>)}
        </Box>
      </Inner>
      
    </Box>
  )
}

export default News;


const Tit = styled.div`
  font-family: latino-urw,serif;
  font-weight: 500;
  font-size: 2.4rem;
  letter-spacing: .15em;
  font-feature-settings: initial;
  transform-origin: top;
  white-space: pre;
  margin-top: 2rem ;
`

const Inner = styled.div`
  margin: 0 10rem ;
  display: flex;
  @media (max-width: 770px) {
    margin: 0 5rem ;
    display:block;
  }
  @media (max-width: 500px) {
    margin: 0 2rem ;
  }
`


type NewsLinkProps = {
  to : string,
  creatTime : string,
  des : string,
}

const NewsLink = (newsLinkProps:NewsLinkProps) => {
  return(
    <Link 
    to={newsLinkProps.to}
    >
      <Box 
        sx={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          padding : "28px 0",
          boxSizing : "border-box",
          fontFamily: "dnp-shuei-gothic-gin-std,sans-serif",
          fontWeight: "350",
          borderTop:"1px solid #555",
          color:"#333"
        }}
        
      >
        <Box
        sx={{
          display: "flex",
          // fontSize: "12px"
          alignItems:"center",
          flexGrow : "0"
        }}
      >
        <Box component="p" sx={{padding: "0", margin:"0"}}>
          {newsLinkProps.creatTime}
        </Box>
        <Box
          sx={{
            "margin": "0 34px 0 20px",
            "backgroundColor": "rgba(242,211,185,.5)",
            "lineHeight": "1.27273",
            "borderRadius": "0.8rem",
            "padding": "0 1.4rem",
            // "display" : "inline-block"
          }}
        >
          <Box 
            component="p"
            sx={{
              padding:"0",
              margin:"0"
            }}
          >PRESS</Box>
        </Box>
        <Box component="p" sx={{padding: "0 30px 0 0", margin:"0",verticalAlign: "baseline"}}>
        {newsLinkProps.des}
        </Box>
        </Box>
        <Box className="plus">+</Box>
      </Box>
    </Link>
  )
}




const linkData= [
  {
    createTime : "2021.02.04",
    to : "/",
    des : "ドリームグロウマスク（CALMING・COMFORTING）発売"
  },
  {
    createTime : "2021.03.15",
    to : "/",
    des : "〈FEMMUE〉ドリームグロウマスク（CLARIFY ・PURIFY）再販売"
  },
  {
    createTime : "2021.03.05",
    to : "/",
    des : "〈I’m From〉2021年3月5日（金）スポットジェル（M）発売"
  },
  {
    createTime : "2021.02.19",
    to : "/",
    des : "〈FEMMUE〉2021年2月19日（金）グロウドロップス新発売"
  },
  {
    createTime : "2021.01.27",
    to : "/",
    des : " 2021年1月27日（水）I’m from〈アイムフロム〉日本上陸"
  },
]