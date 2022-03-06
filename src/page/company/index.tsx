
import { Box } from '@mui/material';
import React from 'react'
import img1 from "../../asset/img/company_1.jpeg"
import bgText from "../../asset/img/company-bg-text.svg"


const Company = () => (
  <>  
    <Box
      component="section"
      className="section-company"
      sx={{
        background: "#e1e3e7",
        paddingTop: "15.3rem",
        height: "var(--h)",
        position:"relative",
        "@media (max-width:770px)" :{
          height: "auto"
        }
      }}
    >
      <Box 
        className="section-company-bg-wrapper"
        sx={{
          "position": "absolute",
          "top": "12.5rem",
          "left": "-.78125%",
          "width": "48.15469%",
          "height": "0",
          "paddingTop": "33.75156%",
          "backgroundImage": `url(${bgText})`,
          "backgroundRepeat": "no-repeat",
          "backgroundPosition": "center",
          "backgroundSize": "100%",
          "@media (max-width: 770px)" : {
            "width": "48.712rem",
            "height": "34.142rem",
            "left": "-1rem",
            "top": "10.3rem",
            "paddingTop": "0"
          }
        }}
      >

      </Box>
      <Box
        className="section-company-kv-inner"
        sx={{
          marginLeft: "10rem",
          position: "relative",
          height: "100%",
          // border:"1px solid black",
          "@media (max-width:770px)":{
            marginLeft: "5rem",
          },
          "@media (max-width:500px)":{
            marginLeft: "2rem",
          }
        }}
      >
        <div>
          <Box sx={{width:"30px",height:"1px",backgroundColor:"#8fa2b9",display:"inline-block"}}/>
          <Box sx={{
            mt:"3.7rem",
            fontFamily: "latino-urw,serif",
            "ontWeight": "500",
            "fontSize": "2.4rem",
            "letterSpacing": ".15em",
            // "display": "inline-block",
            "fontFeatureSettings": "initial"
          }}>COMPANY</Box>
        </div>

      <Box
        className="company-img-wrapper"
        sx={{
          position:"absolute",
          "bottom": "0",
          "right": "0",
          "height": "calc(100% - 3.7rem)",
          "width": "78.89831%",
          "overflow": "hidden",
          "@media (max-width:770px)" : {
            "position": "relative",
            "margin": "3.3rem 0 0 auto",
            "width": "94.66667%",
            "height": "0",
            "paddingTop": "53.33333%"
          }
        }}
      >
        <Box
          component="img"
          srcSet={img1}
          sx={{ width: "100%",height:"100%",objectFit:"cover", "position": "absolute",
          "top": "0",
          "left": "0",}}
        >

        </Box>

      </Box>
      </Box>
    

    </Box>

    <Box
      component="section"
      className="section-company-info"
      sx={{
        background: "#e1e3e7",
        paddingTop: "15.3rem",
        paddingBottom: "10rem",
        position:"relative"
      }}
    >
      {/* <Box
        className='bg'
        sx={{
          "position": "absolute",
          "top": "19.5rem",
          "left": "0",
          "width": "68.75%",
          "height": "calc(100% - 35.5rem)",
          "backgroundColor": "rgba(188,157,147,.7)"
        }}
      >
        
      </Box> */}
      <Box
        className="company-company-info-inner"
        sx={{
          p:"0 10rem",
          bgcolor:"rgba(188,157,147,.7)",
          paddingTop: "5rem",
          paddingBottom: "5rem",
          mr:"20%",
          "fontSize": "1.4rem",
          "fontFamily": "dnp-shuei-gothic-gin-std,sans-serif",
          "fontWeight": "400",
          "letterSpacing": ".04em",

          "@media (max-width:770px)" : {
            // p:"7.5rem , 0",
            p:"5 5rem"
          },
          "@media (max-width:500px)" : {
            
            paddingLeft:"2rem",
            
          }
        }}
      >
        OUR INFORMATION<br/><br/>
        会社名称<br/><br/>
        和文：株式会社アリエルトレーディング<br/><br/>
        英文：Ariel Trading Co.,Ltd.<br/><br/>
        本社<br/><br/>
        〒150-0001東京都渋谷区神宮前3-35-8<br/><br/>
        ハニービル青山 3F<br/><br/>
        Google MAP<br/><br/>
        TEL<br/><br/>
        03-5786-0482<br/><br/>
        FAX<br/><br/>
        03-5786-0483<br/><br/>
        代表取締役<br/><br/>
        平野 恵介<br/><br/>
        設立<br/><br/>
        平成15年4月18日<br/>
        資本金<br/><br/>
        2500万円<br/><br/>
        決算期<br/><br/>
        3月（年1回）<br/><br/>
        取引銀行<br/><br/>
        三井住友銀行<br/><br/>
        事業内容<br/><br/>
        海外美容関連用品、日用雑貨等の輸出入<br/><br/>
        及び、総販売代理業<br/><br/>
        海外の市場調査に関する情報提供業務<br/><br/>
        海外及び国内OEM商品の企画開発・販売<br/><br/>
        会社名称<br/><br/>
        和文：株式会社アリエルトレーディング<br/><br/>
        英文：Ariel Trading Co.,Ltd.<br/><br/>
        本社<br/><br/>
        〒150-0001東京都渋谷区神宮前3-35-8<br/><br/>
        ハニービル青山 3F<br/><br/>
        Google MAP<br/><br/>
        TEL<br/><br/>
        03-5786-0482<br/><br/>
        FAX<br/><br/>
        03-5786-0483<br/><br/>
        代表取締役<br/><br/>
        平野 恵介<br/><br/>
        設立<br/><br/>
        平成15年4月18日<br/><br/>
        資本金<br/><br/>
        2500万円<br/><br/>
        決算期<br/><br/>
        3月（年1回）<br/><br/>
        取引銀行<br/><br/>
        三井住友銀行<br/><br/>
        事業内容<br/><br/>
        海外美容関連用品、日用雑貨等の輸出入<br/><br/>
        及び、総販売代理業<br/><br/>
        海外の市場調査に関する情報提供業務<br/><br/>
        海外及び国内OEM商品の企画開発・販売<br/><br/>

      </Box>
        
      
    </Box>
  </>
)

export default Company;