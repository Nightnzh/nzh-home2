import { Box } from '@mui/system'
import React from 'react'

import leaf3 from '../../asset/img/top/leaf_3.png'
import img from '../../asset/img/news.png'
import { Link } from 'react-router-dom'



const TopSectionNews = ()=>{
  return(
    <Box
    className="section-news"
    component="section"
    sx={{
      bgcolor:"#cc9c72",
      padding:"12rem 0 16rem",
      position:"relative",
      "media (max-width:770px)":{

      }
    }}
    >
      <Box
        sx={{
          "content": "\"\"",
          "position": "absolute",
          "top": "0",
          "left": "0",
          "width": "24.6rem",
          "height": "100%",
          "backgroundImage": `url(${leaf3})`,
          "backgroundRepeat": "no-repeat",
          "backgroundPosition": "top left",
          "backgroundSize": "24.6rem auto",
          "mixBlendMode": "multiply"
        }}
      />
      <Box 
      className="section-news-inner"
      sx={{
        display: "flex",
        // background:"black",
        marginRight:"10rem",
        "@media (max-width:770px)" : {
          marginLeft:"5rem",
          display : "block",
          marginRight:"0",
          // background:"black",
        }
      }}
      >
        <Box
        sx={{
          width:"100%",
          // flex: "1",
          flex: "1",
          "@media (max-width:770px)" : {
            display:"flex",
            justifyContent:"space-between",
            marginBottom: "5rem"
          }
        }}
        >

          <Box
          component="h2"
          sx={{
            "marginLeft": "10rem",
            "marginBottom": "9.5rem",
            "@media (max-width:770px)" : {
              "marginLeft": "0"
            }
          }}
          >
            <div style={{
            width:"30px",
            height: "1px",
            background:"#ba5018"
            }}/>
            <Box
              sx={{
                marginTop: "3.7rem",
                "fontFamily": "latino-urw,serif",
                "fontWeight": "500",
                "fontSize": "2.4rem",
                "letterSpacing": ".15em",
                "display": "inline-block",
                "fontFeatureSettings": "initial",
                "whiteSpace": "pre"
              }}
            >
              NEWS
            </Box>
          </Box>
          <Box
            className="wrap-img"
            sx={{
              width:"calc(100% - 12rem)",
              "@media (max-width:770px)" : {
                width : "50%"
              }
            }}
            >
              <Box 
              component="img"
              sx={{width:"100%"}}
              srcSet={img}
              />

          </Box>
        </Box>
        <Box
          sx={{
            flex: "1",
            "@media (max-width:770px)" : {
              marginRight : "8rem",
            }
          }}
        >
          {linkData.map((value,index)=>{
            return (
              <div key={index}>
                <Box sx={{height:"0.1px",backgroundColor:"#555"}}/>
                <NewsLink to={value.to} des={value.des} creatTime={value.createTime}/>
              </div>
            )
          })}
          <Box sx={{height:"0.1px",backgroundColor:"#555"}}/>

          <Box
            sx={{
              textAlign : "right",
              marginTop : "5.1rem",
              cursor : "pointer"
            }} 
          >
            <Box component="span" sx={{borderBottom : "1px solid black"}}>
              VIEW MORE
            </Box>
          </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default TopSectionNews



type NewsLinkProps = {
  to : string,
  creatTime : string,
  des : string,
}

const NewsLink = (newsLinkProps:NewsLinkProps) => {
  return(
    <Link 
    to={newsLinkProps.to}
    style={{
      // boxSizing : "border-box",
    }}
    >
      <Box sx={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding : "28px 0",
        boxSizing : "border-box",
        fontFamily: "dnp-shuei-gothic-gin-std,sans-serif",
        fontWeight: "350"
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