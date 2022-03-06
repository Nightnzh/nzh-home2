
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react'
import img from '../../asset/img/recruitt.jpeg'


const Recruit = () => {
  return(
    <Box
      
      className="section-recruit"
      sx={{
        bgcolor:"#8698a8",
        // pb:"10rem"
      }}
    >
      <Box
        className="section-recruit-inner"
        sx={{
          pt:"15rem",
          margin:"0 10rem",
          
          "@media (max-width:770px)":{
            margin:"0 5rem",
            // flexDirection:"column"
            
          },
          "@media (max-width:500px)":{
            margin:"0 2rem",
          }
        }}
      > <Box sx={{
          display:"flex",
          justifyContent:"space-between", 
          "@media (max-width:500px)":{
            // margin:"0 2rem",
            flexWrap:"wrap"
          }
        }}>
        <Box sx={{  }}>
          <div style={{width:"30px",height:"1px",backgroundColor:"#000",display:"inline-block"}}></div>
          <div style={{fontSize:"2.4rem",fontFamily:"latino-urw,serif",marginTop:"20px"}}>RECRUIT</div>
        </Box>
        <Box sx={{  
          marginTop:"3.7rem" , marginBottom:"5.6rem" ,
          width:"63.14815%",
          "@media (max-width:500px)":{
            width:"100%"
          }
       }}>
          <Box
            sx={{
              display:"flex",
              justifyContent:"start",
              alignItems:"center"
            }} 
          >
            <div style={{fontStyle:"italic",color:"#294764",marginRight:"30px",fontSize:"1.4rem"}}>MESSAGE</div>
            <div style={{width:"100px",minWidth:"60px",height:"1px",backgroundColor:"#294764",fontSize:"1.4rem"}}></div>
          </Box>
          <div style={{marginTop:"30px",letterSpacing:".1em",fontWeight:"300",textAlign:"justify"}}>アリエルトレーディングは、ナチュラル&オーガニック製品における輸入・販売のパイオニア。 成長する市場において、アドバンテージを持ち続けています。ナチュラル&オーガニック製品の魅力は、自然からの恵みを使った豊かな発想や、地球環境への配慮はもちろんですが、なにより豊かで美しいライフスタイルをサポートできるところにあります。私たちアリエルトレーディングが掲げるミッションも、まったく同じです。自然の恵みを活かして、地球環境に配慮しながら、豊かで美しいライフスタイルをサポートする。この度、事業のさらなる拡充を目指して、同じ思いで歩んでいける新たな仲間を募集いたします。</div>
        </Box>
      </Box>
      </Box>
      <Box className="wrapper-img" sx={{
        mr:"10rem",
        "@media (max-width:770px)":{
          mr:"5rem",
          // flexDirection:"column"
          
        },
        "@media (max-width:500px)":{
          mr:"2rem",
        }
        }}>
        <img src={img} alt="" srcSet={img}  style={{width:"100%"}}/>
      </Box>

      <Box
        className="inner-info"
        sx={{
          padding:"10rem 0",
          // margin:"0 10rem"
        }}
      > 
        <InnerInfo>
          <div style={{fontSize:"1.8rem",fontFamily:"latino-urw,serif",fontWeight:"500",borderBottom:"1px solid #666",paddingBottom:"20px"}}>RECRUIT</div>
          <RecruitInfoContent>
              <Tit>コーダー</Tit>
              <RecruitInfoDes>外部採用サイトへ<br/>(Green)</RecruitInfoDes>
          </RecruitInfoContent>
          <RecruitInfoContent>
              <Tit>グラフィックデザイナー</Tit>
              <RecruitInfoDes>外部採用サイトへ<br/>(デザインのお仕事)</RecruitInfoDes>
          </RecruitInfoContent>
        </InnerInfo>
      </Box>
    </Box>
  )
}

export default Recruit;


const InnerInfo = styled.div`
  margin: 0 10rem;
`

const RecruitInfoContent = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #666;
  padding: 4rem 0;
  @media  (max-width:770px){
    display: block;
  }
`


const RecruitInfoDes= styled.a`
    margin-left: auto;
    display: block;
    margin-right: 0;
    width: 29rem;
    padding: 3.5rem 0;
    background: #333;
    text-align: center;
    color:white;
    @media  (max-width:770px){
      padding: 2rem 0;
      margin-top: 4rem;
    }

    @media  (max-width:500px){
      width:100%;
      margin-top: 4rem;
    }
`

const Tit = styled.div`
    font-family: dnp-shuei-gothic-gin-std,sans-serif;
    font-weight: 300;
    font-size: 1.8rem;
    letter-spacing: .05em;
`

