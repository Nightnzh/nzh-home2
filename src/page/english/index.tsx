
import styled from '@emotion/styled';
import { Box, dividerClasses } from '@mui/material';
import React, { useContext } from 'react'
import img from "../../asset/img/enimg.jpeg"
import MyContext from '../../context';


const English = () => {

  const context = useContext(MyContext)

  const logos = context.brandData.map(value => value.logoUrl)

  return (
    <Box
      component="section"
      className="section-english"
      sx={{ bgcolor: "#b49288" }}

    >
      <Inner className="container">
        <div className="img-wrapper">
          <img src={img} alt="banner-l" style={{ width: "100%", objectFit: "cover", }} />
        </div>
        <Tit>ARIEL TRADING COMPANY RROFILE</Tit>
        <Line />
        <SmallTit>SHORTLY ABOUT US</SmallTit>
        <Des>Ariel Trading is a trading company in Tokyo Japan. We established longer and closer working relationships with our clients and supplier not only provide immediate and reliable service but to continually exceed expectations and goals. We create commercial flows, import and export products, arranging and managing international projects with our partners. Supported our network, we are able to integrate all these functions with our fruitful experience. Our numerous competencies allow us to respond to the needs of industries looking for a new market. We look forward to welcoming you to our company and work to develop and enhance your current business in Japan.</Des>
        <Line style={{ height: "0.2px", backgroundColor: "rgba(0,0,0,0.5)" }} />
        <SmallTit>OUR MISSION</SmallTit>
        <Des>●Striving to meet the increasing and diversified demands of the customers.<br />
          ●Being market leaders in defend market segments.<br />
          ●Providing quality products & reliable services and sourcing from reputed manufacturers.<br />
          ●Becoming professional marketing partners for our principals to meet the objectives of sales, market information, and customer service.<br />
          ●Being the preferred supplier of our customers, with our products exceeding their quality requirements.<br />
          ●Giving timely information to the customers regarding trends of the market dynamics.<br />
          ●Harnessing the creative energies of all our people through team work, develop and a transparent work environment.<br /></Des>
        <Line style={{ height: "0.2px", backgroundColor: "rgba(0,0,0,0.5)" }} />
        <SmallTit>OUR FOCUS</SmallTit>
        <Des>Ariel Trading focus is to foster growth and promote enduring business ties with its client. Customer responsiveness and commitment is the driving force in the quest for excellence. An effective supply chain manager - Right from sourcing supply of material at the door step of the customer in Organic and Natural Cosmetics, Organic Items, and Health Care Items.</Des>
        <Line style={{ height: "0.2px", backgroundColor: "rgba(0,0,0,0.5)" }} />
        <SmallTit>OUR LINES OF BUSINESS</SmallTit>
        <Des>Ariel Trading is proud to be the importer of these great organic and natural products into Japan. We are dedicated to bringing quality healthy and safe alternatives for people’s everyday needs.</Des>
        <LogoContainer>
          {logos.map(value => (<div><img src={value}/></div>))}
        </LogoContainer>
      </Inner>
    </Box>
  )
}

export default English;


const Inner = styled.div`
  padding-top: 12rem;
  padding-bottom: 16rem;
  font-family: latino-urw,serif;
  font-weight: 400;

  width: 62% ;
  margin: 0 auto;

  @media (max-width: 500px) {
    padding-bottom: 8rem;
    width:auto;
    margin: 0 2rem;
  }
`

const Tit = styled.div`
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: .08em;
  line-height: 1.15;
  font-size: 3.4rem;
  margin-top: 4.745rem;
  margin-bottom: 2.245rem;
`

const Line = styled.div`
  height: 0.5px;
  background-color: #000;
  margin-bottom: 24px;
`

const SmallTit = styled.div`
  font-weight: 500;
  letter-spacing: .05em;
  line-height: 1.41667;
  font-size: 2.4rem;
  color: #d9cbc6;
  margin-top: 4.52rem;
`

const Des = styled.div`
  color: #282828;
    font-size: 1.4rem;
    font-family: aktiv-grotesk,sans-serif;
    font-weight: 400;
    letter-spacing: .05em;
    line-height: 1.64286;
    margin-top: 1.6rem;
    margin-bottom: 4.58rem;
`

const LogoContainer = styled.div`
  
  display: flex;
  justify-content : space-between;

  @media (max-width:500px) {
    flex-wrap: wrap;
  }

  > div {
    width: 30%;
    min-width: 40px;
    display:flex;
    justify-content:center;
    margin: 20px 0;
  }

  > div > img {
    width: calc(100%/2);
    
    @media (max-width:500px) {
      min-width: 80px;
    }

  }


`