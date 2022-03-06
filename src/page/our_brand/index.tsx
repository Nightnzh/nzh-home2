import React, { useContext, useEffect } from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import MyContext from '../../context'









const OurBrand = () => {


  const datas = useContext(MyContext)

  const data = datas.brandData.find((value)=>{  return window.location.pathname.includes(value.name) })
  
  useEffect(()=>{
    // window.location.pathname
    // console.log(window.location.pathname)
    // initPathName()
  },[]) 


  return(
    <>
      <Box
        component="section"
        className="section-ourbrand-kv"
        sx={{
          pb:"12.7rem",
          bgcolor:"#757e68",
          // display:"flex",
          // justifyContent:"space-between"
        }}
      >
        <Box
          className="section-ourbrand-kv-inner"
          sx={{
            pl:"10rem",
            display:"flex",
            justifyContent:"space-between",
            // alignItems:"stretch",
            "@media (max-width:770px)" : {
              flexWrap:"wrap",
              p:"5rem",

            },
            "@media (max-width:500px)" :{
              p:"2rem"
            },
          }}
        >
          <Box
            className="kv-info"
            sx={{
              // border:"1px solid #000",
              width:"100%",
              // display:"flex",
              // justifyContent:"center",
              // flexDirection:"column"
              m:"auto",
              pr:"10rem"
            }}
          >
            <Box sx={{bgcolor:"#AAA",display:"inline-block",width:"30px",height:"1px"}}></Box>
            <Box sx={{mt:"24px", fontSize:"2.4rem",fontFamily: "latino-urw,serif",letterSpacing:".15em"}}>OUR BRAND</Box>
            <Box sx={{mt:"36px", fontSize:"4.8rem",fontFamily: "latino-urw,serif",letterSpacing:".15em"}}>{data?.tit}</Box>
            <Box sx={{mt:"12px", fontSize:"1.4rem",fontFamily: "dnp-shuei-gothic-gin-std,sans-serif",letterSpacing:".15em",fontWeight:"300",mb:"20px"}}>{data?.des}</Box>
            <Box component="a" href="#!" sx={{ fontSize:"1.4rem",fontFamily: "dnp-shuei-gothic-gin-std,sans-serif",letterSpacing:".15em",fontWeight:"400",borderBottom:"1px solid #000"}}>BRAND SITE</Box>
          </Box>
          <Box
            className="img-wrapper"
            sx={{
              height:"100%",
              // width:"100%",
            "@media (max-width:770px)":{
              mt:"5rem"
            }
          }}
          >
            <Box component="img"   srcSet={data?.imgUrl} sx={{width:"100%"}}/>
          </Box>
        </Box>
      </Box>
      <Box
        component="section"
        className="section-ourbrands"
        sx={{
          p:"10rem 0",
          bgcolor:"#8c956b"
        }}
      >
        <Box
         className="section-ourbrands-inner"
        >

          <Box
            sx={{
              fontSize:"1.8rem",
              fontFamily:"latino-urw,serif",
              fontWeight:"500",
              whiteSpace:"pre",
              letterSpacing:".15em",
              m:"0 10rem",
              "@media (max-width:770px)":{
                m:"0 5rem"
              },
              "@media (max-width:500px)":{
                m:"0 2rem"
              },
            }}
          >
            <Box>OTHER BRAND</Box>
            <Box sx={{height:"1px",bgcolor:"#000",mt:"16px",mb:"32px"}}/>
          </Box>
          <Box
            sx={{
              p:"10rem",
              display:"flex",
              // justifyContent:"center",
              overflowX:"auto",
              "::-webkit-scrollbar":{
                display:"none"
              },
              "-ms-overflow-style": "none",  /* IE and Edge */
              "scrollbar-width": "none",  /* Firefox */
              // scrollBehavior:"unset",
              "@media (max-width:770px)":{
                pl:"5rem",
              },
              "@media (max-width:500px)":{
                pl:"2rem",
              },
            }}
          >

          {
            datas.brandData.filter((value,index)=> !window.location.pathname.includes(value.name)).map((value)=>{
              return(
                 <OurBrandItem key={value.name} name={value.name} logoUrl={value.logoUrl} imgUrl={value.imgUrl} tit={value.tit} des={value.des}/>
              )
            })
          }
          </Box>
        </Box>

      </Box>
    </>
  )
}

export default OurBrand;





//BrandItem Props
type OurBrandItemProp = {
  name : string,
  logoUrl: string,
  imgUrl : string,
  tit : string,
  des : string, 
}


const OurBrandItem = ( ourBrandItemProp :OurBrandItemProp ) => {


  return(
    <Link
      to={`/our_brand/${ourBrandItemProp.name}`}
      className="our-brand-item"
      style={{
        width:"100%",
        cursor:"pointer",
        // marginLeft:"16px",
        paddingRight:"16px",
        minWidth:"170px"
        
      }}

    >
      <Box
        className="logo-wrapper"
        sx={{
          width:"100%",
          mb:"16px",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}
      >
        <Box component="img" srcSet={ourBrandItemProp.logoUrl}  sx={{ width:"60%",height:"100px" ,m:"0 auto"}}/>
      </Box>
      <Box
        component="img"
        className="item-img"
        srcSet={ourBrandItemProp.imgUrl}
        sx={{ width:"100%", mb:"16px" }}
      />
      <Box
        className="item-tit"
        sx={{
          width:"100%",
        }}
      >
        <Box
          component="p"
          sx={{
            textAlign:"start",
            fontFamily:"aktiv-grotesk,sans-serif",
            lineHeight:"1.25",
            letterSpacing:".08em",
            mb:"16px",
            borderBottom:"1px solid #000",
            display:"inline-block"
          }}
        >
          {ourBrandItemProp.tit}
        </Box>
      </Box>
      <Box
        className="item-des"
        // component="p"
        sx={{
          "fontSize": "12px",
          "fontFamily": "dnp-shuei-gothic-gin-std,sans-serif",
          "fontWeight": "300",
          "letterSpacing": ".1em",
          "lineHeight": "1.5"
        }}
      >
        {ourBrandItemProp.des}
      </Box>
    </Link>
  )
}

